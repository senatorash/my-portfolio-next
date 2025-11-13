"use client";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  skill: string;
  level: number;
}

const ProgressBar = ({ skill, level }: ProgressBarProps) => {
  const [width, setWidth] = useState(0);

  // Animate the bar filling
  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 300);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-neutral-600 dark:text-gray-300 font-normal">
          {skill}
        </span>
        <span className="text-neutral-600 dark:text-gray-300 font-normal">
          {width}%
        </span>
      </div>
      <div className="w-full dark:bg-gray-800 bg-neutral-400 rounded-full h-3 overflow-hidden">
        <div
          className=" bg-[#1966D2] h-3 rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
