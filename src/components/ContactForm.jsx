import contact_img from '../assets/photos/contact-img.svg'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import "../styles/ContactForm.css";
import { useState } from 'react';
import {Footerpart} from './Footerpart';


const ContactForm = () => {

const [formdata,setFormdata]=useState({fullname:"",email:"",quary:""})


let handleDataChange=(e)=>{

  let nameField=e.target.name
  let value=e.target.value

  setFormdata((currvalue)=>{
    currvalue[nameField]=value
    return {...currvalue}
  })
}

let submitclik=(e)=>{
e.preventDefault()
console.log(formdata);
setFormdata({fullname:"",email:"",quary:""})

}

  return (
    <>
      <div className="contact-main">
        <div className="left-form">
          <img src={contact_img} alt="" />
          
        </div>
        <div className="right-form">
         
          <section className="formlist"
          data-aos="zoom-in-left"
          data-aos-duration="1000">
            <form action="" onSubmit={submitclik}>
              <h2>Feed<span>back</span></h2>
              <div className="input-field">
                <label htmlFor="">Enter Name:</label>
                <span>
                  <PersonIcon/>
                  <input type="text" placeholder="Fullname*" required value={formdata.fullname} onChange={handleDataChange} name='fullname'/>
                </span>
              </div>
              <div className="input-field">
                <label htmlFor="">Enter Email:</label> &nbsp;
                <span>
                  {" "}
                  <EmailIcon/>
                  <input type="text" placeholder="Email*" required value={formdata.email} onChange={handleDataChange} name='email'/>
                </span>
              </div>
              <div className="input-field">
                <label htmlFor="">Your Quary</label>
                <textarea
                  name="quary"
                  id=""
                  placeholder="send your thoughts" className='textfield' value={formdata.quary} onChange={handleDataChange}
                ></textarea>
              </div>
              <button type="submit" className='submitbtn'>send<SendIcon/></button>
            </form>
          </section>
        </div>
      </div>
      <Footerpart/>
    </>
  );
};
export default ContactForm;
