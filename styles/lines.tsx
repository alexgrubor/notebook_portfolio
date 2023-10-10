import { useMediaQuery } from "react-responsive";
const Lines = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  if (isDesktop) {
    return (
      <>
        <div className="flex h-[100%] w-[2px] min-h-screen bg-orange-300 absolute top-0 left-[3rem]"></div>
        <div className="flex h-[100%] w-[2px] min-h-screen bg-orange-300 absolute top-0 left-[3.5rem]"></div>
      </>
    );
  } else {
    return null;
  }
};

export default Lines;
