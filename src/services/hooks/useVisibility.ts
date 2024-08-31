import { useRef } from "react";
import { useInView } from "framer-motion";

function useVisibility(margin: any = "-125px 0px", once: boolean = true) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { margin, once });
  return { ref, isVisible };
}

export default useVisibility;
