import Image from "next/image";
import ProgressBar from "./ProgressBar";
import Link from "next/link";

const About = () => {
  return (
    <section className="dark:bg-[#222632]/20  bg-[#f0f0f0]/15" id="about">
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-0">
        <div className="w-full">
          <Image
            src="/img_ash.jpg"
            alt="Ashimi Seide"
            width={600}
            height={100}
          />
        </div>
        <div className="p-6 py-5 ">
          <div className="">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-1 bg-[#023E8A]"></div>
              <span className="text-sm text-[#023E8A] uppercase font-semibold ">
                Learn More About Me
              </span>
            </div>
            <p className="text-lg mb-4 text-neutral-600 dark:text-amber-50 font-normal">
              A certified and professional Node Js Software Developer.
            </p>
          </div>
          <ProgressBar skill="HTML" level={100} />
          <ProgressBar skill="CSS / Bootstrap 5" level={100} />
          <ProgressBar skill="Tailwind CSS" level={90} />
          <ProgressBar skill="JavaScript" level={80} />
          <ProgressBar skill="TypeScript" level={75} />
          <ProgressBar skill="React Js" level={80} />
          <ProgressBar skill="Next Js" level={80} />
          <ProgressBar skill="Node.js" level={90} />
          <ProgressBar skill="MongoDB" level={90} />
          <ProgressBar skill="MySQL" level={80} />
          <ProgressBar skill="PHP" level={80} />
          <ProgressBar skill="WordPress" level={100} />
          <Link
            href="#resume"
            className=" p-3 px-7 bg-[#023E8A] hover:bg-transparent border-2 border-[#023E8A] hover:text-[#023E8A] dark:hover:text-amber-50 text-amber-50 rounded transition-colors duration-300 cursor-pointer mt-4"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};
export default About;
