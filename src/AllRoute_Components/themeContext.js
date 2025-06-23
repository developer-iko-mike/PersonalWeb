import { createContext, useState } from "react";

 const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(async () => {
    const localSt = localStorage.getItem("theme");
    return localSt
      ? await JSON.parse(localSt)
      : { bodyBg: "#fff", sectionBg: "#000" };
  });

  const changeTheme = () => {
    const newTheme =
      theme.bodyBg === "#000"
        ?{ bodyBg: "#fff", sectionBg: "#000" } 
        : { bodyBg: "#000", sectionBg: "#fff" };

        localStorage.setItem("theme" , JSON.stringify(newTheme))
        setTheme(newTheme)
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
