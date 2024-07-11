import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Opening from "../mainView/opening";
import Introduction from "../mainView/introduction";
import useWindowWidth from "../../services/hooks/useWindowWidth";
import StartAnimation from "../components/startAnimation";
import Location from "../mainView/location";
import Memorable from "../mainView/memorable";
import Doa from "../mainView/doa";

export default function MainView({ isOpen }: { isOpen: Boolean }) {
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (isOpen) {
      StartAnimation();
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
            className="w-full max-w-xl h-[112vh] -z-10"
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
            <Location windowWidth={windowWidth} />
            <Doa />
            <Memorable windowWidth={windowWidth} />
          </React.Fragment>
        )}
      </motion.div>
    </React.Fragment>
  );
}
