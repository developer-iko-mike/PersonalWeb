import React, { useEffect, useState } from "react";
import Header from "../AllRoute_Components/header/Header";
import routes from "../AllRoute_Components/routes";
import { useRoutes } from "react-router-dom";

import Footer from "../AllRoute_Components/footer/Footer";
import ChangeThemeBTN from "../AllRoute_Components/changeThemeBTN/ChangeThemeBTN";

export default function App() {
  let router = useRoutes(routes);

  const [theme , setTheme] = useState("")

  const handleUserTheme = () => {
    const localtheme = localStorage.getItem("theme");
    setTheme(localtheme)
    if (!localtheme || localtheme === "light") {
      document.body.classList.add("darkTheme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("darkTheme");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    handleUserTheme()
  } , [])
 
  return (
    <>
      <Header />
      {router}
      <ChangeThemeBTN onThemeChange={handleUserTheme} theme={theme} />
      <Footer toggleTheme={handleUserTheme} theme={theme} />
    </>
  );
}
