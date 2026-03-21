import { useState, useEffect } from "react";
import "./App.css";
import { initializeExternalLibraries } from "./utils/scriptLoader";
// Custom Hooks
import { useScrollSmooth, useScrollProgress } from "./hooks/useScroll";
import { useAuth } from "./hooks/useAuth";

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

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn, isLoading: authLoading } = useAuth();
  const [page, setPage] = useState("home");

  // Check if accessing admin page
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/admin") {
      setPage("admin");
    } else if (path === "/admin-login") {
      setPage("admin-login");
    } else {
      setPage("home");
    }
  }, []);

  // Use custom hooks
  useScrollSmooth();
  useScrollProgress();

  useEffect(() => {
    setTimeout(() => {
      initializeExternalLibraries();
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.$) {
        const $card = window.$(".ms-card");

        if ($card.length && !$card.hasClass("tilt-initialized")) {
          $card.addClass("tilt-initialized").tilt();
        }
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Hide loader when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 second loading time

    return () => clearTimeout(timer);
  }, []);

  // Auto redirect based on auth status
  useEffect(() => {
    if (authLoading) return; // Wait for auth to load

    const currentPath = window.location.pathname;

    if (isLoggedIn) {
      // User logged in - redirect to admin if not already there
      if (currentPath !== "/admin") {
        window.history.replaceState({}, "", "/admin");
        setPage("admin");
      }
    } else {
      // User logged out - redirect to home if on admin/admin-login
      if (currentPath === "/admin") {
        window.history.replaceState({}, "", "/");
        setPage("home");
      } else if (currentPath === "/admin-login") {
        // Stay on login page if not logged in
        setPage("admin-login");
      } else {
        // Default to home for all other routes
        setPage("home");
      }
    }
  }, [isLoggedIn, authLoading]);

  if (authLoading) {
    return <Loader isLoading={true} />;
  }

  // Admin Panel Page - hanya tampilkan jika logged in
  if (
    isLoggedIn &&
    (page === "admin" || window.location.pathname === "/admin")
  ) {
    return <AdminPanel />;
  }

  // Admin Login Page - tampilkan jika di /admin-login atau page === "admin-login"
  if (
    !isLoggedIn &&
    (page === "admin-login" || window.location.pathname === "/admin-login")
  ) {
    return <AdminLogin />;
  }

  // Home/Portfolio Page (default untuk semua kondisi lain)
  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const navigateToAdmin = () => {
    window.history.pushState({}, "", "/admin-login");
    setPage("admin-login");
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header onMenuClick={handleMenuClick} onAdminClick={navigateToAdmin} />
      <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />

      <Hero />
      <About />
      <Experience />
      {/* <Service /> */}
      <Portfolio />
      {/* <Counter /> */}
      {/* <News /> */}
      <Contact />
      {/* <Clients /> */}
      <Footer />
      <WhatsAppWidget />
      <BackToTop />
    </>
  );
}

export default App;
