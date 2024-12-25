import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import Hero from "./Hero";
import Sidebaricon from "./Sidebaricon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="contain">
      <nav className="navbar">
        <div className="logo">
          Cyber<span>Suvash</span>
        </div>

        <ul className={isOpen ? "navlist active" : "navlist"}>
          <li>
            <Link to="/" onClick={toggleIcon}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleIcon}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleIcon}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleIcon}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleIcon}>
              Contact
            </Link>
          </li>

          <section>
            <Sidebaricon />
          </section>
        </ul>

        <div className="menu-icon" onClick={toggleIcon}>
          {isOpen ? <CloseIcon style={{fontSize:"30px"}}/> : <MenuIcon  style={{fontSize:"30px"}}/>}
        </div>
      </nav>
    </div>
  );
}
