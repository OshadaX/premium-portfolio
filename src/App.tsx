import Navigation from './components/shared/Navigation';
import Hero from './components/Hero/Hero';
import NetworkSkills from './components/Skills/NetworkSkills';

function App() {
    return (
        <div className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden selection:bg-green-500 selection:text-black">
            {/* CRT Overlay Effects */}
            <div className="pointer-events-none fixed inset-0 z-[100] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />

            <Navigation />

            <main className="relative z-10">
                <Hero />
                <NetworkSkills />
            </main>
        </div>
    );
}

export default App;
