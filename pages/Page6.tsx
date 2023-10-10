import ContactForm from "@/components/ContactForm";
import Container from "@/components/shared/Container";
import Image from "next/image";
import AleksandraContact from "../public/AleksandraContact.png";
const Page6 = () => {
  return (
    <Container className="mx-auto max-w-screen-lg">
      <div className="flex absolute bottom-1 text-slate-600 text-sm right-2">
        Page 6
      </div>
      <h2 className="text-4xl font-bold pt-8 text-center text-purple-700">
        Let`&apos;s Connect
      </h2>
      <p className="text-lg text-center bg-pink-400 my-8">
        Get in Touch: I am just a click away. Whether you are ready to start a
        project, have questions, or simply want to say hello, here is how you
        can reach me:
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
      
        <div className="md:w-1/2">
          <ContactForm />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={AleksandraContact}
            alt="Aleksandra"
            width={300}
            height={300}
            className="rounded-full shadow-md"
          />
        </div>
      </div>
      <p className="text-center text-purple-700 mt-8">
        Let`&apos;s start a project!
      </p>
    </Container>
  );
};
export default Page6;
