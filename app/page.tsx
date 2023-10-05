"use client";
import { background } from "../styles/background";
import AleksandraHomepge from "../public/aleksandraHomePage.webp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/shared/ProjectCard";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { PiArrowFatLineDownDuotone, PiPenNibDuotone } from "react-icons/pi";
import { projects } from "@/public/projects/projets";
import GraphicDesignCard from "@/components/shared/GraphicDesignCard";
import { designProject } from "@/public/graphicdesing/designProject";
import Section from "@/components/shared/Section";
import { useState, useEffect } from "react";
import Container from "@/components/shared/Container";
import Expertise from "@/components/Expertise";
import { ArrowBigDown } from "lucide-react";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
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
          <h1 className="text-2xl text-slate-900 font-bold">{text}</h1>
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
            <PiArrowFatLineDownDuotone />{" "}
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
        <div className="flex flex-col gap-3 p-2" id="start">
          <div className="flex absolute bottom-1 text-slate-600 text-sm right-2">
            page 1
          </div>
          <h2 className="text-2xl font-extrabold pt-2 font-serif">
            The Start of My Creative Odyssey
          </h2>
          <p className="text-xl  bg-lime-400 w-fit px-2">
            Just as the first page of a notebook holds the promise of countless
            stories, this portfolio page marks the beginning of my creative
            journey.
          </p>
          <p>
            <strong className="bg-pink-400 flex text-xl gap -4 items-center justify-center w-fit">
              How everything started?
              <PiPenNibDuotone />
            </strong>
            I have always been deeply passionate about technology and
            creativity, even from my earliest memories. This innate curiosity
            and fascination for the dynamic world of design and innovation were
            embedded in me long before I could foresee the exciting journey that
            lay ahead.
          </p>
          <p>
            <strong className="bg-blue-400 text-xl block w-fit">
              A Surprising Twist:
            </strong>
            Surprisingly, my journey to where I am today took an unexpected
            turn. I graduated with a degree in law, a field that I initially
            pursued with great enthusiasm. However, life often has its own
            plans. Due to family reasons, I found myself relocating to Germany,
            where I encountered an unforeseen challenge: my legal education and
            expertise were not directly transferrable to the German legal
            system.
          </p>
          <p>
            <strong className="bg-yellow-400 text-xl block w-fit">
              Adaptation and Transformation:
            </strong>
            Faced with this unique predicament, I had to adapt and find an
            alternative path. It was during this time of adaptation and
            transformation that I discovered an opportunity to blend my passion
            for design with my need for a new career. I decided to leverage my
            graphic design skills as a means to support myself financially in a
            foreign land.
          </p>
          <p>
            <strong className="bg-pink-400 text-xl block w-fit">
              The WordPress Connection:
            </strong>
            As I delved into the world of design, I soon stumbled upon WordPress
            and website development. This was a turning point that I could never
            have predicted. The ease with which I could create and manipulate
            digital content on this platform was mesmerizing. I fell in love
            with the seamless combination of design and coding, a harmony that
            felt almost poetic.
          </p>
          <p>
            <strong className="bg-blue-400 text-xl block w-fit">
              Embracing the Journey:
            </strong>
            From that moment on, I embarked on a journey filled with creativity,
            design challenges, and the continuous quest for innovation. The
            world of website design became my canvas, and each project an
            opportunity to blend my legal acumen with my newfound passion. The
            fusion of my background in law with the ever-evolving digital
            landscape allowed me to approach design in a unique and holistic
            manner.
          </p>
          <p>
            <strong className="bg-yellow-400 text-xl block w-fit">
              A Lifelong Pursuit:
            </strong>
            Today, I can proudly say that I&apos;ve found my calling in the
            captivating realm of design and technology. What began as a response
            to unforeseen circumstances has blossomed into a lifelong pursuit of
            creativity, innovation, and the boundless possibilities that emerge
            when passion and technology intersect. This journey has not only
            provided me with a fulfilling career but has also enriched my life
            in countless ways. It serves as a testament to the power of
            adaptability, resilience, and the pursuit of one&apos;s true
            passions.
          </p>
        </div>
      </Section>
      <Section>
        <Container className="flex flex-col gap-4 p-2">
          <div className="flex absolute bottom-1 text-slate-600 text-sm right-2">
            page 2
          </div>
          <Expertise />
          <p className="text-center flex gap-2 justify-center">
            Thank you for taking a step further into my creative world. There is
            more to explore, so let&apos;s continue this digital journey
            together. <ArrowBigDown />
          </p>
        </Container>
      </Section>
      <Section
        className="flex min-h-screen flex-col gap-5 px-24 py-4 relative"
        style={background}
      >
        <div className="flex absolute bottom-1 text-slate-600 text-sm right-2">
          page 3
        </div>
        <Container className="flex flex-col gap">
          <h2 className="text-2xl font-bold pt-2  font-serif">
            A Glimpse into My Portfolio
          </h2>
          <p
            className="
        text-xl
        bg-yellow-400
        w-fit
        "
          >
            Welcome to Portfolio page of my digital notebook, where you will
            find a glimpse of my portfolio and the projects I have worked on.
          </p>
          <div className=" flex justify-center flex-wrap gap-3 my-3">
            <ProjectCard
              title={projects[1].name}
              description={projects[1].description}
              technologies={projects[1].technologies}
              image={projects[1].image}
              github={projects[1].github}
              tags={projects[1].tags}
              color="pink"
            />
         
            <ProjectCard
              title={projects[10].name}
              description={projects[10].description}
              technologies={projects[10].technologies}
              image={projects[10].image}
              github={projects[10].github}
              tags={projects[10].tags}
              color="blue"
              url={projects[10].url}
            />
            <ProjectCard
              title={projects[7].name}
              description={projects[7].description}
              technologies={projects[7].technologies}
              image={projects[7].image}
              github={projects[7].github}
              tags={projects[7].tags}
              color="yellow"
              url={projects[7].url}
            />
            <GraphicDesignCard
             title={designProject[2].title}
             description={designProject[2].description}
             image={designProject[2].img}
              className="flex flex-col gap-2 justify-evenly items-center bg-pink-400 p-4 shadow-lg max-h-[450px] w-[250px] overflow-hidden"
            
            />
            <GraphicDesignCard
             title={designProject[4].title}
             description={designProject[4].description}
             image={designProject[4].img}
              className="flex flex-col gap-2 justify-evenly items-center bg-lime-400 p-4 shadow-lg max-h-[450px] w-[250px] overflow-hidden"
            />
            <GraphicDesignCard
             title={designProject[5].title}
             description={designProject[5].description}
             image={designProject[5].img}
              className="flex flex-col gap-2 justify-evenly items-center bg-blue-400 p-4 shadow-lg max-h-[450px] w-[250px] overflow-hidden"
            
            />

          </div>

          <p className="text-center text-lg font-bold mb-2">
            Ready to explore more?
          </p>
          <div className="flex justify-center items-center flex-col gap-1">
            <Button>
              <Link href="/work">See more of my work</Link>
            </Button>

            <p>
              Thank you for joining me on this visual journey through my
              portfolio. Let is continue to craft remarkable digital experiences
              together.
            </p>
          </div>
        </Container>
      </Section>
      <Section
      >
        <Container className="flex flex-col gap-3">
          <div className="flex absolute bottom-1 text-slate-600 text-sm right-2">
            page 4
          </div>
          <h2 className="text-2xl font-bold pt-2 font-serif">
            Crafting Digital Magic
          </h2>
          <p className="text-xl bg-blue-400 w-fit">
            Welcome to Page 4 of my digital notebook, where I will give you a
            peek into my creative process and the magic that goes into crafting
            each digital experience.
          </p>
          <h1>
            ✨ The Alchemy of Creativity: Just like an alchemist turns base
            metals into gold, I transform ideas into digital masterpieces. Here
            is a glimpse into my creative laboratory:
          </h1>
          <p>
            <strong className="bg-lime-400 text-xl block w-fit">
              Idea Incubation:
            </strong>
            Every project begins with a spark of inspiration. I take the time to
            understand your vision and goals, letting the idea simmer and
            evolve.
          </p>
          <p>
            <strong
              className="bg-yellow-400 text-xl block w-fit">
              Design Elevation:
            </strong>
            With a keen eye for design, I sketch, wireframe, and prototype.
            Visual aesthetics and user experience take center stage as I craft
            layouts and graphics that captivate.
          </p>
          <p>
            <strong
              className="bg-pink-400 text-xl block w-fit">
              Coding Concoction:
            </strong>
            The magic truly begins with code. I bring designs to life, crafting
            web applications and interfaces that are both functional and
            enchanting.
          </p>
          <p>
            <strong
              className="
          bg-lime-400
          text-xl
          block
          w-fit
          "
            >
            
              Iterative Enchantment:
            </strong>
            I believe in the power of iteration. I refine, test, and refine
            again, ensuring that the final product is polished to perfection.
          </p>
          <p>
            <strong
              className="
          bg-yellow-400
          text-xl
          block
          w-fit
          "
            >
              User-Centric Enchantment:
            </strong>
            User experience is at the heart of every project. I strive to create
            digital experiences that engage, inform, and inspire.
          </p>
          <p>
            <strong
              className="bg-pink-400
          text-xl
          block
          w-fit"
            >
              Collaborative Sorcery:
            </strong>
            Collaboration is a key ingredient in my creative process. I work
            closely with clients, designers, and fellow developers to conjure
            digital wonders.
          </p>
          <p>
            <strong
              className="bg-lime-400
          text-xl
          block
          w-fit"
            >
              🚀 Endless Possibilities:
            </strong>
            Each project in my portfolio is a result of this magical process,
            and the possibilities for new creations are boundless.
          </p>
          <p>
            Turn the Page: Are you ready to embark on a collaborative journey?
            Turn the page to connect with me and start our next creative
            adventure.
          </p>
        </Container>
      </Section>
      <Section
      > <Container className="flex flex-col gap-5">
        <div className="flex absolute bottom-1 text-slate-600 text-sm right-2">page 5</div>
        <h2
          className="
        text-2xl
        font-bold
        pt-2
        font-serif"
        >
          Collaborative Chronicles
        </h2>
        <p
          className="
        text-xl
        bg-lime-400
        w-fit
        "
        >
          Welcome to Page 5 of my digital notebook, where you will discover the
          importance of collaboration and how it shapes my approach to every
          project.
        </p>
        <h1>
          <strong>The Power of Collaboration:</strong> Just as a symphony
          requires a conductor and musicians, successful projects thrive on
          collaboration. Here is how I approach working with clients and teams:
        </h1>

        <p>
          <strong
            className="
          bg-yellow-400
          text-xl
          block 
          w-fit
          "
          >
            🌐 Client-Centric Philosophy:
          </strong>{" "}
          Clients are at the heart of everything I do. I listen, understand your
          goals, and tailor solutions to your unique needs. Your vision guides
          our journey.
        </p>

        <p>
          <strong
            className="
          bg-pink-400
          text-xl
          block 
          w-fit
          "
          >
            🤔 Curiosity and Questions:
          </strong>{" "}
          I am naturally curious. I ask questions, seek to understand, and dig
          deep to uncover insights that inform our creative process.
        </p>

        <p>
          <strong
            className="
          bg-blue-400
          text-xl
          block 
          w-fit
          "
          >
            🧑‍🤝‍🧑 Team Harmony:
          </strong>{" "}
          Collaboration within teams is key to project success. I am a team
          player, fostering an environment where ideas flow freely, and each
          member&apos;s expertise is valued.
        </p>

        <p>
          <strong
            className="
          bg-yellow-400
          text-xl
          block 
          w-fit
          "
          >
            🤲 Transparent Communication:
          </strong>
          Open and honest communication is the bedrock of our collaboration. I
          keep you informed every step of the way, ensuring you&apos;re part of
          the decision-making process.
        </p>

        <p>
          <strong
            className="
          bg-pink-400
          text-xl
          block 
          w-fit
          "
          >
            📈 Iterative Improvement:
          </strong>{" "}
          I believe in constant improvement. We iterate, refine, and adapt,
          making the project stronger at each turn. Your feedback is invaluable.
        </p>

        <p>
          <strong
            className="
          bg-blue-400
          text-xl
          block 
          w-fit
          "
          >
            👍 A Shared Vision:
          </strong>{" "}
          Our collaboration isn&apos;t just about completing a project;
          it&apos;s about achieving a shared vision. Together, we&apos;ll bring
          your ideas to life.
        </p>

        <p>
          <strong
            className="
          bg-yellow-400
          text-xl
          block 
          w-fit
          "
          >
            🚀 Ready to Collaborate:
          </strong>{" "}
          Whether you have a project in mind or simply want to discuss
          possibilities, I&apos;m here to collaborate and create something
          remarkable together.
        </p>

        <p>
          <strong>📖 Turn the Page:</strong> Are you ready to embark on a
          collaborative journey? Turn the page to connect with me and start our
          next creative adventure.
        </p>
        </Container>
      </Section>
      <Section style={{marginBottom:'20px'}}
        id="contact"
      > <Container className="flex flex-col gap-12">
        <div className="flex absolute bottom-1 text-slate-600 text-sm right-2">page 6</div>
        <h2
          className="
        text-2xl
        font-bold
        pt-2
        font-serif"
        >
          Let&apos;s Connect
        </h2>
        <p
          className="
          bg-pink-400
          text-xl
          w-fit
          "
        >
          Get in Touch: I am just a click away. Whether you are ready to start a
          project, have questions, or simply want to say hello, here is how you
          can reach me:
        </p>
        <div className="flex justify-center ">
          <ContactForm />
        </div>
        <p className="text-center">Let&apos;s start a project!</p>
        </Container>

      </Section>
    </div>
  );
}
