import { motion } from 'framer-motion';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import NeuralNetwork from './NeuralNetwork.tsx';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const skillTree = [
        {
            category: 'frontend',
            label: 'FRONTEND',
            status: 'expert',
            color: '#a855f7',
            skills: [
                { name: 'react', version: '18.x', level: 95 },
                { name: 'typescript', version: '5.x', level: 90 },
                { name: 'tailwind', version: '3.x', level: 85 },
                { name: 'three.js', version: 'r150', level: 75 },
            ],
        },
        {
            category: 'backend',
            label: 'BACKEND',
            status: 'advanced',
            color: '#f97316',
            skills: [
                { name: 'node.js', version: '20.x', level: 90 },
                { name: 'postgresql', version: '15.x', level: 80 },
                { name: 'express', version: '4.x', level: 92 },
                { name: 'mongodb', version: '7.x', level: 78 },
            ],
        },
        {
            category: 'devops',
            label: 'DEVOPS',
            status: 'intermediate',
            color: '#22c55e',
            skills: [
                { name: 'docker', version: '24.x', level: 70 },
                { name: 'aws', version: 'certified', level: 65 },
                { name: 'kubernetes', version: '1.28', level: 60 },
                { name: 'ci/cd', version: 'github-actions', level: 75 },
            ],
        },
    ];

    const getBarChar = (level: number) => {
        const filled = Math.floor(level / 12.5);
        return '█'.repeat(filled) + '░'.repeat(8 - filled);
    };

    return (
        <section id="skills" className="relative h-screen bg-black flex flex-col justify-center px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-green-500 font-mono text-sm mb-2 tracking-[0.3em]">
                        [ LOADING_SKILL_MATRIX ]
                    </h2>
                    <div className="text-green-700 font-mono text-xs">
                        {'>'} INITIALIZING NEURAL NETWORK...
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 h-[50vh] min-h-[400px]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="border-2 border-green-500/30 bg-black relative overflow-hidden"
                    >
                        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <NeuralNetwork activeCategory={activeCategory} />
                        </Canvas>

                        <div className="absolute top-4 left-4 text-green-500 font-mono text-xs bg-black/80 px-3 py-2 border border-green-500/30">
                            NEURAL_NET_v3.0 | HOVER TO INTERACT
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="border-2 border-green-500/30 bg-black p-6 font-mono text-xs overflow-y-auto"
                    >
                        <div className="text-green-700 mb-4">
                            <div>$ npm list --global --depth=2</div>
                            <div className="mt-1 text-green-600">
                                /usr/local/lib
                            </div>
                        </div>

                        <div className="space-y-4">
                            {skillTree.map((category, idx) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onMouseEnter={() => setActiveCategory(category.category)}
                                    onMouseLeave={() => setActiveCategory(null)}
                                    className="cursor-pointer hover:bg-green-950/20 p-2 transition-colors border border-transparent hover:border-green-500/30"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-green-700">├─┬</span>
                                        <span style={{ color: category.color }}>
                                            {category.label.toLowerCase()}@{category.status}
                                        </span>
                                        <span className="text-yellow-500">⚡ ACTIVE</span>
                                    </div>

                                    {activeCategory === category.category && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="ml-6 space-y-1"
                                        >
                                            {category.skills.map((skill) => (
                                                <div key={skill.name} className="flex items-center gap-3">
                                                    <span className="text-green-700">│ ├──</span>
                                                    <span className="text-green-500 w-32">
                                                        {skill.name}@{skill.version}
                                                    </span>
                                                    <span className="text-green-600 font-mono">
                                                        [{getBarChar(skill.level)}]
                                                    </span>
                                                    <span className="text-green-400">{skill.level}%</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-green-500/20">
                            <div className="text-green-700 mb-1">$ decrypt --all</div>
                            <div className="text-green-600 text-[10px] leading-relaxed">
                                → Total technologies: 12
                                <br />
                                → Expert level: 4 modules
                                <br />
                                → Currently learning: Web3, AI/ML
                                <br />→ System status: OPTIMAL
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs"
                >
                    {[
                        { label: 'TOTAL_TECH', value: '25+' },
                        { label: 'YEARS_EXP', value: '5+' },
                        { label: 'PROJECTS', value: '50+' },
                        { label: 'LINES_CODE', value: '500K+' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-green-500/30 bg-black p-3 text-center hover:border-green-500 transition-colors"
                        >
                            <div className="text-green-700 mb-1">{stat.label}</div>
                            <div className="text-green-500 text-xl font-bold">{stat.value}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
