import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/navbar/Navbar";
import MobileNavbar from "./components/navbar/MobileNavbar"; // custom mobile menu
import Projects from "./pages/ProjectsPage";
import BlogPage from "./pages/blog/BlogPage";
import BlogPost from "./pages/blog/BlogPost";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "sonner";
import Scale from "./components/Scales/Scale";

function App() {
  return (
    // "dark" class here forces dark mode; remove it to see light mode
    <main className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 pt-18 md:pt-20 md:pb-10">
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
        <div className="flex-1">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
