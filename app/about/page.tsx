"use client";
import { background } from "@/styles/background";
import Image from "next/image";
import AleksandraAbout from "../../public/Aleksandra-About.png";
import GitHubCalendar from "react-github-calendar";
import { useMediaQuery } from "react-responsive";
import Section from "@/components/shared/Section";

const AboutPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <Section style={{marginTop: '20px', marginBottom: '20px'}}
    >
      <h1
        className="text-6xl font-bold w-[100px] "
        style={{
          borderBottom: "2px solid black",
        }}
      >
        Additional Chapter: About
      </h1>
      <div
        className="flex  gap-5  items-center py-2"
        style={{
          flexDirection: isMobile ? "column-reverse" : "row",
        }}
      >
        <section className="flex flex-col gap-5" style={{
          width: isMobile ? '100%' : '49%'
        }}>
          <p className="">
            As a passionate Full Stack Web Developer, I am not just a coder; I
            am a web wizard who conjures up captivating digital experiences.
            Based in the enchanting city of Essen, Germany, I am on a mission to
            make the internet a more magical place, one pixel at a time.
          </p>
          <p>
            I have always had a passion for the web and its boundless potential
            for creativity and innovation. My freelance journey initially
            revolved around graphic design, but my curiosity led me to dive
            deeper into the world of web development. It all began with crafting
            WordPress websites, and I soon realized the exciting possibilities
            that awaited. As I continued my exploration of this dynamic field, I
            embarked on a 14-month bootcamp journey to master MERN Full Stack
            Development. During this intensive period of growth, my hunger for
            knowledge drove me to explore various other technologies, including
            the likes of Tailwind, TypeScript, and many more.
          </p>
          <p>
            This ever-evolving journey has not only equipped me with a diverse
            skill set but has also reinforced my commitment to pushing the
            boundaries of web development. I am excited to bring my creative
            flair and technical expertise to any project, always striving to
            exceed expectations and create exceptional online experiences.
          </p>
        </section>
        <section className="flex gap-1 relative">
          <div>
            <Image src={AleksandraAbout} alt="Aleksandra About" />
          </div>
          <div
            className="shadow-xl"
            style={{
              position: "absolute",
              backgroundColor: "#f1f1f1",
              top: "0",
              right: "0",
              color: "white",
              padding: "10px",
              borderRadius: "20px",
              marginLeft: "2rem",
              alignSelf: "flex-start",
              border: "2px solid black",
            }}
          >
           {!isMobile && <p className="text-black">Greetings, I am Aleksandra!</p>} 
          </div>
        </section>
      </div>
      <section>
        <h2 className="text-2xl font-bold">My Dual Expertise</h2>
        <h3>Full Stack Web Developer</h3>
        <div className="flex flex-wrap gap-5 ">
          <ul className="bg-lime-400 flex flex-col gap-3 p-3">
            Front-end Magic
            <li>
              <strong>HTML</strong> - The foundation of the web
            </li>
            <li>
              <strong>CSS</strong> - The magic of styling
            </li>
            <li>
              <strong>JavaScript / Typescript</strong> - The power of
              interactivity
            </li>
            <li>
              <strong>React</strong> - The art of componentization
            </li>
            <li>
              <strong>Next.js</strong> - The future of web development
            </li>
          </ul>
          <ul className="bg-yellow-400 flex flex-col gap-3 p-3">
            Back-end Sorcery:
            <li>
              <strong>Node.js</strong> - The magic of JavaScript on the server
            </li>
            <li>
              <strong>Express.js</strong> - The power of routing
            </li>
            <li>
              <strong>PostgreSQL / MongoDb / MySql</strong> - The art of data
              storage
            </li>
            <li>
              <strong>Prisma</strong> - The future of database access
            </li>
          </ul>
          <ul className="bg-pink-400 flex flex-col gap-3 p-3">
            Other Tools of the Trade:
            <li>
              <strong>Git</strong> - The magic of version control
            </li>
            <li>
              <strong>GitHub</strong> - The power of collaboration
            </li>
            <li>
              <strong>VSCode</strong> - The art of code editing
            </li>
            <li>
              <strong>Terminal</strong> - The future of command line interfaces
            </li>
          </ul>
          <ul className="bg-blue-400 flex flex-col gap-3 p-3">
            Secret Ingredients:
            <li>
              <strong>Passion</strong> - The magic of motivation
            </li>
            <li>
              <strong>Curiosity</strong> - The power of exploration
            </li>
            <li>
              <strong>Perseverance</strong> - The art of determination
            </li>
            <li>
              <strong>Empathy</strong> - The future of humanity
            </li>
            <li>
              <strong>Red Bull</strong> - The magic of energy
            </li>
          </ul>
        </div>
        <h3>Graphic designer</h3>
        <div className="flex flex-wrap gap-5">
          <ul className="bg-pink-400 flex flex-col gap-3 p-3">
            Visual tools
            <li>
              <strong>Adobe Photoshop</strong> - The magic of image editing
            </li>
            <li>
              <strong>Adobe Illustrator</strong> - The power of vector graphics
            </li>
            <li>
              <strong>Adobe InDesign</strong> - The art of layouting
            </li>
            <li>
              <strong>Adobe XD</strong> - The future of prototyping
            </li>
          </ul>
          <ul className="bg-blue-400 flex flex-col gap-3 p-3">
            Visual Branding:
            <li>
              <strong>Logo Design</strong> - The magic of branding
            </li>
            <li>
              <strong>Corporate Design</strong> - The power of branding
            </li>
            <li>
              <strong>Print Design</strong> - The art of branding
            </li>
            <li>
              <strong>Web Design</strong> - The future of branding
            </li>
          </ul>
          <ul className="bg-lime-400 flex flex-col gap-3 p-3">
            Other Tools of the Trade:
            <li>
              <strong>Adobe Lightroom</strong> - The magic of photo editing
            </li>
            <li>
              <strong>Adobe Premiere</strong> - The power of video editing
            </li>
            <li>
              <strong>Adobe After Effects</strong> - The art of motion graphics
            </li>
            <li>
              <strong>Canva</strong> - The future of graphic design
            </li>
          </ul>
          <ul className="bg-yellow-400 flex flex-col gap-3 p-3">
            Creative Fuel:
            <li>
              <strong>Music</strong> - The magic of inspiration
            </li>
            <li>
              <strong>Imagination</strong> - The power of creativity
            </li>
            <li>
              <strong>Books</strong> - The art of storytelling
            </li>
          </ul>
        </div>
      </section>
      <section className="flex justify-center flex-col items-center gap-3 p-3">
        <p>My GitHub Commits</p>
        <GitHubCalendar username="alexgrubor" />
      </section>
      <section className="flex flex-col gap-5">
        <h2
          className=" text-xl
        font-bold
        pt-2
        border-b-2
        font-serif
        border-black w-fit"
        >
          My Coding Philosophy:{" "}
        </h2>
        <p
          className="
        bg-yellow-400
        text-xl
        w-fit
        "
        >
          🧠 Coding is not just a job; it is a philosophy that shapes the way I
          approach problem-solving and innovation. Here is a glimpse into my
          coding ethos:
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
            Elegance in Simplicity:
          </strong>{" "}
          I believe that the most elegant solutions are often the simplest ones.
          I strive to write clean, concise, and maintainable code that is easy
          for both humans and machines to understand.
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
            Continuous Learning:
          </strong>{" "}
          Technology evolves at warp speed, and I am committed to being a
          lifelong learner. I am always on the lookout for the latest trends,
          tools, and techniques to stay at the forefront of the digital
          landscape.
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
            Collaboration is Key:
          </strong>{" "}
          Coding is rarely a solo endeavor. Collaboration and communication with
          team members are essential for building robust and scalable solutions.
          I value feedback and brainstorming as a means to achieve excellence.
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
            User-Centric Design:
          </strong>{" "}
          Whether I am coding the front end or back end, my ultimate goal is to
          create products that enhance the user experience. Empathy for the
          end-user drives every decision I make.
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
            Fail Forward:{" "}
          </strong>
          Mistakes are part of the coding journey. I embrace failures as
          opportunities to learn and improve. I iterate, adapt, and strive for
          continuous improvement in every project.
        </p>
        This coding philosophy guides my work, helping me craft solutions that
        are not just functional but elegant, robust, and user-centric. It is the
        compass that steers my development adventures.
      </section>
      <section>
        <h2
          className=" text-xl
        font-bold
        pt-2
        border-b-2
        font-serif
        border-black w-fit"
        >
          Passions and Hobbies:
        </h2>
        <p>
          <strong
            className="
          bg-yellow-400
          text-xl
          block 
          w-fit
          "
          >
            {" "}
            🎨Drawing on Graphic Board:
          </strong>{" "}
          When I step away from the keyboard, I often find solace in the world
          of art. Drawing on my graphic tablet allows me to create digital
          masterpieces, where lines and colors blend to tell unique visual
          stories. Whether it is sketching characters, bringing concepts to
          life, or simply doodling, the graphic board is my canvas, and
          imagination is my brush.
        </p>
        <p>
          {" "}
          <strong
            className="
          bg-lime-400
          text-xl
          block 
          w-fit
          "
          >
            🍳 Cooking:
          </strong>{" "}
          Just like coding, cooking is an art form. I find immense joy in the
          alchemical process of transforming raw ingredients into delightful
          dishes. From experimenting with exotic cuisines to perfecting classic
          recipes, my kitchen is where creativity meets culinary craftsmanship.{" "}
        </p>
        <p>
          {" "}
          <strong
            className="
          bg-pink-400
          text-xl
          block 
          w-fit
          "
          >
            {" "}
            🎶Listening to Music:
          </strong>{" "}
          Music is the soundtrack of my life. I listen to music while coding,
          cooking, and even sleeping. It is the perfect companion for every mood
          and moment. I am a fan of all genres, but my favorite is pop music.{" "}
        </p>
        <p>
          {" "}
          <strong
            className="
          bg-blue-400
          text-xl
          block 
          w-fit
          "
          >
            {" "}
            📖 Reading Romantic Novels:
          </strong>{" "}
          Romance novels are my literary escape. Amid the hustle and bustle of
          life, I find comfort in the pages of romantic tales. They transport me
          to worlds where love conquers all, and I get lost in the tender
          moments, heartwarming stories, and the timeless pursuit of
          happily-ever-afters.
        </p>
      </section>
    </Section>
  );
};
export default AboutPage;
