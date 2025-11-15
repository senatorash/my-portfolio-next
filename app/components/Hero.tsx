import Image from "next/image";
import Link from "next/link";
import HeroTyping from "./UI/HeroTyping";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 items-center px-10 min-h-120 md:min-h-screen">
      <div className="flex flex-col text-center md:text-left items-center md:items-start">
        <span>I'M</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Ashimi Seide
        </h2>
        <div className="text-3xl font-semibold text-[#023E8A] mt-4 mb-8">
          <HeroTyping />
        </div>

        <div className="flex gap-4">
          <Link href="www.google.com" className="btn">
            Hire Me
          </Link>
          <Link href="www.example.com/contact" className="btn-outline">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="hidden md:flex rounded-lg border-2 border-[#023E8A] items-center justify-center  w-100 mx-auto ">
        <Image
          src="/my-pic.png"
          alt="ashimi_seide"
          loading="lazy"
          className="object-cover"
          width={500}
          height={300}
        ></Image>
      </div>
    </div>
  );
};
export default Hero;
