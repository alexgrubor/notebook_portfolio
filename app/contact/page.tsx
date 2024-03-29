"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import Animation from "../../public/animation_lmrs07fg_small.gif";
import Image from "next/image";
import AleksandraContact from '../../public/AleksandraContact.png'
import Section from "@/components/shared/Section";
import AnimatedCircle from "@/components/ui/AnimatedCircle";

const ContactFrom = () => {
  const [state, handleSubmit] = useForm("xvojwryq");
  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-center items-center">
        <Image src={Animation} alt="Send animation" width={200} height={200} />
        <p>
          Thanks for contacting me! I will be back at you as soon as possible
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-6 gap-5" style={{boxShadow: '5px 5px 15px 5px #FFA03E'}}>
      <label htmlFor="name">Your Full Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
        className="border-2 bg-lime-400 border-gray-400 p-2 outline-none focus:border-black"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="border-2 border-gray-400 p-2 bg-yellow-400 outline-none focus:border-black"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        required
        className="border-2 border-gray-400 bg-pink-400 p-2 outline-none focus:border-black"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting} className="bg-blue-400">
        Submit
      </Button>
    </form>
  );
};

const ContactPage = () => {
  return (
    <Section style={{marginTop: '20px', marginBottom: '20px'}}
    >
      <AnimatedCircle />
      <div className="bg-white flex flex-col-reverse lg:flex-row text-black p-6 justify-center mx-auto max-w-screen-lg">
        <div className="flex flex-col gap-3"><h1 className="text-4xl">Contact Me</h1>
        <p className="text-lg mb-3">
          If you have any questions or want to get in touch, please fill out the
          form below.
        </p>
        <ContactFrom /></div>
        <Image  src={AleksandraContact} alt="aleksandra "/>
        
      </div>
    </Section>
  );
};
export default ContactPage;
