import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/Sidebaricon.css";
import { Bio } from "./Data";
import { handleClk } from "./Footerpart";

function Sidebaricon() {
  return (
    <div className="sidebar-icons">
      <GitHubIcon className="icon"
        onClick={() => handleClk(Bio.github)}
        style={{ fontSize: "40px" }}
      />

      <LinkedInIcon className="icon"
        onClick={() => handleClk(Bio.linkedin)}
        style={{ fontSize: "40px" }}
      />

      <InstagramIcon className="icon"
        onClick={() => handleClk(Bio.insta)}
        style={{ fontSize: "40px" }}
      />

      <WhatsAppIcon className="icon"
        onClick={() => handleClk(Bio.whatsapp)}
        style={{ fontSize: "40px" }}
      />
    </div>
  );
}

export default Sidebaricon;
