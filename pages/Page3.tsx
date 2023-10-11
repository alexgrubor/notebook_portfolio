import { projects } from "@/public/projects/projets";
import Container from "@/components/shared/Container";
import ProjectCard from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { designProject } from "@/public/graphicdesing/designProject";
import GraphicDesignCard from "@/components/shared/GraphicDesignCard";

const Page3 = () => {
  return (
    <Container className="mx-auto max-w-screen-lg">
      <div className="flex absolute bottom-1 text-slate-600 text-sm right-2">
        page 3
      </div>
      <h2 className="text-2xl font-bold pt-2  font-serif">
        A Glimpse into My Portfolio
      </h2>
      <p className=" text-xl bg-yellow-400 my-4 w-fit">
        Welcome to Portfolio page of my digital notebook, where you will find a
        glimpse of my portfolio and the projects I have worked on.
      </p>
      <div className="flex justify-center mx-auto  flex-wrap gap-3 my-3">
      <h3 className="text-4xl font-bold pt-8 text-center text-purple-700">Web Development</h3>
        <div className="flex flex-wrap gap-3 justify-center">
        
          <ProjectCard
            title={projects[1].name}
            description={projects[1].description}
            technologies={projects[1].technologies}
            image={projects[1].image}
            github={projects[1].github}
            tags={projects[1].tags}
            url={projects[1].url}
            color="pink"
          />

          <ProjectCard
            title={projects[10].name}
            description={projects[10].description}
            technologies={projects[10].technologies}
            image={projects[10].image}
            github={projects[10].github}
            tags={projects[10].tags}
            color="blue"
            url={projects[10].url}
          />

          <ProjectCard
            title={projects[7].name}
            description={projects[7].description}
            technologies={projects[7].technologies}
            image={projects[7].image}
            github={projects[7].github}
            tags={projects[7].tags}
            color="yellow"
            url={projects[7].url}
          />
           <ProjectCard
            title={projects[11].name}
            description={projects[11].description}
            technologies={projects[11].technologies}
            image={projects[11].image}
            github={projects[11].github}
            tags={projects[11].tags}
            color="lime"
            url={projects[11].url}
          />
        </div>
     <div>
      <h3 className="text-4xl mb-3 font-bold pt-8 text-center text-purple-700">Graphic Design</h3>
        <div className="flex flex-wrap gap-3 justify-center">
         
          <GraphicDesignCard
            title={designProject[2].title}
            description={designProject[2].description}
            image={designProject[2].img}
            className="flex flex-col gap-2 justify-evenly items-center bg-pink-400 p-4 shadow-lg max-h-[450px] w-[250px] overflow-hidden"
          />

          <GraphicDesignCard
            title={designProject[4].title}
            description={designProject[4].description}
            image={designProject[4].img}
            className="flex flex-col gap-2 justify-evenly items-center bg-lime-400 p-4 shadow-lg max-h-[450px] w-[250px] overflow-hidden"
          />

          <GraphicDesignCard
            title={designProject[5].title}
            description={designProject[5].description}
            image={designProject[5].img}
            className="flex flex-col gap-2 justify-evenly items-center bg-blue-400 p-4 shadow-lg max-h-[450px] w-[250px] overflow-hidden"
          />
        </div>
        </div>
      </div>

      <p className="text-center text-lg font-bold mb-2">
        Ready to explore more?
      </p>
      <div className="flex justify-center items-center flex-col gap-2">
        <Button className="my-3">
          <Link href="/work">See more of my work</Link>
        </Button>

        <p>
          Thank you for joining me on this visual journey through my portfolio.
          Let is continue to craft remarkable digital experiences together.
        </p>
      </div>
    </Container>
  );
};
export default Page3;
