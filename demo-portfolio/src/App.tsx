import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/navbar/Navbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Projects from "./pages/ProjectsPage";
import BlogPage from "./pages/blog/BlogPage";
import BlogPost from "./pages/blog/BlogPost";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "sonner";
import Scale from "./components/Scales/Scale";
import LightMode from '/sun.svg';
import DarkMode from '/moon.svg';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'dark'
  });

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    // "dark" class here forces dark mode; remove it to see light mode
    <main
      className={`${darkMode ? "dark" : ""} flex min-h-screen items-start justify-start transition-colors duration-300`}
    >
      <Container className="text-primary min-h-screen px-8 pt-18 md:pt-20 md:pb-10 dark:text-neutral-300">
        <Scale />

        {/* render mobile or desktop navbar based on viewport width */}
        <div className="relative w-full">
          <div className="hidden min-[720px]:block">
            <Navbar />
          </div>
          <div className="block min-[720px]:hidden">
            <MobileNavbar />
          </div>
        </div>

        <Toaster position="top-center" />

        <div className="min-h-[80vh] flex-1">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <div className="sticky right-16 bottom-16 flex h-10 w-20 items-center justify-center rounded-full bg-neutral-300 shadow-sm dark:invert">
          <div className="flex h-full w-full items-center justify-between px-2">
            <button
              onClick={() => setDarkMode(true)}
              className={`${darkMode ? "opacity-100" : "opacity-40 hover:opacity-100"} cursor-pointer border-r dark:border-r-neutral-700 pr-2 transition-opacity`}
            >
              <img src={DarkMode} alt="DarkMode" />
            </button>
            <button
              onClick={() => setDarkMode(false)}
              className={`cursor-pointer pl-1 transition-opacity ${!darkMode ? "opacity-100" : "opacity-40 hover:opacity-100"} `}
            >
              <img src={LightMode} alt="LightMode" />
            </button>
          </div>
        </div>

        <Footer />
      </Container>
    </main>
  );
}

export default App;
