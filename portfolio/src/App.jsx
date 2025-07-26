import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import AboutMe from "./AboutMe.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Banner />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutMe />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
