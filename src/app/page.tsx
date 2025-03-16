import AboutSection from "@/components/About/About";
import FooterSection from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/Hero";
import SkillsSection from "@/components/Skiils/Skills";
import WorkSection from "@/components/Works/Work";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto pb-16">
        <HeroSection />
        
        <div className="px-6 md:px-12 pt-16">
          <div className="w-full bg-pearl-gray rounded-lg p-6 lg:p-8">
            <div className="flex items-center justify-center">
              <Image 
                src="/heroimage.jpg" 
                width={1000}
                height={1000}
                alt="Hero Image Boring Designer" 
                className="w-full h-auto rounded shadow-sm"
              />
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-pearl-text-secondary">Boring Designer</p>
              <h3 className="text-md font-medium">Explore more about me</h3>
            </div>
          </div>
        </div>
      </div>
      <AboutSection/>
      <SkillsSection/>
      <WorkSection/>
      <FooterSection />
      </div>
  );
}
