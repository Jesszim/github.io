import { BiLogoLinkedinSquare } from "react-icons/bi"
import { VscGithubInverted } from "react-icons/vsc";
import { TbBrandGmail } from "react-icons/tb";
import computer from "../images/jessicacomp.png"

function Title() {
  return (
    <div id="title-container">
      <div>
        <img src={computer} alt="me" id="mypic" />
      </div>
      <div id="title-section">
        <h1 className="section-title">Jessica Zimmerman</h1>
        <h2>Web Developer</h2>
        <div id="contact-icons">
          <a href="https://www.linkedin.com/in/jessica-zimmerman-7777b957/" id="linkedinicon" target="_blank"><BiLogoLinkedinSquare /></a>
          <a href="https://github.com/Jesszim" target="_blank"><VscGithubInverted /></a>
          <a href="mailto: jess.zim04@gmail.com" id="gmailicon" target="_blank"><TbBrandGmail /></a>
        </div>
      </div>
    </div>
  )
}

export default Title