import React from 'react';

const GrainBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base Background */}
            <div className="absolute inset-0 bg-premium-dark" />

            {/* Grain Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Subtle Gradient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-premium-accent/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-premium-accent/5 blur-[120px] rounded-full" />
        </div>
    );
};

export default GrainBackground;
