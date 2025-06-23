به نظر می‌رسد مشکل اصلی در نحوه‌ی بروزرسانی و استفاده از مقادیر تم در کامپوننت `Home.jsx` باشد. در حال حاضر، شما مقادیر `localStorageBG` و `localStorageSectionBG` را در `App.jsx` به عنوان وضعیت (state) دارید، اما این مقادیر را به صورت مستقیم در context قرار نمی‌دهید و فقط داخل `useEffect` آنها را بروزرسانی می‌کنید.

در نتیجه، زمانی که تغییر theme انجام می‌شود و مقدارهای `localStorage` بروزرسانی می‌شوند، کامپوننت `Home.jsx` که به `ThemeContext` متصل است، این تغییرات را نمی‌بیند زیرا مقدارهای context مستقیم از `localStorage` نیستند و در جای دیگر بروزرسانی نمی‌شوند.

راه‌حل پیشنهادی:

1. به جای اینکه فقط مقادیر را در `App.jsx` نگهداری کنید، یک حالت مرکزی برای تم در `ThemeContext` قرار دهید و تغییر آن را مدیریت کنید.
2. وقتی دکمه تغییر تم زده می‌شود، علاوه بر تغییر `localStorage`، وضعیت جاری در context را هم بروزرسانی کنید.
3. در `Home.jsx`، رفرش بک‌گراند بر اساس مقدارهای context انجام شود، نه مقادیر جداگانه در `localStorage`.

برای نمونه، پیشنهاد می‌کنم:

**در `ThemeContext.js`:**

```js
import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : { bodyBG: "#fff", sectionBG: "#fff" };
  });

  const changeTheme = () => {
    const newTheme =
      theme.bodyBG === "#000"
        ? { bodyBG: "#fff", sectionBG: "#fff" }
        : { bodyBG: "#000", sectionBG: "#000" };
    localStorage.setItem("theme", JSON.stringify(newTheme));
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
```

**در `App.jsx`:**

```jsx
import React, { useEffect } from "react";
import Header from "../AllRoute_Components/header/Header";
import routes from "../AllRoute_Components/routes";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "../AllRoute_Components/themeContext"; // تغییر نام داده شده
import Footer from "../AllRoute_Components/footer/Footer";
import ChangeThemeBTN from "../AllRoute_Components/changeThemeBTN/ChangeThemeBTN";

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
```

**در `ChangeThemeBTN.jsx`:**

```jsx
import React, { useContext } from "react";
import ThemeContext from "../../AllRoute_Components/themeContext";

export default function ChangeThemeBTN() {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <div className="pbl1-5">
      <button className="b btn1 fs2 bsbd br10" onClick={changeTheme}>
        change theme
      </button>
    </div>
  );
}
```

**در `Home.jsx`:**

```jsx
import React, { useContext } from "react";
import ThemeContext from "../../AllRoute_Components/themeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="h100vh" style={{ backgroundColor: theme.bodyBG }}>
      lorem lorem
    </div>
  );
}
```

با این تغییرات، هر زمان تم تغییر کند، وضعیت در context بروزرسانی می‌شود و کامپوننت‌های دیگر هم به صورت خودکار بروزرسانی خواهند شد و مشکل رندر نشدن پس‌زمینه یا عوض نشدن آن برطرف می‌شود.