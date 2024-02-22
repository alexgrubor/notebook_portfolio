"use client";
import { useState } from "react";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/public/projects/projets";
import GraphicDesignCard from "@/components/shared/GraphicDesignCard";
import { designProjects } from "@/public/graphicdesing/designProject";
import Section from "@/components/shared/Section";
import AnimatedCircle from "@/components/ui/AnimatedCircle";

const WorkPage = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  const allTags = Array.from(
    new Set(
      projects
        .flatMap((project) => project.tags || [])
        .filter((tag) => tag != null)
    )
  );

  const filteredProjects = projects.filter((project) => {
    if (selectedTechnology != null) {
      return project.technologies.includes(selectedTechnology);
    }
    if (selectedTag != null) {
      return project.tags?.includes(selectedTag);
    }
    return true;
  });

  return (
    <Section style={{ marginTop: "20px", marginBottom: "20px" }}>
      <AnimatedCircle/>
      <div className="flex flex-col  gap-[4rem]  items-center pl-3 mb-6 mx-auto max-w-screen-lg">
        <h1 className="text-6xl font-bold mt-4  textAnimation ">
          Additional Chapter: My Work
        </h1>
        <div className="text-black">
          <p className="text-xl">
            Welcome to the Work WorkPage of my digital notebook, where you can
            explore a collection of projects that have shaped my creative
            journey. Each entry is like a cherished note, telling a story of
            code, design, and innovation.
          </p>
          <p className="text-xl">
            I hope you enjoy your stay and find something that inspires you to
            create.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-screen-lg text-black" id="webdevelopment">
        <h2 className="p-4 text-3xl text-center">Web development</h2>
        <div className="  p-4 my-3 flex flex-col justify-center items-start gap-3">
          <p className="font-semibold">Filter by Technologies: </p>
          <div className="flex flex-wrap -mx-2">
            {allTechnologies.map((tech) => (
              <button
                className={`px-2 py-1 m-1 rounded-lg ${
                  selectedTechnology === tech
                    ? "bg-red-600 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onClick={() => setSelectedTechnology(tech)}
                key={tech}
              >
                {tech}
              </button>
            ))}
          </div>
          <p className="font-semibold">Filter by Tags:</p>
          <div className="flex flex-wrap -mx-2">
            {allTags.map((tag) => (
              <button
                className={`px-2 py-1 m-1 rounded-lg ${
                  selectedTag === tag
                    ? "bg-purple-600 text-white"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
                onClick={() => setSelectedTag(tag)}
                key={tag}
              >
                {tag}
              </button>
            ))}
          </div>
          <button
            className="px-2 py-1  rounded-lg bg-gray-500 text-white hover:bg-gray-600"
            onClick={() => {
              setSelectedTag(null);
              setSelectedTechnology(null);
            }}
          >
            Reset filters
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-5 ">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              tags={project.tags}
              github={project.github}
              color={"pink"}
              url={project.url}
            />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-screen-lg text-black" id="graphicdesign">
        <h2 className="p-4 text-3xl text-center">Graphic design</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {designProjects.map((project) => (
            <GraphicDesignCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
            />
          ))}
        </div>
      </section>
    </Section>
  );
};
export default WorkPage;
