import { useRef, useEffect } from 'react';
import Navigation from './components/shared/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';

function App() {
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const isScrollingRef = useRef(false);

    useEffect(() => {
        const heroElement = heroRef.current;
        if (!heroElement) return;

        const handleWheel = (e: WheelEvent) => {
            // Only capture scroll down when at the top of the page (Hero)
            if (window.scrollY < 50 && e.deltaY > 0 && !isScrollingRef.current) {
                e.preventDefault();
                isScrollingRef.current = true;

                aboutRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Reset lock after animation
                setTimeout(() => {
                    isScrollingRef.current = false;
                }, 1000);
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (window.scrollY < 50 && (e.key === 'ArrowDown' || e.key === ' ') && !isScrollingRef.current) {
                e.preventDefault();
                isScrollingRef.current = true;
                aboutRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                setTimeout(() => {
                    isScrollingRef.current = false;
                }, 1000);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden selection:bg-green-500 selection:text-black">
            {/* CRT Overlay Effects */}
            <div className="pointer-events-none fixed inset-0 z-[100] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />

            <Navigation />

            <main className="relative z-10">
                <div ref={heroRef}>
                    <Hero />
                </div>

                <section ref={aboutRef}>
                    <About />
                </section>

                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
        </div>
    );
}

export default App;
