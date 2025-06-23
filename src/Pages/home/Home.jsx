import React, { useContext } from "react";
import ThemeContext from "../../AllRoute_Components/themeContext";

export default function Home() {
  const {
    theme: { bodyBg, sectionBg },
  } = useContext(ThemeContext);

  return (
    <>

    </>
  );
}
