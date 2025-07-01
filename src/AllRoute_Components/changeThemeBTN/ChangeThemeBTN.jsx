import React, { useEffect, useState } from "react";
import LightModeSVG from "../footer/SVGs/LightModeSVG";
import DarkModeSVG from "../footer/SVGs/DarkModeSVG";

const ChangeThemeBTN = ({ onThemeChange, theme }) => {

    const [scroll , setScroll] = useState(0)

  return (
        <div className="pf b1-5 l1-5 z100">
          <button
            className="b bsbd br10 changeTheme_fix__btn djac"
            onClick={onThemeChange}
          >
            {theme === "light" ? <DarkModeSVG /> : <LightModeSVG />}
          </button>
        </div>
  );
};

export default ChangeThemeBTN;
