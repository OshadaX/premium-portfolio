import { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Line, Sphere, Text, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NeuralNetworkProps {
    activeCategory: string | null;
    onNodeClick?: (nodeId: string) => void;
    theme?: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
    };
    showParticles?: boolean;
    animationSpeed?: number;
}

const NeuralNetwork = ({
    activeCategory,
    onNodeClick,
    theme = {
        primary: '#22c55e',
        secondary: '#a855f7',
        accent: '#f97316',
        background: '#000000'
    },
    showParticles = true,
    animationSpeed = 0.3
}: NeuralNetworkProps) => {
    const groupRef = useRef<THREE.Group>(null);
    const particlesRef = useRef<THREE.Points>(null);
    const { camera } = useThree();
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [time, setTime] = useState(0);

    // Enhanced nodes with more data
    const nodes = useMemo(() => [
        {
            id: 'core',
            position: [0, 0, 0],
            label: 'CORE_SYSTEM',
            color: theme.primary,
            size: 0.35,
            pulseSpeed: 1,
            rotationSpeed: 0.5,
            connections: 3
        },
        {
            id: 'frontend',
            position: [-2.2, 1.8, -0.5],
            label: 'FRONTEND',
            color: '#a855f7',
            size: 0.25,
            pulseSpeed: 1.2,
            rotationSpeed: 0.7,
            connections: 4
        },
        {
            id: 'backend',
            position: [2.2, 1.8, 0.5],
            label: 'BACKEND',
            color: '#f97316',
            size: 0.25,
            pulseSpeed: 1.1,
            rotationSpeed: 0.6,
            connections: 4
        },
        {
            id: 'devops',
            position: [0, -2.2, 0],
            label: 'DEVOPS',
            color: '#22c55e',
            size: 0.25,
            pulseSpeed: 0.9,
            rotationSpeed: 0.4,
            connections: 4
        },
        // {
        //     id: 'ai-ml',
        //     position: [1.5, -0.5, -1.5],
        //     label: 'AI/ML',
        //     color: '#ec4899',
        //     size: 0.2,
        //     pulseSpeed: 1.3,
        //     rotationSpeed: 0.8,
        //     connections: 3,
        //     status: 'learning'
        // },
        // {
        //     id: 'blockchain',
        //     position: [-1.5, -0.5, 1.5],
        //     label: 'WEB3',
        //     color: '#f59e0b',
        //     size: 0.2,
        //     pulseSpeed: 1.4,
        //     rotationSpeed: 0.9,
        //     connections: 2,
        //     status: 'learning'
        // },
    ], [theme.primary]);

    const connections = useMemo(() => [
        ['core', 'frontend'],
        ['core', 'backend'],
        ['core', 'devops'],
        // ['core', 'ai-ml'],
        // ['core', 'blockchain'],
        ['frontend', 'backend'],
        ['backend', 'devops'],
        ['devops', 'frontend'],
        // ['ai-ml', 'backend'],
        // ['blockchain', 'frontend'],
    ], []);

    // Generate particles data
    const particlePositions = useMemo(() => {
        const positions = [];
        for (let i = 0; i < 1000; i++) {
            positions.push(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            );
        }
        return new Float32Array(positions);
    }, []);

    // Animation frame updates
    useFrame((state) => {
        const t = state.clock.elapsedTime;
        setTime(t);

        if (groupRef.current) {
            // Smooth rotation
            groupRef.current.rotation.y = Math.sin(t * animationSpeed * 0.3) * 0.1;
            groupRef.current.rotation.x = Math.sin(t * animationSpeed * 0.2) * 0.05;

            // Subtle floating animation
            groupRef.current.position.y = Math.sin(t * 0.5) * 0.05;
        }

        // Animate particles
        if (particlesRef.current) {
            particlesRef.current.rotation.y = t * 0.05;
            particlesRef.current.rotation.x = t * 0.03;
        }

        // Camera animation on hover
        if (hoveredNode) {
            const node = nodes.find(n => n.id === hoveredNode);
            if (node) {
                const targetPosition = new THREE.Vector3(
                    (node.position[0] as number) * 0.3,
                    (node.position[1] as number) * 0.3 + 1,
                    8
                );
                camera.position.lerp(targetPosition, 0.05);
            }
        } else {
            const defaultPosition = new THREE.Vector3(0, 0, 8);
            camera.position.lerp(defaultPosition, 0.05);
        }
    });

    // Handle node click
    const handleNodeClick = (nodeId: string) => {
        if (onNodeClick) {
            onNodeClick(nodeId);

            // Visual feedback
            const node = nodes.find(n => n.id === nodeId);
            if (node && groupRef.current) {
                // Add a click animation
                const scaleUp = () => {
                    groupRef.current!.scale.set(1.05, 1.05, 1.05);
                };
                const scaleDown = () => {
                    groupRef.current!.scale.set(1, 1, 1);
                };
                scaleUp();
                setTimeout(scaleDown, 100);
            }
        }
    };

    return (
        <group ref={groupRef}>
            {/* Background Particles */}
            {showParticles && (
                <Points ref={particlesRef} positions={particlePositions}>
                    <PointMaterial
                        transparent
                        color={theme.primary}
                        size={0.02}
                        sizeAttenuation={true}
                        opacity={0.3}
                    />
                </Points>
            )}

            {/* Connections with flowing particles */}
            {connections.map(([start, end], idx) => {
                const startNode = nodes.find((n) => n.id === start);
                const endNode = nodes.find((n) => n.id === end);
                if (!startNode || !endNode) return null;

                const isActive = activeCategory === end || activeCategory === start || hoveredNode === end || hoveredNode === start;
                const lineWidth = isActive ? 3 : 1.5;
                const opacity = isActive ? 0.9 : 0.2;

                // Create curved line for more organic look
                const startPos = new THREE.Vector3(...startNode.position as [number, number, number]);
                const endPos = new THREE.Vector3(...endNode.position as [number, number, number]);
                const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
                midPoint.z += Math.sin(idx * 0.5) * 0.5;

                const curve = new THREE.QuadraticBezierCurve3(
                    startPos,
                    midPoint,
                    endPos
                );

                const points = curve.getPoints(20);
                const linePoints = points.map(p => [p.x, p.y, p.z] as [number, number, number]);

                return (
                    <group key={idx}>
                        <Line
                            points={linePoints}
                            color={isActive ? theme.primary : theme.secondary}
                            lineWidth={lineWidth}
                            transparent
                            opacity={opacity}
                        />

                        {/* Flowing particles along connection */}
                        {isActive && (
                            <mesh position={curve.getPoint((time * 0.5) % 1)}>
                                <sphereGeometry args={[0.03, 8, 8]} />
                                <meshBasicMaterial
                                    color={theme.accent}
                                    transparent
                                    opacity={0.8}
                                />
                            </mesh>
                        )}
                    </group>
                );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
                const isActive = activeCategory === node.id || hoveredNode === node.id;
                const isCore = node.id === 'core';
                const pulseScale = 1 + (isActive ? Math.sin(time * node.pulseSpeed) * 0.1 : 0);
                const glowIntensity = isActive ? 2 : isCore ? 1 : 0.5;

                return (
                    <group
                        key={node.id}
                        position={node.position as [number, number, number]}
                        onPointerEnter={() => setHoveredNode(node.id)}
                        onPointerLeave={() => setHoveredNode(null)}
                        onClick={() => handleNodeClick(node.id)}
                    >
                        {/* Outer glow */}
                        <Sphere args={[node.size * 1.5, 32, 32]}>
                            <meshBasicMaterial
                                color={node.color}
                                transparent
                                opacity={0.05}
                                side={THREE.BackSide}
                            />
                        </Sphere>

                        {/* Main sphere with pulse */}
                        <Sphere args={[node.size, 32, 32]} scale={pulseScale}>
                            <meshStandardMaterial
                                color={node.color}
                                emissive={node.color}
                                emissiveIntensity={glowIntensity}
                                transparent
                                opacity={isActive ? 1 : 0.8}
                                roughness={0.1}
                                metalness={0.8}
                            />
                        </Sphere>

                        {/* Wireframe sphere */}
                        <Sphere args={[node.size + 0.08, 16, 16]}>
                            <meshBasicMaterial
                                color={node.color}
                                transparent
                                opacity={isActive ? 0.3 : 0.1}
                                wireframe
                            />
                        </Sphere>

                        {/* Rotating rings */}
                        {isActive && (
                            <>
                                {[...Array(3)].map((_, i) => (
                                    <mesh
                                        key={`ring-${i}`}
                                        rotation={[0, 0, time * (i + 1) * 0.2]}
                                    >
                                        <ringGeometry args={[node.size + 0.1 + i * 0.1, node.size + 0.15 + i * 0.1, 32]} />
                                        <meshBasicMaterial
                                            color={node.color}
                                            transparent
                                            opacity={0.3 - i * 0.1}
                                            side={THREE.DoubleSide}
                                        />
                                    </mesh>
                                ))}
                            </>
                        )}

                        {/* Orbiting particles */}
                        {isActive && (
                            <>
                                {[...Array(12)].map((_, i) => {
                                    const angle = (i / 12) * Math.PI * 2 + time;
                                    const radius = node.size + 0.25 + Math.sin(time + i) * 0.05;
                                    const height = Math.cos(time * 2 + i) * 0.1;

                                    return (
                                        <mesh
                                            key={`particle-${i}`}
                                            position={[
                                                Math.cos(angle) * radius,
                                                Math.sin(angle) * radius + height,
                                                0
                                            ]}
                                            scale={0.5 + Math.sin(time * 3 + i) * 0.3}
                                        >
                                            <sphereGeometry args={[0.02, 8, 8]} />
                                            <meshBasicMaterial
                                                color={theme.accent}
                                                transparent
                                                opacity={0.8}
                                            />
                                        </mesh>
                                    );
                                })}
                            </>
                        )}

                        {/* Connection points */}
                        {[...Array(node.connections)].map((_, i) => {
                            const angle = (i / node.connections) * Math.PI * 2;
                            const radius = node.size + 0.15;

                            return (
                                <mesh
                                    key={`connector-${i}`}
                                    position={[
                                        Math.cos(angle) * radius,
                                        Math.sin(angle) * radius,
                                        0
                                    ]}
                                >
                                    <sphereGeometry args={[0.015, 8, 8]} />
                                    <meshBasicMaterial
                                        color={theme.secondary}
                                        transparent
                                        opacity={0.6}
                                    />
                                </mesh>
                            );
                        })}

                        {/* Label with animation */}
                        <Text
                            position={[0, node.size + 0.4, 0]}
                            fontSize={0.15}
                            color={node.color}
                            anchorX="center"
                            anchorY="middle"
                            outlineWidth={0.01}
                            outlineColor="#000000"
                        >
                            {node.label}
                        </Text>

                        {/* Hover effect */}
                        {hoveredNode === node.id && (
                            <Text
                                position={[0, -node.size - 0.3, 0]}
                                fontSize={0.1}
                                color={theme.primary}
                                anchorX="center"
                                anchorY="middle"
                            >
                                CLICK FOR DETAILS
                            </Text>
                        )}
                    </group>
                );
            })}

            {/* Interactive background plane */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshBasicMaterial
                    color={theme.background}
                    transparent
                    opacity={0.1}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
};

export default NeuralNetwork;