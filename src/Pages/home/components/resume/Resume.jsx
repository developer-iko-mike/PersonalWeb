import React, { useEffect, useState } from "react";
import SectionHeading from "../../../../AllRoute_Components/sectionHeading/SectionHeading";
import UsergraduateSVG from "./SVGs/UsergraduateSVG";
import HistorySVG from "./SVGs/HistorySVG";
import LaptopcodeSVG from "./SVGs/LaptopcodeSVG";
import MapgallerySVG from "./SVGs/MapgallerySVG";
import ChartbarSVG from "./SVGs/ChartbarSVG";
import "./resume.css";

const Resume = () => {
  const [resumeList, setResumeList] = useState([
    {
      id: 1,
      title: "Programming Skills",
      icon: <LaptopcodeSVG />,
      list: [
        {
          id: 1,
          headTiTle: "HTML5 & CSS3",
          title: "Expert Level",
          time: "Aug 2024",
          caption:
            "Mastered modern layout techniques including Flexbox and CSS Grid. Built 20+ responsive templates with cross-browser compatibility. Deep understanding of CSS architecture methodologies like BEM and SMACSS.",
        },
        {
          id: 2,
          headTiTle: "JavaScript Ecosystem",
          title: "Advanced Proficiency",
          time: "Sep 2024 - Present",
          caption:
            "Developed complex SPAs using React hooks and context API. Implemented state management solutions with Redux Toolkit. Currently mastering advanced patterns like compound components and render props.",
        },
        {
          id: 3,
          headTiTle: "Tooling & Workflow",
          title: "Professional Grade",
          time: "Jun 2025 - Present",
          caption:
            "Configured Webpack for optimal production builds. Established CI/CD pipelines with GitHub Actions. Integrated testing frameworks (Jest/RTL) achieving 85% test coverage. Proficient in debugging with Chrome DevTools.",
        },
      ],
    },
    {
      id: 2,
      title: "Designer Skills",
      icon: <MapgallerySVG />,
      list: [
        {
          id: 1,
          headTiTle: "Figma",
          title: "Rapid Learner",
          caption:
            "Created interactive prototypes for 3 client projects. Familiar with auto-layout, component libraries, and design systems. Currently expanding skills in micro-interactions and animation prototyping.",
        },
        {
          id: 2,
          headTiTle: "Adobe Creative Suite",
          title: "Emerging Skills",
          caption:
            "Basic photo retouching and composition editing in Photoshop. Designed promotional banners and social media graphics for personal projects. Learning vector illustration techniques in Illustrator.",
        },
      ],
    },
    {
      id: 3,
      title: "Work History",
      icon: <HistorySVG />,
      list: [
        {
          id: 1,
          headTiTle: "Freelance Web Developer",
          title: "Full-stack Specialist",
          time: "2024-Present",
          caption:
            "Delivered 10+ custom web solutions for international clients, including a WariaShop-inspired gaming e-commerce platform with React/Node.js stack. Implemented secure payment gateways and reduced initial load time by 40% through image optimization and code minification. Maintain 100% client satisfaction rate with ongoing support and iterative improvements.",
        },
        {
          id: 2,
          headTiTle: "Google (Hypothetical)",
          title: "Frontend Developer Intern",
          time: "2026-2027",
          caption:
            "Contributed to Google Workspace UI redesign using React and Material-UI. Optimized component performance by 30% through code splitting and lazy loading. Collaborated with UX researchers to implement accessibility improvements across 15+ core components.",
        },
      ],
    },
    {
      id: 4,
      title: "SEO Skills",
      icon: <ChartbarSVG />,
      list: [
        {
          id: 1,
          headTiTle: "Technical SEO Foundations",
          title: "Planned Q1 2026",
          caption:
            "Scheduled comprehensive training in crawlability optimization, structured data implementation, and Core Web Vitals improvement strategies through Google's SEO certification program.",
        },
        {
          id: 2,
          headTiTle: "Content Optimization",
          title: "Planned Q2 2026",
          caption:
            "Future focus on keyword research methodologies, semantic search principles, and AI-assisted content strategy development for organic growth in competitive niches.",
        },
      ],
    },
    {
      id: 5,
      title: "Education",
      icon: <UsergraduateSVG />,
      list: [
        {
          id: 1,
          headTiTle: "Kharazmi High School",
          title: "High School Diploma",
          time: "2023-2025",
          caption:
            "Graduated with honors, focusing on advanced mathematics and computer science fundamentals. Developed foundational problem-solving skills through science competitions and team projects.",
        },
        {
          id: 2,
          headTiTle: "Payame Noor University, Mashhad",
          title: "B.Sc in Computer Science",
          time: "2025-2027",
          caption:
            "Currently specializing in software engineering track. Coursework includes advanced algorithms, database systems, and web application development. Active member of university coding club.",
        },
      ],
    },
  ]);
  const [displayShowList, setDisplayShowList] = useState([
    {
      id: 1,
      headTiTle: "HTML5 & CSS3",
      title: "Expert Level",
      time: "Aug 2024",
      caption:
        "Mastered modern layout techniques including Flexbox and CSS Grid. Built 20+ responsive templates with cross-browser compatibility. Deep understanding of CSS architecture methodologies like BEM and SMACSS.",
    },
    {
      id: 2,
      headTiTle: "JavaScript Ecosystem",
      title: "Advanced Proficiency",
      time: "Sep 2024 - Present",
      caption:
        "Developed complex SPAs using React hooks and context API. Implemented state management solutions with Redux Toolkit. Currently mastering advanced patterns like compound components and render props.",
    },
    {
      id: 3,
      headTiTle: "Tooling & Workflow",
      title: "Professional Grade",
      time: "Jun 2025 - Present",
      caption:
        "Configured Webpack for optimal production builds. Established CI/CD pipelines with GitHub Actions. Integrated testing frameworks (Jest/RTL) achieving 85% test coverage. Proficient in debugging with Chrome DevTools.",
    },
  ]);
  const [activeListItem, setActiveListItem] = useState("Programming Skills");

  const [animate, setAnimate] = useState(false);

  const handleChangeDisplayItemAndActiveItem = (list, title) => {
    setAnimate(true);
    setDisplayShowList(list);
    setActiveListItem(title);
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <section id="resume" className="resume rotatedSection">
      <div className="unRotatedSection">
        <SectionHeading
          title={"resume"}
          caption={"my formal bio details"}
          classNames="pr pt7"
        />
        <div className="container">
          <ul className="undisplay_resumeList dac g2 fw mt3">
            {resumeList.map((item) => (
              <li
                className={`undisplay_resumeList__item plr3 ptb1-5 cwhite fw600 br10 aic g1-5 dnone cp ${
                  activeListItem === item.title
                    ? "undisplay_resumeList__item___activate"
                    : ""
                }`}
                key={item.id}
                onClick={() =>
                  handleChangeDisplayItemAndActiveItem(item.list, item.title)
                }
              >
                {activeListItem === item.title ? item.icon : null}
                {item.title}
              </li>
            ))}
          </ul>

          <div className="rw aic" style={{ paddingTop: 50 }}>
            <div className="cl-3">
              <ul className="resume_list bgbody dfc jcc g3-5 ptb5 plr1">
                {resumeList.map((resume) => (
                  <li
                    className={`resume_list__item pr dac z10 g3 cp ${
                      activeListItem === resume.title
                        ? "resume_list__item___activate"
                        : ""
                    }`}
                    onClick={() =>
                      handleChangeDisplayItemAndActiveItem(
                        resume.list,
                        resume.title
                      )
                    }
                    key={resume.id}
                  >
                    {resume.icon}
                    <span className="resume_list__item___title fw600">
                      {resume.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="resume_detail__wrapper cl-12 cl-lg-9 pr6l1-5">
              <ul
                className={`resume_detail dfc g2 pr ${
                  animate ? "animate" : ""
                }`}
                key={activeListItem}
              >
                {displayShowList.map((item) => (
                  <li className="resume_detailItem" key={item.id}>
                    <div className="resume_detailItem__headTiTle___and____time djspac">
                      <h3 className="resume_detailItem__headTiTle fw600 pr dac">
                        {item.headTiTle}
                      </h3>
                      {item.time && (
                        <div className="resume_detailItem__time bgmainOrange cwhite plr1 ptb-2 br2">
                          {item.time}
                        </div>
                      )}
                    </div>
                    <h4 className="resume_detailItem__title fw600">
                      {item.title}
                    </h4>
                    <p className="resume_detailItem__caption">
                      {item.caption}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
