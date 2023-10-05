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
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default GraphicDesignCard;
