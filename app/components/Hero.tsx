"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <div className="w-full lg:flex items-center justify-between pt-10 lg:pt-14 pb-20">
      <div className="lg:flex justify-between w-full">
        <div className="max-w-[559px] lg:mt-20 xl:mt-36">
          <h1 className="font-recoleta-alt-bold text-4xl text-secondary">
            List and grow your business  with just few clicks
          </h1>
          <p className="font-circular-std-book text-xl mt-4 text-tertiary">
            Eliminate manual work and save time by listing your business or
            service on the best business directory in Nigeria.
          </p>
        </div>
        <motion.div
          className="mt-14 lg:mt-0"
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          {isInView && (
            <Image
              src="/hero.png"
              alt=""
              className="max-w-[70%] lg:max-w-full mx-auto lg:mx-0"
              onLoad={() => setIsLoaded(true)}
              width={674}
              height={563}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
