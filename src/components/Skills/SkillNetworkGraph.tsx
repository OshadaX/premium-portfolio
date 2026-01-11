import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Node, Link } from './types';
import SkillNode from './SkillNode';

interface NetworkGraphProps {
    active: boolean;
}

const skillsData = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    backend: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL"],
    tools: ["Git", "Docker", "AWS", "Figma", "VS Code"]
};

const initialLinks: Link[] = [
    // Frontend
    { source: "React", target: "Next.js", strength: 0.5 },
    { source: "React", target: "TypeScript", strength: 0.5 },
    { source: "React", target: "Tailwind CSS", strength: 0.5 },
    { source: "React", target: "JavaScript", strength: 0.8 },
    { source: "Next.js", target: "TypeScript", strength: 0.4 },

    // Backend
    { source: "Node.js", target: "Express", strength: 0.7 },
    { source: "Node.js", target: "JavaScript", strength: 0.6 },
    { source: "Express", target: "MongoDB", strength: 0.5 },
    { source: "Express", target: "PostgreSQL", strength: 0.5 },
    { source: "Python", target: "PostgreSQL", strength: 0.4 },
    { source: "Python", target: "MongoDB", strength: 0.4 },

    // Tools
    { source: "Docker", target: "AWS", strength: 0.6 },
    { source: "Docker", target: "Node.js", strength: 0.4 },
    { source: "Git", target: "React", strength: 0.3 },
    { source: "Git", target: "Node.js", strength: 0.3 },
    { source: "Git", target: "Python", strength: 0.3 },
    { source: "Figma", target: "React", strength: 0.5 },
    { source: "Figma", target: "Tailwind CSS", strength: 0.5 },
];

const SkillNetworkGraph: React.FC<NetworkGraphProps> = ({ active }) => {
    const containerRef = useRef<SVGSVGElement>(null);
    const [nodes, setNodes] = useState<Node[]>([]);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const requestRef = useRef<number>(0);

    // Initialize nodes
    useEffect(() => {
        const width = containerRef.current?.clientWidth || 800;
        const height = containerRef.current?.clientHeight || 600;
        setDimensions({ width, height });

        const newNodes: Node[] = [];

        Object.entries(skillsData).forEach(([category, skills]) => {
            skills.forEach((skill, index) => {
                const angle = (index / skills.length) * Math.PI * 2;
                const dist = 150;
                let centerX = width / 2;
                let centerY = height / 2;

                if (category === 'frontend') centerX -= 200;
                if (category === 'backend') centerX += 200;
                if (category === 'tools') centerY += 150;

                newNodes.push({
                    id: skill,
                    name: skill,
                    category: category as any,
                    proficiency: 0.7 + Math.random() * 0.3,
                    x: centerX + Math.cos(angle) * dist,
                    y: centerY + Math.sin(angle) * dist,
                    vx: 0,
                    vy: 0,
                    radius: 30 + Math.random() * 20,
                    description: `Expert in ${skill} with hands-on experience in building complex applications.`
                });
            });
        });

        setNodes(newNodes);
    }, []);

    const animate = useCallback(() => {
        if (!active) return;

        setNodes(prevNodes => {
            if (prevNodes.length === 0) return prevNodes;

            const updatedNodes = prevNodes.map(node => ({ ...node }));
            const friction = 0.95;
            const spring = 0.05;

            for (let i = 0; i < updatedNodes.length; i++) {
                for (let j = i + 1; j < updatedNodes.length; j++) {
                    const n1 = updatedNodes[i];
                    const n2 = updatedNodes[j];
                    const dx = n2.x - n1.x;
                    const dy = n2.y - n1.y;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    const minDist = n1.radius + n2.radius + 50;

                    if (dist < minDist) {
                        const force = (minDist - dist) / dist * 0.5;
                        const fx = dx * force;
                        const fy = dy * force;
                        n1.vx -= fx;
                        n1.vy -= fy;
                        n2.vx += fx;
                        n2.vy += fy;
                    }
                }
            }

            initialLinks.forEach(link => {
                const source = updatedNodes.find(n => n.id === link.source);
                const target = updatedNodes.find(n => n.id === link.target);
                if (source && target) {
                    const dx = target.x - source.x;
                    const dy = target.y - source.y;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    const force = (dist - 150) * spring * link.strength;
                    const fx = (dx / dist) * force;
                    const fy = (dy / dist) * force;
                    source.vx += fx;
                    source.vy += fy;
                    target.vx -= fx;
                    target.vy -= fy;
                }
            });

            updatedNodes.forEach(node => {
                const dx = dimensions.width / 2 - node.x;
                const dy = dimensions.height / 2 - node.y;
                node.vx += dx * 0.005;
                node.vy += dy * 0.005;

                node.x += node.vx;
                node.y += node.vy;
                node.vx *= friction;
                node.vy *= friction;

                const margin = 50;
                if (node.x < margin) { node.x = margin; node.vx *= -0.5; }
                if (node.x > dimensions.width - margin) { node.x = dimensions.width - margin; node.vx *= -0.5; }
                if (node.y < margin) { node.y = margin; node.vy *= -0.5; }
                if (node.y > dimensions.height - margin) { node.y = dimensions.height - margin; node.vy *= -0.5; }
            });

            return updatedNodes;
        });

        requestRef.current = requestAnimationFrame(animate);
    }, [active, dimensions]);

    useEffect(() => {
        if (active) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestRef.current);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [active, animate]);

    const getLinkCoordinates = (link: Link) => {
        const source = nodes.find(n => n.id === link.source);
        const target = nodes.find(n => n.id === link.target);
        if (!source || !target) return null;
        return { x1: source.x, y1: source.y, x2: target.x, y2: target.y };
    };

    return (
        <svg
            ref={containerRef}
            className="w-full h-full cursor-crosshair"
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
            <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#00ff41" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00ff41" stopOpacity="0" />
                </radialGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <g>
                {initialLinks.map((link) => {
                    const coords = getLinkCoordinates(link);
                    if (!coords) return null;

                    const isRelated = hoveredNode && (link.source === hoveredNode || link.target === hoveredNode);
                    const opacity = hoveredNode ? (isRelated ? 0.8 : 0.1) : 0.4;

                    return (
                        <React.Fragment key={`${link.source}-${link.target}`}>
                            <line
                                x1={coords.x1}
                                y1={coords.y1}
                                x2={coords.x2}
                                y2={coords.y2}
                                stroke={isRelated ? "#00ff41" : "#004d00"}
                                strokeWidth={isRelated ? 2 : 1}
                                strokeOpacity={opacity}
                                className="transition-opacity duration-300"
                            />
                            {active && (
                                <circle r="2" fill="#00ff41" filter="url(#glow)">
                                    <animateMotion
                                        dur={`${2 + Math.random() * 3}s`}
                                        repeatCount="indefinite"
                                        path={`M ${coords.x1},${coords.y1} L ${coords.x2},${coords.y2}`}
                                    />
                                </circle>
                            )}
                        </React.Fragment>
                    );
                })}
            </g>

            <g>
                {nodes.map(node => (
                    <SkillNode
                        key={node.id}
                        node={node}
                        isHovered={hoveredNode === node.id}
                        isDimmed={hoveredNode !== null && hoveredNode !== node.id && !initialLinks.some(l =>
                            (l.source === hoveredNode && l.target === node.id) ||
                            (l.target === hoveredNode && l.source === node.id)
                        )}
                        onHover={() => setHoveredNode(node.id)}
                        onLeave={() => setHoveredNode(null)}
                    />
                ))}
            </g>
        </svg>
    );
};

export default SkillNetworkGraph;
