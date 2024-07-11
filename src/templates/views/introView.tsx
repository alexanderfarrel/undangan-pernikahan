import Dewa from "../../assets/dewa";
import Tina from "../../assets/tina";
import Dan from "../../assets/dan";
import { motion } from "framer-motion";

export default function IntroView() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        display: "none",
        transition: { delay: 3.5, duration: 1 },
      }}
      className="absolute w-full h-[100dvh] flex justify-center bg-gray-200 overflow-hidden"
    >
      <div className="absolute max-w-xl w-full p-5 h-[100dvh] flex flex-col justify-center">
        <div className="relative h-[100dvh] flex flex-col justify-center items-center">
          <div className={`max-w-[300px]`}>
            <Tina />
          </div>
          <div className="max-w-full -mb-5">
            <Dan />
          </div>
          <div className={`max-w-full`}>
            <Dewa />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
