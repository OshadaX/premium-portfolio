import { useRef, useState, useEffect } from 'react';
import Navigation from './components/shared/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import PageTransition from './components/shared/PageTransition';

function App() {
    // Start with transition active (curtain covering screen)
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Reveal on mount
    useEffect(() => {
        // Small delay to ensure content is ready/layout is stable before revealing
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    // Refs for scrolling
    const heroRef = useRef<HTMLDivElement>(null);

    const handleNavigation = (targetId: string) => {
        setIsTransitioning(true);

        // Wait for curtain to cover (800ms match duration)
        setTimeout(() => {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'auto' }); // Instant jump behind curtain
            }

            // Start revealing
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100); // Short delay before revealing
        }, 800);
    };

    return (
        <div className="min-h-screen bg-[#fcfcfc] text-black font-sans relative overflow-hidden selection:bg-black selection:text-white">
            <PageTransition isTransitioning={isTransitioning} />

            <Navigation onNavigate={handleNavigation} />

            <main className="relative z-10">
                <div ref={heroRef} id="hero">
                    <Hero />
                </div>

                {/* About Section Removed/Commented */}

                <Experience /> {/* 01 — Work */}
                <About />      {/* 02 — About */}
                <Projects />   {/* 03 — Selected Projects */}
                <Skills />     {/* 04 — Technologies */}
                <Contact />
            </main>
        </div>
    );
}

export default App;
