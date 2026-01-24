import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Visionary E-Comm',
            description: 'A revolutionary e-commerce platform focused on seamless user journeys and AI-driven personalized experiences.',
            tech: 'React · Node.js · AWS',
            image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
            link: '#'
        },
        {
            title: 'Neural Analytics',
            description: 'Real-time data processing engine with immersive 3D visualizations.',
            tech: 'Three.js · WebSocket · D3.js',
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
            link: '#'
        },
        {
            title: 'Aether Wallet',
            description: 'Next generation digital asset management with focus on privacy and accessibility.',
            tech: 'Web3 · Next.js · Solidity',
            image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="relative py-24 md:py-32 px-8 md:px-12 lg:px-24 bg-[#fcfcfc] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-[10vw] md:text-[6vw] font-serif font-medium text-black leading-none mb-4">
                        03 — Selected Projects
                    </h2>
                    <div className="w-full h-[1px] bg-black/10 mt-8" />
                </motion.div>

                {/* Projects List */}
                <div className="space-y-24 md:space-y-32">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-center"
                        >
                            {/* Text Info (Left) */}
                            <div className="order-2 md:order-1">
                                <h3 className="text-3xl md:text-4xl font-serif text-black mb-4 group-hover:text-gray-600 transition-colors duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 font-sans text-lg mb-6 leading-relaxed max-w-md">
                                    {project.description}
                                </p>
                                <span className="block text-sm font-mono text-gray-400 uppercase tracking-widest">
                                    {project.tech}
                                </span>
                            </div>

                            {/* Image Preview (Right) */}
                            <div className="order-1 md:order-2 overflow-hidden bg-gray-100 aspect-[16/10] relative">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Loading state placeholder */}
                                <img
                                    src={`${project.image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                                    alt={project.title}
                                    className="relative w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

