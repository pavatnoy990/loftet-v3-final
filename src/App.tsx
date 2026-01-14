import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import Index from './pages/Index';
import MenuPage from './pages/MenuPage';
import EventsPage from './pages/EventsPage';
import Takeaway from './pages/Takeaway';
import AboutPage from './pages/AboutPage';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/meny" element={<MenuPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/takeaway" element={<Takeaway />} />
            <Route path="/om-oss" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;