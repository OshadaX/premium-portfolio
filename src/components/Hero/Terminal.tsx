import React, { useRef } from "react"
import { Float, Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const codeSnippets = [
    `> npm run dev\n✔ Ready in 124ms\n\nconst App = () => {\n  return <div>Hello</div>\n}`,
    `function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}`,
    `import { Canvas } from '@react-three/fiber';\n\n<Canvas>\n  <Box />\n</Canvas>`,
    `const fetchData = async () => {\n  const res = await fetch("/api/data");\n  return res.json();\n}`
];

const Terminal: React.FC<{ position?: [number, number, number], scale?: number, snippetIndex?: number }> = ({
    position = [0, 0, 0],
    scale = 1,
    snippetIndex = 0
}) => {
    const textRef = useRef<any>(null);
    const [displayText, setDisplayText] = React.useState("");
    const fullText = codeSnippets[snippetIndex % codeSnippets.length];
    const indexRef = useRef(0);
    const timerRef = useRef(0);

    useFrame((state, delta) => {
        timerRef.current += delta;

        // Typing effect
        if (timerRef.current > 0.05 && indexRef.current < fullText.length) {
            setDisplayText(fullText.slice(0, indexRef.current + 1));
            indexRef.current++;
            timerRef.current = 0;
        }

        // Reset if finished
        if (indexRef.current >= fullText.length && timerRef.current > 5) {
            indexRef.current = 0;
            setDisplayText("");
            timerRef.current = 0;
        }

        if (textRef.current) {
            // Subtle floating and follow mouse
            textRef.current.position.y = 0.6 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position} scale={scale}>
            {/* Terminal Window Frame */}
            <mesh>
                <boxGeometry args={[3, 1.8, 0.1]} />
                <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
            </mesh>

            {/* Window bar */}
            <mesh position={[0, 0.82, 0.06]}>
                <boxGeometry args={[3, 0.16, 0.02]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>

            {/* Control dots */}
            <mesh position={[-1.3, 0.82, 0.08]}>
                <circleGeometry args={[0.03, 16]} />
                <meshBasicMaterial color="#ef4444" />
            </mesh>
            <mesh position={[-1.2, 0.82, 0.08]}>
                <circleGeometry args={[0.03, 16]} />
                <meshBasicMaterial color="#f59e0b" />
            </mesh>
            <mesh position={[-1.1, 0.82, 0.08]}>
                <circleGeometry args={[0.03, 16]} />
                <meshBasicMaterial color="#10b981" />
            </mesh>

            {/* Code Text */}
            <Text
                ref={textRef}
                position={[-1.4, 0.6, 0.06]}
                fontSize={0.1}
                maxWidth={2.8}
                anchorX="left"
                anchorY="top"
                color="#4ade80" // Primary code color
                fillOpacity={0.9}
            >
                {displayText + "_"}
            </Text>
        </Float>
    );
};

export default Terminal;
