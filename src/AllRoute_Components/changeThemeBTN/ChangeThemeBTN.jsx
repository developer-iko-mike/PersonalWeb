import React, { useContext } from "react";
// import ThemeContext from "../themeContext";

export default function ChangeThemeBTN({onThemeChange}) {

  // const themeContext = useContext(ThemeContext)

  // console.log(themeContext);

  return (
    <div className="pf b1-5 l1-5">
      <button className="b btn1 fs2 bsbd br10" onClick={onThemeChange}>
        change theme
      </button>
    </div>
  );
}