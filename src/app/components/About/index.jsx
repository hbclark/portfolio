"use client";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "..";
import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "../../context/active-section-context";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [isInView, setActiveSection, timeOfLastClick]);
  return (
    <motion.section
      className="flex flex-col items-center justify-center mb-28 max-w-[45rem] leading-8
      sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.6 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        As a recent graduate with a{" "}
        <span className="font-medium">
          diploma in both frontend and backend development{" "}
        </span>
        from <span className="font-medium">TAFE NSW</span>, I’m passionate about
        creating engaging and user-friendly web experiences. My studies have
        provided me with a strong foundation in key technologies and best
        practices, while hands-on projects have allowed me to refine my
        problem-solving skills and technical expertise.
      </p>
      <p>
        I thrive on turning complex challenges into intuitive solutions and am
        eager to contribute my enthusiasm and skills to a dynamic web
        development team. Let’s collaborate to build innovative and effective
        digital solutions together!
      </p>
    </motion.section>
  );
}
