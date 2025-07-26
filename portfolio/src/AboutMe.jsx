import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./App.css";
import profilePic from "./assets/img/Profile.jpg";
import owlImg from "./assets/img/owl.png";
import starImg from "./assets/img/star.png";
import dingSound from "./assets/img/ding.mp3";

const AboutMe = () => {
  const [clicked, setClicked] = useState(false);
  const ding = new Audio(dingSound);
  const navigate = useNavigate(); 

  const handleStarClick = () => {
    ding.play();
    setClicked(true);
    setTimeout(() => setClicked(false), 4000);
  };

  return (
    <div className="about-container">
      <button
        onClick={() => navigate("/")}
        style={{
          background: "linear-gradient(to right, #7b2cbf, #ed43d4)",
          border: "none",
          borderRadius: "20px",
          padding: "8px 16px",
          color: "#fff",
          fontWeight: "600",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        ← Back to Home
      </button>

      <h2 className="about-heading">About Me</h2>
      <div className="profile-section">
        <div className="profile-img-wrapper">
          <img src={profilePic} alt="Ashmita Sen Roy" className="profile-img" />
        </div>
        <div className="about-content">
          <p><strong>Introduction:</strong> I am Ashmita, a B.Tech CSE (AIML) final year student with a strong passion for full stack development, clean UI, and user-centered design. I love building projects that blend functionality with beauty.</p>

          <p><strong>Education:</strong><br />
            2022–2026: B.Tech CSE (AIML), SMIT
            <p style={{ color: "gray" }}>CGPA: 8.25</p>
            <br />
            10th & 12th: St. Philomena School
            <p style={{ color: "gray" }}>
              Percentage: 78%<br />
              Percentage: 72%
            </p>
          </p>

          <p><strong>Hobbies:</strong> Writing (especially poems), designing, building websites, and occasional reading.</p>

          <p><strong>Hometown:</strong> Kalimpong, West Bengal — yes, I'm from the hills!</p>

          <p><strong>Email:</strong> ashmitasenroyy@gmail.com</p>

        <p><strong>Resume:</strong> <a href="/Ashmita%208.0.pdf" target="_blank" rel="noopener noreferrer" className="resume-link"> My Resume</a></p>
        </div>
      </div>

      <img src={owlImg} alt="Cute Owl" className="owl-icon" />

      <div className="floating-star" onClick={handleStarClick}>
        <img src={starImg} alt="Floating Star" className="star-img" />
        <div className="star-text">Click if you liked my portfolio</div>
        {clicked && <div className="thank-you">✨ Thank you for visiting! ✨</div>}
      </div>
    </div>
  );
};

export default AboutMe;
