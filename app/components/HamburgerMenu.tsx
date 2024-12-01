/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { use, useEffect } from "react";

type HamburgerProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
};

const Hamburger: React.FC<HamburgerProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isMobile,
  setIsMobile,
}) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, setIsMobile]);
  return (
    <button
      type="button"
      aria-label="Open menu"
      className="absolute top-5 right-4 md:hidden text-gray-700 focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      title={isMenuOpen ? "Close menu" : "Open menu"}
    >
      <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
  );
};

export default Hamburger;
