import React, { useRef, useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [burgerList, setBurgerList] = useState(false);
  const [headerItem] = useState([
    { id: 1, title: "Home", sectionId: "home" },
    { id: 2, title: "About us", sectionId: "about-us" },
    { id: 3, title: "services", sectionId: "services" },
    { id: 4, title: "Resume", sectionId: "resume" },
    { id: 5, title: "portfolio", sectionId: "portfolio" },
    { id: 6, title: "pricing", sectionId: "pricing" },
    { id: 7, title: "contact", sectionId: "contact" },
  ]);

  const nav__toggle___iconElam = useRef();
  const observerRef = useRef(null);

  useEffect(() => {
    // ایجاد Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.dataset.sectionTitle);
            setActiveItem(entry.target.dataset.sectionTitle);
          }
        });
      },
      { threshold: 0.7 }
    );

    // ثبت سکشن‌ها برای مشاهده
    headerItem.forEach((item) => {
      const section = document.getElementById(item.sectionId);
      if (section) {
        section.dataset.sectionTitle = item.sectionId;
        observerRef.current.observe(section);
      }
    });

    return () => {
      // پاک کردن observer هنگام آنمونت
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [headerItem]);

  const handleOpenBurgerList = () => {
    nav__toggle___iconElam.current.classList.toggle(
      "nav__toggle___icon____open"
    );
    setBurgerList(!burgerList);
  };

  const scrollToSection = (sectionId) => {
    setActiveItem(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`navListItem`}
                  key={item.id}
                >
                  <Link
                    to={`#${item.sectionId}`}
                    className={`navListItemLink tshor dib c fpop fwMedium ctext ${
                      activeItem === item.sectionId
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
      <div className={`headerCover ${burgerList ? "headerCover__activate" : ""}`} />
    </>
  );
};

export default Header;
