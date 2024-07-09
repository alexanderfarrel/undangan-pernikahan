import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Opening from "../mainView/opening";
import Introduction from "../mainView/introduction";
import useWindowWidth from "../../services/hooks/useWindowWidth";

export default function MainView({ isOpen }: { isOpen: Boolean }) {
  const windowWidth = useWindowWidth();
  const startAnimation = () => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#theWeddingOf", {
        opacity: 0,
        duration: 1,
        delay: 2.3,
      })
        .from(
          "#dewa",
          {
            x: "-=50",
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
          },
          "-=0.4"
        )
        .from(
          "#dan",
          {
            opacity: 0,
            duration: 0.7,
            ease: "power1.out",
          },
          "<"
        )
        .from(
          "#tina",
          {
            x: "+=50",
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
          },
          "<"
        )
        .from(
          "#dateParent",
          {
            opacity: 0,
          },
          "-=0.4"
        )
        .from(
          "#day",
          {
            opacity: 0,
            x: "-=30",
            duration: 0.5,
          },
          "<"
        )
        .from(
          "#month",
          {
            opacity: 0,
            x: "+=15",
            duration: 0.5,
          },
          "<"
        )
        .from("#year", {
          opacity: 0,
          y: "+=15",
          duration: 0.5,
        })
        .from(
          "#date",
          {
            opacity: 0,
            y: "-=30",
            duration: 0.5,
          },
          "<"
        );
    });

    return () => ctx.revert();
  };

  useEffect(() => {
    if (isOpen) {
      startAnimation();
    }
  }, [isOpen]);
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={
          isOpen && {
            opacity: 1,
            display: "block",
            transition: { duration: 0.5, opacity: { delay: 1.2 } },
          }
        }
        className="max-w-xl w-full h-full opacity-0"
      >
        <div className="absolute w-full h-full left-0 top-0 bg-purple-400 -z-10" />
        <div className="absolute w-full h-full left-0 top-0 flex justify-center">
          <div
            className="w-full max-w-xl h-[112dvh] -z-10"
            style={{
              backgroundImage: "url('/shiina.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              filter: "brightness(0.3)",
            }}
          />
        </div>
        {/* WELCOME */}
        {isOpen && (
          <React.Fragment>
            <Opening />
            <Introduction windowWidth={windowWidth} />
          </React.Fragment>
        )}
      </motion.div>
    </React.Fragment>
  );
}
