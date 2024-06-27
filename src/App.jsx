import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import MiniProject from "./components/MiniProject";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <MiniProject/>
      {/* <AboutMe /> */}
    </>
  );
}

export default App;
