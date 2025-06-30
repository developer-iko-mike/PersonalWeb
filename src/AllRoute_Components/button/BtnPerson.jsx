import React, { useEffect, useState } from "react";
import "./btnPerson.css";
import { Link } from "react-router-dom";

const Button = ({
  title,
  elam,
  href = "#",
  classNames = "",
  onClick,
  children,
}) => {
  
  const [makeShadowColorWithClassBg, setMakeShadowColorWithClassBg] = useState(
    "rgba(11, 190, 173, 40%)"
  );

  useEffect(() => {
    if (classNames.includes("bgmainOrange")) {
      setMakeShadowColorWithClassBg("rgba(245, 127, 23, 24%)");
    } else if (classNames.includes("Pricing_Standard__btnBg")) {
      setMakeShadowColorWithClassBg("rgba(128, 58, 251, 24%)");
    } else if (classNames.includes("Pricing_Premium__btnBg")) {
      setMakeShadowColorWithClassBg("rgba(245, 39, 108, 24%)");
    } else {
      setMakeShadowColorWithClassBg("rgba(11, 190, 173, 40%)");
    }
  }, [classNames]);

  return (
    <>
      {elam === "a" ? (
        <Link
          to={href}
          className={`btnPerson linkPerson ${classNames}`}
          style={{
            boxShadow: `0 1.5rem 4rem ${makeShadowColorWithClassBg}`,
          }}
        >
          {title || children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`btnPerson ${classNames}`}
          style={{
            boxShadow: `0 1.5rem 4rem ${makeShadowColorWithClassBg}`,
          }}
        >
          {title || children}
        </button>
      )}
    </>
  );
};

export default Button;
