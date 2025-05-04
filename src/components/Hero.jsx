import "../styles/Hero.css";
import pdf_resume from "../Resume/new_resume.pdf";
import pic from "../assets/photos/hacker.png";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "./Data";
import { handleClk } from "./Footerpart";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Learner","Coder",
        "Frontend-Devoloper","Aspiring FullStack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div
          className="left-part"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img src={pic} alt="" />
        </div>
        <div
          className="right-part"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h3>Hey,</h3>
          <h1>I'm {Bio.name}</h1>

          <div className="words">
            <h2>
              & <span ref={typedRef}></span>
            </h2>
          </div>

          <div className="icons-section">
            <div className="hero-icon">
              <GitHubIcon
                onClick={() => handleClk(Bio.github)}
                style={{ fontSize: "40px" }}
              />
            </div>
            <div className="hero-icon">
              {" "}
              <LinkedInIcon
                onClick={() => handleClk(Bio.linkedin)}
                style={{ fontSize: "40px" }}
              />
            </div>
            <div className="hero-icon">
              <InstagramIcon
                onClick={() => handleClk(Bio.insta)}
                style={{ fontSize: "40px" }}
              />
            </div>
            <div className="hero-icon">
              <WhatsAppIcon
                onClick={() => handleClk(Bio.whatsapp)}
                style={{ fontSize: "40px" }}
              />
            </div>
          </div>

          <div className="buttons">
            <a href={pdf_resume} download="suvash_resume">
              Check resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
