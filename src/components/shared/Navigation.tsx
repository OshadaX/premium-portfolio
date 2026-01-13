import { useState, useEffect } from 'react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'ABOUT', href: '#about' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'CONTACT', href: '#contact' },
        { name: 'EXPERIENCE', href: '#experience' },
    ];

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled
                ? 'bg-black/90 backdrop-blur-md border-b border-green-500/20'
                : 'bg-transparent'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-mono">
                {/* Logo / Terminal Tag */}
                <a
                    href="#home"
                    className="group flex items-center gap-2 text-xl font-bold"
                >
                    <span className="text-green-500">{">"}</span>
                    <span className="text-white tracking-widest group-hover:text-green-400 transition-colors">
                        NAVINDRA_OSHADA
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-[0.8rem] tracking-widest text-green-700 transition-all duration-300 hover:text-green-400 hover:scale-105 group"
                        >
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1">[</span>
                            {link.name}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1">]</span>
                        </a>
                    ))}

                    <div className="h-4 w-[1px] bg-green-900/50 mx-2" />

                    <div className="flex items-center gap-2 text-[0.7rem] text-green-900 px-3 py-1 border border-green-900/30 rounded bg-green-900/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        SYNC_READY
                    </div>
                </div>
            </div>
        </nav>
    );
}