import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

interface NeuralNetworkProps {
    activeCategory: string | null;
}

const NeuralNetwork = ({ activeCategory }: NeuralNetworkProps) => {
    const groupRef = useRef<THREE.Group>(null);

    const nodes = useMemo(
        () => [
            { id: 'core', position: [0, 0, 0], label: 'CORE_SYSTEM', color: '#22c55e', size: 0.3 },
            { id: 'frontend', position: [-2, 2, 0], label: 'FRONTEND', color: '#a855f7', size: 0.2 },
            { id: 'backend', position: [2, 2, 0], label: 'BACKEND', color: '#f97316', size: 0.2 },
            { id: 'devops', position: [0, -2, 0], label: 'DEVOPS', color: '#22c55e', size: 0.2 },
        ],
        []
    );

    const connections = useMemo(
        () => [
            ['core', 'frontend'],
            ['core', 'backend'],
            ['core', 'devops'],
        ],
        []
    );

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {connections.map(([start, end], idx) => {
                const startNode = nodes.find((n) => n.id === start);
                const endNode = nodes.find((n) => n.id === end);
                if (!startNode || !endNode) return null;

                const isActive = activeCategory === end || activeCategory === start;

                return (
                    <Line
                        key={idx}
                        points={[startNode.position as [number, number, number], endNode.position as [number, number, number]]}
                        color={isActive ? '#22c55e' : '#15803d'}
                        lineWidth={isActive ? 2 : 1}
                        transparent
                        opacity={isActive ? 0.8 : 0.3}
                    />
                );
            })}

            {nodes.map((node) => {
                const isActive = activeCategory === node.id || node.id === 'core';
                return (
                    <group key={node.id} position={node.position as [number, number, number]}>
                        <Sphere args={[node.size, 32, 32]}>
                            <meshStandardMaterial
                                color={node.color}
                                emissive={node.color}
                                emissiveIntensity={isActive ? 0.8 : 0.3}
                                transparent
                                opacity={isActive ? 1 : 0.6}
                            />
                        </Sphere>

                        <Sphere args={[node.size + 0.05, 32, 32]}>
                            <meshBasicMaterial
                                color={node.color}
                                transparent
                                opacity={isActive ? 0.2 : 0.1}
                                wireframe
                            />
                        </Sphere>

                        <Text
                            position={[0, node.size + 0.3, 0]}
                            fontSize={0.2}
                            color={node.color}
                            anchorX="center"
                            anchorY="middle"
                        >
                            {node.label}
                        </Text>

                        {isActive && (
                            <>
                                {[...Array(8)].map((_, i) => {
                                    const angle = (i / 8) * Math.PI * 2;
                                    const radius = node.size + 0.15;
                                    return (
                                        <Sphere
                                            key={i}
                                            position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
                                            args={[0.02, 8, 8]}
                                        >
                                            <meshBasicMaterial color="#22c55e" />
                                        </Sphere>
                                    );
                                })}
                            </>
                        )}
                    </group>
                );
            })}
        </group>
    );
};

export default NeuralNetwork;
