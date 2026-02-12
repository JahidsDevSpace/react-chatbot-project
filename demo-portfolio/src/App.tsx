import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    // "dark" class here forces dark mode; remove it to see light mode
    <main className="flex min-h-screen items-start justify-start">
      <Container className="flex min-h-[200vh] flex-col p-4 pt-18 md:pt-20 md:pb-10">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
