import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "./assets/img/color-sharp.png";

import myIcon1 from "./assets/img/my-icon.svg";
import myIcon2 from "./assets/img/my-icon1.svg";
import myIcon3  from "./assets/img/my-icon2.svg";
import myIcon5 from "./assets/img/my-icon5.svg";
import myIcon6 from "./assets/img/my-icon6.svg";
import myIcon7 from "./assets/img/my-icon7.svg";
import myIcon8 from "./assets/img/my-icon8.svg";
import myIcon9 from "./assets/img/my-icon9.svg";
import myIcon10 from "./assets/img/my-icon10.svg";
import myIcon11 from "./assets/img/my-icon11.svg";
import myIcon12 from "./assets/img/my-icon12.svg";
import myIcon13 from "./assets/img/my-icon13.svg";
import myIcon14 from "./assets/img/my-icon14.svg";
import myIcon15 from "./assets/img/my-icon15.svg";
import myIcon16 from "./assets/img/my-icon16.svg";
import myIcon17 from "./assets/img/my-icon17.svg";
import myIcon18 from "./assets/img/my-icon18.svg";
import myIcon19 from "./assets/img/my-icon19.svg";
import myIcon20 from "./assets/img/my-icon20.svg";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>These are the tools and technologies I’m most proficient in.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item"><img src={myIcon1} alt="Node.js" /><h5>Node.js</h5></div>
                <div className="item"><img src={myIcon2} alt="React" /><h5>React</h5></div>
                <div className="item"><img src={myIcon3} alt="React" /><h5>React-Bootstrap</h5></div>
                <div className="item"><img src={myIcon5} alt="HTML" /><h5>HTML</h5></div>
                <div className="item"><img src={myIcon6} alt="CSS" /><h5>CSS</h5></div>
                <div className="item"><img src={myIcon7} alt="JavaScript" /><h5>JavaScript</h5></div>
                <div className="item"><img src={myIcon8} alt="Bootstrap" /><h5>Bootstrap</h5></div>
                <div className="item"><img src={myIcon9} alt="C++" /><h5>C++</h5></div>
                <div className="item"><img src={myIcon10} alt="C" /><h5>C</h5></div>
                <div className="item"><img src={myIcon11} alt="Python" /><h5>Python</h5></div>
                <div className="item"><img src={myIcon12} alt="MySQL" /><h5>MySQL</h5></div>
                <div className="item"><img src={myIcon13} alt="MongoDB" /><h5>MongoDB</h5></div>
                <div className="item"><img src={myIcon14} alt="FastAPI" /><h5>FastAPI</h5></div>
                <div className="item"><img src={myIcon15} alt="Git" /><h5>Git / GitHub</h5></div>
                <div className="item"><img src={myIcon16} alt="Google Cloud" /><h5>Google Cloud</h5></div>
                <div className="item"><img src={myIcon17} alt="Canva" /><h5>Canva</h5></div>
                <div className="item"><img src={myIcon18} alt="LeetCode" /><h5>LeetCode</h5></div>
                <div className="item"><img src={myIcon19} alt="Vercel" /><h5>Vercel</h5></div>
                <div className="item"><img src={myIcon20} alt="Railway" /><h5>Railway</h5></div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background Decoration" />
    </section>
  );
}

export default Skills;
