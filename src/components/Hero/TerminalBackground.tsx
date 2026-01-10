import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import ScrollingColumn from "./ScrollingCode";

const TerminalBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={1} />

                {/* Distributed scrolling columns across the screen */}
                <ScrollingColumn x={-8} speed={1.2} opacity={0.15} fontSize={0.12} />
                <ScrollingColumn x={-6} speed={0.8} opacity={0.1} fontSize={0.1} />
                <ScrollingColumn x={-4} speed={1.5} opacity={0.2} fontSize={0.14} />
                <ScrollingColumn x={-2} speed={1.0} opacity={0.12} fontSize={0.11} />
                <ScrollingColumn x={0} speed={1.4} opacity={0.15} fontSize={0.13} />
                <ScrollingColumn x={2} speed={0.9} opacity={0.1} fontSize={0.1} />
                <ScrollingColumn x={4} speed={1.6} opacity={0.2} fontSize={0.15} />
                <ScrollingColumn x={6} speed={1.1} opacity={0.12} fontSize={0.12} />
                <ScrollingColumn x={8} speed={1.3} opacity={0.15} fontSize={0.13} />

                {/* Additional layer for depth */}
                <ScrollingColumn x={-7} speed={0.5} opacity={0.05} fontSize={0.08} />
                <ScrollingColumn x={-3} speed={0.6} opacity={0.06} fontSize={0.09} />
                <ScrollingColumn x={1} speed={0.4} opacity={0.04} fontSize={0.07} />
                <ScrollingColumn x={5} speed={0.7} opacity={0.07} fontSize={0.1} />

                {/* Subtle Controls */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                />
            </Canvas>
        </div>
    )
}

export default TerminalBackground
