"use client";

import AleksandraHomepge from "../public/aleksandraHomePage.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { PiArrowFatLineDownDuotone, PiPenNibDuotone } from "react-icons/pi";
import Section from "@/components/shared/Section";
import { useState, useEffect } from "react";
import Page1 from "@/pages/Page1";
import Page2 from "@/pages/Page2";
import Page3 from "@/pages/Page3";
import Page4 from "@/pages/Page4";
import Page5 from "@/pages/Page5";
import Page6 from "@/pages/Page6";
import { useTheme } from 'next-themes';
import BackToTopButton from "@/components/ui/backToTopButton";



export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const { theme } = useTheme();
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

  return (
    <div className="flex flex-col gap-4">
      <motion.section
        className="min-h-screen w-full flex items-center justify-center gap-10 "
        style={{
          flexDirection: isMobile ? "column-reverse" : "row",
          padding: isMobile ? "1rem" : "0",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div
          className="flex flex-col gap-4"
          style={{
            width: isMobile ? "100%" : "39%",
          }}
        >
          <h1 className={`text-2xl ${theme === 'light' ? 'text-slate-900' : 'text-white'}  font-bold`}>{text}</h1>
          <p>
            I am a passionate and creative individual who loves to code and
            design. I have a keen eye for detail and a knack for problem
            solving. I am a fast learner and always eager to learn new things. I
            am a team player and I enjoy working with others. I am a
            perfectionist and I always strive to do my best. I am a
            self-motivated person and I always give my 100% to everything I do.
          </p>
          <p>
            Just as an old notebook brims with stories waiting to be told, my
            digital notebook is filled with the tales of web development and
            graphic design. Each project is a page, each line of code a
            sentence, and each design element a brushstroke, coming together to
            create captivating digital narratives.
          </p>
          <p className="text-lg">
            Welcome to My Digital Notebook! Hope you will enjoy it!
          </p>
          <Button
            className="flex items-center justify-center gap-5"
            style={{
              background: "#eee7d7",
              color: "black",
              width: isMobile ? "100%" : "40%",
            }}
          >
            <PiArrowFatLineDownDuotone />
            <Link href="/#start">Read My Notebook</Link>
          </Button>
        </div>
        <div>
          <Image
            src={AleksandraHomepge}
            alt="Aleksandra's Homepage"
            placeholder="blur"
            className="rounded-full"
          />
        </div>
      </motion.section>
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
      <BackToTopButton/>
    </div>
  );
}
