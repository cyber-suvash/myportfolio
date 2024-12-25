
import { projects } from "./Data";
import "../styles/Projects.css";
import CodeIcon from "@mui/icons-material/Code";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Projects = () => {
  let handleCode = (CodeLink) => {
    window.open(CodeLink, "_blank");
  };

  let handleLive = (LiveCode) => {
    if (LiveCode) {
      window.open(LiveCode, "_blank");
    } else {
      window.alert("This project live link not available");
    }
  };

  return (
    <>
    <div className="Project">
      <h2>Proj<span>ects</span></h2>
      <div className="main">
        
        <div className="box" 
        data-aos="flip-left"
        data-aos-duration="1100">
          <h3>{projects[0].title}</h3>
          <p>{projects[0].tech}</p>
          <img src={projects[0].img} alt="" />
          <div className="btn">
            <CodeIcon
              style={{ fontSize: "35px" }}
              className="btn-icon"
              onClick={() => handleCode(projects[0].code)}
            />
            <PlayCircleIcon
              style={{ fontSize: "35px" }}
              className="btn-icon"
              onClick={() => handleLive(projects[0].live)}
            />
          </div>
        </div>
        <div className="box"
        data-aos="flip-right"
        data-aos-duration="1100">
          <h3>{projects[1].title}</h3>
          <p>{projects[1].tech}</p>
          <img src={projects[1].img} alt="" />
          <div className="btn">
            <CodeIcon
              style={{ fontSize: "35px" }}
              className="btn-icon"
              onClick={() => handleCode(projects[1].code)}
            />
            <PlayCircleIcon
              style={{ fontSize: "35px" }}
              className="btn-icon"
              onClick={() => handleLive(projects[1].live)}
            />
          </div>
        </div>
        <div className="box"
        data-aos="flip-left"
        data-aos-duration="1100">
          <h3>{projects[2].title}</h3>
          <p>{projects[2].tech}</p>
          <img src={projects[2].img} alt="" />

          <div className="btn">
            <CodeIcon
              style={{ fontSize: "35px" }}
              className="btn-icon"
              onClick={() => handleCode(projects[2].code)}
            />
            <PlayCircleIcon
              style={{ fontSize: "35px" }}
              className="btn-icon"
              onClick={() => handleLive(projects[2].live)}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Projects;
