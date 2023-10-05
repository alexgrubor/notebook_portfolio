"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import Animation from "../public/animation_lmrs07fg_small.gif";
import Image from "next/image";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xvojwryq");
    if (state.succeeded) {
      return (
        <div className="flex flex-col justify-center items-center bg-neutral-300">
          <Image src={Animation} alt="Send animation" width={200} height={200} />
          <p>
            Thanks for contacting me! I will be back at you as soon as possible
          </p>
        </div>
      );
    }
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col bg-lime-400 p-6 gap-5 shadow-md" >
        <label htmlFor="name">Your Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="border-2 border-gray-400 p-2 outline-none focus:border-black"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="border-2 border-gray-400 p-2 outline-none focus:border-black"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          className="border-2 border-gray-400 p-2 outline-none focus:border-black"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </form>
    );
}
export default ContactForm