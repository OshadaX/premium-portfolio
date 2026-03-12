import React from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

// Staggered text animation for individual words
const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const words = text.split(' ');

    return (
        <span className="inline">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: delay + i * 0.08,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
};

// Letter-by-letter animation for the big name
const AnimatedName = ({ name }: { name: string }) => {
    return (
        <span className="inline-flex">
            {name.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 100, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5 + i * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="inline-block"
                    style={{ transformOrigin: 'bottom' }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};

const Hero: React.FC = () => {
    const scrollToExperience = () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex flex-col pt-32 md:pt-40 px-8 md:px-12 lg:px-24 bg-[#fcfcfc] overflow-hidden">
            {/* Subtle background grid */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Counter with subtle animation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-8 left-8 md:left-12 lg:left-24"
            >
                <div className="text-[0.65rem] font-mono tracking-[0.2em] text-gray-400 select-none">
                    <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        ●
                    </motion.span>
                    <span className="ml-2">AVAILABLE FOR WORK</span>
                </div>
            </motion.div>

            {/* Main Content Container */}
            <div className="w-full max-w-[1400px] mx-auto z-10 flex-grow flex flex-col">

                {/* Description Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 md:gap-24 items-end mb-16 md:mb-24">
                    {/* Left Col: Headings */}
                    <motion.div
                        className="description-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-medium font-sans tracking-tight text-[#1a1a1a] leading-[1.1]">
                            <AnimatedText text="Web Development," delay={0.4} />
                            <br />
                            <AnimatedText text="Design, and" delay={0.6} />
                            <br />
                            <AnimatedText text="Animation" delay={0.8} />
                        </h3>
                    </motion.div>

                    {/* Right Col: Paragraph */}
                    <motion.div
                        className="description-col pb-2 md:pb-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.0 }}
                    >
                        <p className="text-[1rem] md:text-[1.1rem] text-[#1a1a1a]/70 leading-[1.6] font-medium max-w-[420px]">
                            I believe creativity isn't just a skill, it's a mindset. Born from a passion for bold ideas and beautifully crafted storytelling, I collaborate with visionary clients to shape identities at the intersection of art and innovation.
                        </p>
                    </motion.div>
                </div>

                {/* Name Display - Enhanced visibility */}
                <div className="relative w-full h-[120px] md:h-[180px] mb-8 overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                        {/* Background shadow text */}
                        <h1 className="absolute text-[15vw] md:text-[18vw] font-black tracking-tighter text-black/5 leading-none select-none">
                            <AnimatedName name="NAVINDRA" />
                        </h1>

                        {/* Main gradient text */}
                        <h1 className="text-[15vw] md:text-[18vw] font-black tracking-[-0.05em] leading-none select-none text-[#1a1a1a]">
                            <AnimatedName name="NAVINDRA" />
                        </h1>
                    </div>
                </div>

                {/* Hero Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative w-full flex-grow min-h-[400px] bg-gray-900 overflow-hidden rounded-[2rem] md:rounded-[3rem] group"
                >
                    <div
                        className="w-full h-full relative transition-transform duration-1000 group-hover:scale-105"
                        style={{ background: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop) center/cover no-repeat' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                    </div>

                    {/* Floating Glassmorphism Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl max-w-[200px] md:max-w-[280px]"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <p className="text-white text-xs md:text-sm font-sans font-medium">Currently taking new projects for 2026</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.button
                    onClick={scrollToExperience}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
                >
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] group-hover:text-black transition-colors">
                        Scroll to explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                    </motion.div>
                </motion.button>

            </div>
        </section>
    )
}

export default Hero
