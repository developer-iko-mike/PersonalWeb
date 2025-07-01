import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import "./sectionHeading.css";

const SectionHeading = ({
  title,
  caption,
  draggable = true,
  classNames = "",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef(null);
  const [bounds, setBounds] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (nodeRef.current) {
      const lineWidth = nodeRef.current.offsetWidth; // عرض خط را از ref می‌گیریم (به پیکسل)
      const shapeWidth =
        2.8 * parseFloat(getComputedStyle(document.documentElement).fontSize); // عرض شکل را از CSS می‌گیریم (مقدار 2.8rem را به پیکسل تبدیل می‌کنیم)
      const maxX = (lineWidth - shapeWidth) / 2; // محاسبه حداکثر حرکت به چپ و راست (نصف اختلاف عرض خط و شکل)
      setBounds({ left: -maxX, right: maxX }); // تنظیم محدوده درگ (bounds) برای Draggable
    }
  }, []);

  // تابع بازگشت به مرکز هنگام رها کردن
  const handleStop = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className={`cl-12 dfcjac ${classNames}`}>
      <h3 className="sectionHeader_title cmain fw700">{title}</h3>
      <p className={`sectionHeader_caption`}>{caption}</p>
      <div className="sectionHeader_line djac pr br2 bgmain" ref={nodeRef}>
        {draggable ? (
          <Draggable
            axis="x"
            bounds={bounds}
            position={position}
            onStop={handleStop}
            nodeRef={nodeRef}
          >
            <div ref={nodeRef} className="sectionHeader_shape pa bgmain br2" />
          </Draggable>
        ) : (
          <div className="sectionHeader_shape pa bgmain br2" />
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
