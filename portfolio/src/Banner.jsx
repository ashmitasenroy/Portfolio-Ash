import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import laptopAnimation from "./assets/animations/laptopAnimation.json";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "Software Engineer ",
    "Software Development Engineer",
    "MERN STACK Developer",
  ];
  const period = 2000;

  const navigate = useNavigate(); // ✅ used for routing

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    setDelta(isDeleting ? delta / 2 : delta);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {` Hi! I'm Ashmita Sen Roy, a `}
              <span className="wrap">{text}</span>
            </h1>
            <button onClick={() => navigate("/about")} className="AboutMee">
              About Me <ArrowRightCircle size={35} />
            </button>
          </div>
          <div className="col-12 col-md-6">
            <Lottie
              animationData={laptopAnimation}
              loop={true}
              style={{ height: "100%", maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
