import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ReviewBanner from './components/ReviewBanner';
import FormPage from './pages/FormPage';
import CrewPage from './pages/CrewPage';
import './App.css';

// We extract your home page content into its own component
function Home() {
  return (
    <>
      <HeroSection />
      <ReviewBanner />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* The Header stays outside of Routes so it appears on EVERY page */}
        <Header />
        
        {/* Routes decide what content to show based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/crew" element={<CrewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;