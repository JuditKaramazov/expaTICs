'use client'

import React, { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import { Up } from "./ScrollToTop.styled";

const ScrollToTop = () => {
  const ref = useRef(null);
  const { y } = useWindowScroll();

  const scrollToTop = () => {
    let element = document.getElementById("navigation");

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useLayoutEffect(() => {
    if (y > 200) {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  }, [y]);

  return (
    <Up ref={ref} onClick={() => scrollToTop()}>
      &#x2191;
    </ Up>
  );
};

export default ScrollToTop;
