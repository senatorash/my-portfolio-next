import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Resume from "./components/Resume";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
