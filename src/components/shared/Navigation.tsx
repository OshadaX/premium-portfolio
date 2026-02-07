import { motion } from 'framer-motion';
import Logo from './Logo';



interface NavigationProps {
    onNavigate: (sectionId: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
    const navLinks = [
        { name: 'Experience', id: 'experience' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact', id: 'contact' },
    ];

    const handleClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        if (id !== '#') {
            onNavigate(id);
        }
    };

    return (

        <>
            {/* Logo - Fixed Top Left */}
            <div className="fixed top-8 left-8 z-50 pointer-events-auto mix-blend-difference text-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <a href="/" className="inline-block group">
                        <Logo className="w-12 h-12 text-white mix-blend-difference transition-transform duration-700 group-hover:rotate-12" />
                    </a>
                </motion.div>
            </div>

            {/* Navigation Dock - Fixed Bottom Center */}
            <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
                    className="flex items-center gap-2 px-2 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg pointer-events-auto"
                >
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative">
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => handleClick(e, link.id)}
                                className="relative block px-6 py-2 text-sm font-medium text-[#1a1a1a] hover:text-black transition-colors duration-300 rounded-full hover:bg-white/20"
                            >
                                {link.name}
                            </a>
                        </div>
                    ))}
                </motion.div>
            </nav>
        </>
    );
}