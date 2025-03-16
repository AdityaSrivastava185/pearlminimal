import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const WorkSection = () => {
    const projects = [
        {
          id: 1,
          image: "/heroimage.jpg",
          title: "Boring Designer Marketplace",
          category: "Boring Designer",
          link: "#"
        },
        {
          id: 2,
          image: "/heroimage.jpg",
          title: "© Boring Designer ",
          category: "Boring Designer",
          link: "#"
        },
        {
          id: 3,
          image: "/heroimage.jpg",
          title: "Boring Designer Premium",
          category: "Boring Designer",
          link: "#"
        },
        {
          id: 4,
          image: "/heroimage.jpg",
          title: "Boring Designer Templates",
          category: "Boring Designer",
          link: "#"
        }
      ];
    
      return (
        <section id="project" className="w-full px-6 md:px-12 py-16 animate-fade-in">
            <div className="w-full md:w-1/4 mb-6">
            <h2 className="text-lg font-medium">Explore my work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
                link={project.link}
              />
            ))}
          </div>
        </section>
  );
};

export default WorkSection;
