import ccc from "../images/ccc.png"
import press from "../images/press.png"

function Projects() {
  return (
    <div id="projects">
      <h1 className="section-title">Projects</h1>
      <div id="projects-container">
        <a href="https://cochisecountyconservatives.com/"><img src={ccc} className="project-tile" /></a>
        <a href="https://thepresscollextive.com/"><img src={press} className="project-tile" /></a>
      </div>
    </div>
  );
}
export default Projects;
