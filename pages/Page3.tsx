import { projects } from "@/public/projects/projets";
import Container from "@/components/shared/Container";
import ProjectCard from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { designProjects } from "@/public/graphicdesing/designProject";
import GraphicDesignCard from "@/components/shared/GraphicDesignCard";
import DecoSquares from "@/components/shared/DecoSquares";

const Page3 = () => {
  return (
    <Container className="mx-auto max-w-screen-lg">
      <h2 className="text-4xl font-bold pt-8 text-center text-purple-700">
        A Glimpse into My Portfolio
      </h2>
      <div className="flex justify-center my-1 gap-2">
        <DecoSquares />
        <DecoSquares />
      </div>
      <p className=" text-xl bg-yellow-400 my-4 px-2">
        Step into the captivating world of my digital notebook&apos;s Portfolio page,
        where you are in for an immersive journey through my portfolio and the
        exciting projects I have had the pleasure of working on.
      </p>
      <div className="flex justify-center mx-auto  flex-wrap gap-3 my-3">
        <h3 className="text-4xl font-bold pt-8 text-center text-lime-700">
          Web Development
        </h3>
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
          <h3 className="text-4xl mb-3 font-bold pt-8 text-center text-purple-700">
            Graphic Design
          </h3>
          <div className="flex flex-wrap gap-3  justify-center">
            <GraphicDesignCard
              title={designProjects[3].title}
              description={designProjects[3].description}
              image={designProjects[3].image}
              category={designProjects[3].category}
            />

            <GraphicDesignCard
              title={designProjects[4].title}
              description={designProjects[4].description}
              image={designProjects[4].image}
              category={designProjects[4].category}
            />

            <GraphicDesignCard
              title={designProjects[5].title}
              description={designProjects[5].description}
              image={designProjects[5].image}
              category={designProjects[5].category}
            />
            <GraphicDesignCard
              title={designProjects[1].title}
              description={designProjects[1].description}
              image={designProjects[1].image}
              category={designProjects[1].category}
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

      </div>
    </Container>
  );
};
export default Page3;
