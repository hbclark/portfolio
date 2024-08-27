"use client";
import { SectionHeading } from "..";
import { projectsData } from "@/src/lib/data";
import Project from "../Project";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useActiveSectionContext } from "../../context/active-section-context";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.35,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [isInView, setActiveSection, timeOfLastClick]);
  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
