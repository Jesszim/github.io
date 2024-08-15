import code from "../images/html code.png"

function AboutMe() {
  return(
    <div id="aboutme">
<div >
  <h1 className="section-title">About Me</h1>
  <h2 className="about-box">In 2023, I attended a coding boot camp through Persevere. While there, I discovered a strong passion for coding. Prior to the boot camp, I would describe myself as punctual and reliable. Since completing the program, I still embody those traits, but it also revealed my ability as a problem-solver, quick learner, hard worker, and adaptable individual. I excel both independently and in a team environment. I have a positive personality, am approachable, and possess a strong work ethic. </h2>
</div>
<img src={code} className="about-box" id="about-img"/>
    </div>
  )
}
export default AboutMe
