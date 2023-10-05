import { Button } from "./ui/button";

const Expertise = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold pt-4 font-serif text-center">
        The Palette of Expertise
      </h2>
      <p className="text-lg bg-pink-400 w-fit p-2 mx-auto mt-4 text-center">
        Welcome to Page 2 of my digital notebook, where you will find a glimpse
        of the tools in my creative arsenal and the skills I bring to the table.
      </p>
      <p className="text-base text-center">
        Just like an artist has a palette of colors, I have a diverse palette of
        skills:
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <ul className="mt-2">
            <li className=" text-lg p-2 mb-1 rounded">
              <span className="block font-bold">Web Development:</span> HTML,
              CSS, JavaScript, TypeScript, Next.js, React.js, Bootstrap, Sass,
              Tailwind CSS, Angular, WordPress, Material UI, Shadcn UI
            </li>
            <li className=" text-lg p-2 mb-1 rounded">
              <span className="block font-bold">Backend Wizard:</span> Node.js,
              Express, Databases (MongoDB, SQL), Java, Prisma, Mongoose,
              GraphQL, REST API Development
            </li>
            <li className=" text-lg p-2 mb-1 rounded">
              <span className="block font-bold">Graphic Design:</span> Logos,
              Illustrations, Layouts, Social Media Graphics, PhotoShop,
              Illustrator, Canva
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2">
          <h3 className="text-2xl mb-2 text-center">Eager Learner</h3>
          <p className="text-base">
            I am not satisfied with limiting myself to my existing knowledge;
            instead, I constantly add new hues to my palette.
          </p>
          <p>
            Learning is a lifelong journey, and I wholeheartedly embrace it with
            enthusiasm and curiosity.
          </p>
          <p className="text-base">
            Throughout my journey, I have accumulated a wealth of knowledge and
            skills. I have taken numerous courses, with a particular focus on
            platforms like Udemy and LinkedIn.
          </p>
          <p className="text-sm">
            Would you like to explore my collection of certificates?
          </p>
          <Button className="w-[25%]">View</Button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl mb-2 text-center">Design Enchantment</h3>
          <p className="text-base">
            Transforming ideas into visually captivating wonders that leave an
            indelible mark, merging artistic creativity with technical prowess
            to convey a compelling message and evoke lasting emotions.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl mb-2 text-center">Adaptability</h3>
          <p className="text-base">
            Masterfully acclimating to cutting-edge technologies and diverse
            environments, I consistently demonstrate the adaptability and
            expertise that recruiters and HR professionals seek.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl mb-2 text-center">User-Centric Approach</h3>
          <p className="text-base">
            Creating engaging and intuitive user experiences.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl mb-2 text-center">Problem-Solving Prowess</h3>
          <p className="text-base">
            Tackling challenges head-on, turning obstacles into opportunities.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl mb-2 text-center">Team Player</h3>
          <p className="text-base">
            Working with others to create something greater than the sum of its
            parts.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl mb-2 text-center">Project Management</h3>
          <p className="text-base">
            Managing projects from start to finish using tools like Trello and
            Jira.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
