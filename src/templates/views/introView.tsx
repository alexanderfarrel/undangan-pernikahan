import React from "react";
import Dewa from "../../assets/dewa";
import Tina from "../../assets/tina";
import Dan from "../../assets/dan";
import { motion } from "framer-motion";
import useWindowWidth from "../../services/hooks/useWindowWidth";

export default function IntroView() {
  let windowWidth = useWindowWidth();
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          display: "none",
          transition: { delay: 4, duration: 1 },
        }}
        className="absolute max-w-xl w-full p-5 h-screen flex flex-col justify-center bg-gray-200"
      >
        <div className="relative flex flex-col justify-center items-center">
          <div
            className={`max-w-full self-start ${windowWidth > 430 && "ml-5"}`}
          >
            <Dewa />
          </div>
          <div className="max-w-full -mt-5">
            <Dan />
          </div>
          <div
            className={`max-w-full mt-2 self-end ${
              windowWidth > 430 && "mr-5"
            }`}
          >
            <Tina />
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
