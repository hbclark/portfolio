"use client";
import { SectionHeading } from "..";
import { projectsData } from "@/src/lib/data";
import Project from "../Project";
import React, { useEffect, useRef } from "react";

import { useSectionInView } from "@/src/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
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
