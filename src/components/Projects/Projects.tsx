import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
    id: number;
    codename: string;
    title: string;
    status: string;
    classification: string;
    techStack: string[];
    users: string;
    briefing: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filterType, setFilterType] = useState<string>('all');

    const projects: Project[] = [
        {
            id: 1,
            codename: 'MISSION_001',
            title: 'E-Commerce Platform',
            status: 'DEPLOYED',
            classification: 'Full_Stack',
            techStack: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
            users: '10,000+',
            briefing: 'Revolutionary e-commerce platform with AI-powered recommendations, real-time inventory management, and seamless payment integration. Built for scalability and performance.',
            image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 2,
            codename: 'MISSION_002',
            title: 'Real-Time Analytics Dashboard',
            status: 'DEPLOYED',
            classification: 'Frontend',
            techStack: ['React', 'Three.js', 'WebSocket', 'D3.js'],
            users: '5,000+',
            briefing: 'High-performance analytics dashboard with 3D data visualizations, real-time updates, and interactive charts. Processes millions of data points seamlessly.',
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 3,
            codename: 'MISSION_003',
            title: 'Blockchain Wallet',
            status: 'ACTIVE',
            classification: 'Full_Stack',
            techStack: ['TypeScript', 'Web3', 'Next.js', 'Solidity'],
            users: '2,500+',
            briefing: 'Secure blockchain wallet with multi-chain support, NFT gallery, and DeFi integration. Military-grade encryption for maximum security.',
            image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 4,
            codename: 'MISSION_004',
            title: 'AI Chat Platform',
            status: 'DEPLOYED',
            classification: 'Full_Stack',
            techStack: ['Python', 'React', 'OpenAI', 'FastAPI'],
            users: '15,000+',
            briefing: 'Advanced AI-powered chat platform with natural language processing, multi-language support, and context-aware responses. Handles complex conversations with ease.',
            image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
            liveUrl: '#',
            githubUrl: '#',
        },
    ];

    const filteredProjects =
        filterType === 'all' ? projects : projects.filter((p) => p.classification.toLowerCase().includes(filterType));

    return (
        <section id="projects" className="relative h-screen bg-black flex flex-col justify-center px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-green-500 font-mono text-sm mb-2 tracking-[0.3em]">
                        [ ACCESSING_PROJECT_ARCHIVES ]
                    </h2>
                    <div className="text-green-700 font-mono text-xs">
                        {'>'} LOADING MISSION BRIEFINGS...
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex justify-center gap-4 mb-8 font-mono text-xs flex-wrap"
                >
                    <button
                        onClick={() => setFilterType('all')}
                        className={`px-3 py-1.5 border transition-colors ${filterType === 'all'
                            ? 'border-green-500 text-green-500 bg-green-500/10'
                            : 'border-green-500/30 text-green-700 hover:border-green-500'
                            }`}
                    >
                        $ filter --type=all
                    </button>
                    <button
                        onClick={() => setFilterType('full')}
                        className={`px-3 py-1.5 border transition-colors ${filterType === 'full'
                            ? 'border-green-500 text-green-500 bg-green-500/10'
                            : 'border-green-500/30 text-green-700 hover:border-green-500'
                            }`}
                    >
                        $ filter --type=full_stack
                    </button>
                    <button
                        onClick={() => setFilterType('frontend')}
                        className={`px-3 py-1.5 border transition-colors ${filterType === 'frontend'
                            ? 'border-green-500 text-green-500 bg-green-500/10'
                            : 'border-green-500/30 text-green-700 hover:border-green-500'
                            }`}
                    >
                        $ filter --type=frontend
                    </button>
                </motion.div>

                {/* Horizontal Scroll Container */}
                <div className="overflow-x-auto pb-8 -mx-6 px-6 scrollbar-thin scrollbar-thumb-green-500/30 scrollbar-track-transparent">
                    <div className="flex gap-6 w-max min-w-full justify-center">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setSelectedProject(project)}
                                className="w-[300px] flex-shrink-0 border-2 border-green-500/30 bg-black hover:border-green-500 transition-all cursor-pointer group"
                            >
                                <div className="aspect-video relative overflow-hidden h-[160px]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-20 transition-opacity" />
                                </div>

                                <div className="p-4 font-mono">
                                    <div className="text-green-700 text-[10px] mb-2">
                                        ╔═══ {project.codename} ══╗
                                    </div>

                                    <h3 className="text-green-500 text-sm mb-2 tracking-wide truncate">
                                        {project.title}
                                    </h3>

                                    <div className="space-y-1 text-[10px] mb-3">
                                        <div className="flex justify-between">
                                            <span className="text-green-700">STATUS:</span>
                                            <span className="text-green-500">[{project.status}]</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-green-700">TYPE:</span>
                                            <span className="text-green-500">{project.classification}</span>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="text-green-700 text-[10px] mb-1">TECH_STACK:</div>
                                        <div className="flex flex-wrap gap-1">
                                            {project.techStack.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-1.5 py-0.5 border border-green-500/30 text-green-500 text-[9px]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="px-1.5 py-0.5 border border-green-500/30 text-green-500 text-[9px]">
                                                    +{project.techStack.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-green-700 text-[10px]">
                                        ╚════════════════════════╝
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 overflow-y-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-4xl w-full border-2 border-green-500 bg-black p-8 font-mono relative"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-green-500 hover:text-green-400 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-green-700 text-xs mb-6">
                                ╔═══ MISSION_BRIEFING ═══════════════════════╗
                            </div>

                            <h2 className="text-green-500 text-3xl mb-4">{selectedProject.title}</h2>

                            <div className="aspect-video mb-6 border border-green-500/30 overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <div className="text-green-700 text-xs mb-2">[BRIEFING]</div>
                                    <p className="text-green-500 text-sm leading-relaxed">
                                        {selectedProject.briefing}
                                    </p>
                                </div>

                                <div>
                                    <div className="text-green-700 text-xs mb-2">[TECH_STACK]</div>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 border border-green-500 text-green-500 text-xs bg-green-500/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-green-700 text-xs mb-2">[KEY_FEATURES]</div>
                                    <div className="text-green-600 text-xs space-y-1">
                                        <div>→ Scalable architecture with microservices</div>
                                        <div>→ Real-time updates and notifications</div>
                                        <div>→ Advanced security and encryption</div>
                                        <div>→ Responsive design for all devices</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.liveUrl}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    [VIEW_LIVE]
                                </a>
                                <a
                                    href={selectedProject.githubUrl}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
                                >
                                    <Github size={16} />
                                    [SOURCE_CODE]
                                </a>
                            </div>

                            <div className="text-green-700 text-xs mt-6">
                                ╚════════════════════════════════════════════╝
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
