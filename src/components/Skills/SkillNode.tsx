import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Node } from './types';

interface NodeProps {
    node: Node;
    isHovered: boolean;
    isDimmed: boolean;
    onHover: () => void;
    onLeave: () => void;
}

const SkillNode: React.FC<NodeProps> = ({ node, isHovered, isDimmed, onHover, onLeave }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'frontend': return '#00ff41';
            case 'backend': return '#00ff41';
            case 'tools': return '#00ff41';
            default: return '#00ff41';
        }
    };

    const baseColor = getCategoryColor(node.category);
    const opacity = isDimmed ? 0.3 : 1;
    const scale = isHovered ? 1.2 : 1;

    return (
        <g
            className="cursor-pointer"
            onMouseEnter={() => { onHover(); setIsTooltipVisible(true); }}
            onMouseLeave={() => { onLeave(); setIsTooltipVisible(false); }}
            style={{ opacity, transition: 'opacity 0.3s ease' }}
        >
            {/* Glow Effect */}
            {isHovered && (
                <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.radius + 15}
                    fill="url(#nodeGlow)"
                />
            )}

            {/* Pulsing Outer Ring */}
            <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.radius}
                fill="transparent"
                stroke={baseColor}
                strokeWidth="2"
                initial={{ r: node.radius }}
                animate={{
                    r: [node.radius, node.radius * 1.05, node.radius],
                    strokeOpacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                }}
            />

            {/* Main Node Circle */}
            <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.radius - 5}
                fill="black"
                fillOpacity="0.8"
                stroke={baseColor}
                strokeWidth={isHovered ? "3" : "1"}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                filter={isHovered ? "url(#glow)" : "none"}
            />

            {/* Skill Label */}
            <text
                x={node.x}
                y={node.y + node.radius + 20}
                textAnchor="middle"
                fill={isHovered ? "#00ff41" : "#e0e0e0"}
                className="text-[12px] font-mono font-bold pointer-events-none"
                style={{ filter: isHovered ? "drop-shadow(0 0 5px #00ff41)" : "none" }}
            >
                {node.name}
            </text>

            {/* Tooltip */}
            <AnimatePresence>
                {isTooltipVisible && (
                    <foreignObject
                        x={node.x + 20}
                        y={node.y - 60}
                        width="200"
                        height="100"
                        style={{ pointerEvents: 'none' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="bg-black/90 border border-[#00ff41] p-2 rounded text-[10px] text-[#e0e0e0] font-mono shadow-[0_0_15px_rgba(0,255,65,0.3)]"
                        >
                            <div className="flex justify-between mb-1 border-b border-[#004d00] pb-1">
                                <span className="text-[#00ff41] font-bold">{node.name.toUpperCase()}</span>
                                <span className="text-[#004d00]">LVL: {Math.floor(node.proficiency * 100)}%</span>
                            </div>
                            <p className="leading-tight opacity-80">{node.description}</p>
                            <div className="mt-2 text-[8px] text-[#004d00]">CATEGORY: {node.category.toUpperCase()}</div>
                        </motion.div>
                    </foreignObject>
                )}
            </AnimatePresence>
        </g>
    );
};

export default React.memo(SkillNode);
