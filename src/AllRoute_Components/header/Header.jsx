import React, { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [headerItem, setHeaderItem] = useState([
    { id: 1, title: "Home",      link: "/" },
    { id: 2, title: "About us",  link: "/about-us" },
    { id: 3, title: "Resume",    link: "/resume" },
    { id: 4, title: "services",  link: "/services" },
    { id: 5, title: "portfolio", link: "/portfolio" },
    { id: 6, title: "pricing",   link: "/pricing" },
    { id: 7, title: "contact",   link: "/contact" },
  ]);

  return (
    <header>
      <div className="container">
        <nav>
          <h1 className="headerLogo">iKO.Dev</h1>
          <ul className="navList">
            {headerItem.map((item) => (
              <li className="navListItem" key={item.id}>
                <NavLink to={item.link} className="navListItemLink">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav__toggle___icon">
            <div className="nav__toggle___line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
