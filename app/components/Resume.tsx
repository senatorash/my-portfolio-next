"use client";
const Resume = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-16 space-y-14">
      <h2 className="text-center text-4xl font-bold text-shadow/100">RESUME</h2>
      <div className="bg-[#14171F] max-w-3xl mx-auto p-6">
        {/* Section: Skills */}
        <div className="mb-12">
          <h2 className="text-[#1966D2] text-lg font-bold mb-4 flex items-center gap-3">
            Skills
            <span className="w-full h-0.5 bg-amber-50 dark:bg-[#1966D2]"></span>
          </h2>
          <p className="text-gray-200 leading-relaxed">
            HTML, CSS/SASS, Tailwind CSS, JavaScript, React JS, Redux,
            TypeScript, Jest, Firebase, Git, GitHub, Webflow, Adobe Illustrator
          </p>
        </div>

        {/* Section: Interests */}
        <div className="mb-12">
          <h2 className="text-[#1966D2] text-lg font-bold mb-4 flex items-center gap-3">
            Interests
            <span className="w-full h-0.5  bg-amber-50 dark:bg-[#1966D2]"></span>
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Node JS, Express, MongoDB, Next.js, React Native, Spring Boot
          </p>
        </div>

        {/* Section: Experience */}
        <div>
          <h2 className="text-[#1966D2] text-lg font-bold mb-4 flex items-center gap-3">
            Experience
            <span className="w-full h-0.5  bg-amber-50 dark:bg-[#1966D2]"></span>
          </h2>

          <div className="bg-[#023E8A] rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold">
              Dot —{" "}
              <span className="italic text-[#1966D2]">Frontend Engineer</span>
            </h3>
            <p className="text-sm text-[#1966D2] mt-1">
              OCTOBER 2021 - PRESENT
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-200 leading-relaxed">
              <li>
                Developed enterprise-level dashboards and consumer web
                applications used by over 50,000 users, improving performance
                and usability.
              </li>
              <li>
                Collaborated with cross-functional teams using React,
                TypeScript, and Redux to build and maintain scalable UI
                components.
              </li>
              <li>
                Enhanced user experience through accessibility, responsive
                design, and code optimization.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
