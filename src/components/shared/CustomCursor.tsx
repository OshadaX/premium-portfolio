import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A'
            );
        };

        window.addEventListener('mousemove', updateCursor);
        return () => window.removeEventListener('mousemove', updateCursor);
    }, []);

    return (
        <>
            {/* Cursor dot */}
            <div
                className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] transition-transform duration-150"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                }}
            />

            {/* Cursor outline */}
            <div
                className="fixed w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-[9998] transition-all duration-200"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                }}
            />
        </>
    );
}