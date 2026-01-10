import CustomCursor from './components/shared/CustomCursor';
import Navigation from './components/shared/Navigation';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="min-h-screen bg-black dark:bg-light-bg">
      <CustomCursor />
      <Navigation />
      <Hero />

      {/* Placeholder for other sections */}
      <div className="h-screen bg-gray-900 dark:bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl text-white dark:text-gray-900">More sections coming...</h2>
      </div>
    </div>
  );
}

export default App;