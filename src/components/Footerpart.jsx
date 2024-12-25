import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../styles/Footer.css";
import { Bio } from "./Data";

const handleClk = (exlink) => {
  window.open(exlink);
};

const Footerpart = () => {
  
  return (
    <div> 
      <div className="foot">
      <h2>contact me!</h2>
      <div className="icons">
        <LinkedInIcon
          className="icon"
          onClick={() => handleClk(Bio.linkedin)}
        />
        <GitHubIcon className="icon" onClick={() => handleClk(Bio.github)} />
        <EmailIcon className="icon" />
        <WhatsAppIcon
          className="icon"
          onClick={() => handleClk(Bio.whatsapp)}
        />
      </div>
      <span>
        Made with <FavoriteIcon style={{ color: "red", fontSize: "15px" }} />{" "}
      </span>
    </div> </div>

    
  );
};
export {Footerpart,handleClk};
