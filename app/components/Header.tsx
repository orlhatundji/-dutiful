import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header className="px-8 py-4 mx-auto flex items-center justify-between">
      <Image src="/icons/logo.svg" alt="Dutiful Logo" width={120} height={54} />
      <div className="flex justify-between items-center">
        <Image
          src="/icons/search.svg"
          alt="Search icon"
          width={40}
          height={40}
          className="hidden md:block mr-10"
        />
        <nav className="flex justify-between items-center">
          <ul className="flex gap-4">
            <li className="px-5">
              <Link href="/" className="hover:underline">
                Business Directory
              </Link>
            </li>
            <li className="px-5">
              <Link href="/about" className="hover:underline">
                Features
              </Link>
            </li>
            <li className="px-5">
              <Link href="/contact" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li className="px-5">
              <Link href="/contact" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-between">
            <Button title="Login" className="px-12 border-0 hover:bg-transparent hover:text-primary" />
            <Button title="Sign up" className="px-12 " />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
