"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { PiArrowFatLineDownDuotone } from "react-icons/pi";
import Section from "@/components/shared/Section";
import { useState, useEffect, useLayoutEffect } from "react";
import Page1 from "@/pages/Page1";
import Page2 from "@/pages/Page2";
import Page3 from "@/pages/Page3";
import Page4 from "@/pages/Page4";
import Page5 from "@/pages/Page5";
import Page6 from "@/pages/Page6";
import BackToTopButton from "@/components/ui/backToTopButton";
import ArtGenerate from "@/components/ui/ArtGenerate";
import DecoSquares from "@/components/shared/DecoSquares";
import LoadingSpiner from "@/components/ui/LoadingSpiner";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { title: "The Start of My Creative Odyssey", content: <Page1 /> },
    { title: "The Palette of Expertise", content: <Page2 /> },
    { title: "A Glimpse into My Portfolio", content: <Page3 /> },
    { title: " The Alchemy of Creativity", content: <Page4 /> },
    { title: "Learning and Collaborative Chronicles", content: <Page5 /> },
    { title: "Let`'s Connect", content: <Page6 /> },
  ];
  const [motionSectionLoaded, setMotionSectionLoaded] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [text, setText] = useState("");
  const fullText =
    "Greetings, I am Aleksandra, a Full Stack Web Developer and Graphic Designer.";

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useLayoutEffect(() => {
    if (!motionSectionLoaded) {
      setMotionSectionLoaded(true);
    }
  }, [motionSectionLoaded]);

  return (
    <div className="flex flex-col  gap-4">
      {!motionSectionLoaded && (
        <div className="flex flex-col items-center justify-center h-screen">
          <LoadingSpiner />
        </div>
      )}
      <motion.section
        className="min-h-screen max-w-[80%] w-[75%] mx-auto flex flex-col lg:flex-row justify-center items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-col gap-4">
          <h1 className={`text-2xl  font-bold`}>{text}</h1>
          <DecoSquares />
          <p>
            Passionate about coding and design, my attention to detail and
            problem-solving skills are evident. A quick learner, I am always
            eager to embrace new challenges and thrive in collaborative team
            environments. With a strong commitment to excellence, I consistently
            give my best, driven by self-motivation.
          </p>
          <p>
            Just as an old notebook brims with stories waiting to be told, my
            digital notebook is filled with the tales of web development and
            graphic design. Each project is a page, each line of code a
            sentence, and each design element a brushstroke, coming together to
            create captivating digital narratives.
          </p>
          <DecoSquares />
          <p className="text-lg">
            Welcome to My Digital Notebook! Hope you will enjoy it!
          </p>
          <Button
            className="flex items-center justify-center gap-5  font-bold"
            style={{
              background: "#eee7d7",
              color: "black",
              width: isMobile ? "100%" : "40%",
            }}
          >
            <PiArrowFatLineDownDuotone />
            <Link
              href="#start"
              className="duration-1000 ease-in-out"
            >
              Read My Notebook
            </Link>
          </Button>
        </div>
        <div>
          <ArtGenerate />
        </div>
      </motion.section>

      {!isMobile && motionSectionLoaded && (
        <div
          className="min-h-screen max-w-[80%] w-[75%] mx-auto flex flex-col lg:flex-row justify-start my-2 mb-7 "
          id="start"
        >
          <ul className="flex flex-col gap-3 w-1/4 bg-[#eee7d7] text-black p-3">
            <p className="font-bold text-lg">Notebook Content</p>
            {tabs.map((tab, index) => (
              <li key={index}>
                <button
                  className={` ${
                    activeTab === index + 1 ? "text-purple-600" : ""
                  } ${activeTab === index + 1 ? "px-2" : ""}`}
                  onClick={() => setActiveTab(index + 1)}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
          <div
            className="w-3/4 bg-white"
            style={{
              border: "2px solid #a9a9a9",
              borderLeft: "1px solid #d3d3d3",
              borderRadius: "0 10px 10px 0",
              boxShadow: "26px 17px 15px 0px rgba(0,0,0,0.1)",
            }}
          >
            {tabs.map((tab, index) => (
              <section
                key={index}
                style={{
                  display: activeTab === index + 1 ? "block" : "none",
                  transition: "ease-in-out",
                }}
              >
                {tab.content}
              </section>
            ))}
          </div>
        </div>
      )}

      {isMobile && motionSectionLoaded && (
        <div>
          <Section>
            <Page1 />
          </Section>
          <Section>
            <Page2 />
          </Section>
          <Section>
            <Page3 />
          </Section>
          <Section>
            <Page4 />
          </Section>
          <Section>
            <Page5 />
          </Section>
          <Section style={{ marginBottom: "20px" }} id="contact">
            <Page6 />
          </Section>
        </div>
      )}

      <BackToTopButton />
    </div>
  );
}
