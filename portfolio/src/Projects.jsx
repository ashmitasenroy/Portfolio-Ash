import { Col, Container, Row, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard.jsx";
import colorSharp2 from "./assets/img/color-sharp2.png";
import projImg1 from "./assets/img/Lumi-clock.png";
import projImg2 from "./assets/img/currency-convertor.png";
import projImg3 from "./assets/img/SIH-ui.png";
import projImg4 from "./assets/img/grippo-final.jpeg";
import projImg5 from "./assets/img/detection-memes.png";
import projImg6 from "./assets/img/rsp-game.png";

import { useState } from "react";
import AchievementsModal from "./AchievementsModal.jsx";
import ExperienceModal from "./ExperienceModal.jsx";
import ExtraModal from "./ExtraModal.jsx";
import CertModal from "./CertModal.jsx";

function Projects() {
  const [showExp, setShowExp] = useState(false);
  const [showAch, setShowAch] = useState(false);
  const [showExtra, setShowExtra] = useState(false);
  const [showCert, setShowCert] = useState(false);

  const projects = [
    {
      title: "Lumi-Clock",
      description: "Boost productivity with focus mode and immersive design",
      imgUrl: projImg1,
      live: "https://lumi-clock.vercel.app",
      notes: [
        "Tech Stack: React & Bootstrap",
        "Features: HD background video, Focus Mode",
        "Extra: To-do List, Timer, Quotes, Date",
      ],
    },
    {
      title: "Currency Converter",
      description: "Real-time currency converter with flag and code support",
      imgUrl: projImg2,
      live: "https://currencycovnverter.netlify.app/",
      notes: [
        "Tech Stack: HTML, CSS, JS + Exchange Rate API",
        "Features: Supports 150+ currencies with real-time rates",
        "Extra: Country flags, currency codes, responsive UI",
      ],
    },
    {
      title: "AI-Based Time Slot Predictor – SIH Finalist",
      description: "AI solution to predict optimal scheduling slots for deliveries",
      imgUrl: projImg3,
      live: "https://github.com/ashmitasenroy",
      notes: [
        "Tech Stack: React (Frontend), ML Backend (not shown)",
        "Features: AI-powered scheduling model for Indian Postal Service",
        "Extra: National Finalist – Smart India Hackathon 2024",
      ],
    },
    {
      title: "Grippie",
      description: "A full Stack Analytical Dashboard (In-progress)",
      imgUrl: projImg4,
      live: "https://github.com/ashmitasenroy/grippi",
      notes: [
        "Tech Stack: React (Frontend), FastAPI (Backend), SQLite",
        "Features: Clean dashboard for marketing analytics",
        "Extra: Deployed on Vercel (frontend) and Railway (backend)",
      ],
    },
    {
      title: "Detection of Hateful-Memes",
      description: "Flags hateful and Non-Hateful content with 91% accuracy metrics",
      imgUrl: projImg5,
      live: "https://github.com/ashmitasenroy/Detection-of-Hateful-Memes",
      notes: [
        "Tech Stack: OCR, NLP, Computer Vision",
        "Features: Detects text and image-based hate in memes",
        "Extra: Trained on Facebook meme dataset (10K+ samples)",
      ],
    },
    {
      title: "RPS Game",
      description: "Classic Rock paper scissor game",
      imgUrl: projImg6,
      live: "https://rps-ashmita.netlify.app/",
      notes: [
        "Tech Stack: HTML, CSS, JavaScript",
        "Features: Interactive logic-based gameplay",
        "Extra: Fully responsive, minimal UI",
      ],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>A glimpse of my work and journey.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Overview : Total Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" onClick={() => setShowExp(true)}>
                    Experience
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Achievements / Certifications</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectsCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                    <div className="text-center mb-3">
                      <Button className="gradient-btn m-2" onClick={() => setShowAch(true)}>
                        Achievements
                      </Button>
                      <Button className="gradient-btn m-2" onClick={() => setShowExtra(true)}>
                        Extra-Curriculars
                      </Button>
                      <Button className="gradient-btn m-2" onClick={() => setShowCert(true)}>
                        Certifications
                      </Button>
                    </div>
             </Tab.Pane>

              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      {/* All Modals */}
      <ExperienceModal show={showExp} handleClose={() => setShowExp(false)} />
      <AchievementsModal show={showAch} handleClose={() => setShowAch(false)} />
      <ExtraModal show={showExtra} handleClose={() => setShowExtra(false)} />
      <CertModal show={showCert} handleClose={() => setShowCert(false)} />

      <img className="background-image-right" src={colorSharp2} alt="Decoration" />
    </section>
  );
}

export default Projects;
