import { FaSignal } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { projects } from "./ResumeData";
import Link from "next/link";

const Project = () => {
  return (
    <section className="py-16 px-20 md:px-16 space-y-14 my-24 dark:bg-[#222632]/50 bg-[#f0f0f0]/23 rounded-lg">
      <h2 className="text-center text-4xl font-bold dark:[text-shadow:2px_2px_4px_#1966D2] [text-shadow:2px_2px_4px_#000000] mb-10 text-[#023E8A] dark:text-amber-50 uppercase">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {projects.length > 0 ? (
          projects.map((prj, idx) => {
            return (
              <div
                key={idx}
                className="bg-[#023E8A] p-8 shadow-lg min-h-70 md:min-h-50 flex flex-col justify-between hover:bg-[#14171F] hover:border-2 hover:border-[#1966D2] rounded transition-transform duration-300 hover:scale-[1.05] group"
              >
                <div className="mb-5">
                  <h3 className="text-amber-50 text-lg font-semibold group-hover:text-blue-600">
                    {prj.name}
                  </h3>
                  <p className="text-amber-50 text-xs italic group-hover:text-blue-600">
                    {prj.stack}
                  </p>
                </div>
                <p className="text-amber-50 mb-5 text-sm group-hover:text-blue-600">
                  {prj.description}
                </p>

                <div className="flex justify-between items-center gap-4 mt-4">
                  <Link
                    href={prj.link}
                    className="flex items-center gap-3 text-white"
                  >
                    <FaSignal />
                    <span>Live</span>
                  </Link>
                  <Link
                    href={prj.code}
                    className="flex items-center gap-3 text-white"
                  >
                    <FaCode />
                    <span>Code</span>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-amber-50">No Projects to show</p>
        )}
      </div>
    </section>
  );
};

export default Project;
