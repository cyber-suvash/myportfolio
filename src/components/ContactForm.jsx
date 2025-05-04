import contact_img from "../assets/photos/contact-img.svg";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import "../styles/ContactForm.css";
import { useState } from "react";
import { Footerpart } from "./Footerpart";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const ContactForm = () => {
  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  let handleDataChange = (e) => {
    let nameField = e.target.name;
    let value = e.target.value;
    setFormdata((currvalue) => {
      currvalue[nameField] = value;
      return { ...currvalue };
    });
  };

  let submitbutton = async (e) => {
    e.preventDefault();
    const validate = () => {
      let newErrors = {};
      if (!formdata.fullname.trim()) newErrors.fullname = "Enter a valid name";
      if (!formdata.email.trim()) {
        newErrors.email = "Enter a mail";
      } else if (!/^\S+@\S+\.\S+$/.test(formdata.email)) {
        newErrors.email = "Enter a valid mail";
      }
      if (!formdata.feedback.trim())
        newErrors.feedback = "Enter your feedback..";
      return newErrors;
    };

    const newEr = validate();
    if (Object.keys(newEr).length > 0) {
      setErrors(newEr);
      Object.values(newEr).forEach((err) => toast.error(err));
      return;
    }

    setIsSubmitted(true);
    setTimeout(async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/contact",
          formdata
        );
        console.log("Server Response:", response);
        toast.success("Form submitted successfully!");
        setFormdata({ fullname: "", email: "", feedback: "" });
        setErrors({});
      } catch (err) {
        console.log("Something went wrong", err);
        toast.error("Failed to submit. Try again later.");
      } finally {
        setIsSubmitted(false);
      }
    }, 3000);
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="contact-main">
        <div className="left-form">
          <img src={contact_img} alt="" />
        </div>
        <div className="right-form">
          <section
            className="formlist"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <form action="" onSubmit={submitbutton}>
              <h2>
                Feed<span>back</span>
              </h2>
              <div className="input-field">
                <label htmlFor="">Enter Name:</label>
                <span>
                  <PersonIcon />
                  <input
                    type="text"
                    placeholder="Fullname*"
                    value={formdata.fullname}
                    onChange={handleDataChange}
                    name="fullname"
                  />
                </span>
              </div>
              <div className="input-field">
                <label htmlFor="">Enter Email:</label> &nbsp;
                <span>
                  {" "}
                  <EmailIcon />
                  <input
                    type="text"
                    placeholder="Email*"
                    value={formdata.email}
                    onChange={handleDataChange}
                    name="email"
                  />
                </span>
              </div>
              <div className="input-field">
                <label htmlFor="">Your Quary</label>
                <textarea
                  name="feedback"
                  id="feedback"
                  placeholder="send your quary/thoughts"
                  className="textfield"
                  value={formdata.feedback}
                  onChange={handleDataChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="submitbtn"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <span className="spinner">
                
                  </span>
                ) : (
                  <SendIcon />
                )}
              </button>
            </form>
          </section>
        </div>
      </div>
      <Footerpart />
    </>
  );
};
export default ContactForm;
