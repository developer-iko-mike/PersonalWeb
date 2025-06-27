import React, { useEffect, useState } from "react";
import "./services.css";

const Service = ({ title, icon, caption, classNames = "cl-4" }) => {
  const [svgFill, setSvgFill] = useState("03ACF8");
  const [boxShdowColor, setBoxShadowColor] = useState("rgba(19,182,255,35%)");

  useEffect(() => {
    if (classNames.includes("service_webDesign")) {
      setSvgFill("#803AFB");
      setBoxShadowColor("#803AFB");
    } else if (classNames.includes("service_interfaceDesign")) {
      setSvgFill("#FFBB01");
      setBoxShadowColor("#FFBB01");
    } else if (classNames.includes("service_webDevelopment")) {
      setSvgFill("#F5276C");
      setBoxShadowColor("#F5276C");
    } else if (classNames.includes("service_uXDesign")) {
      setSvgFill("#FF5823");
      setBoxShadowColor("rgba(255,99,49,35%)");
    } else if (classNames.includes("service_sEOOptimize")) {
      setSvgFill("#49B846");
      setBoxShadowColor("rgba(73,175,70,35%)");
    } else {
      setSvgFill("#03ACF8");
      setBoxShadowColor("rgba(19,182,255,35%)");
    }
  }, [svgFill]);

  return (
    <div
      className={`service pr z100 ${classNames}`}
      style={{ boxShadow: `0 0 4rem ${boxShdowColor}` }}
    >
      {icon}
      <h4 className="service_title fw700">{title}</h4>
      <p className="service_caption tc">{caption}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="service_icon pa w100 b0 r0 l0 z-1"
        preserveAspectRatio="none"
        viewBox="0 0 369.92 223.59"
      >
        <path
          id="shape"
          d="M1249.08,2700.557s15.007-66.794,51.8-54.34,43.02,57.737,121.7,13.585,95.662-58.3,124.531-23.774S1619,2601.5,1619,2601.5v223.59H1249.08Z"
          transform="translate(-1249.08 -2601.498)"
          fill={svgFill}
        />
      </svg>
    </div>
  );
};

export default Service;
