import React from "react";
import Socials from "./Socials";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Contact us", href: "#" },
        { name: "FAQs", href: "#" },
      ],
    },
    {
      title: "Quick links",
      links: [
        { name: "Find services", href: "#" },
        { name: "Pricing & plans", href: "#" },
        { name: "List your business", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Affiliate program", href: "#" },
      ],
    },
    {
      title: "More from Dutiful",
      links: [
        { name: "Dutiful jobs", href: "#" },
      ],
    },
  ];
  return (
    <footer className="bg-primary-alt pt-16 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 2xl:px-0">
        <div className="flex flex-wrap gap-6 justify-between">
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-white font-circular-std-medium text-xl">
                {footerLink.title}
              </h3>
              <ul className="flex flex-col gap-1">
                {footerLink.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-footer-links hover:text-white hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Socials />
        <div className="mt-4 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-20">
          <span className="text-white text-center font-circular-std-book text-lg">
            © 2022 Dutiful®
          </span>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="text-footer-links hover:text-white hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-footer-links hover:text-white hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-footer-links hover:text-white hover:underline">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
