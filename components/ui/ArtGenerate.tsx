import { useState } from "react";


const ArtGenerate = () => {
  const [elements, setElements] = useState(generateArt());
  
  function generateArt() {
    const art = [];
    for (let i = 0; i < 49; i++) {
      art.push(
        <span
          key={i}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: getRandomColor(),
            display: "block",
            border: "2px solid black",
          }}
        ></span>
      );
    }
    return art;
  }

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const regenerateArt = () => {
    setElements(generateArt());
  };
  return (
    <div className="bg-white w-[400px] p-8 text-center">
      <div className={`mb-4 flex gap-2 justify-center flex-wrap`}>
        {elements.map((element) => element)}
      </div>
      <button
        className="bg-[#eee7d7] font-bold text-black py-2 px-4 rounded"
        onClick={regenerateArt}
      >
        Regenerate Art
      </button>
    </div>
  );
};
export default ArtGenerate;
