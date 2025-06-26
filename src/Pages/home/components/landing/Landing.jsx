import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import WaveShapeSVG from "../SVGs/WaveShapeSVG";
import BtnPerson from "../../../../AllRoute_Components/button/BtnPerson";

const Landing = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="row dac cl-sm-fdcr">
          <div className="cl-6 col-md-12">
            <div className="home_content">
              <div className="home_name dac g1 mb07">
                <h3 className="home__username fs2-5 ttnone cmain">
                  Hello, IM
                </h3>
                <h3 className="home__username fs2-5 ttnone cmainOrange">
                  Mohammad iKO.
                </h3>
              </div>
              <h2 className="home_title fs5 fwbold cmain mb07">
                creative designer
              </h2>
              <p className="home_caption mb4">
                freelancer web / mobile uI/uX designer with motion graphics
              </p>
              <div className="home_links__warraper mt2 dac g3">
                <BtnPerson title={"Hire me"} elam={"a"} classNames="bgmain home_link" />
                <BtnPerson
                  title={"get resume"}
                  elam={"a"}
                  classNames="bgmainOrange home_link"
                />
              </div>
            </div>
          </div>
          <div className="cl-6 col-md-12 djac">
            <div className="home_photo" />
          </div>
        </div>
      </div>

      <WaveShapeSVG />
    </section>
  );
};

export default Landing;
