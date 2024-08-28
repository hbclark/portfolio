"use client";
import { useSectionInView } from "@/src/lib/hooks";
import { SectionHeading } from "..";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import sendEmail from "@/src/app/actions/sendEmail";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect, useRef } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white bg-gray-900 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 transition-all disabled:scale-100 disabled:opacity-65 "
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover: -translate-y-1 group-hover: scale-110" />
        </>
      )}
    </button>
  );
}

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(sendEmail, {
    error: null,
    data: undefined,
  });

  useEffect(() => {
    if (state.data && formRef.current) {
      (formRef.current as HTMLFormElement).reset();
    }
  }, [state.data]);

  return (
    <motion.section
      className="scroll-mt-28 mb-20 sm:mb-40 w-[min(100%,38rem)] text-center"
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <span className="underline text-blue-500">
          <a href="mailto:skla2003@hotmail.com">skla2003@hotmail.com</a>
        </span>{" "}
        or through this form
      </p>
      {state.error ? (
        <p className="text-red-500">{String(state.error)}</p>
      ) : null}
      {state.data && <p className=" mt-4 text-green-500">Message sent</p>}

      <form className="flex flex-col mt-10" action={formAction} ref={formRef}>
        <input
          type="email"
          name="senderEmail"
          className="h-14  pl-2 rounded-lg borderBlack"
          placeholder="Your email"
          required
        />
        <textarea
          className="h-52 my-3 pl-2 pt-2 rounded-lg borderBlack leading-6"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
