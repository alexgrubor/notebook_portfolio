"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";


interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  url?: string;
  github: string;
  tags?: string[];
  color: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  url,
  github,
  tags,
  color,
  ...props
}: ProjectCardProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const handleReadMore = () => {
    setShowFullDescription(!showFullDescription);
  };
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div
      className={`flex flex-col gap-2 justify-evenly bg-${color}-400 p-4 shadow-lg max-h-[650px] overflow-hidden`}
      style={{
        width: "400px",
      }}
    >
      <h3 className="text-center font-extrabold text-2xl">{title}</h3>
      <div className="h-[250px] ">
        <Image
          src={image}
          alt={title}
          className="h-[250px] overflow-auto"
        />
      </div>
      <div className="text-center ">
        <p className="mt-4">
          {showFullDescription ? description : description.slice(0, 100)}
        </p>
        {description.length > 100 && (
          <div>
            <Button variant="link" onClick={handleReadMore}>
              {showFullDescription ? "Read Less" : "Read More"}
            </Button>
          </div>
        )}
      </div>

     
          <ul className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <li className="text-sm text-[#eee7d7]" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        

      <div className="flex justify-center items-center gap-4">
        {url && (
          <Link href={`/${url}`}>
            <Button>See Demo</Button>
          </Link>
        )}
        <Button variant="secondary">
          <Link href={`/${github}`}>See code</Link>
        </Button>
      </div>
          {/* <ul className="flex justify-center gap-2">
            {tags &&
              tags.map((tag) => (
                <li className="text-sm text-slate-600" key={tag}>
                  #{tag}
                </li>
              ))}
          </ul> */}
      
    </div>
  );
};
export default ProjectCard;
