import React from "react"
import { motion } from "framer-motion"
import TerminalBackground from "./TerminalBackground"

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">

            {/* Immersive Terminal Background */}
            <TerminalBackground />

            {/* Overlay Grid for more "tech" feel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0005_1px,transparent_1px),linear-gradient(to_bottom,#00ff0005_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            {/* Overlay Content - Centered for impact */}
            <div className="relative z-10 w-full max-w-7xl px-6 text-center">
                <div className="space-y-12 py-12 inline-block">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="inline-block px-3 py-1 border border-green-500/30 bg-green-500/5 text-green-500 font-mono text-xs tracking-[0.4em] uppercase"
                        >
                            [ STATUS: ACTIVE_TERMINAL ]
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-7xl lg:text-[11rem] font-bold tracking-tighter leading-none font-mono"
                        >
                            <span className="text-white brightness-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                NAVINDRA
                            </span>
                            <br />
                            <span className="text-green-500 drop-shadow-[0_0_25px_rgba(34,197,94,0.6)]">
                                OSHADA
                            </span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-green-800 font-mono text-lg lg:text-2xl tracking-[0.2em] font-light"
                        >
                            {">"} FULL_STACK_ENGINEER
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-8 justify-center pt-8 font-mono"
                    >
                        <button className="group relative px-12 py-5 bg-green-500 text-black font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                            <span className="relative z-10 flex items-center gap-2">
                                [ INITIALIZE_PROJECTS ]
                            </span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button className="px-12 py-5 border-2 border-green-500 text-green-500 font-bold uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-green-500 hover:text-black transition-all hover:scale-105 active:scale-95 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                            CONTACT_USER
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Vignette and Scanline Shadow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
        </section>
    )
}

export default Hero
