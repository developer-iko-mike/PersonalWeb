import React, { useReducer, useState } from "react";
import "./contact.css";
import SectionHeading from "../../../../AllRoute_Components/sectionHeading/SectionHeading";
import formReducer from "./Components/formReducer";

const Contact = () => {
  const [formState, disPatch] = useReducer(formReducer, {
    name: "",
    email: "",
    subject: "",
    estimatedBudget: "",
    massage: "",
    isValid: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    disPatch({ type: "CHANGE", field: name, value });
  };

  const { name, email, subject, estimatedBudget, massage } = formState;
  return (
    <section id="contact" className="mb15">
      <SectionHeading title="contact us" caption="Let's Keep In Touch" />
      <div className="contect_warraper pr">
        <div className="contect_myLocation pa">i'm here</div>
        <form className="contect_form">
          <h4 className="contect_form__title">Get in Touch</h4>
          <input
            type="text"
            name="name"
            className="contect_form__ipt"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            className="contect_form__ipt"
            placeholder="Your email address"
            value={email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            className="contect_form__ipt"
            placeholder="subject"
            value={subject}
            onChange={handleChange}
          />
          <input
            type="text"
            name="estimatedBudget"
            className="contect_form__ipt"
            placeholder="Budget"
            value={estimatedBudget}
            onChange={handleChange}
          />
          <textarea
            className="contect_form__txa"
            name="massage"
            placeholder="Enter Your massage"
            value={massage}
            onChange={handleChange}
          ></textarea>
          <button
            className="b btn1"
            disabled={
              name.length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            }
          >
            asdasd
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
