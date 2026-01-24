import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'bio' | 'personal' | 'connect';

const About = () => {
    const [activeTab, setActiveTab] = useState<Tab>('bio');

    const tabs: { id: Tab; label: string }[] = [
        { id: 'bio', label: 'Bio' },
        { id: 'personal', label: 'Personal Story' },
        { id: 'connect', label: 'Connect' }
    ];

    const content = {
        bio: (
            <div className="space-y-6">
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-black/90">
                    I’m a software engineering student and software engineer intern focused on building clean, scalable web applications.
                </p>
                <p className="text-lg font-sans leading-relaxed text-gray-500">
                    I enjoy working across the stack, combining thoughtful UI with reliable backend logic. Currently, I’m focused on improving my skills in modern JavaScript frameworks and collaborative development workflows.
                </p>
                <div className="pt-4">
                    <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                        Based in Sri Lanka · Open to opportunities
                    </span>
                </div>
            </div>
        ),
        personal: (
            <div className="space-y-6">
                <p className="text-lg font-sans leading-relaxed text-black/80">
                    I started learning web development out of curiosity and quickly became interested in how design and code work together.
                </p>
                <p className="text-lg font-sans leading-relaxed text-gray-500">
                    Over time, I moved from writing simple features to understanding larger systems, team workflows, and responsibility. Working as an intern helped me learn not just how to code, but how to collaborate, review code, and think long-term about software quality.
                </p>
                <div className="pt-4">
                    <span className="text-sm font-serif italic text-black/60">
                        I value clarity, consistency, and continuous improvement.
                    </span>
                </div>
            </div>
        ),
        connect: (
            <div className="space-y-8">
                <p className="text-xl font-sans leading-relaxed text-black/90">
                    I’m always interested in discussing web development, design systems, and early-stage products.
                </p>
                <p className="text-lg font-sans leading-relaxed text-gray-500">
                    If you’d like to collaborate, talk about a project, or just connect, feel free to reach out.
                </p>
                <div className="flex gap-8 pt-4">
                    {[
                        { name: 'Email', href: 'mailto:hello@oshadanavindra.com' }, // Placeholder email
                        { name: 'GitHub', href: 'https://github.com/OshadaX' },
                        { name: 'LinkedIn', href: 'https://linkedin.com' }
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black font-medium hover:text-gray-500 transition-colors duration-300 border-b border-black/20 hover:border-black"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        )
    };

    return (
        <section id="about" className="relative py-24 md:py-32 px-8 md:px-12 lg:px-24 bg-[#fcfcfc]">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-[10vw] md:text-[6vw] font-serif font-medium text-black leading-none mb-4">
                        02 — About
                    </h2>
                    <div className="w-full h-[1px] bg-black/10 mt-8" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
                    {/* Navigation Tabs */}
                    <div className="flex flex-col items-start gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="group relative py-1 text-left"
                            >
                                <span className={`text-lg md:text-xl font-sans transition-colors duration-300 ${activeTab === tab.id ? 'text-black font-medium' : 'text-gray-400 hover:text-black/60'}`}>
                                    {tab.label}
                                </span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute bottom-0 left-0 w-full h-[1px] bg-black"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Content */}
                    <div className="min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {content[activeTab]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
