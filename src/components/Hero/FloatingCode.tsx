import React from "react"
import { Float, Text } from "@react-three/drei"

const symbols = ["{}", "</>", "()", "=>", "[]"]

const FloatingCode: React.FC = () => {
    return (
        <>
            {symbols.map((symbol, i) => (
                <Float key={i} speed={1} floatIntensity={0.4}>
                    <Text
                        position={[Math.sin(i) * 3, Math.cos(i) * 1.5, -1]}
                        fontSize={0.3}
                        color="#6366f1"
                        fillOpacity={0.4}

                    >
                        {symbol}
                    </Text>
                </Float>
            ))}
        </>
    )
}

export default FloatingCode
