"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/public/projects/projets";
import GraphicDesignCard from "@/components/shared/GraphicDesignCard";
import { designProject } from "@/public/graphicdesing/designProject";
import Section from "@/components/shared/Section";


const page = () => {
  return (
    <Section style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div className="flex flex-col lg:flex-row gap-[7rem] items-center pl-3 mb-6 mx-auto max-w-screen-lg">
        <h1
          className="text-6xl font-bold w-[300px] "
          style={{
            borderBottom: "2px solid black",
          }}
        >
          Additional Chapter: My Work
        </h1>
        <div>
          <p className="text-xl">
            Welcome to the Work page of my digital notebook, where you can
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

      <section className="mx-auto max-w-screen-lg" id="webdevelopment">
        <h2 className="p-4 text-3xl text-center">Web development</h2>
        <div className="flex flex-wrap justify-center gap-5 ">
          {projects.map((project) => (
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
      <section className="mx-auto max-w-screen-lg" id="graphicdesign">
        <h2 className="p-4 text-3xl text-center">Graphic design</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {designProject.map((project) => (
            <GraphicDesignCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.img}
              className="flex flex-col gap-2 justify-evenly items-center bg-lime-400 p-4 shadow-lg max-h-[650px] w-[250px] overflow-hidden"
            />
          ))}
        </div>
      </section>
    </Section>
  );
};
export default page;
