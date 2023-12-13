import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface GraphicDesignCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  className?: string;
  category?: string;
}

const GraphicDesignCard = ({
  title,
  description,
  image,
  category,
  className,
}: GraphicDesignCardProps) => {
  const [isReadMoreClicked, setIsReadMoreClicked]= useState(false)


  return (
    <div className="flex w-full md:w-[450px]">
      <div className="flex flex-col  items-center bg-white border border-lime-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          src={image}
          alt={title}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          width={250}
          height={250}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-purple-600 dark:text-white">
            {title}
          </h3>
          <p className="mb-3 font-normal text-gray-800 dark:text-gray-400">
            {
              isReadMoreClicked ? description : description.slice(0, 100)
            }
          </p>
          <button
            className="px-2 py-1  rounded-lg bg-gray-800 text-white hover:bg-gray-600"
            onClick={() => setIsReadMoreClicked(!isReadMoreClicked)}
          >
            {
              isReadMoreClicked ? "Read Less" : "Read More"
            }
          </button>
          <p className="text-sm text-end text-purple-600 my-1">#{category}</p>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignCard;
