import React, { useContext } from "react";
import ThemeContext from "../themeContext";

export default function ChangeThemeBTN() {

  const themeContext = useContext(ThemeContext)

  console.log(themeContext);

  return (
    <div className="pbl1-5">
      <button className="b btn1 fs2 bsbd br10" onClick={themeContext.changeTheme}>
        change theme
      </button>
    </div>
  );
}