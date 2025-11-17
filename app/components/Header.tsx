"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeSwitch from "./UI/DarkModeSwitch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 245) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        sticky
          ? "fixed top-0 left-0 w-full z-50 shadow-md bg-neutral-300 dark:bg-[#0C1017] transition-shadow"
          : ""
      } flex items-center justify-between p-2 px-5 mb-10 md:px-10 transition-all duration-500 ease-in-out`}
    >
      <Link href="/">
        <div className="dark:bg-amber-50 rounded-2xl bg-white p-1 x">
          <Image
            src="/senate.png"
            alt="ashimi_logo"
            className="animate-spin-slow"
            width={30}
            height={50}
          ></Image>
        </div>
      </Link>
      <DarkModeSwitch />
      <div className="hidden md:flex">
        <ul className="flex gap-8 font-medium text-sm items-center">
          <li className="hover:text-[#1966D2]">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:text-[#1966D2]">
            <Link href="#resume">Resume</Link>
          </li>
          <li className="hover:text-[#1966D2]">
            <Link href="#project">Project</Link>
          </li>
          <li className="hover:text-[#1966D2]">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer md:hidden focus:outline-none"
      >
        {/* {isMenuOpen &&} */}
        <FiMenu size={24} />
      </button>

      {/* Mobile */}
      <div
        className={`fixed inset-0 h-screen bg-[#0C1017] flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-white transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full"
        } `}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 cursor-pointer focus:outline-none"
        >
          {isMenuOpen && <FiX size={28} color="white" />}
        </button>
        <Link href="#about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link href="#resume" onClick={() => setIsMenuOpen(false)}>
          Resume
        </Link>
        <Link href="#project" onClick={() => setIsMenuOpen(false)}>
          Project
        </Link>

        <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Header;
