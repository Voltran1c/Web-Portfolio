import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import ScrollOnUserActionComponent from "./components/ScrollOnUserActionComponent";
import MiniProject from "./components/MiniProject";
import LogoTechStack from "./components/LogoTechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollOnUserActionComponent />
      <Navbar />
      <div>
        <section id="home">
          <Hero />
        </section>
        <section id="miniproject">
          <MiniProject />
        </section>
        <section id="logotechstack">
          <LogoTechStack />
        </section>
        <section id="portfolio">
          <Project />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
