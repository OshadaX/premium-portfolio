import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import BackToTop from './components/shared/BackToTop';
import ProjectDetails from './pages/ProjectDetails';

const Home = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle scroll to hash on initial load or navigation
    // This is needed because the standard hash link behavior might be interrupted by client-side routing
    return (
        <div ref={containerRef} className="h-screen w-full bg-[#fcfcfc] text-[#1a1a1a] font-sans relative overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden selection:bg-black selection:text-white scrollbar-hide">
            <div className="noise-overlay fixed inset-0 pointer-events-none z-50" />
            <Navigation />

            <section id="home" className="h-screen w-full snap-start relative">
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

            <section id="skills" className="h-screen w-full snap-start relative">
                <Skills />
            </section>

            <section id="contact" className="h-screen w-full snap-start relative">
                <Contact />
            </section>

            <BackToTop />
        </div>
    );
};

const App = () => {
    return (
        <Router basename="/premium-portfolio">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:projectId" element={<ProjectDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
