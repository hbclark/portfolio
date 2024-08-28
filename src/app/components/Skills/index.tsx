"use client";
import { useSectionInView } from "@/src/lib/hooks";
import { SectionHeading } from "..";
import { skillsData } from "@/src/lib/data";
import { animate, motion, stagger } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        delay: index * 0.05,
      },
    };
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section className="mb-28 max-w-[53rem] scroll-mt-28" id="skills" ref={ref}>
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={skill}
            className="bg-white border border-black/[0.1] py-3 px-3 rounded-xl"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
