import { BsFillArrowUpCircleFill } from "react-icons/bs";
const BackToTopButton = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button onClick={backToTop} className="fixed bottom-3 right-6 ">
      <BsFillArrowUpCircleFill size={34} />
    </button>
  );
};
export default BackToTopButton;
