import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);


  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
    // eslint-disable-next-line
  });
  
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = () => {
    setClicked(true);
  };
  
  const onMouseUp = () => {
    setClicked(false);
  };
  
  const onMouseLeave = () => {
    setHidden(true);
  };
  
  const onMouseEnter = () => {
    setHidden(false);
  };
  
  const onMouseMove = (e: { pageX: any; pageY: any; }) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mouseenter",   handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    document.querySelectorAll(".menuToggle").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };


  let classclicked = clicked ? "cursor--clicked" : "";
  let classhidden = hidden ? "cursor--hidden" : "";
  let classlinkhovered = linkHovered ? "cursor--link-hovered" : "";

  return (
    <div
      className={`cursor ${classclicked} ${classhidden} ${classlinkhovered}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

export default Cursor;
