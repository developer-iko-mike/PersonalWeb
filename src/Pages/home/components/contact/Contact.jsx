import React, { useReducer, useState } from "react";
import "./contact.css";
import SectionHeading from "../../../../AllRoute_Components/sectionHeading/SectionHeading";
import formReducer from "./Components/formReducer";
import MapSVG from "./Components/MapSVG";

const Contact = () => {
  const [formState, disPatch] = useReducer(formReducer, {
    name: "",
    email: "",
    subject: "",
    estimatedBudget: "",
    massage: "",
    isValid: false,
  });
  const [loadingMassage, setLoadingMassage] = useState("");
  const [resMassage, setResMassage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    disPatch({ type: "CHANGE", field: name, value });
  };

  const sendMassageToAdmin = (e) => {
    e.preventDefault();
    console.log(formState);

    // send massage

    setLoading(true);
    setLoadingMassage("just a second ...");

    const massageTimeout = setTimeout(() => {
      setLoading(false);
      setLoadingMassage("");
      setResMassage("send massage is successfully");
      disPatch({ type: "RESET" });
    }, 1500);

    const finllyTimeout = setTimeout(() => {
      setResMassage("");
    }, 5000);

    return () => clearTimeout(massageTimeout, finllyTimeout);
  };

  const { name, email, subject, estimatedBudget, massage } = formState;
  return (
    <section id="contact" className="pr">
      <SectionHeading title="contact us" caption="Let's Keep In Touch" />
      <div className="contect_warraper mt5">
        <div className="contect_myLocation pa br100 djac">
          <MapSVG />
        </div>
        <div className="container">
          <form
            className="contect_form dfc aic g1-5 ptb4-5 plr4-5 bgsection bgl-gren pa r0"
            onSubmit={sendMassageToAdmin}
          >
            <h4 className="contect_form__title fw700 cmain tl w100 mt1-5">
              Get in Touch
            </h4>
            <input
              type="text"
              name="name"
              className="contect_form__ipt bnone onone bgbody ctext ptb1-5 plr2-5 br1 w100"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              className="contect_form__ipt bnone onone bgbody ctext ptb1-5 plr2-5 br1 w100"
              style={{ textTransform: "none" }}
              placeholder="Your email address"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              className="contect_form__ipt bnone onone bgbody ctext ptb1-5 plr2-5 br1 w100"
              placeholder="subject"
              value={subject}
              onChange={handleChange}
            />
            <input
              type="text"
              name="estimatedBudget"
              className="contect_form__ipt bnone onone bgbody ctext ptb1-5 plr2-5 br1 w100"
              placeholder="Budget"
              value={estimatedBudget}
              onChange={handleChange}
            />
            <textarea
              className="contect_form__txa bnone onone bgbody ctext ptb1-5 plr2-5 br1 w100 mb1"
              name="massage"
              placeholder="Enter Your massage"
              value={massage}
              onChange={handleChange}
            ></textarea>
            <button
              className="contect_form__submit w100 ptb1-5 plr1-5 bgmain br5 bnone onone fw600 cp cfff w100 tt tshor"
              disabled={
                name.length < 3 ||
                massage.length < 5 ||
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
              }
              type="submit"
            >
              {loading && loadingMassage ? "just a second ..." : "submit"}
            </button>

            {resMassage && (
              <p
                className={`fw700 ${
                  resMassage === "send massage is successfully"
                    ? "cd-grn"
                    : "cred"
                }`}
              >
                {resMassage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
