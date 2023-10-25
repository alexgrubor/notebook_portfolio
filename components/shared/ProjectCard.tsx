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
      className={`flex flex-col gap-2 bg-${color}-400 p-4 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-md`}
      style={{ width: isMobile ? "80vw" : '400px'}}
    >
      <h3 className="text-center font-extrabold text-2xl">{title}</h3>
      <div className="h-64 relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg transition-transform transform hover:scale-105"
        />
      </div>
      <div className="text-center">
        <p className="mt-4">
          {showFullDescription ? description : description.slice(0, 100)}
        </p>
        {description.length > 120 && (
          <div>
            <button
              className="hover:underline"
              onClick={handleReadMore}
            >
              {showFullDescription ? "Read Less" : "Read More"}
            </button>
          </div>
        )}
      </div>

      <div className="mt-4">
        <ul className="flex flex-wrap gap-2 justify-center">
          {technologies.map((tech) => (
            <li className="text-sm text-gray-700" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        {url && (
          <Link href={`/${url}`}>
            <button className="bg-[#eee7d7]  hover:bg-[#e3c16f] py-2 px-4 rounded-full transition-transform transform hover:scale-105">
              See Demo
            </button>
          </Link>
        )}
        <Link href={`/${github}`}>
          <button className="bg-gray-800 text-white hover:bg-gray-900 py-2 px-4 rounded-full transition-transform transform hover:scale-105">
            See Code
          </button>
        </Link>
      </div>

      <div className="mt-4">
        <ul className="flex flex-wrap gap-2 justify-center">
          {tags &&
            tags.map((tag) => (
              <li className="text-sm text-gray-600" key={tag}>
                #{tag}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default ProjectCard;
