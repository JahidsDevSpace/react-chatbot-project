import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    // "dark" class here forces dark mode; remove it to see light mode
    <main className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 pt-18 md:pt-20 md:pb-10">
        <Navbar />
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Jahid Hasan
        </h1>
        <p className="text-secondary mx-w-lg pt-4 text-sm md:text-sm">
          I'm a software engineer with a passion for building scalable and
          efficient systems. I'm currently working as a software engineer at
          Google.
        </p>
        <Projects />
      </Container>
    </main>
  );
}

export default App;
