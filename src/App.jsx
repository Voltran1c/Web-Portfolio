import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import MiniProject from "./components/MiniProject";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MiniProject />
      <AboutMe />
    </>
  );
}

export default App;
