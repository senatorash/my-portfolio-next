"use client";
import Typewriter from "typewriter-effect";

const HeroTyping = () => {
  return (
    <Typewriter
      options={{
        strings: ["Software Engineer", "Web Developer", "Full Stack Developer"],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 20,
      }}
    />
  );
};
export default HeroTyping;
