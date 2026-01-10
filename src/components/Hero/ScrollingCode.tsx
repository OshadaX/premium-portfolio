import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const snippets = [
    "const fetchData = async () => {",
    "  const res = await fetch('/api/v1/data');",
    "  const data = await res.json();",
    "  return data.map(item => item.id);",
    "}",
    "console.log('Fetching system status...');",
    "if (status === 'READY') {",
    "  init_protocol_beta();",
    "} else {",
    "  throw new Error('AUTH_FAILED');",
    "}",
    "function encrypt(payload, key) {",
    "  return payload.split('').map(c => ...);",
    "}",
    "export default connect(mapStateToProps)(App);",
    "git commit -m 'System breakthrough'",
    "npm run build:production",
    "docker-compose up -d --build",
    "await db.users.findUnique({ where: { id } });",
    "process.env.SECRET_TOKEN_AES_256",
    "[200 OK] Connection established.",
    "Bypassing firewall... [DONE]",
    "import { motion } from 'framer-motion';",
    "export const useAuth = () => useContext(Auth);",
    "Object.keys(registry).forEach(key => {",
    "  registry[key].initialize();",
    "});",
];

interface ScrollingColumnProps {
    x: number;
    speed: number;
    opacity: number;
    fontSize: number;
}

const ScrollingColumn: React.FC<ScrollingColumnProps> = ({ x, speed, opacity, fontSize }) => {
    const groupRef = useRef<any>(null);

    // Create a larger pool of lines to ensure continuous scrolling
    const lines = useMemo(() => {
        return Array.from({ length: 30 }, () => snippets[Math.floor(Math.random() * snippets.length)]);
    }, []);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.position.y += delta * speed;
            // Loop back when the group has scrolled significantly
            if (groupRef.current.position.y > 10) {
                groupRef.current.position.y = -10;
            }
        }
    });

    return (
        <group ref={groupRef} position={[x, -5, -2]}>
            {lines.map((line, i) => (
                <Text
                    key={i}
                    position={[0, i * (fontSize + 0.1), 0]}
                    fontSize={fontSize}
                    color="#22c55e"
                    fillOpacity={opacity}
                    font="/fonts/JetBrainsMono-Regular.ttf"
                    anchorX="left"
                    anchorY="top"
                >
                    {line}
                </Text>
            ))}
        </group>
    );
};

export default ScrollingColumn;
