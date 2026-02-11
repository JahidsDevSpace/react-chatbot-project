import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";

function App() {
  return (
    // "dark" class here forces dark mode; remove it to see light mode
    <main className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 pt-18 md:pt-20 md:pb-10">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heading>Jahid Hasan</Heading>
                <SubHeading>
                  I'm a software engineer with a passion for building scalable and efficient systems. I'm currently working as a software
                  engineer at Google.
                </SubHeading>
                <Projects />
                <Blog />
              </>
            }
          />
          {/* <Projects /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
