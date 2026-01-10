import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../utils/ThemeContext';

function FloatingShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { theme } = useTheme();

    useFrame((state) => {
        if (meshRef.current) {
            // Rotate slowly
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;

            // Mouse parallax
            const mouseX = (state.mouse.x * Math.PI) / 10;
            const mouseY = (state.mouse.y * Math.PI) / 10;

            meshRef.current.rotation.x += (mouseY - meshRef.current.rotation.x) * 0.05;
            meshRef.current.rotation.y += (mouseX - meshRef.current.rotation.y) * 0.05;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={2.5}>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color={theme === 'dark' ? '#8b5cf6' : '#a78bfa'}
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
}

export default function ThreeScene() {
    const { theme } = useTheme();

    return (
        <div className="absolute inset-0 pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={theme === 'dark' ? 0.3 : 0.5} />
                <directionalLight position={[10, 10, 5]} intensity={theme === 'dark' ? 1 : 1.5} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />

                <FloatingShape />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
}