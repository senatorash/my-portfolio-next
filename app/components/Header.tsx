"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeSwitch from "./UI/DarkModeSwitch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between p-2 px-5 mb-10 md:px-10">
      <div className="dark:bg-amber-50 rounded-2xl bg-white p-1">
        <Image
          src="/senate.png"
          alt="ashimi_logo"
          width={30}
          height={50}
        ></Image>
      </div>
      <DarkModeSwitch />
      <div className="hidden md:flex">
        <ul className="flex gap-8 font-medium text-sm items-center">
          <li className="hover:text-[#1966D2]">
            <Link href="/about">Resume</Link>
          </li>
          <li className="hover:text-[#1966D2]">
            <Link href="/about">Work</Link>
          </li>
          <li className="hover:text-[#1966D2]">
            <Link href="/about">Contact</Link>
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
        <Link href="/about" onClick={() => setIsMenuOpen(false)}>
          Resume
        </Link>
        <Link href="/work" onClick={() => setIsMenuOpen(false)}>
          Work
        </Link>

        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Header;
