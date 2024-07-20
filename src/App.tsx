import { useState } from "react";
import IntroView from "./templates/views/introView";
import WelcomeView from "./templates/views/welcomeView";
import MainView from "./templates/views/mainView";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Helmet>
        <meta property="og:title" content="Judul 2 Website" />
        <meta property="og:description" content="Deskripsi Website" />
        <meta property="og:image" content="./assets/formal-face.jpg" />
        <meta property="og:url" content="https://tinadewa.vercel.app" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="expires" content="0" />
      </Helmet> */}
      <Toaster reverseOrder={true} position="top-right" gutter={2} />
      <div
        className={`relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-center bg-black z-0`}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={
            isOpen && {
              opacity: 0,
              transition: { duration: 1.7, delay: 1.2 },
            }
          }
          className="absolute top-0 left-0 w-full h-[100dvh] -z-10"
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
        <IntroView />
      </div>
    </>
  );
}

export default App;
