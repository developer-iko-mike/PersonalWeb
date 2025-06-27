import React, { useState } from "react";
import SectionHeading from "../../../../AllRoute_Components/sectionHeading/SectionHeading";
import WebDesignSVG from "./serviceSVG/WebDesignSVG";
import InterfaceSVG from "./serviceSVG/InterfaceSVG";
import DevelopmentSVG from "./serviceSVG/DevelopmentSVG";
import UxDesignSVG from "./serviceSVG/UxDesignSVG";
import MotionSVG from "./serviceSVG/MotionSVG";
import SeoSVG from "./serviceSVG/SeoSVG";
import Service from "./Service";
import "./services.css";

const Services = () => {
  const [serviceItem, setServiceItem] = useState([
    {
      id: 1,
      title: "Web Design",
      icon: <WebDesignSVG />,
      caption:
        "Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.",
      color: "service_webDesign",
    },
    {
      id: 2,
      title: "Interface Design",
      icon: <InterfaceSVG />,
      caption:
        "Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.",
      color: "service_interfaceDesign",
    },
    {
      id: 3,
      title: "Web Development",
      icon: <DevelopmentSVG />,
      caption:
        "Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.",
      color: "service_webDevelopment",
    },
    {
      id: 4,
      title: "UX Design",
      icon: <UxDesignSVG />,
      caption:
        "Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.",
      color: "service_uXDesign",
    },
    {
      id: 5,
      title: "Motion Graphic",
      icon: <MotionSVG />,
      caption:
        "Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.",
      color: "service_motionGraphic",
    },
    {
      id: 6,
      title: "SEO Optimize",
      icon: <SeoSVG />,
      caption:
        "Lipsum as it is sometimes known is dummy text used in laying out print, graphic or web designs.",
      color: "service_sEOOptimize",
    },
  ]);

  return (
    <section id="services">
      <SectionHeading title={"services"} caption={"what we provide you ?"} />
      <div className="container ptb5">
        <div className="rw services__warraper">
          {serviceItem.map((item) => (
            <div key={item.id} className="cl-4">
            <Service
              title={item.title}
              icon={item.icon}
              caption={item.caption}
              classNames={`dfcjac g2-5 br-5 w100 ${item.color}`}
              />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
