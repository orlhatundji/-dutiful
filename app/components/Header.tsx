"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Hamburger from "./HamburgerMenu";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="py-4 mx-auto lg:flex items-center justify-between gap-6 lg:text-lg bg-white">
      {/* Logo */}
      <Image
        src="/icons/logo.svg"
        alt="Dutiful Logo"
        width={120}
        height={54}
        className="cursor-pointer w-16 lg:w-[7.5rem]"
      />

      {/* Navigation Menu */}
      <nav
        className={twMerge(
          "lg:w-fit md:flex md:items-center md:justify-between mt-2 lg:mt-0 md:pb-2 md:border-b lg:pb-0 lg:border-0",
          isMobile && !isMenuOpen ? "hidden" : "relative"
        )}
      >
        <ul className="flex flex-col gap-4 lg:gap-6 p-0 md:flex-row">
          <li>
            {/* Search Icon (Hidden on small screens) */}
            {
              <Image
                src="/icons/search.svg"
                alt="Search icon"
                width={40}
                height={40}
                className="hidden md:block lg:mr-4 cursor-pointer"
              />
            }
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Business Directory
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              Features
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mt-4 md:mt-0 lg:px-4 md:p-0 md:flex-row md:items-center">
          <Button
            title="Login"
            className="w-full px-6 py-2 text-lg border-0 md:w-auto hover:bg-transparent hover:text-primary"
          />
          <Button
            title="Sign up"
            className="w-full px-6 py-2 text-lg bg-primary text-white rounded-md md:w-auto"
          />
        </div>
      </nav>
      {/* Mobile Menu Button */}
      <Hamburger {...{ isMenuOpen, setIsMenuOpen, isMobile, setIsMobile }} />
    </header>
  );
};

export default Header;
