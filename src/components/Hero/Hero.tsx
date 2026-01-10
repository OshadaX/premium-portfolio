import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ParticleBackground from './ParticleBackground';
import ThreeScene from './ThreeScene';
import { useTheme } from '../../utils/ThemeContext';

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const { theme } = useTheme()

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black dark:from-gray-50 dark:via-purple-50 dark:to-gray-100">
            {/* Particle Background */}
            <ParticleBackground />

            {/* 3D Scene - Only in dark mode */}
            {theme === 'dark' && (
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                >
                    <ThreeScene />
                </div>
            )}
            {/* Decorative gradient shapes - Only in light mode */}
            {theme === 'light' && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Large gradient circle */}
                    <div
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-transparent rounded-full blur-3xl"
                        style={{
                            transform: `translateY(${scrollY * 0.3}px)`,
                        }}
                    />

                    {/* Medium gradient circle */}
                    <div
                        className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/30 via-purple-200/30 to-transparent rounded-full blur-3xl"
                        style={{
                            transform: `translateY(${scrollY * 0.4}px)`,
                        }}
                    />

                    {/* Small gradient circle */}
                    <div
                        className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-purple-300/40 to-transparent rounded-full blur-2xl"
                        style={{
                            transform: `translateY(${scrollY * 0.2}px)`,
                        }}
                    />
                </div>
            )}
            {/* Hero Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="text-center">
                    {/* Animated Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="mb-6 text-7xl font-black tracking-tight text-white dark:text-gray-800 md:text-9xl">
                            <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                                Your Name
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-8 text-2xl font-light text-gray-400 dark:text-gray-700 md:text-4xl"
                    >
                        Creative Developer & Designer
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mx-auto mb-12 max-w-2xl text-lg text-gray-500 dark:text-gray-700 md:text-xl"
                    >
                        Building digital experiences that inspire and engage through code and creativity
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <a
                            href="#projects"
                            className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary-light to-primary-dark opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border-2 border-primary px-8 py-4 text-white transition-all hover:scale-105 hover:bg-primary/10 dark:text-gray-800 dark:border-gray-700"
                        >
                            Get In Touch
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-700"
                >
                    <span className="text-sm">Scroll Down</span>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}