import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { background } from "@/styles/background";

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
  const isDesktop = useMediaQuery({ query: "(min-width: 1565px)" });

  return (
    <section
      ref={ref}
      className={`${isMobile ? "0" : "mx-auto"} ${
        isMobile ? "w-90" : "max-w-[80%] w-[75%]"
      } p-4 border border-gray-500  min-h-screen   bg-white relative ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      style={{ scrollSnapAlign: "center", ...background, ...style }}
    >
      {isDesktop && (
        <>
          <div className="flex h-[100%] w-[2px] min-h-screen bg-orange-300 absolute top-0 left-[3rem]"></div>
          <div className="flex h-[100%] w-[2px] min-h-screen bg-orange-300 absolute top-0 left-[3.5rem]"></div>
        </>
      )}

      {children}
    </section>
  );
};

export default Section;
