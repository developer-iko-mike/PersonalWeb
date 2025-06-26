import React, { useState } from "react";
import "./aboutUs.css";
import SectionHeading from "../../../../AllRoute_Components/sectionHeading/SectionHeading";
import BtnPerson from "../../../../AllRoute_Components/button/BtnPerson";

const AboutUs = () => {
  const [whyChooseMeListItem, setWhyChooseMeListItem] = useState([
    { id: 1, title: "User Interface Design" },
    { id: 2, title: "User Experience Design" },
    { id: 3, title: "Visual Commination Design" },
    { id: 4, title: "Interaction Design" },
    { id: 5, title: "supper support" },
  ]);

  return (
    <section id="about-us">
      <div className="container mb15 mt15">
        <SectionHeading
          title={"about us"}
          caption={"why choose Me ?"}
          classNames="ptb5"
        />
        <div className="about_warraper rw bgsection djsb">
          <div className="about_cover cl-12 cl-lg-6">
            <img
              src="/home/aboutUs/about-us-man.jpg"
              alt="about us man"
              className="about_image w100 h100 of"
            />
          </div>
          <div className="about_content cl-12 cl-lg-6">
            <h4 className="about_content__title mb1 fw600">why choose me ?</h4>
            <p className="about_content__caption mb7">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero s De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <h5 className="about_content__list___title cmain fw600 mb1">
              Here is Few Features :
            </h5>
            <ul className="about_content__list dfc jcc g1 mb3">
              {whyChooseMeListItem.map((item) => (
                <li className="li about_content__listItem pr" key={item.id}>
                  {item.title}
                </li>
              ))}
            </ul>
            <div className="about_content__btnWrapper dac g3">
              <BtnPerson title={"Hire me"} elam={"a"} classNames="bgmain about_content__btn" />
              <BtnPerson
                title={"get resume"}
                elam={"a"}
                classNames="bgmainOrange about_content__btn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
