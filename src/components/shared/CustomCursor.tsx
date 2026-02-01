import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const cursorRef = useRef({ x: 0, y: 0 });

    // Smooth spring animation for cursor lag effect
    const springConfig = { damping: 25, stiffness: 400 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    const outlineX = useSpring(0, { damping: 20, stiffness: 200 });
    const outlineY = useSpring(0, { damping: 20, stiffness: 200 });

    useEffect(() => {
        // Detect touch device
        const checkTouch = () => {
            setIsTouchDevice(
                'ontouchstart' in window || navigator.maxTouchPoints > 0
            );
        };
        checkTouch();

        const updateCursor = (e: MouseEvent) => {
            cursorRef.current = { x: e.clientX, y: e.clientY };
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            outlineX.set(e.clientX);
            outlineY.set(e.clientY);

            const target = e.target as HTMLElement;
            const isClickable =
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('a') ||
                target.closest('button');

            setIsPointer(!!isClickable);
        };

        const handleMouseEnter = () => setIsHidden(false);
        const handleMouseLeave = () => setIsHidden(true);

        window.addEventListener('mousemove', updateCursor);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY, outlineX, outlineY]);

    // Don't render on touch devices
    if (isTouchDevice) return null;

    return (
        <>
            {/* Cursor dot */}
            <motion.div
                className="fixed w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: cursorX,
                    top: cursorY,
                    x: '-50%',
                    y: '-50%',
                    scale: isPointer ? 0 : 1,
                    opacity: isHidden ? 0 : 1,
                }}
                transition={{ scale: { duration: 0.15 } }}
            />

            {/* Cursor outline - larger and follows with delay */}
            <motion.div
                className="fixed w-10 h-10 border border-black/40 rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    left: outlineX,
                    top: outlineY,
                    x: '-50%',
                    y: '-50%',
                    scale: isPointer ? 1.5 : 1,
                    opacity: isHidden ? 0 : 1,
                }}
                transition={{ scale: { duration: 0.2 } }}
            />

            {/* Pointer state - shows text or icon */}
            <motion.div
                className="fixed w-16 h-16 bg-black rounded-full pointer-events-none z-[9997] flex items-center justify-center"
                style={{
                    left: outlineX,
                    top: outlineY,
                    x: '-50%',
                    y: '-50%',
                    scale: isPointer ? 1 : 0,
                    opacity: isHidden ? 0 : 1,
                }}
                transition={{ scale: { type: 'spring', damping: 20, stiffness: 300 } }}
            >
                <span className="text-white text-[10px] font-medium tracking-wider">VIEW</span>
            </motion.div>
        </>
    );
}