import { SectionHeading } from "..";
import { projectsData } from "@/src/lib/data";
import Project from "../Project";
import React from "react";

export default function index() {
  return (
    <section>
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
