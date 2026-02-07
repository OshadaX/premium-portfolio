import { useRef, useState, useEffect } from 'react';
import Navigation from './components/shared/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import PageTransition from './components/shared/PageTransition';
import CustomCursor from './components/shared/CustomCursor';

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
        <div className="h-screen w-full bg-[#fcfcfc] text-[#1a1a1a] font-sans relative overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden selection:bg-black selection:text-white scrollbar-hide">
            <div className="noise-overlay fixed inset-0 pointer-events-none z-50" />
            {/* Custom Cursor - Desktop only */}
            <CustomCursor />

            <PageTransition isTransitioning={isTransitioning} />

            <Navigation onNavigate={handleNavigation} />

            <main className="relative z-0">
                <section ref={heroRef} id="hero" className="h-screen w-full snap-center relative overflow-hidden">
                    <Hero />
                </section>

                <section id="experience" className="min-h-screen w-full snap-start relative">
                    <Experience />
                </section>

                <section id="about" className="min-h-screen w-full snap-start relative">
                    <About />
                </section>

                <section id="projects" className="min-h-screen w-full snap-start relative">
                    <Projects />
                </section>

                <section id="skills" className="min-h-screen w-full snap-start relative">
                    <Skills />
                </section>

                <section id="contact" className="min-h-screen w-full snap-start relative">
                    <Contact />
                </section>
            </main>
        </div>
    );
}

export default App;
