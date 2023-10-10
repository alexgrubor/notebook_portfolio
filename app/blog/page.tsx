'use client'
import { background } from "@/styles/background";
import Lines from "@/styles/lines";
const page = () => {
  return (
    <div
      className="flex min-h-screen  flex-col gap-5 px-24 py-4 relative"
      style={background}
    >
      <Lines />
      <h1>Additional Chapter: My Blog</h1>
      <p>
        Welcome to the Blog page of my digital notebook, where you can explore a
        collection of projects that have shaped my creative journey. Each entry
        is like a cherished note, telling a story of code, design, and
        innovation.
      </p>
      <p>
        <strong className="bg-pink-400 text-xl block w-fit">
          What to Expect In this digital notebook:
        </strong>{" "}
        I will be sharing insights, ideas, and behind-the-scenes details of
        various projects that have fueled my passion for creativity and
        innovation. From coding experiments to design explorations and
        everything in between, each blog post is a glimpse into the creative
        process and the lessons learned along the way.
      </p>
      Stay Tuned While the blog is still taking shape, I am eager to share my
      thoughts and discoveries with you. Expect a variety of posts, each with
      its own unique flavor. I will be diving into the creative process, sharing
      tips and tricks, and perhaps even showcasing some exciting projects. Let&apos;s
      Connect I would love to hear your thoughts, questions, and suggestions.
      Whether you are a fellow creative soul or simply curious about the world of
      code and design, your presence here is valued. Feel free to reach out, and
      let&apos;s engage in conversations that ignite our creative spirits. Thank you
      for visiting my digital notebook. Together, we&apos;ll explore the boundless
      realms of imagination and innovation. Stay tuned for the first entry,
      coming soon.
    </div>
  );
};
export default page;
