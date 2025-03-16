import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section id="home" className="w-full px-6 md:px-12 pb-8 pt-10 md:pt-20 animate-fade-in">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2 items-center">
            <span className="text-sm text-pearl-text-secondary">Portfolio</span>
            <span className="text-sm text-pearl-text-secondary">•</span>
            <span className="text-sm text-pearl-text-secondary">
              Software Developer
            </span>
          </div>

          <div className="mt-4">
            <h1
              className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl md:max-w-full animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Discover the essence of frontend development , with Boring-Designer.
              <span className="text-pearl-text-secondary">
                {" "}
                Let's shape your brand into a masterpiece with collaborative work with me.
              </span>
            </h1>
          </div>

          <div className="pt-8" style={{ animationDelay: "0.2s" }}>
            <Link
              href="#about"
              className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              Discover more about me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
