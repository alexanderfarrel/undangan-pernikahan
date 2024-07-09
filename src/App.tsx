import React, { useState } from "react";
import IntroView from "./templates/views/introView";
import WelcomeView from "./templates/views/welcomeView";
import MainView from "./templates/views/mainView";
import { motion } from "framer-motion";
import useWindowWidth from "./services/hooks/useWindowWidth";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();
  return (
    <React.Fragment>
      <div
        className={`relative w-full flex flex-col items-center bg-black z-0`}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={
            isOpen && { opacity: 0, transition: { duration: 1.7, delay: 1 } }
          }
          className="absolute top-0 left-0 w-full h-screen -z-10"
          style={{
            backgroundImage: "url('/formal-face.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "brightness(0.3)",
          }}
        />
        <MainView isOpen={isOpen} />
        <WelcomeView setIsOpen={setIsOpen} isOpen={isOpen} />
        <IntroView windowWidth={windowWidth} />
      </div>
    </React.Fragment>
  );
}

export default App;
