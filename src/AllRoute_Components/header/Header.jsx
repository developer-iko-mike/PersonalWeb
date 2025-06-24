import React, { useState } from "react";
import "./header.css";
import { Link, NavLink, useParams } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const [headerItem, setHeaderItem] = useState([
    { id: 1, title: "Home", link: "" },
    { id: 2, title: "About us", link: "about-us" },
    { id: 3, title: "Resume", link: "resume" },
    { id: 4, title: "services", link: "services" },
    { id: 5, title: "portfolio", link: "portfolio" },
    { id: 6, title: "pricing", link: "pricing" },
    { id: 7, title: "contact", link: "contact" },
  ]);

  return (
    <header className="bgsection">
      <div className="container">
        <nav className="djspac ptb1-5">
          <h1 className="headerLogo cmain fpop fwBold fs5 m0 ttnone">iKO.Dev</h1>
          <ul className="navList dac g4">
            {headerItem.map((item) => (
              <li
                onClick={() => setActiveItem(item.title)}
                className={`navListItem`}
                key={item.id}
              >
                <a href={`#${item.link}`} className={`navListItemLink dib c fpop fwmedium ctext ${
                  activeItem === item.title ? "navListItemLink__active cmain" : ""
                }`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__toggle___icon dnone">
            <div className="nav__toggle___line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
