import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/projects';
import Logo from '../components/shared/Logo';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const { scrollY } = useScroll();

    // Transform title to URL-friendly ID for comparison
    const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId);

    // Find next project for navigation
    const currentIndex = projects.findIndex(p => p === project);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

    // Parallax effect for hero image
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
    }

    return (
        <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] selection:bg-black selection:text-white">
            {/* Custom Navigation for details page */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
                <Link to="/" className="group">
                    <Logo className="w-12 h-12 transition-transform duration-700 group-hover:rotate-12" />
                </Link>
                <Link
                    to="/"
                    className="text-sm font-mono uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                    Close
                </Link>
            </nav>

            {/* Hero Section */}
            <header className="relative h-[80vh] w-full overflow-hidden flex items-end">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc] via-transparent to-transparent opacity-90" />
                </motion.div>

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-24 mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <span className="inline-block px-4 py-2 text-xs font-mono tracking-widest bg-black text-white rounded-full">
                            {project.tech}
                        </span>
                        <h1 className="text-[12vw] md:text-[8vw] font-serif leading-[0.9] text-[#1a1a1a]">
                            {project.title}
                        </h1>
                    </motion.div>
                </div>

                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-8 right-8 md:right-12 lg:right-24 text-xs font-mono tracking-widest text-[#1a1a1a]/60"
                >
                    SCROLL TO EXPLORE
                </motion.div>
            </header>

            {/* Content Section */}
            <main className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-24 py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-32">

                    {/* Sidebar / Meta info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12 md:sticky md:top-32 self-start"
                    >
                        <div>
                            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">Description</h3>
                            <p className="text-xl md:text-2xl font-sans leading-relaxed text-[#1a1a1a]/80">
                                {project.description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Role</h4>
                                <p className="text-lg font-serif">Lead Developer</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Category</h4>
                                <p className="text-lg font-serif capitalize">{project.category}</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">Year</h4>
                                <p className="text-lg font-serif">2025</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-[#1a1a1a] text-white text-center rounded-full font-medium hover:bg-black/80 transition-all flex items-center justify-center gap-2 group"
                                >
                                    Live Demo
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 border border-[#1a1a1a]/20 text-[#1a1a1a] text-center rounded-full font-medium hover:bg-[#1a1a1a] hover:text-white transition-all flex items-center justify-center gap-2"
                                >
                                    Source Code
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="space-y-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-8">Overview</h3>
                            <p className="text-xl md:text-3xl font-serif leading-relaxed text-[#1a1a1a]">
                                {project.fullDescription}
                            </p>
                        </motion.div>

                        {/* Features */}
                        {project.features && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-8">Key Features</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                                            <span className="text-sm font-mono text-gray-400 pt-1">0{i + 1}</span>
                                            <p className="text-lg text-[#1a1a1a]">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Gallery */}
                        {project.gallery && (
                            <div className="space-y-8">
                                <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest">Gallery</h3>
                                {project.gallery.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full overflow-hidden rounded-2xl shadow-lg"
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${i}`}
                                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Next Project Navigation */}
            <nav className="border-t border-black/10 py-12 md:py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-24 flex justify-between items-center">
                    <Link
                        to={`/project/${prevProject.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group flex flex-col items-start"
                    >
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 group-hover:text-black transition-colors">Previous</span>
                        <span className="text-2xl md:text-4xl font-serif text-[#1a1a1a] group-hover:underline decoration-1 underline-offset-4">{prevProject.title}</span>
                    </Link>
                    <Link
                        to={`/project/${nextProject.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group flex flex-col items-end text-right"
                    >
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 group-hover:text-black transition-colors">Next Project</span>
                        <span className="text-2xl md:text-4xl font-serif text-[#1a1a1a] group-hover:underline decoration-1 underline-offset-4">{nextProject.title}</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default ProjectDetails;
