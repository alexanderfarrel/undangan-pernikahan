import React from "react";
import Dewa from "../../assets/dewa";
import Dan from "../../assets/dan";
import Tina from "../../assets/tina";
import { motion } from "framer-motion";
import useWindowWidth from "../../services/hooks/useWindowWidth";

export default function WelcomeView({
  setIsOpen,
  isOpen,
}: {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
}) {
  const windowWidth = useWindowWidth();
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <React.Fragment>
      <motion.div
        className="absolute max-w-xl w-full p-5 h-[100dvh] flex flex-col justify-center items-center bg-transparent gap-2 overflow-hidden"
        animate={
          isOpen && { display: "none", opacity: 0, transition: { delay: 1.2 } }
        }
      >
        <motion.p
          animate={
            isOpen && { opacity: 0, y: -30, transition: { duration: 0.5 } }
          }
          className="text-lg text-white"
        >
          The Wedding Of
        </motion.p>
        <motion.div
          animate={
            isOpen && {
              opacity: 0,
              y: -30,
              transition: { duration: 0.5, delay: 0.3 },
            }
          }
          className="w-36 h-36 rounded-full"
          style={{
            backgroundImage: "url('/images/formal-face.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <motion.div
          animate={
            isOpen && {
              scale: 3,
              y: -50,
              opacity: 0,
              transition: { duration: 1.5, delay: 0.6 },
            }
          }
          className="flex max-w-[13rem]"
        >
          <Dewa className="fill-white max-w-[300px] w-full -mr-5" />
          <Dan
            viewBox="-5 68 300 110"
            className="fill-white max-w-[90px] w-full"
          />
          <Tina className="fill-white max-w-[300px] w-full -ml-5" />
        </motion.div>
        <motion.p
          animate={
            isOpen && {
              opacity: 0,
              y: 30,
              transition: { duration: 0.5, delay: 0.3 },
            }
          }
          className="text-white/80 mb-2"
        >
          Kpd. Bpk/Ibu/Saudara/i
        </motion.p>
        <motion.button
          animate={
            isOpen && { opacity: 0, y: 30, transition: { duration: 0.5 } }
          }
          onClick={handleClick}
          className={`p-[6px] px-4 bg-purple-400 text-white rounded-full ${
            windowWidth < 500 && "text-xs"
          }`}
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </React.Fragment>
  );
}
