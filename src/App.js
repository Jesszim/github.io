import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
