"use client";
import React from "react";
import { SectionHeading } from "..";
import { useSectionInView } from "@/src/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/src/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor={"#e5e7eb"} animate={true}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9ca3af)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
                color: "#9ca3af",
              }}
              visible={true}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <h4 className="font-normal !mt-0">{item.location}</h4>

              <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
