import React, { Fragment, useState } from "react";
import "./pricing.css";
import SectionHeading from "../../../../AllRoute_Components/sectionHeading/SectionHeading";
import Plan from "./Plan";

const Pricing = () => {
  const [planDetail, setPlanDetail] = useState([
    {
      id: 1,
      title: "Basic",
      price: 70,
      caption: "Only PSD Design",
      planOption: ["Graphic Desing", "Web Design"],
      btnClassNames: "bgmainOrange",
      btnLink: "/",
    },
    {
      id: 2,
      title: "Standard",
      price: 100,
      caption: "Only PSD Design",
      planOption: [
        "Graphic Desing",
        "Web Design",
        "UI/UX Design",
        "HTML & CSS",
      ],
      btnClassNames: "Pricing_Standard__btnBg",
      btnLink: "/",
    },
    {
      id: 3,
      title: "Premium",
      price: 150,
      caption: "Only PSD Design",
      planOption: [
        "Graphic Desing",
        "Web Design",
        "UI/UX Design",
        "HTML & CSS",
        "SEO Optimize",
        "Business Develop",
      ],
      btnClassNames: "Pricing_Premium__btnBg",
      btnLink: "/",
    },
  ]);

  return (
    <section id="pricing" className="mb15 rotatedSection">
      <div className="unRotatedSection mt5">
        <SectionHeading
          title={"Pricing"}
          caption={"Check our Services package"}
        />
        <div className="container mt5">
          <div className="pricing_item rw">
            {planDetail.map((item) => (
              <Fragment key={item.id}>
                <Plan
                  type={item.title}
                  price={item.price}
                  caption={item.caption}
                  typeOption={item.planOption}
                  btnClassNames={item.btnClassNames}
                  btnLink={item.btnLink}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
