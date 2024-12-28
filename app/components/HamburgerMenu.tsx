/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "motion/react";
import React, { use, useEffect } from "react";

type HamburgerProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
  direction?: "left" | "right";
};

const Hamburger: React.FC<HamburgerProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isMobile,
  setIsMobile,
  direction = "right",
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
    <motion.div
      className="md:hidden h-5 w-8 flex-col flex justify-between cursor-pointer hover:opacity-85 absolute top-6 right-6 z-50"
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={index}
          className="h-1 bg-primary"
          initial={false}
          animate={
            index === 1
              ? {
                  x: isMenuOpen ? (direction === "left" ? "-100%" : "100%") : 0,
                  opacity: isMenuOpen ? 0 : 1,
                }
              : index === 0
              ? {
                  y: isMenuOpen ? "150%" : 0,
                  rotate: isMenuOpen ? 45 : 0,
                }
              : {
                  y: isMenuOpen ? "-250%" : "0%",
                  rotate: isMenuOpen ? -45 : 0,
                }
          }
          transition={{ duration: 0.3 }}
          style={{ width: "100%" }}
        />
      ))}
    </motion.div>
  );
};

export default Hamburger;
