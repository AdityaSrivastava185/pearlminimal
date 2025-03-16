import React from "react";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="w-full px-6 md:px-12 py-20 md:py-28 animate-fade-in">
        <div className="flex flex-col md:flex-row w-full mx-auto">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-medium">Our Mission</h2>
          </div>

          <div className="w-full md:w-3/4">
            <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6">
              We believe in the power of design to inspire and make a meaningful
              impact.
            </h3>

            <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6">
              We aim to transform ideas into captivating designs.
            </h3>

            <div className="flex flex-col md:flex-row">
              <h3 className="text-3xl md:text-4xl font-light leading-tight">
                We strive to bring creativity and functionality together, &nbsp; crafting solutions that resonate with your audience.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
