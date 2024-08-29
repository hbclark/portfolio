import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "../app/context/active-section-context";
import { TSectionName } from "./types";

export function useSectionInView(sectionName: TSectionName, amount = 0.5) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [isInView, timeOfLastClick, setActiveSection, sectionName]);
  return { ref, setActiveSection, timeOfLastClick, isInView };
}
