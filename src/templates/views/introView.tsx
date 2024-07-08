import Dewa from "../../assets/dewa";
import Tina from "../../assets/tina";
import Dan from "../../assets/dan";
import { motion } from "framer-motion";

export default function IntroView({ windowWidth }: { windowWidth: number }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        display: "none",
        transition: { delay: 3.7, duration: 1 },
      }}
      className="absolute w-full h-[100dvh] flex justify-center bg-gray-200 overflow-hidden"
    >
      <div className="absolute max-w-xl w-full p-5 h-screen flex flex-col justify-center">
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
      </div>
    </motion.div>
  );
}
