import * as skillLogos from "../images/skills/skills-logos";

function Skills() {
  return (
    <div id="skills">
      <h1 className="section-title">Skills</h1>
      <div id="skills-container">
        <img className="skill-icon" src={skillLogos.react} />
        <img className="skill-icon" src={skillLogos.vs} />
        <img className="skill-icon" src={skillLogos.js} />
        <img className="skill-icon" src={skillLogos.node} />
        <img className="skill-icon" src={skillLogos.html} />
        <img className="skill-icon" src={skillLogos.css} />
        <img className="skill-icon" src={skillLogos.redux} />
        <img className="skill-icon" src={skillLogos.npm} />
        <img className="skill-icon" src={skillLogos.mongo} />
        <img className="skill-icon" src={skillLogos.github} />
      </div>
    </div>
  );
}
export default Skills;
