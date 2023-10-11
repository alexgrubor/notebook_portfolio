"use client";

import Image from "next/image";
import AleksandraAbout from "../../public/Aleksandra-About.png";
import GitHubCalendar from "react-github-calendar";
import { useMediaQuery } from "react-responsive";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import BackToTopButton from "@/components/ui/backToTopButton";

const webDevSkills = [
  {
    title: "Front-end Magic",
    items: [
      "HTML - The foundation of the web",
      "CSS - The magic of styling",
      "JavaScript / TypeScript - The power of interactivity",
      "React - The art of componentization",
      "Next.js - The future of web development",
    ],
    icon: "💻",
    color: "bg-lime-400",
  },
  {
    title: "Back-end Sorcery",
    items: [
      "Node.js - The magic of JavaScript on the server",
      "Express.js - The power of routing",
      "PostgreSQL / MongoDB / MySQL - The art of data storage",
      "Prisma - The future of database access",
    ],
    icon: "🚀",
    color: "bg-yellow-400",
  },
  {
    title: "Other Tools of the Trade",
    items: [
      "Git - The magic of version control",
      "GitHub - The power of collaboration",
      "VSCode - The art of code editing",
      "Terminal - The future of command line interfaces",
    ],
    icon: "🛠️",
    color: "bg-pink-400",
  },
  {
    title: "Secret Ingredients",
    items: [
      "Passion - The magic of motivation",
      "Curiosity - The power of exploration",
      "Perseverance - The art of determination",
      "Empathy - The future of humanity",
      "Red Bull - The magic of energy",
    ],
    icon: "✨",
    color: "bg-blue-400",
  },
];

const graphicDesignSkills = [
  {
    title: "Visual Tools",
    items: [
      "Adobe Photoshop - The magic of image editing",
      "Adobe Illustrator - The power of vector graphics",
      "Adobe InDesign - The art of layouting",
      "Adobe XD - The future of prototyping",
    ],
    icon: "🎨",
    color: "bg-pink-400",
  },
  {
    title: "Visual Branding",
    items: [
      "Logo Design - The magic of branding",
      "Corporate Design - The power of branding",
      "Print Design - The art of branding",
      "Web Design - The future of branding",
    ],
    icon: "🖋️",
    color: "bg-blue-400",
  },
  {
    title: "Other Tools of the Trade",
    items: [
      "Adobe Lightroom - The magic of photo editing",
      "Adobe Premiere - The power of video editing",
      "Adobe After Effects - The art of motion graphics",
      "Canva - The future of graphic design",
    ],
    icon: "📸",
    color: "bg-lime-400",
  },
  {
    title: "Creative Fuel",
    items: [
      "Music - The magic of inspiration",
      "Imagination - The power of creativity",
      "Books - The art of storytelling",
    ],
    icon: "📚",
    color: "bg-yellow-400",
  },
];

const AboutPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <>
      <Section style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div className="mx-auto max-w-screen-lg flex text-black  flex-col items-center justify-center py-3 ">
          <h1 className="text-6xl font-bold mb-4">Additional Chapter: About</h1>
          <div
            className="flex gap-5 items-center py-2"
            style={{
              flexDirection: isMobile ? "column-reverse" : "row",
            }}
          >
            <section className="flex flex-col gap-5" style={{ flex: 1 }}>
              <p>
                As a passionate Full Stack Web Developer, I am not just a coder;
                I am a web wizard who conjures up captivating digital
                experiences. Based in the enchanting city of Essen, Germany, I
                am on a mission to make the internet a more magical place, one
                pixel at a time.
              </p>
              <p>
                I have always had a passion for the web and its boundless
                potential for creativity and innovation. My freelance journey
                initially revolved around graphic design, but my curiosity led
                me to dive deeper into the world of web development. It all
                began with crafting WordPress websites, and I soon realized the
                exciting possibilities that awaited. As I continued my
                exploration of this dynamic field, I embarked on a 14-month
                bootcamp journey to master MERN Full Stack Development. During
                this intensive period of growth, my hunger for knowledge drove
                me to explore various other technologies, including the likes of
                Tailwind, TypeScript, and many more.
              </p>
              <p>
                This ever-evolving journey has not only equipped me with a
                diverse skill set but has also reinforced my commitment to
                pushing the boundaries of web development. I am excited to bring
                my creative flair and technical expertise to any project, always
                striving to exceed expectations and create exceptional online
                experiences.
              </p>
            </section>
            <div style={{ flex: 1 }}>
              <Image
                src={AleksandraAbout}
                alt="Aleksandra About"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div className="mx-auto max-w-screen-lg text-black">
          <h2 className="text-2xl font-bold">My Dual Expertise</h2>
          <h3 className="text-xl mt-4">Full Stack Web Developer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {webDevSkills.map((category, index) => (
              <ul
                key={index}
                className={`p-4 rounded-lg shadow-md   ${category.color}`}
              >
                <div className="flex gap-2">
                <li className="mb-2 text-xl">{category.icon}</li>
                <li className="text-xl font-semibold">{category.title}</li>
                </div>
                {category.items.map((item, i) => (
                  <li key={i} className="text-lg">
                    {item.split('-')[0]} 
                    <span className="text-sm font-light block">{item.split('-')[1]}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <h3 className="text-xl mt-8">Graphic Designer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {graphicDesignSkills.map((category, index) => (
              <ul
                key={index}
                className={`p-4 rounded-lg shadow-md gap-2 ${category.color}`}
              >
                <div className="flex gap-2 w-full">
                  <li className="mb-2 text-xl">{category.icon}</li>
                  <li className="text-xl font-semibold">{category.title}</li>
                </div>

                {category.items.map((item, i) => (
                  <li key={i} className="text-lg">
                      {item.split('-')[0]} 
                    <span className="text-sm block font-light">{item.split('-')[1]}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Section>

      <Section style={{ marginTop: "20px", marginBottom: "20px" }}>
        <section className="flex justify-center text-black  flex-col items-center gap-3 p-3">
          <p className="bg-lime-400 p-2">My GitHub Commits</p>
          <GitHubCalendar username="alexgrubor" />
        </section>
        <Container className="mx-auto max-w-screen-lg text-black flex flex-col gap-2">
          <h2 className="text-xl p-1 bg-yellow-400 font-bold pt-2 font-serif w-fit">
            My Coding Philosophy:
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl w-fit">
              🧠 Coding is not just a job; it is a philosophy that shapes the
              way I approach problem-solving and innovation. Here is a glimpse
              into my coding ethos:
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-pink-400 text-xl block w-fit p-2 rounded-full">
              Elegance in Simplicity:
            </div>
            <p>
              I believe that the most elegant solutions are often the simplest
              ones. I strive to write clean, concise, and maintainable code that
              is easy for both humans and machines to understand.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-lime-400 text-xl block w-fit p-2 rounded-full">
              Continuous Learning:
            </div>
            <p>
              Technology evolves at warp speed, and I am committed to being a
              lifelong learner. I am always on the lookout for the latest
              trends, tools, and techniques to stay at the forefront of the
              digital landscape.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-400 text-xl block w-fit p-2 rounded-full">
              Collaboration is Key:
            </div>
            <p>
              Coding is rarely a solo endeavor. Collaboration and communication
              with team members are essential for building robust and scalable
              solutions. I value feedback and brainstorming as a means to
              achieve excellence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-lime-400 text-xl block w-fit p-2 rounded-full">
              User-Centric Design:
            </div>
            <p>
              Whether I am coding the front end or back end, my ultimate goal is
              to create products that enhance the user experience. Empathy for
              the end-user drives every decision I make.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-pink-400 text-xl block w-fit p-2 rounded-full">
              Fail Forward:
            </div>
            <p>
              Mistakes are part of the coding journey. I embrace failures as
              opportunities to learn and improve. I iterate, adapt, and strive
              for continuous improvement in every project.
            </p>
          </div>
          <p className="bg-pink-400 my-3">
            This coding philosophy guides my work, helping me craft solutions
            that are not just functional but elegant, robust, and user-centric.
            It is the compass that steers my development adventures.
          </p>
        </Container>
      </Section>
      <Section style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Container className="mx-auto max-w-screen-lg text-black  flex flex-col gap-2">
          <h2 className="text-xl font-bold pt-2 border-b-2 font-serif border-black w-fit">
            Passions and Hobbies:
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-yellow-400  text-xl block w-fit p-2 rounded-full">
              🎨 Drawing on Graphic Board:
            </div>
            <p>
              When I step away from the keyboard, I often find solace in the
              world of art. Drawing on my graphic tablet allows me to create
              digital masterpieces, where lines and colors blend to tell unique
              visual stories. Whether it is sketching characters, bringing
              concepts to life, or simply doodling, the graphic board is my
              canvas, and imagination is my brush.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-lime-400 text-xl block w-fit p-2 rounded-full">
              🍳 Cooking:
            </div>
            <p>
              Just like coding, cooking is an art form. I find immense joy in
              the alchemical process of transforming raw ingredients into
              delightful dishes. From experimenting with exotic cuisines to
              perfecting classic recipes, my kitchen is where creativity meets
              culinary craftsmanship.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-pink-400 text-xl block w-fit p-2 rounded-full">
              🎶 Listening to Music:
            </div>
            <p>
              Music is the soundtrack of my life. I listen to music while
              coding, cooking, and even sleeping. It is the perfect companion
              for every mood and moment. I am a fan of all genres, but my
              favorite is pop music.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-400 text-xl block w-fit p-2 rounded-full">
              📖 Reading Romantic Novels:
            </div>
            <p>
              Romance novels are my literary escape. Amid the hustle and bustle
              of life, I find comfort in the pages of romantic tales. They
              transport me to worlds where love conquers all, and I get lost in
              the tender moments, heartwarming stories, and the timeless pursuit
              of happily-ever-afters.
            </p>
          </div>
        </Container>
      </Section>
      <BackToTopButton/>
    </>
  );
};
export default AboutPage;
