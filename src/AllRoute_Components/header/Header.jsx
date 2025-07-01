import React, { useRef, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [burgerList, setBurgerList] = useState(false);
  const [headerItem, setHeaderItem] = useState([
    { id: 1, title: "Home", scrollNum: 0 },
    { id: 2, title: "About us", scrollNum: 1200 },
    { id: 3, title: "services", scrollNum: 5000 },
    { id: 4, title: "Resume", scrollNum: 5000 },
    { id: 5, title: "portfolio", scrollNum: 5000 },
    { id: 6, title: "pricing", scrollNum: 5000 },
    { id: 7, title: "contact", scrollNum: 5000 },
  ]);

  const nav__toggle___iconElam = useRef();

  const handleOpenBurgerList = () => {
    nav__toggle___iconElam.current.classList.toggle(
      "nav__toggle___icon____open"
    );
    setBurgerList(!burgerList);
  };

  const activeItemAndScrollToSection = (title, scrollFromHead) => {
    setActiveItem(title);
    window.scrollTo(0, scrollFromHead);
  };

  return (
    <>
      <header className="bgsection pf l0 r0">
        <div className="container">
          <nav className="djspac ptb1-5 fwMedium">
            <h1 className="headerLogo cmain fpop fwBold fs5 m0 ttnone">iKO.</h1>
            <ul
              className={`navList dac g4 ${burgerList ? "navList__open" : ""}`}
            >
              {headerItem.map((item) => (
                <li
                  onClick={() =>
                    activeItemAndScrollToSection(item.title, item.scrollNum)
                  }
                  className={`navListItem`}
                  key={item.id}
                >
                  <Link
                    href={`/`}
                    className={`navListItemLink tshor dib c fpop fwMedium ctext ${
                      activeItem === item.title
                        ? "navListItemLink__active cmain"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
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
