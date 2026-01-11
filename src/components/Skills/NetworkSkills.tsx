import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SkillNetworkGraph from './SkillNetworkGraph';

const NetworkSkills: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    const [terminalStatus, setTerminalStatus] = useState('INIT_SEQUENCE');

    useEffect(() => {
        if (isInView) {
            const sequences = ['SCANNING_NETWORK...', 'ANALYZING_NODES...', 'ESTABLISHING_CONNECTIONS...', 'NETWORK_ANALYSIS_COMPLETE'];
            let i = 0;
            const interval = setInterval(() => {
                if (i < sequences.length) {
                    setTerminalStatus(sequences[i]);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 600);
            return () => clearInterval(interval);
        } else {
            setTerminalStatus('READY');
        }
    }, [isInView]);

    return (
        <section
            ref={containerRef}
            id="skills"
            className="min-h-screen bg-[#000000] text-[#e0e0e0] font-mono py-20 px-4 relative overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(#004d00 1px, transparent 1px), linear-gradient(90deg, #004d00 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Scanline Effect */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ y: ['0%', '100%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-full h-[2px] bg-[#00ff41] opacity-20 shadow-[0_0_15px_#00ff41]"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-20 h-full flex flex-col justify-center">
                {/* Terminal Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 text-[#00ff41] mb-2">
                        <span className="text-xl">[ STATUS: {terminalStatus} ]</span>
                        <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="w-3 h-6 bg-[#00ff41]"
                        />
                    </div>

                    <div className="border-l-4 border-[#00ff41] pl-6 py-2">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
                            NAVINDRA
                        </h2>
                        <div className="h-[2px] w-48 bg-[#00ff41] mb-2" />
                        <h3 className="text-2xl md:text-3xl text-[#00ff41] opacity-80">
                            SKILL_NETWORK
                        </h3>
                    </div>
                </div>

                {/* Network Graph Container */}
                <div className="flex-grow min-h-[600px] border border-[#004d00] bg-black/40 backdrop-blur-sm relative rounded-lg overflow-hidden group">
                    <SkillNetworkGraph active={isInView} />

                    {/* SYNC Indicator */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-bold">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-[#00ff41] shadow-[0_0_5px_#00ff41]"
                        />
                        <span className="text-[#00ff41]">SYNC_READY</span>
                    </div>
                </div>

                {/* Terminal Footer */}
                <div className="mt-8 text-center">
                    <motion.p
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-[#00ff41] text-lg tracking-[0.2em]"
                    >
                        &gt; HOVER_TO_EXPLORE_CONNECTIONS
                    </motion.p>
                </div>
            </div>

            {/* Corner Brackets */}
            <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-[#004d00]" />
            <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[#004d00]" />
            <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[#004d00]" />
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-[#004d00]" />
        </section>
    );
};

export default NetworkSkills;
