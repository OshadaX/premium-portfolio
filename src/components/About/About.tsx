import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const About = () => {
    const [scanComplete, setScanComplete] = useState(false);
    const [showBio, setShowBio] = useState(false);
    const [typedText, setTypedText] = useState('');

    const bioText = `Full-stack engineer with a passion for building scalable, secure systems.
Specialized in React, Node.js, and cloud architecture.
I transform complex problems into elegant solutions.
When I'm not coding, I'm exploring cybersecurity and AI.`;

    useEffect(() => {
        const scanTimer = setTimeout(() => {
            setScanComplete(true);
            setTimeout(() => setShowBio(true), 500);
        }, 2000);
        return () => clearTimeout(scanTimer);
    }, []);

    useEffect(() => {
        if (showBio && typedText.length < bioText.length) {
            const timeout = setTimeout(() => {
                setTypedText(bioText.slice(0, typedText.length + 1));
            }, 20);
            return () => clearTimeout(timeout);
        }
    }, [showBio, typedText, bioText]);

    const metrics = [
        { label: 'YEARS_ACTIVE', value: 75, color: '#22c55e' },
        { label: 'PROJECTS_DONE', value: 100, color: '#22c55e' },
        { label: 'CODE_QUALITY', value: 92, color: '#22c55e' },
        { label: 'CLIENTS_HAPPY', value: 98, color: '#22c55e' },
    ];

    return (
        <section id="about" className="relative min-h-screen bg-black py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-green-500 font-mono text-sm mb-4 tracking-[0.3em]">
                        [ INITIALIZING_ABOUT_MODULE ]
                    </h2>
                    <div className="text-green-700 font-mono text-xs">
                        {'>'} LOADING PROFILE DATA...
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center items-center"
                    >
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-green-900/20 to-black border-2 border-green-500/30 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/30 to-transparent"
                                    initial={{ top: '-100%' }}
                                    animate={{ top: scanComplete ? '100%' : '-100%' }}
                                    transition={{ duration: 2, ease: 'linear' }}
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-64 h-64 bg-gradient-to-br from-green-500/10 to-green-900/10 border border-green-500/50 flex items-center justify-center">
                                        <div className="text-green-500 text-6xl font-mono">NA</div>
                                    </div>
                                </div>

                                <div
                                    className={`absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:20px_20px] transition-opacity duration-500 ${scanComplete ? 'opacity-30' : 'opacity-0'
                                        }`}
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: scanComplete ? 1 : 0 }}
                                className="absolute -bottom-8 left-0 right-0 text-center"
                            >
                                <div className="inline-block bg-black border border-green-500 px-4 py-2 font-mono text-xs text-green-500">
                                    {scanComplete ? '> SCANNING_BIOMETRICS... [✓] IDENTITY_CONFIRMED' : ''}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="bg-black border-2 border-green-500/30 p-6 font-mono">
                            <div className="border-b border-green-500/20 pb-2 mb-4 flex items-center justify-between">
                                <div className="text-green-500 text-xs">TERMINAL_v2.4.1</div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                            </div>

                            <div className="text-green-500 text-sm space-y-2">
                                <div className="text-green-700">$ cat profile.txt</div>
                                {showBio && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="leading-relaxed"
                                    >
                                        {typedText}
                                        <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-pulse" />
                                    </motion.div>
                                )}
                            </div>

                            {showBio && typedText.length >= bioText.length && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-6 pt-6 border-t border-green-500/20"
                                >
                                    <div className="text-green-700 text-xs mb-2">
                                        $ ./read_more.sh --verbose
                                    </div>
                                    <div className="text-green-600 text-xs leading-relaxed">
                                        → Currently building cutting-edge web applications
                                        <br />
                                        → Open to freelance opportunities
                                        <br />→ Always learning, always evolving
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-black border-2 border-green-500/30 p-8 font-mono"
                >
                    <div className="text-center mb-8">
                        <div className="text-green-500 text-sm tracking-[0.3em]">
                            ╔══ SYSTEM_METRICS ══════════════════╗
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="space-y-3"
                            >
                                <div className="text-green-500 text-xs tracking-wider">
                                    {metric.label}
                                </div>
                                <div className="relative h-4 bg-green-950/30 border border-green-500/30 overflow-hidden">
                                    <motion.div
                                        className="absolute inset-y-0 left-0"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${metric.value}%` }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                                        style={{
                                            backgroundColor: metric.color,
                                            boxShadow: `0 0 10px ${metric.color}`,
                                        }}
                                    />
                                </div>
                                <motion.div
                                    className="text-green-500 text-xl font-bold"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                >
                                    {metric.value}%
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <div className="text-green-500 text-sm tracking-[0.3em]">
                            ╚════════════════════════════════════╝
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
