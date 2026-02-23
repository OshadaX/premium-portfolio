import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const Projects = () => {
    const [activeTab, setActiveTab] = useState<'frontend' | 'devops'>('frontend');
    // const [selectedId, setSelectedId] = useState<string | null>(null); // Removed modal state

    const filteredProjects = projects.filter(project => project.category === activeTab);

    return (
        <div className="relative py-24 md:py-32 px-8 md:px-12 lg:px-24 bg-[#fcfcfc]">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 shrink-0 text-left"
                >
                    <h2 className="text-[10vw] md:text-[6vw] font-serif font-medium text-black leading-none mb-4">
                        03 — Selected Projects
                    </h2>
                    <div className="w-full h-[1px] bg-black/10 mt-8" />
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
                {/* Bento Grid Layout */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.slice(0, 3).map((project, idx) => (
                            // Limit to 3 items to ensuring fitting
                            <Link
                                key={project.title}
                                to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`group relative rounded-3xl overflow-hidden bg-gray-100 cursor-pointer h-[300px] md:h-[400px] block ${project.featured ? 'md:col-span-2' : 'md:col-span-1'}`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="w-full h-full"
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
                            </Link>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* No modal needed anymore */}
            </div>
        </div>
    );
};

export default Projects;
