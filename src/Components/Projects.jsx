import yardsale from "../images/yardsale.png";
import contact from "../images/contactlist.png";

function Projects() {
  return (
    <div id="projects">
      <h1 className="section-title">Projects</h1>
      <div id="projects-container">
        <a href="https://github.com/Jesszim/Online-Yard-Sale">
          <img src={yardsale} className="project-tile" />
        </a>
        <a href="https://github.com/Jesszim/Full-Stack-Contact-App">
          <img src={contact} className="project-tile" />
        </a>
      </div>
    </div>
  );
}
export default Projects;
