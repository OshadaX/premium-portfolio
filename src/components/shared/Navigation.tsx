import { motion } from 'framer-motion';

const FlowerIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M50 0 C54 30 70 46 100 50 C70 54 54 70 50 100 C46 70 30 54 0 50 C30 46 46 30 50 0" />
        <path d="M50 0 C54 30 70 46 100 50 C70 54 54 70 50 100 C46 70 30 54 0 50 C30 46 46 30 50 0" transform="rotate(45 50 50)" />
    </svg>
);

interface NavigationProps {
    onNavigate: (sectionId: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
    const navLinks = [
        { name: 'work', id: 'experience' },
        { name: 'about', id: 'about' },
        { name: 'blog', id: '#' },
        { name: 'contact', id: 'contact' },
    ];

    const handleClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        if (id !== '#') {
            onNavigate(id);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
            {/* Main Flex Container (matches "nav") */}
            <div className="mx-auto flex w-full max-w-[1400px] items-start justify-between p-8 md:p-12 lg:p-16">

                {/* Left Column: Logo (matches "col" -> "nav-logo") */}
                <div className="flex-shrink-0 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} // Adjusted to 1 for better visibility
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <a href="/" className="inline-block group">
                            <FlowerIcon className="w-8 h-8 text-black transition-transform duration-700 group-hover:rotate-180" />
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Nav Items (matches "col" -> "nav-items") */}
                <div className="flex-shrink-0 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col items-end gap-1" // Gap-1 for tighter spacing like HTML
                    >
                        {navLinks.map((link) => (
                            <div key={link.name} className="nav-item block">
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => handleClick(e, link.id)}
                                    className="relative text-[0.9rem] md:text-[1rem] font-medium leading-none text-black/80 hover:text-black transition-colors duration-300 cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </nav>
    );
}