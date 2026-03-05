import { useState, useEffect } from "react";
import "./App.css";

// Custom Hooks
import { useScrollSmooth, useScrollProgress } from "./hooks/useScroll";

// Layout Components
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Service from "./components/sections/Service";
import Portfolio from "./components/sections/Portfolio";
import Counter from "./components/sections/Counter";
import News from "./components/sections/News";
import Contact from "./components/sections/Contact";
import Clients from "./components/sections/Clients";

// UI Components
import Loader from "./components/ui/Loader";
import WhatsAppWidget from "./components/ui/WhatsAppWidget";
import BackToTop from "./components/ui/BackToTop";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Use custom hooks
  useScrollSmooth();
  useScrollProgress();

  // Hide loader when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 second loading time

    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header onMenuClick={handleMenuClick} />
      <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />

      <Hero />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Counter />
      <News />
      <Contact />
      <Clients />

      <Footer />

      <WhatsAppWidget />
      <BackToTop />
    </>
  );
}

export default App;
