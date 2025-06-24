import React, { useRef, useState } from "react";
import "./header.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [burgerList, setBurgerList] = useState(false);
  const [headerItem, setHeaderItem] = useState([
    { id: 1, title: "Home", link: "" },
    { id: 2, title: "About us", link: "about-us" },
    { id: 3, title: "services", link: "services" },
    { id: 4, title: "Resume", link: "resume" },
    { id: 5, title: "portfolio", link: "portfolio" },
    { id: 6, title: "pricing", link: "pricing" },
    { id: 7, title: "contact", link: "contact" },
  ]);

  const nav__toggle___iconElam = useRef();

  const handleOpenBurgerList = () => {
    nav__toggle___iconElam.current.classList.toggle(
      "nav__toggle___icon____open"
    );
    setBurgerList(!burgerList);
  };

  return (
    <>
      <header className="bgsection pf l0 r0">
        <div className="container">
          <nav className="djspac ptb1-5">
            <h1 className="headerLogo cmain fpop fwBold fs5 m0 ttnone">iKO.</h1>
            <ul className={`navList dac g4 ${burgerList ? "navList__open" : ""}`}>
              {headerItem.map((item) => (
                <li
                  onClick={() => setActiveItem(item.title)}
                  className={`navListItem`}
                  key={item.id}
                >
                  <a
                    href={`#${item.link}`}
                    className={`navListItemLink tshor dib c fpop fwmedium ctext ${
                      activeItem === item.title
                        ? "navListItemLink__active cmain"
                        : ""
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="nav__toggle___icon dnone  w5 h5 jcc aic cp"
              ref={nav__toggle___iconElam}
              onClick={handleOpenBurgerList}
            >
              <div className="nav__toggle___line pr tshor w4-5 br2 bgmain" />
            </div>
          </nav>
        </div>
      </header>
      <div className={`headerCover ${burgerList ? "z100 o1" : ""}`} />
    </>
  );
};

export default Header;
