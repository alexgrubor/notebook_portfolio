import Container from "@/components/shared/Container";
import DecoSquares from "@/components/shared/DecoSquares";

const Page5 = () => {
  return (
    <Container className="mx-auto max-w-screen-lg pb-3">
      <h2 className="text-4xl font-bold pt-8 text-center text-purple-700">
        Adventures in Learning and Collaboration
      </h2>
      <div className="flex justify-center my-1 gap-2">
        <DecoSquares />
        <DecoSquares />
      </div>
      <p className="text-lg text-center bg-lime-400 my-8">
        Welcome to my world of endless exploration and collaboration, where my
        boundless enthusiasm for learning meets the thrill of working with
        others. Embark on a captivating journey with me through the realms of
        growth and discovery.
      </p>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">
            <strong>🚀 The Thrill of Unending Learning:</strong>
          </h1>
          <p className="text-gray-700">
            For me, learning is more than a hobby; it's a way of life. I'm a
            seeker of knowledge, an aficionado of fresh ideas, and a fearless
            challenger of conventions. Here's a glimpse into how my passion for
            learning fuels my journey:
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400">
            📚 Lifelong Learning Advocate
          </h2>
          <p className="text-gray-700">
            Every day brings a new opportunity to expand my horizons. I'm
            dedicated to the idea that learning is a lifelong journey. I am
            committed to pushing the boundaries of my knowledge.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-pink-400">
            🌱 Embracing the Unknown
          </h2>
          <p className="text-gray-700">
            I thrive on stepping into the uncharted territory. It's where growth
            and innovation flourish. Each new challenge is an invitation to
            learn, adapt, and push the boundaries of what's possible.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">
            <strong>The Art of Collaboration:</strong>
          </h1>
          <p className="text-gray-700">
            Collaboration is the lifeblood of progress. Let me illustrate how my
            love for learning intertwines with the magic of collaboration in my
            approach to projects:
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-400">
            🤝 Collaborative Visionary
          </h2>
          <p className="text-gray-700">
            To me, every project is a canvas, and together with my team, we
            paint a masterpiece. Collaboration brings together a kaleidoscope of
            perspectives and ideas, creating a tapestry of brilliant results.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-400">
            💬 Effective Communication Maestro
          </h2>
          <p className="text-gray-700">
            In my world, open and honest communication is the bridge to
            excellence. Ideas and feedback flow like poetry, nurturing an
            atmosphere of mutual trust and creativity. Together, we compose the
            greatest stories of success.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page5;

