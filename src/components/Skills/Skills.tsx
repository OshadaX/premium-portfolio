import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NeuralNetwork from './NeuralNetwork.tsx';

// Audio feedback hook (simplified implementation)
const useAudioFeedback = () => {
    const playSound = useCallback((type: 'hover' | 'click' | 'select') => {
        if (typeof window !== 'undefined' && window.AudioContext) {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            switch (type) {
                case 'hover':
                    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.1);
                    break;
                case 'click':
                    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.3);
                    break;
            }
        }
    }, []);

    return { playSound };
};

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [theme] = useState<'cyberpunk' | 'matrix' | 'synthwave'>('cyberpunk');
    const [synergies, setSynergies] = useState<any[]>([]);
    const [badges, setBadges] = useState<any[]>([]);
    const [audioEnabled] = useState(false);
    const [mobileView, setMobileView] = useState(false);
    const [cameraPosition] = useState<[number, number, number]>([0, 0, 8]);

    // We can remove state setters that are never used if logic permits.
    // However, if logic relies on them, we might need to keep them or default them.

    const containerRef = useRef<HTMLDivElement>(null);
    const { playSound } = useAudioFeedback();

    // Check mobile view
    useEffect(() => {
        const checkMobile = () => {
            setMobileView(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Theme definitions
    const themes = {
        cyberpunk: {
            primary: '#22c55e',
            secondary: '#a855f7',
            accent: '#f97316',
            background: '#000000',
            gradient: 'linear-gradient(45deg, #000000, #1a1a1a)'
        },
        matrix: {
            primary: '#00ff41',
            secondary: '#008f11',
            accent: '#00ff88',
            background: '#0a0a0a',
            gradient: 'linear-gradient(45deg, #0a0a0a, #001a00)'
        },
        synthwave: {
            primary: '#ff00ff',
            secondary: '#00ffff',
            accent: '#ffff00',
            background: '#000033',
            gradient: 'linear-gradient(45deg, #000033, #330033)'
        }
    };

    // Enhanced skill tree with more data
    const skillTree = [
        {
            category: 'frontend',
            label: 'FRONTEND',
            status: 'expert',
            color: '#a855f7',
            icon: '⚛️',
            description: 'Modern frontend development with React ecosystem',
            skills: [
                {
                    name: 'react',
                    version: '18.x',
                    level: 95,
                    trend: '↑',
                    experience: '4 years',
                    projects: 25,
                    certifications: ['React Certified Developer'],
                    lastUsed: '2024',
                    description: 'Building performant SPAs with hooks, context, and Suspense'
                },
                {
                    name: 'typescript',
                    version: '5.x',
                    level: 90,
                    trend: '↑',
                    experience: '3 years',
                    projects: 20,
                    certifications: [],
                    lastUsed: '2024',
                    description: 'Type-safe development with advanced generics'
                },
                {
                    name: 'next.js',
                    version: '14.x',
                    level: 85,
                    trend: '↑',
                    experience: '2 years',
                    projects: 15,
                    certifications: [],
                    lastUsed: '2024',
                    description: 'Full-stack React framework with App Router'
                },
                {
                    name: 'three.js',
                    version: 'r150',
                    level: 75,
                    trend: '↑',
                    experience: '1 year',
                    projects: 8,
                    certifications: [],
                    lastUsed: '2024',
                    description: '3D visualizations and WebGL experiences'
                },
            ],
        },
        {
            category: 'backend',
            label: 'BACKEND',
            status: 'advanced',
            color: '#f97316',
            icon: '⚙️',
            description: 'Server-side development and APIs',
            skills: [
                {
                    name: 'node.js',
                    version: '20.x',
                    level: 90,
                    trend: '→',
                    experience: '4 years',
                    projects: 30,
                    certifications: ['AWS Certified Developer'],
                    lastUsed: '2024',
                    description: 'Event-driven architecture and microservices'
                },
                {
                    name: 'postgresql',
                    version: '15.x',
                    level: 85,
                    trend: '↑',
                    experience: '3 years',
                    projects: 18,
                    certifications: [],
                    lastUsed: '2024',
                    description: 'Relational database design and optimization'
                },
                {
                    name: 'graphql',
                    version: '16.x',
                    level: 80,
                    trend: '↑',
                    experience: '2 years',
                    projects: 12,
                    certifications: [],
                    lastUsed: '2024',
                    description: 'Type-safe API layer with Apollo/Relay'
                },
                {
                    name: 'redis',
                    version: '7.x',
                    level: 75,
                    trend: '→',
                    experience: '2 years',
                    projects: 10,
                    certifications: [],
                    lastUsed: '2024',
                    description: 'Caching and real-time applications'
                },
            ],
        },
        {
            category: 'devops',
            label: 'DEVOPS',
            status: 'intermediate',
            color: '#22c55e',
            icon: '🐳',
            description: 'Cloud infrastructure and CI/CD',
            skills: [
                {
                    name: 'docker',
                    version: '24.x',
                    level: 80,
                    trend: '↑',
                    experience: '2 years',
                    projects: 15,
                    certifications: ['Docker Certified Associate'],
                    lastUsed: '2024',
                    description: 'Containerization and orchestration'
                },
                {
                    name: 'aws',
                    version: 'certified',
                    level: 75,
                    trend: '↑',
                    experience: '2 years',
                    projects: 12,
                    certifications: ['AWS Solutions Architect'],
                    lastUsed: '2024',
                    description: 'Cloud infrastructure and serverless'
                },
                {
                    name: 'kubernetes',
                    version: '1.28',
                    level: 65,
                    trend: '↑',
                    experience: '1 year',
                    projects: 6,
                    certifications: [],
                    lastUsed: '2024',
                    description: 'Container orchestration at scale'
                },
                {
                    name: 'terraform',
                    version: '1.5.x',
                    level: 70,
                    trend: '↑',
                    experience: '1 year',
                    projects: 8,
                    certifications: [],
                    lastUsed: '2024',
                    description: 'Infrastructure as Code'
                },
            ],
        },
        // {
        //     category: 'ai-ml',
        //     label: 'AI/ML',
        //     status: 'learning',
        //     color: '#ec4899',
        //     icon: '🧠',
        //     description: 'Machine Learning and AI integration',
        //     skills: [
        //         {
        //             name: 'tensorflow.js',
        //             version: '4.x',
        //             level: 60,
        //             trend: '↑',
        //             experience: '6 months',
        //             projects: 3,
        //             certifications: [],
        //             lastUsed: '2024',
        //             description: 'Browser-based machine learning'
        //         },
        //         {
        //             name: 'openai',
        //             version: 'api',
        //             level: 70,
        //             trend: '↑',
        //             experience: '1 year',
        //             projects: 5,
        //             certifications: [],
        //             lastUsed: '2024',
        //             description: 'GPT integration and fine-tuning'
        //         },
        //         {
        //             name: 'pytorch',
        //             version: '2.x',
        //             level: 50,
        //             trend: '↑',
        //             experience: '3 months',
        //             projects: 2,
        //             certifications: [],
        //             lastUsed: '2024',
        //             description: 'Deep learning research framework'
        //         },
        //     ],
        // },
    ];

    // Synergies between skills
    const skillSynergies = [
        {
            skills: ['react', 'typescript', 'node.js'],
            strength: 0.9,
            description: 'Full-stack TypeScript development'
        },
        {
            skills: ['docker', 'aws', 'kubernetes'],
            strength: 0.85,
            description: 'Cloud-native deployment pipeline'
        },
        {
            skills: ['next.js', 'postgresql', 'graphql'],
            strength: 0.8,
            description: 'Modern full-stack architecture'
        },
        {
            skills: ['three.js', 'react', 'typescript'],
            strength: 0.75,
            description: 'Interactive 3D web experiences'
        },
    ];

    // Badges/Achievements
    const achievementBadges = [
        {
            name: 'Full Stack Master',
            icon: '🏆',
            unlocked: true,
            description: 'Proficient in both frontend and backend'
        },
        {
            name: 'Cloud Architect',
            icon: '☁️',
            unlocked: true,
            description: 'AWS certified with production experience'
        },
        {
            name: '3D Developer',
            icon: '☁️',
            unlocked: true,
            description: 'Created interactive 3D visualizations'
        },
        {
            name: 'AI Explorer',
            icon: '🤖',
            unlocked: false,
            description: 'Working on ML integration projects'
        },
        {
            name: 'Open Source Contributor',
            icon: '📦',
            unlocked: true,
            description: 'Contributed to major repositories'
        },
        {
            name: 'Performance Guru',
            icon: '⚡',
            unlocked: true,
            description: 'Optimized applications for speed'
        },
    ];

    // Initialize data
    useEffect(() => {
        setSynergies(skillSynergies);
        setBadges(achievementBadges);
    }, []);

    const getBarChar = (level: number) => {
        const filled = Math.floor(level / 12.5);
        const chars = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
        return chars.slice(0, filled).join('') + '░'.repeat(8 - filled);
    };

    const handleNodeClick = (nodeId: string) => {
        if (audioEnabled) playSound('click');
        setActiveCategory(nodeId);
    };

    const handleSkillClick = (skill: any) => {
        if (audioEnabled) playSound('select');
        setSelectedSkill(skill);
    };

    const handleCategoryHover = (category: string | null) => {
        if (audioEnabled && category) playSound('hover');
        setActiveCategory(category);
    };



    const filteredSkills = skillTree.filter(category =>
        category.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.skills.some(skill =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const currentTheme = themes[theme];

    return (
        <section
            id="skills"
            className="relative min-h-screen bg-black flex flex-col justify-center px-4 md:px-6 overflow-hidden"
            style={{ background: currentTheme.gradient }}
            ref={containerRef}
        >
            {/* Animated grid background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, ${currentTheme.primary}05 1px, transparent 1px),
                        linear-gradient(to bottom, ${currentTheme.primary}05 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Floating particles background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(mobileView ? 20 : 50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            background: currentTheme.primary,
                            width: Math.random() * 3 + 1,
                            height: Math.random() * 3 + 1,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.sin(i) * 50, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Controls Bar Removed */}

            <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 md:pt-0">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-green-500 font-mono text-sm mb-2 tracking-[0.3em]">
                        [ SKILL_MATRIX_V3.0 ]
                    </h2>
                    <div className="text-green-700 font-mono text-xs flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            {'>'} NEURAL NETWORK: ACTIVE
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            {'>'} SKILLS LOADED: {skillTree.reduce((acc, cat) => acc + cat.skills.length, 0)}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            {'>'} LAST UPDATE: {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-xl mx-auto mb-8"
                >
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="SEARCH SKILLS..."
                            className="w-full px-4 py-3 bg-black/50 border-2 border-green-500/30 text-green-500 font-mono text-sm placeholder-green-700 focus:outline-none focus:border-green-500 transition-colors"
                        />
                        <span className="absolute right-3 top-3 text-green-700 font-mono">
                            {searchQuery ? `FOUND: ${filteredSkills.reduce((acc, cat) => acc + cat.skills.length, 0)}` : '>_'}
                        </span>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 h-[50vh] min-h-[500px]">
                    {/* 3D Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="border-2 border-green-500/30 bg-black/50 relative overflow-hidden"
                    >
                        <Canvas camera={{ position: cameraPosition, fov: 50 }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} color={currentTheme.primary} />
                            <pointLight position={[-10, -10, -10]} intensity={0.5} color={currentTheme.secondary} />
                            <NeuralNetwork
                                activeCategory={activeCategory}
                                onNodeClick={handleNodeClick}
                                theme={currentTheme}
                                showParticles={!mobileView}
                                animationSpeed={0.5}
                            />
                            {!mobileView && <OrbitControls enableZoom={true} enablePan={false} />}
                        </Canvas>

                        <div className="absolute top-4 left-4 text-green-500 font-mono text-xs bg-black/80 px-3 py-2 border border-green-500/30 backdrop-blur-sm">
                            NEURAL_NET_v4.0 | {mobileView ? 'TAP TO INTERACT' : 'HOVER/CLICK TO INTERACT'}
                        </div>

                        {/* Stats overlay */}
                        <div className="absolute bottom-4 left-4 text-green-500 font-mono text-xs">
                            <div>NODES: {skillTree.length + 2}</div>
                            <div>CONNECTIONS: {skillSynergies.length * 2}</div>
                            <div>STATUS: OPTIMAL</div>
                        </div>
                    </motion.div>

                    {/* Skills Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="border-2 border-green-500/30 bg-black/50 p-4 md:p-6 font-mono text-xs overflow-y-auto backdrop-blur-sm"
                    >
                        {/* Terminal Header */}
                        <div className="text-green-700 mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-green-500">$</span>
                                <span>npm list --global --depth=3</span>
                                <span className="text-green-500 animate-pulse">█</span>
                            </div>
                            <div className="mt-1 text-green-600 text-[10px]">
                                /usr/local/lib • {new Date().toLocaleTimeString()}
                            </div>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-3">
                            {filteredSkills.map((category, idx) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onMouseEnter={() => handleCategoryHover(category.category)}
                                    onMouseLeave={() => handleCategoryHover(null)}
                                    onClick={() => handleNodeClick(category.category)}
                                    className="cursor-pointer hover:bg-green-950/30 p-3 transition-all border border-transparent hover:border-green-500/50 rounded"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-700">├─┬</span>
                                            <span className="text-xl">{category.icon}</span>
                                            <span style={{ color: category.color }} className="font-bold">
                                                {category.label.toLowerCase()}@{category.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-yellow-500 text-[10px]">⚡ ACTIVE</span>
                                            <span className="text-green-700 text-[10px]">
                                                {category.skills.length} modules
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-green-600 text-[10px] mb-2">
                                        {category.description}
                                    </div>

                                    <AnimatePresence>
                                        {activeCategory === category.category && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="ml-6 space-y-2"
                                            >
                                                {category.skills.map((skill, skillIdx) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: skillIdx * 0.05 }}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleSkillClick(skill);
                                                        }}
                                                        className="flex items-center gap-3 p-1 hover:bg-green-900/20 rounded cursor-pointer"
                                                    >
                                                        <span className="text-green-700">│ ├──</span>
                                                        <div className="flex-1 grid grid-cols-12 gap-2 items-center">
                                                            <span className="col-span-4 text-green-500 truncate">
                                                                {skill.name}@{skill.version}
                                                            </span>
                                                            <span className="col-span-3 text-green-600 font-mono text-[10px]">
                                                                [{getBarChar(skill.level)}]
                                                            </span>
                                                            <span className="col-span-2 text-green-400">
                                                                {skill.level}%
                                                            </span>
                                                            <span className={`col-span-2 text-xs ${skill.trend === '↑' ? 'text-green-500' :
                                                                skill.trend === '↓' ? 'text-red-500' :
                                                                    'text-yellow-500'
                                                                }`}>
                                                                {skill.trend}
                                                            </span>
                                                            <span className="col-span-1 text-green-700">
                                                                {skill.experience}
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        {/* Synergies Section */}
                        <div className="mt-6 pt-4 border-t border-green-500/20">
                            <div className="text-green-700 mb-3">$ analyze --synergies</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {synergies.map((synergy, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-2 border border-green-500/20 bg-black/30 rounded"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-green-500 text-[10px]">
                                                {synergy.skills.join(' + ')}
                                            </span>
                                            <span className="text-green-400 text-[10px]">
                                                {Math.round(synergy.strength * 100)}%
                                            </span>
                                        </div>
                                        <div className="text-green-600 text-[9px] mt-1">
                                            {synergy.description}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Badges Section */}
                        <div className="mt-4 pt-4 border-t border-green-500/20">
                            <div className="text-green-700 mb-2">$ unlock --achievements</div>
                            <div className="flex flex-wrap gap-2">
                                {badges.map((badge, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.1 }}
                                        className={`p-2 rounded border ${badge.unlocked ? 'border-green-500/50 bg-green-500/10' : 'border-gray-700/50 bg-gray-900/30 opacity-50'}`}
                                        title={badge.description}
                                    >
                                        <div className="flex items-center gap-1">
                                            <span>{badge.icon}</span>
                                            <span className={`text-[10px] ${badge.unlocked ? 'text-green-400' : 'text-gray-500'}`}>
                                                {badge.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs"
                >
                    {[
                        { label: 'TOTAL_TECH', value: '25+', icon: '💻', trend: '+5 this year' },
                        { label: 'YEARS_EXP', value: '5+', icon: '📅', trend: 'since 2019' },
                        { label: 'PROJECTS', value: '50+', icon: '🚀', trend: '12 active' },
                        { label: 'CERTIFICATIONS', value: '8', icon: '🏆', trend: '3 pending' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="border border-green-500/30 bg-black/50 p-4 text-center hover:border-green-500 transition-all backdrop-blur-sm"
                        >
                            <div className="text-2xl mb-1">{stat.icon}</div>
                            <div className="text-green-700 mb-1 text-[10px]">{stat.label}</div>
                            <div className="text-green-500 text-xl font-bold mb-1">{stat.value}</div>
                            <div className="text-green-600 text-[9px]">{stat.trend}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Keyboard Shortcuts Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-6 text-center text-green-700 font-mono text-[10px]"
                >
                    <div>⌨️ SHORTCUTS: [1] Frontend • [2] Backend • [3] DevOps • [4] AI/ML • [ESC] Reset</div>
                    <div className="mt-1">Press keys 1-4 to navigate categories</div>
                </motion.div>
            </div>

            {/* Skill Details Modal */}
            <AnimatePresence>
                {selectedSkill && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedSkill(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="bg-black border-2 border-green-500/50 max-w-lg w-full p-6 font-mono"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-green-500 text-lg">
                                        {selectedSkill.name.toUpperCase()}@{selectedSkill.version}
                                    </h3>
                                    <div className="text-green-700 text-sm">
                                        {skillTree.find(c => c.skills.includes(selectedSkill))?.label}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedSkill(null)}
                                    className="text-green-700 hover:text-green-500"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-green-700 mb-1">PROFICIENCY</div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-full bg-green-950/50 h-4 rounded overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${selectedSkill.level}%` }}
                                                className="h-full bg-green-500"
                                            />
                                        </div>
                                        <span className="text-green-500">{selectedSkill.level}%</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-green-700 mb-1">EXPERIENCE</div>
                                        <div className="text-green-500">{selectedSkill.experience}</div>
                                    </div>
                                    <div>
                                        <div className="text-green-700 mb-1">PROJECTS</div>
                                        <div className="text-green-500">{selectedSkill.projects}+</div>
                                    </div>
                                    <div>
                                        <div className="text-green-700 mb-1">TREND</div>
                                        <div className={`text-${selectedSkill.trend === '↑' ? 'green' :
                                            selectedSkill.trend === '↓' ? 'red' : 'yellow'
                                            }-500`}>
                                            {selectedSkill.trend}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-green-700 mb-1">LAST USED</div>
                                        <div className="text-green-500">{selectedSkill.lastUsed}</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-green-700 mb-1">DESCRIPTION</div>
                                    <div className="text-green-600 text-sm">{selectedSkill.description}</div>
                                </div>

                                {selectedSkill.certifications && selectedSkill.certifications.length > 0 && (
                                    <div>
                                        <div className="text-green-700 mb-1">CERTIFICATIONS</div>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedSkill.certifications.map((cert: string, idx: number) => (
                                                <span key={idx} className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-500 text-xs">
                                                    {cert}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Keyboard Shortcuts */}
            <div className="hidden">
                {['1', '2', '3', '4'].map((key, idx) => (
                    <div key={key} className="sr-only">
                        Press {key} for {skillTree[idx]?.label}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;