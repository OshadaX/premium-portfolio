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
                <div className="pt-6 mt-4 border-t border-black/5 flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                        Based in Sri Lanka · Open to opportunities
                    </span>
                </div>
            </div>
        ),
        personal: (
            <div className="space-y-8 max-w-2xl">
                <blockquote className="text-xl md:text-2xl font-serif italic text-black/90 leading-relaxed border-l-2 border-black/20 pl-6">
                    "I started learning web development out of curiosity and quickly became interested in how design and code work together."
                </blockquote>
                <p className="text-lg font-sans leading-relaxed text-gray-500">
                    Over time, I moved from writing simple features to understanding larger systems, team workflows, and responsibility. Working as an intern helped me learn not just how to code, but how to collaborate, review code, and think long-term about software quality.
                </p>
                <div className="pt-6 mt-4 border-t border-black/5 flex gap-2">
                    {['Clarity', 'Consistency', 'Improvement'].map(value => (
                        <span key={value} className="px-3 py-1 bg-black/5 text-black/60 rounded-full text-xs font-mono tracking-widest">
                            {value}
                        </span>
                    ))}
                </div>
            </div>
        ),
        connect: (
            <div className="space-y-8">
                <p className="text-xl md:text-2xl font-serif leading-relaxed text-black/90">
                    I’m always interested in discussing web development, design systems, and early-stage products.
                </p>
                <p className="text-lg font-sans leading-relaxed text-gray-500">
                    If you’d like to collaborate, talk about a project, or just connect, feel free to reach out.
                </p>
                <div className="flex flex-wrap gap-4 pt-6 mt-4 border-t border-black/5">
                    {[
                        { name: 'GitHub', href: 'https://github.com/OshadaX' },
                        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/oshada-navindra/' }
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-2 px-6 py-3 bg-black/5 hover:bg-black text-black hover:text-white rounded-full transition-all duration-300 font-sans font-medium"
                        >
                            <span>{link.name}</span>
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

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    {/* Navigation Tabs - Converted to pills */}
                    <div className="flex flex-row flex-wrap lg:flex-col gap-3 lg:gap-4 w-full lg:w-48 shrink-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-6 py-3 rounded-full text-left transition-all duration-300 overflow-hidden group border ${activeTab === tab.id
                                        ? 'border-transparent bg-black text-white shadow-md'
                                        : 'border-black/10 bg-white/50 text-gray-500 hover:border-black/30 hover:bg-white'
                                    }`}
                            >
                                <span className="relative z-10 text-lg md:text-xl font-serif">
                                    {tab.label}
                                </span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeAboutTabBg"
                                        className="absolute inset-0 bg-black z-0"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Content - Glassmorphic Container */}
                    <div className="w-full relative">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200/50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50 translate-x-1/2 -translate-y-1/2" />

                        <div className="bg-white/80 backdrop-blur-md border border-black/5 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-black/[0.02] min-h-[350px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    {content[activeTab]}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
