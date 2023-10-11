import Image, { StaticImageData } from "next/image";
interface GraphicDesignCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  className?: string;
}

const GraphicDesignCard = ({
  title,
  description,
  image,
  className,
}: GraphicDesignCardProps) => {
  return (
    <div className={className}>
      <Image src={image} alt={title} width={200} height={200} />
      <h2 className="text-2xl">{title}</h2>
      <p className="text-center text-slate-800 ">{description}</p>
    </div>
  );
};
export default GraphicDesignCard;
