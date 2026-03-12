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
                            className="relative px-4 py-2 group rounded-full overflow-hidden transition-all duration-300"
                        >
                            <span className={`relative z-10 text-xl font-serif capitalize transition-colors duration-300 ${activeTab === tab ? 'text-white' : 'text-gray-400 group-hover:text-[#1a1a1a]'}`}>
                                {tab} projects
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-[#1a1a1a] rounded-full z-0"
                                initial={false}
                                animate={{
                                    opacity: activeTab === tab ? 1 : 0,
                                    scale: activeTab === tab ? 1 : 0.95
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </button>

                    ))}
                </div>

                {/* Bento Grid Layout - Fit Remaining Height */}
                {/* Bento Grid Layout */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {filteredProjects.slice(0, 4).map((project, idx) => (
                            // Limit to 4 items for a better grid appearance
                            <Link
                                key={project.title}
                                to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-100 cursor-pointer h-[350px] md:h-[450px] block ${project.featured ? 'md:col-span-2' : 'md:col-span-1'}`}
                            >
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="w-full h-full"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                                        <div className="absolute inset-0 bg-black/5 animate-pulse z-0" />
                                        <motion.img
                                            layoutId={`image-${project.title}`}
                                            src={`${project.image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-start justify-end z-10">

                                        <div className="w-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <motion.span
                                                layoutId={`tech-${project.title}`}
                                                className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-xs font-mono tracking-widest text-[#1a1a1a] bg-white/90 backdrop-blur-md rounded-full shadow-sm"
                                            >
                                                {project.tech}
                                            </motion.span>

                                            <div className="bg-black/20 backdrop-blur-md border border-white/10 p-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 shadow-2xl">
                                                <motion.h3
                                                    layoutId={`title-${project.title}`}
                                                    className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight"
                                                >
                                                    {project.title}
                                                </motion.h3>
                                                <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Initial Title (visible before hover) */}
                                        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 group-hover:opacity-0 transition-opacity duration-300">
                                            <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight drop-shadow-md">
                                                {project.title}
                                            </h3>
                                        </div>
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
