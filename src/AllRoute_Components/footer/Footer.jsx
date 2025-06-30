import React, { useEffect, useState } from "react";
import FacebookSVG from "./SVGs/FacebookSVG";
import BehanceSVG from "./SVGs/BehanceSVG";
import DribbbleSVG from "./SVGs/DribbbleSVG";
import PinterestSVG from "./SVGs/PinterestSVG";
import SkypeSVG from "./SVGs/SkypeSVG";
import DarkModeSVG from "./SVGs/DarkModeSVG";
import LightModeSVG from "./SVGs/LightModeSVG";
import TelegramSVG from "./SVGs/TelegramSVG";
import InstagramSVG from "./SVGs/InstagramSVG";
import TwitterSVG from "./SVGs/TwitterSVG";
import "./footer.css";

const Footer = ({ toggleTheme, theme }) => {
  const [socials, setSocials] = useState([
    { id: 1, icon: <FacebookSVG /> },
    { id: 2, icon: <BehanceSVG /> },
    { id: 3, icon: <DribbbleSVG /> },
    { id: 4, icon: <PinterestSVG /> },
    { id: 5, icon: <SkypeSVG /> },
  ]);
  // const [socials, setSocials] = useState([
  //   { id: 1, icon: <FacebookSVG /> },
  //   { id: 2, icon: <TwitterSVG /> },
  //   { id: 3, icon: <InstagramSVG /> },
  //   { id: 4, icon: <PinterestSVG /> },
  //   { id: 5, icon: <TelegramSVG /> },
  // ]);

  return (
    <footer className="ptb2-5">
      <div className="container djspac footer__wrapper">
        <p className="footer_title fw600">
          © 2025 createuiux. All rights reserved.
        </p>
        <ul className="footer_social dac g1">
          <li
            className="footer_social__item br100 cp djac"
            onClick={toggleTheme}
          >
            {theme === "light" ? <LightModeSVG /> : <DarkModeSVG />}
          </li>
          {socials.map((social) => (
            <li className="footer_social__item br100 cp djac" key={social.id}>
              {social.icon}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
