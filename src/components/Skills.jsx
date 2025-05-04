import React from "react";
import { skills } from "./Data";
import "../styles/Skills.css";

import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

const Skills = () => {
  return (
    <>
      <div className="main-skill">
        <div className="skills" data-aos="zoom-in-up" data-aos-duration="1200">
          <h2>
            Ski<span>lls</span>
          </h2>

          <div className="img-file">
            {skills.map((item, index) => (
              <Tooltip title={item.name}>
                <div>
                  <img src={item.image} alt="" />
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
