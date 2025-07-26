import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from './assets/img/nav-icon1.svg';
import navIcon2 from './assets/img/nav-icon2.svg';
import navIcon3 from './assets/img/nav-icon3.svg';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const scrollToConnect = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <button
          onClick={() => navigate("/about")}
          style={{
            background: "linear-gradient(to right, #7b2cbf, #ed43d4)",
            border: "none",
            borderRadius: "20px",
            padding: "8px 16px",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
            margin: "10px"
          }}
        >
          About Me
        </button>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ashmita-sen-roy/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/ashmitasenroy"><img src={navIcon2} alt="GitHub" /></a>
              <a href="mailto:ashmitasenroy@gmail.com"><img src={navIcon3} alt="Email" /></a>
            </div>
            <button className="vvd" onClick={scrollToConnect}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
