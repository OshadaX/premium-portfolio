import React from "react"
import { motion } from "framer-motion"


const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col pt-32 md:pt-40 px-8 md:px-12 lg:px-24 bg-[#fcfcfc] overflow-hidden">
            {/* Overlay (from HTML) - kept for structure, unused for now */}
            <div className="absolute inset-0 pointer-events-none z-0" />

            {/* Counter (Keep existing or remove? HTML has a counter) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-8 left-8 md:left-12 lg:left-24"
            >
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-gray-400 select-none">
                    <p>0</p>
                </div>
            </motion.div>

            {/* Main Content Container */}
            <div className="w-full max-w-[1400px] mx-auto z-10 flex-grow flex flex-col">

                {/* Description Grid (matches "description") */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 md:gap-24 items-end mb-16 md:mb-24">
                    {/* Left Col: Headings */}
                    <motion.div
                        className="description-col"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-medium font-sans tracking-tight text-black/80 leading-[1.1]">
                            Web Development,<br />Design, and<br />Animation
                        </h3>
                    </motion.div>

                    {/* Right Col: Paragraph */}
                    <motion.div
                        className="description-col pb-2 md:pb-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    >
                        <p className="text-[1rem] md:text-[1.1rem] text-black/60 leading-[1.6] font-medium max-w-[420px]">
                            I believe creativity isn't just a skill, it's a mindset. Born from a passion for bold ideas and beautifully crafted storytelling, I collaborate with visionary clients to shape identities at the intersection of art and innovation.
                        </p>
                    </motion.div>
                </div>

                <div className="relative w-full h-[100px] md:h-[150px] mb-8 overflow-hidden rounded-sm flex items-center justify-center">
                    {/* Placeholder for Pixelated Header */}
                    <div className="w-full h-full relative bg-transparent flex items-center justify-center overflow-hidden">
                        <h1 className="text-[15vw] md:text-[18vw] font-black tracking-tighter text-black leading-none select-none opacity-10 mix-blend-overlay">
                            NAVINDRA
                        </h1>
                        <h1 className="absolute inset-0 flex items-center justify-center text-[15vw] md:text-[18vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black/80 to-transparent leading-none select-none">
                            NAVINDRA
                        </h1>
                    </div>
                </div>

                {/* Hero Image Section (matches "heroImg") */}
                <div className="relative w-full flex-grow min-h-[400px] bg-gray-900 overflow-hidden rounded-sm">
                    {/* Placeholder for Hero Img */}
                    <div className="w-full h-full relative" style={{ background: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop) center/cover no-repeat' }}>
                        <div className="absolute inset-0 bg-black/20" />
                        <p className="absolute bottom-4 right-4 text-white/50 text-xs font-mono">
                            [Hero Image Area]
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero



