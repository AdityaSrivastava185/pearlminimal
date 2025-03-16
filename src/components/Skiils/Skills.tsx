import React from "react";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full px-6 md:px-12 py-20 md:py-28 animate-fade-in">
      <div className="flex flex-col md:flex-row w-full mx-auto">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-medium">Skills and Technology</h2>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex flex-col md:flex-row w-full mx-auto md:gap-10 md:mb-10">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-6">
              01
            </h3>
           <h3 className="text-3xl md:text-4xl leading-tight mb-6  text-zinc-300 font-light">
              <span className="text-3xl md:text-4xl font-medium leading-tight text-white"> Nextjs/Reactjs</span> Full-stack React framewor ensures better SEO, performance, and
              faster page loads.
            </h3>
          </div>

          <div className="flex flex-col md:flex-row w-full mx-auto md:gap-10 md:mb-10">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-6">
              02
            </h3>
            <h3 className="text-3xl md:text-4xl leading-tight mb-6  text-zinc-300 font-light">
              <span className="text-3xl md:text-4xl font-medium leading-tight text-white">Tailwind Css</span> Utility-first CSS framework for building
              modern, responsive, and customizable designs without writing much
              custom CSS. 
            </h3>
          </div>

          <div className="flex flex-col md:flex-row w-full mx-auto md:gap-10 md:mb-10">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-6">
              03
            </h3>
           <h3 className="text-3xl md:text-4xl leading-tight mb-6  text-zinc-300 font-light">
              <span className="text-3xl md:text-4xl font-medium leading-tight text-white">Shadcn ui</span> Minimal UI component library built on top
              of Radix UI and Tailwind CSS. 
            </h3>
          </div>
          <div className="flex flex-col md:flex-row w-full mx-auto md:gap-10 md:mb-10">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-6">
              04
            </h3>
           <h3 className="text-3xl md:text-4xl leading-tight mb-6  text-zinc-300 font-light">
              <span className="text-3xl md:text-4xl font-medium leading-tight text-white">Vercel</span> Deployment platform for front-end
              applications, offering blazing-fast hosting, serverless functions,
              and automatic Git integrations.
            </h3>
          </div>
          <div className="flex flex-col md:flex-row w-full mx-auto md:gap-10">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight text-white mb-6">
              05
            </h3>
           <h3 className="text-3xl md:text-4xl leading-tight mb-6  text-zinc-300 font-light">
              <span className="text-3xl md:text-4xl font-medium leading-tight text-white">Typescript</span> Strongly-typed JavaScript that helps in
              catching errors at compile-time, improving code maintainability,
              scalability, and developer productivity.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
