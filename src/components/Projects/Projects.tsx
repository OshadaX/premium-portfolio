import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [activeTab, setActiveTab] = useState<'frontend' | 'devops'>('frontend');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const projects = [
        {
            title: 'Visionary E-Comm',
            description: 'A revolutionary e-commerce platform focused on seamless user journeys.',
            tech: 'React · Node.js',
            image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
            link: '#',
            category: 'frontend',
            featured: true,
            fullDescription: 'We rebuilt the entire shopping experience from scratch, focusing on performance and user intent. The result is a 40% increase in conversion rates.',
            gallery: [
                'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
                'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg',
                'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg'
            ]
        },
        {
            title: 'Cloud Scale Infra',
            description: 'Automated scalable infrastructure using Kubernetes.',
            tech: 'Kubernetes · AWS',
            image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
            link: '#',
            category: 'devops',
            featured: true,
            fullDescription: 'Designing a self-healing infrastructure that scales automatically based on traffic patterns. Reduced downtime by 99.9%.',
            gallery: [
                'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
                'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
            ]
        },
        {
            title: 'Neural Analytics',
            description: 'Real-time data processing engine with immersive 3D visualizations.',
            tech: 'Three.js · D3.js',
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
            link: '#',
            category: 'frontend',
            featured: false,
            fullDescription: 'Visualizing complex neural network data in real-time. The 3D interface allows analysts to explore data relationships intuitively.',
            gallery: [
                'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg',
                'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg'
            ]
        },
        {
            title: 'CI/CD Pipeline',
            description: 'Optimized deployment workflows reducing build times by 60%.',
            tech: 'GitHub Actions',
            image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
            link: '#',
            category: 'devops',
            featured: false,
            fullDescription: 'A custom CI/CD pipeline built to handle microservices deployment. Includes automated testing, security scanning, and canary deployments.',
            gallery: [
                'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
            ]
        },
        {
            title: 'Aether Wallet',
            description: 'Next generation digital asset management.',
            tech: 'Web3 · Solidity',
            image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
            link: '#',
            category: 'frontend',
            featured: false,
            fullDescription: 'Secure, non-custodial wallet for managing digital assets. Features bio-metric authentication and multi-chain support.',
            gallery: [
                'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg'
            ]
        },
        {
            title: 'Microservices Mesh',
            description: 'Service mesh implementation for inter-service communication.',
            tech: 'Istio · Go',
            image: 'https://images.pexels.com/photos/17483848/pexels-photo-17483848.jpeg',
            link: '#',
            category: 'devops',
            featured: false,
            fullDescription: 'Implementation of Istio service mesh to secure, connect, and monitor services. Provides advanced traffic management capabilities.',
            gallery: [
                'https://images.pexels.com/photos/17483848/pexels-photo-17483848.jpeg'
            ]
        }
    ];

    const filteredProjects = projects.filter(project => project.category === activeTab);
    const selectedProject = projects.find(p => p.title === selectedId);

    return (
        <div className="relative h-full py-32 px-24 bg-[#fcfcfc] overflow-hidden flex flex-col justify-center">
            <div className="max-w-[1400px] mx-auto w-full h-[90vh] flex flex-col">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 shrink-0 text-left"
                >
                    <h2 className="text-[4vw] font-serif font-medium text-[#1a1a1a] leading-none mb-4">
                        03 — Selected Projects
                    </h2>
                    <div className="w-full h-[1px] bg-black/10 mt-4" />
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-start gap-8 mb-8 shrink-0">
                    {['frontend', 'devops'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className="relative pb-2 group"
                        >
                            <span className={`text-xl font-serif capitalize transition-colors duration-300 ${activeTab === tab ? 'text-[#1a1a1a]' : 'text-gray-400 hover:text-[#1a1a1a]/60'}`}>
                                {tab} projects
                            </span>
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeProjectTab"
                                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1a1a1a]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Bento Grid Layout - Fit Remaining Height */}
                <motion.div
                    layout
                    className="grid grid-cols-3 gap-4 flex-1 min-h-0"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.slice(0, 3).map((project, idx) => (
                            // Limit to 3 items to ensuring fitting
                            <motion.div
                                key={project.title}
                                layoutId={project.title}
                                onClick={() => setSelectedId(project.title)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`group relative rounded-3xl overflow-hidden bg-gray-100 cursor-pointer h-full ${project.featured ? 'col-span-2' : 'col-span-1'}`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
                                    <motion.img
                                        layoutId={`image-${project.title}`}
                                        src={`${project.image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start justify-end z-10">
                                    <motion.span
                                        layoutId={`tech-${project.title}`}
                                        className="inline-block px-3 py-1 mb-2 text-[10px] font-mono tracking-widest text-[#1a1a1a] bg-white/90 backdrop-blur-sm rounded-full"
                                    >
                                        {project.tech}
                                    </motion.span>
                                    <motion.h3
                                        layoutId={`title-${project.title}`}
                                        className="text-2xl font-serif text-white mb-2 leading-tight"
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="text-white/70 font-sans text-base max-w-[90%] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Expanded View Modal */}
                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/60 backdrop-blur-md"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                layoutId={selectedProject.title}
                                className="w-full max-w-5xl bg-[#fcfcfc] rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-6 right-6 z-20 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>

                                {/* Header Image Area */}
                                <div className="relative h-[40vh] w-full shrink-0">
                                    <motion.img
                                        layoutId={`image-${selectedProject.title}`}
                                        src={`${selectedProject.image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc] to-transparent opacity-100" />
                                    <div className="absolute bottom-8 left-12">
                                        <motion.span
                                            layoutId={`tech-${selectedProject.title}`}
                                            className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-widest text-white bg-black/50 backdrop-blur-sm rounded-full"
                                        >
                                            {selectedProject.tech}
                                        </motion.span>
                                        <motion.h3
                                            layoutId={`title-${selectedProject.title}`}
                                            className="text-6xl font-serif text-[#1a1a1a] leading-none"
                                        >
                                            {selectedProject.title}
                                        </motion.h3>
                                    </div>
                                </div>

                                {/* Content Scroll Area */}
                                <div className="flex-1 overflow-y-auto">
                                    <div className="p-12 space-y-12">
                                        {/* Description */}
                                        <div className="grid grid-cols-3 gap-12">
                                            <div className="col-span-2">
                                                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">About Project</h4>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="text-2xl font-sans text-gray-800 leading-relaxed"
                                                >
                                                    {selectedProject.fullDescription || selectedProject.description}
                                                </motion.p>
                                            </div>
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Category</h4>
                                                    <p className="text-lg font-serif capitalize">{selectedProject.category}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Role</h4>
                                                    <p className="text-lg font-serif">Lead Developer</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Year</h4>
                                                    <p className="text-lg font-serif">2025</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Gallery */}
                                        <div>
                                            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-6">Gallery</h4>
                                            <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                                                {selectedProject.gallery?.map((img, i) => (
                                                    <div key={i} className="flex-none w-[80vw] md:w-[600px] aspect-video bg-gray-100 rounded-lg overflow-hidden snap-center">
                                                        <img
                                                            src={`${img}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                                                            alt={`Gallery ${i}`}
                                                            className="w-full h-full object-cover"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Projects;

