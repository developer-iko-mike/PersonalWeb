import React, { useEffect, useState } from "react";
import Header from "../AllRoute_Components/header/Header";
import routes from "../AllRoute_Components/routes";
import { useRoutes } from "react-router-dom";

import Footer from "../AllRoute_Components/footer/Footer";
import ChangeThemeBTN from "../AllRoute_Components/changeThemeBTN/ChangeThemeBTN";

export default function App() {
  let router = useRoutes(routes);

  const [theme, setTheme] = useState("");

  useEffect(() => {
    const localtheme = localStorage.getItem("theme") || "light";
    setTheme(localtheme);
    document.body.classList.toggle("darkTheme", localtheme === "dark");
  }, []);

  const handleUserTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("darkTheme", newTheme === "dark");
  };

  return (
    <>
      <Header />
      {router}
      <ChangeThemeBTN onThemeChange={handleUserTheme} theme={theme} />
      <Footer toggleTheme={handleUserTheme} theme={theme} />
    </>
  );
}
