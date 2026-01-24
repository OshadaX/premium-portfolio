import { motion } from 'framer-motion';

interface PageTransitionProps {
    isTransitioning: boolean;
}

const PageTransition = ({ isTransitioning }: PageTransitionProps) => {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{
                scaleY: isTransitioning ? 1 : 0,
                transition: {
                    duration: isTransitioning ? 0.8 : 1.5, // Slower reveal (content "coming" back)
                    ease: [0.22, 1, 0.36, 1]
                }
            }}
            exit={{ scaleY: 0 }}
            style={{ originY: isTransitioning ? 0 : 1 }}
            className="fixed inset-0 z-[100] bg-black pointer-events-none"
        />
    );
};

export default PageTransition;
