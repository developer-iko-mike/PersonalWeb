import React, { useEffect } from "react";
import Header from "../AllRoute_Components/header/Header";
import routes from "../AllRoute_Components/routes";
import { useRoutes } from "react-router-dom";

import Footer from "../AllRoute_Components/footer/Footer";
import ChangeThemeBTN from "../AllRoute_Components/changeThemeBTN/ChangeThemeBTN";
import { ThemeProvider } from "../AllRoute_Components/themeContext";

export default function App() {
  let router = useRoutes(routes);

  return (
    <ThemeProvider>
      <Header />
      <ChangeThemeBTN />
      {router}
      <Footer />
    </ThemeProvider>
  );
} 