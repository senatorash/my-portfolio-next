import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { experienceData } from "./ResumeData";

const Resume = () => {
  return (
    <section className="py-16 px-6 md:px-16 space-y-14 my-24" id="resume">
      <h2 className="text-center text-4xl font-bold dark:[text-shadow:2px_2px_4px_#1966D2] [text-shadow:2px_2px_4px_#000000] mb-10 text-[#023E8A] dark:text-amber-50">
        RESUME
      </h2>
      <div className="bg-[#14171F] max-w-2xl mx-auto p-10">
        {/* Section: Skills */}
        <div className="mb-8">
          <h2 className="text-[#1966D2] text-lg font-bold mb-4 flex items-center gap-3 ">
            Skills
            <span className="w-full h-0.5 bg-amber-50 dark:bg-[#1966D2]"></span>
          </h2>
          <p className="text-amber-50 leading-6 lg:leading-7 text-sm md:text-base">
            HTML, CSS/SASS, Tailwind CSS, CSS Frameworks, JavaScript, React JS,
            Redux, TypeScript, Next JS, Node JS, Express JS, MongoDB, mySQL,
            Git, GitHub, WordPress, PHP.
          </p>
        </div>

        {/* Section: Interests */}
        <div className="mb-8">
          <h2 className="text-[#1966D2] text-lg font-bold mb-4 flex items-center gap-3">
            Interests
            <span className="w-full h-0.5  bg-amber-50 dark:bg-[#1966D2]"></span>
          </h2>
          <p className="text-amber-50 leading-relaxed">
            Java, Spring Boot, C#, .NET, React Native,
          </p>
        </div>

        <div className="mb-8">
          {" "}
          <h2 className="text-[#1966D2] text-lg font-bold mb-4 flex items-center gap-3">
            Experience
            <span className="w-full h-0.5  bg-amber-50 dark:bg-[#1966D2]"></span>
          </h2>
          {experienceData.length > 0 ? (
            experienceData.map((exp, idx) => {
              return (
                <div key={idx} className="">
                  {/* classname="bg-[#023E8A] rounded-lg p-6 shadow-md" */}
                  <h3 className="text-lg text-[#1966D2] font-semibold">
                    {exp.company ?? "Company"} -{" "}
                    <span className="italic text-amber-50 text-base">
                      {exp.role ?? "Role"}
                    </span>{" "}
                  </h3>
                  <p className=" text-xs text-[#1966D2] mt-1">{exp.duration}</p>
                  <ul className="list-disc list-outside mt-4 text-amber-50 leading-normal mb-4">
                    {exp.responsibilities.map((resp, i) => {
                      return (
                        <li key={i} className="">
                          <p className="text-sm md:text-base leading-6 md:leading-7">
                            {resp}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })
          ) : (
            <h2>No experience available</h2>
          )}
        </div>

        <div className="mb-8">
          <h2 className="text-[#1966D2] text-lg font-bold mb-4 flex items-center gap-3">
            Education
            <span className="w-full h-0.5  bg-amber-50 dark:bg-[#1966D2]"></span>
          </h2>
          <div>
            <h2 className="text-amber-50 mb-2">
              Lagos State University - Bsc.Chemistry ( 4.35 / 5.0)
            </h2>
            <p className="text-[#1966D2] text-xs">
              FEBRUARY 2020 - FEBRUARY 2024
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-[#1966D2] text-lg font-bold mb-4 flex items-center gap-3">
            Projects
            <span className="w-full h-0.5  bg-amber-50 dark:bg-[#1966D2]"></span>
          </h2>
          <div>
            <h2 className="text-amber-50 mb-2">
              Click{" "}
              <Link href="#project" className="text-[#1966D2]">
                here
              </Link>{" "}
              to view my projects
            </h2>
          </div>
        </div>

        <div className="">
          <Link
            href="https://drive.google.com/uc?export=download&id=1Bs--GhzRpIn4rtSmQhcexg0K8AvAChCO"
            target="__blank"
            rel="noopener noreferrer"
            download="Ashimi_Seide_Resume.pdf"
            className="text-amber-50 flex items-center gap-3 cursor-pointer hover:text-[#1966D2] w-max mx-auto"
          >
            <FaDownload /> <span>Download Resume</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resume;
