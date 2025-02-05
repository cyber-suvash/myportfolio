import React from 'react'
import { skills } from './Data'
import '../styles/Skills.css'

import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const Skills = () => {
  return (
    <>
    <div className='main-skill'>
    <div className='skills'
    data-aos="zoom-in-up"
    data-aos-duration="1200">
      <h2>Ski<span>lls</span></h2>
      
      <div className='img-file'>
        
      <Tooltip title="HTML" >
      <div>
        <img src={skills[0].image} alt="" />
      </div>
      </Tooltip>

      <Tooltip title="CSS">
      <div><img src={skills[1].image} alt="" /></div>
      </Tooltip>
      
      <Tooltip title="JavaScript">
      <div><img src={skills[2].image} alt="" /></div>
      </Tooltip>
      
      <Tooltip title="Java">
      <div><img src={skills[3].image} alt="" /></div>
      </Tooltip>
      
      <Tooltip title="MySQL">
        <div><img src={skills[4].image} alt="" /></div>
      </Tooltip>
      <Tooltip title="React.js">
        <div><img src={skills[5].image} alt="" /></div>
      </Tooltip>
      <Tooltip title="Bootstrap">
        <div><img src={skills[6].image} alt="" /></div>
      </Tooltip>
   
      </div>
      
      
    </div>
    </div>
    
    </>
  )
}

export default Skills
