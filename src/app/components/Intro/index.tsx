"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "../../context/active-section-context";

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [isInView, timeOfLastClick, setActiveSection]);
  return (
    <section className="mb-28 max-w-[50rem] scroll-mt-28" id="home" ref={ref}>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1595907893703-dadb6b3a0e26?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="clark's avatar"
              width="192"
              height="192"
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
            <motion.span
              className="text-4xl absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                duration: 0.7,
                delay: 0.1,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mt-4 mb-10 text-2xl px-4 font-medium leading-[1.7] "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I&apos;m Clark</span>. I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year </span>
        experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row gap-x-4 items-center justify-center px-4 text-xl font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group flex items-center gap-2 bg-white text-gray-700 px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 cursor-pointer border border-black/10
          transition"
          href="public/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/zhaohui-he-b836524/"
          className="flex items-center gap-2 bg-white  px-4 text-gray-700  py-3 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105
          transition cursor-pointer border border-black/10"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className=" flex items-center gap-2 bg-white text-[1.35rem] px-4 text-gray-700  py-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer border border-black/10"
          href="https://github.com/hbclark"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
