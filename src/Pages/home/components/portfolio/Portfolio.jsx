import React, { useState } from "react";
import SectionHeading from "../../../../AllRoute_Components/sectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./portfolio.css";

const Portfolio = () => {
  const [portfolioList] = useState([
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
        { id: 1, image: "cms/1-1.png", link: "www.github.com/" },
        { id: 2, image: "cms/1-2.png", link: "www.github.com/" },
        { id: 3, image: "cms/2-1.png", link: "www.github.com/" },
        { id: 4, image: "cms/2-2.png", link: "www.github.com/" },
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
  const [activatePortfolio, setActivatePortfolio] = useState("All Work");

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
      <ul className="portfolio_btns container mt5 djac g3 fw">
        <li
          className={`portfolio_btn plr3 ptb1-2 br5 bnone tshor cp ${
            activatePortfolio === "All Work" ? "portfolio_btn__activate" : ""
          }`}
          onClick={showAllPortfolio}
        >
          All Work
        </li>
        {portfolioList.map((portfolio) => (
          <li
            className={`portfolio_btn plr3 ptb1-2 br5 bnone tshor cp ${
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
      <div className="container mt2">
        <div className="row">
          <div className="cl-12">
            <Swiper
              // modules={[EffectCoverflow, Pagination]}
              modules={[Pagination]}
              effect={"coverflow"}
              slidesPerView={
                window.innerWidth < 768
                  ? 1
                  : window.innerWidth > 768 && window.innerWidth < 992
                  ? 2
                  : 3
              }
              spaceBetween={30}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
              }}
              className="mySwiper"
            >
              {displayPortfolio.map((portfolio) => (
                <SwiperSlide key={portfolio.id} className="wmax">
                  <img
                    src={`/home/portfolio/${portfolio.image}`}
                    alt={portfolio.link}
                  />
                </SwiperSlide>
              ))}
              <div className="custom-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
