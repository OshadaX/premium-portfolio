import { useState, useEffect } from 'react';
import { useTheme } from '../../utils/ThemeContext';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? 'bg-black/80 backdrop-blur-lg dark:bg-white/80'
                    : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-bold bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent"
                >
                    YourName
                </a>

                {/* Navigation Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#about"
                        className="text-white transition-colors hover:text-primary dark:text-gray-900"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-white transition-colors hover:text-primary dark:text-gray-900"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="text-white transition-colors hover:text-primary dark:text-gray-900"
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="text-white transition-colors hover:text-primary dark:text-gray-900"
                    >
                        Contact
                    </a>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="rounded-full bg-primary/10 p-2 transition-all hover:bg-primary/20"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <svg
                                className="h-5 w-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-5 w-5 text-purple-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}