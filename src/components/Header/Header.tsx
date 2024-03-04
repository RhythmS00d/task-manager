"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Link = {
  name: string;
  href: string;
};

function Nav() {
  const links: Link[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Weather",
      href: "/weather",
    },
    {
      name: "News",
      href: "/news",
    },
    {
      name: "Task manager",
      href: "/task-manager",
    },
    {
      name: "Quote Generator",
      href: "/quote-generator",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <h1 className="md:hidden text-lg font-semibold title">
        {usePathname().slice(1).toUpperCase() === ""
          ? "HOME"
          : usePathname().slice(1).toUpperCase()}
      </h1>
      <nav className="md:w-full h-full md:text-xl md:block flex items-center justify-center relative">
        <button
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                color="black"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                color="black"
              />
            )}
          </svg>
        </button>
        <ul
          className={`absolute top-0 right-0 mt-16 bg-white shadow-lg z-10 rounded-md md:static md:mt-0 md:bg-primary md:flex md:h-full md:items-center md:justify-center md:gap-12  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="">
              <a
                href={link.href}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export function Header() {
  return (
    <header className="h-24 shadow-lg flex items-center justify-around md:w-[140%] md:self-center lg:w-full">
      <Nav />
    </header>
  );
}
