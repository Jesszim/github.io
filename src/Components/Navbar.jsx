import logo from "../images/logo.png"

function Navbar() {
  return (
    <nav id="navbar-container">
      <div id="left-nav">
<img src={logo} alt="logo" id="logo"/>
      </div>
      <div id="right-nav">
<a className="navlink" href="#">About</a>
<a className="navlink" href="#projects">Projects</a>
<a className="navlink" href="">Skills</a>
<a className="navlink" href="">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar