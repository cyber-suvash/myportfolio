
import java from "../assets/photos/java.png";
import html from "../assets/photos/html-5.png";
import css from "../assets/photos/css-3.png";
import js from "../assets/photos/js.png";
import mysql from "../assets/photos/mysql.svg";
import react from "../assets/photos/react.png";

import xss from "../assets/photos/xss.png"
import weather from "../assets/photos/weather.png"
import xplore from "../assets/photos/xplore.png"


const Bio = {
  name: "Suvash Dolai",
  roles: ["Frontened Developer", "Programmer", ""],
  description: "",
  github: "https://github.com/cyber-suvash",
  whatsapp: "https://shorturl.at/CCU8t",
  insta: "https://www.instagram.com/cyber_suvash/",
  twitter: "",
  linkedin: "https://www.linkedin.com/in/suvash-dolai/",
  resume: "",

};

const academics=[{
 
  mca:"Master Of Computer Applications(MCA)"
  ,institute:"Maulana Abul Kalam Azad University of Technology(MAKAUT)"
  ,mca_year:"2022-2024"
},{
  bsc:"Bachelor of Computer Science"
  ,institute:"Mahisadal Raj College",
  bsc_year:"2019-2022"
}]

const skills = [
  {
    name: "HTML",
    image: html,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "JavaScript",
    image: js,
  },
  {
    name: "Java",
    image: java,
  },
  {
    name: "MySQL",
    image: mysql,
  },
  {
    name: "React.js",
    image: react,
  },
];

const projects = [
  {
    title: "Tourism website",
    tech: "HTML/CSS/JavaScript",
    live: "https://cyber-suvash.github.io/Xplore/",
    code: "https://github.com/cyber-suvash/Xplore",
    img:xplore
  },
  {
    title: "Weathercheck",
    tech: "HTML/CSS/JavaScript,OpenWeatherAPI",
    live: "https://cyber-suvash.github.io/Weather-application/",
    code: "https://github.com/cyber-suvash/Weather-application",
    img:weather
  },
  {
    title: "Cross-Site-Scripting Scanner",
    tech: "Python,Random-Forest-model,Streamlit",
    live: "",
    code: "https://github.com/cyber-suvash/XSS_OR_Cross_Site_Scripting_Detection_using_ML",
    img:xss
  },
 
];

const formdata = {};

const about = {
  data: "I am Suvash Dolai, an MCA graduate with a strong foundation in computer science and a passion for technology.",
};

export { formdata, about, Bio, skills, projects ,academics};
