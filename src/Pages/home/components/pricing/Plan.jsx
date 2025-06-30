import React, { useState } from "react";
import BtnPerson from "../../../../AllRoute_Components/button/BtnPerson";
import TickSVG from "./Svg/TickSVG";
import CloseSVG from "./Svg/CloseSVG";

const Plan = ({
  type,
  price,
  caption = "Only PSD Design",
  typeOption,
  classNames = "",
  btnClassNames = "",
  btnLink = "/",
}) => {
  const defaultOption = [
    "Graphic Desing",
    "Web Design",
    "UI/UX Design",
    "HTML & CSS",
    "SEO Optimize",
    "Business Develop",
  ];

  return (
    <div className="cl-12 cl-sm-6 cl-lg-4">
      <div className={`dfc plan_shadow__blue ${classNames}`}>
        <div
          className={`planHeader ptb3 tc cfff w100 ${
            btnClassNames === "bgmainOrange"
              ? "Pricing_basic__btnBg"
              : btnClassNames
          }`}
        >
          <h4 className="planTiTle fw600">{type}</h4>
          <h5 className="planPrice">${price}</h5>
          <h6 className="planCaption mt05">{caption}</h6>
        </div>
        <div className="planContent w100 dfc aic ptb3 bgbody">
          <ul className="planList dfc g2 mb2-5">
            {defaultOption.map((item, index) => (
              <li className="planList_item dac g1" key={index}>
                {typeOption.includes(item) ? <TickSVG /> : <CloseSVG />}
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <BtnPerson elam={"a"} href={btnLink} classNames={btnClassNames}>
            Choose plan
          </BtnPerson>
        </div>
      </div>
    </div>
  );
};

export default Plan;
