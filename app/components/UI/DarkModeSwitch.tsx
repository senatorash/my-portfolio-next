"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      className="cursor-pointer  hover:bg-[#1966D2] hover:text-white rounded-full p-3"
      onClick={toggleTheme}
    >
      {mounted && currentTheme === "dark" ? (
        <MdLightMode className="h-5 w-5" />
      ) : (
        <MdDarkMode className="h-5 w-5" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
