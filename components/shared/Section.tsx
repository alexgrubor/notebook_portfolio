import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { background } from "@/styles/background";
import Lines from "@/styles/lines";
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

const Section = ({ children, className, style }: SectionProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(ref);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <section
      ref={ref}
      className={`mx-auto ${
        isMobile ? "w-90" : "max-w-[80%] w-[75%]"
      } p-4 border border-gray-500  min-h-screen pl-[2rem] lg:pl-[4rem] bg-white relative ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      style={{ ...background, ...style }}
    >
      {!isMobile && <Lines />}
      {children}
    </section>
  );
};

export default Section;
