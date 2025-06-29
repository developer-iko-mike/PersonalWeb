import React, { useState } from "react";
import SectionHeading from "../../../../AllRoute_Components/sectionHeading/SectionHeading";

import "./portfolio.css";

const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState([
    {
      id: 1,
      title: "Web UI",
      list: [
        { id: 1, image: "app-ui/1.png", link: "www.github.com/" },
        { id: 2, image: "app-ui/2.png", link: "www.github.com/" },
        { id: 3, image: "app-ui/3.png", link: "www.github.com/" },
        { id: 4, image: "app-ui/4.png", link: "www.github.com/" },
        { id: 5, image: "app-ui/5.png", link: "www.github.com/" },
        { id: 6, image: "app-ui/6.png", link: "www.github.com/" },
      ],
    },
    {
      id: 2,
      title: "CMS",
      list: [
        { id: 1, image: "cms/1.png", link: "www.github.com/" },
        { id: 1, image: "cms/2.png", link: "www.github.com/" },
      ],
    },
    {
      id: 3,
      title: "React MiniProject",
      list: [
        { id: 1, image: "react-miniProject/1.png", link: "www.github.com/" },
        { id: 2, image: "react-miniProject/2.png", link: "www.github.com/" },
        { id: 3, image: "react-miniProject/3.png", link: "www.github.com/" },
        { id: 4, image: "react-miniProject/4.png", link: "www.github.com/" },
      ],
    },
    {
      id: 4,
      title: "JS MiniProject",
      list: [
        { id: 1, image: "js-miniProject/1.png", link: "www.github.com/" },
        { id: 2, image: "js-miniProject/2.png", link: "www.github.com/" },
        { id: 3, image: "js-miniProject/3.png", link: "www.github.com/" },
        { id: 4, image: "js-miniProject/4.png", link: "www.github.com/" },
        { id: 5, image: "js-miniProject/5.png", link: "www.github.com/" },
        { id: 6, image: "js-miniProject/6.png", link: "www.github.com/" },
        { id: 7, image: "js-miniProject/7.png", link: "www.github.com/" },
        { id: 8, image: "js-miniProject/8.png", link: "www.github.com/" },
      ],
    },
    {
      id: 5,
      title: "HTML5 , CSS3",
      list: [
        { id: 1, image: "html-css/1.png", link: "www.github.com/" },
        { id: 2, image: "html-css/2.png", link: "www.github.com/" },
        { id: 3, image: "html-css/3.png", link: "www.github.com/" },
        { id: 4, image: "html-css/4.png", link: "www.github.com/" },
      ],
    },
    {
      id: 6,
      title: "Illustration",
      list: [
        { id: 1, image: "Illustration/portfolio-1.jpg", link: "/" },
        { id: 2, image: "Illustration/portfolio-2.jpg", link: "/" },
        { id: 3, image: "Illustration/portfolio-3.jpg", link: "/" },
        { id: 4, image: "Illustration/portfolio-1.jpg", link: "/" },
      ],
    },
  ]);
  const [displayPortfolio, setDisplayPortfolio] = useState([
    { id: 1, image: "app-ui/1.png", link: "www.github.com/" },
    { id: 2, image: "app-ui/2.png", link: "www.github.com/" },
    { id: 3, image: "app-ui/3.png", link: "www.github.com/" },
    { id: 4, image: "app-ui/4.png", link: "www.github.com/" },
    { id: 5, image: "app-ui/5.png", link: "www.github.com/" },
    { id: 6, image: "app-ui/6.png", link: "www.github.com/" },
  ]);
  const [activatePortfolio, setActivatePortfolio] = useState("Web UI");

  const handleChangeDisplayItemAndActivePortfolio = (title, list) => {
    setActivatePortfolio(title);
    setDisplayPortfolio(list);
  };

  const showAllPortfolio = () => {
    setActivatePortfolio("All Work");
    const getAllPortfolioList = portfolioList.flatMap(
      (portfolio) => portfolio.list
    );
    const concatingAllAray = getAllPortfolioList.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    setDisplayPortfolio(concatingAllAray);
  };

  return (
    <section id="portfolio" style={{ marginBottom: 200 }}>
      <SectionHeading
        title={"portfolio"}
        caption={"Check in Our Latest Works"}
      />
      <ul className="portfolio_btns container mt5 dac g3">
        <li
          className={`portfolio_btn plr3 ptb1-2 br10 bnone tshor cp ${
            activatePortfolio === "All Work" ? "portfolio_btn__activate" : ""
          }`}
          onClick={showAllPortfolio}
        >
          All Work
        </li>
        {portfolioList.map((portfolio) => (
          <li
            className={`portfolio_btn plr3 ptb1-2 br10 bnone tshor cp ${
              activatePortfolio === portfolio.title
                ? "portfolio_btn__activate"
                : ""
            }`}
            onClick={() =>
              handleChangeDisplayItemAndActivePortfolio(
                portfolio.title,
                portfolio.list
              )
            }
            key={portfolio.id}
          >
            {portfolio.title}
          </li>
        ))}
      </ul>
      <div className="container mt5">
        <div className="row ">
          <div className="cl-12">
            {displayPortfolio.map((portfolio) => (
              <img
                src={`/home/portfolio/${portfolio.image}`}
                alt={portfolio.link}
                style={{ width: 300, height: 600 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
