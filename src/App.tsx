import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MainView from "./templates/views/mainView";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import WelcomeView from "./templates/views/welcomeView";
import IntroView from "./templates/views/introView";
import RsvpAdmin from "./templates/views/rsvpAdmin";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audio?.current?.pause();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/:name?"
          element={
            <>
              <Helmet>
                <meta
                  property="og:title"
                  content="The Wedding Of Tina and Dewa"
                />
                <meta property="og:description" content="19 Oktober 2024" />
                <meta property="og:image" content="/images/welcome.jpg" />
                <meta
                  property="og:image"
                  content="https://firebasestorage.googleapis.com/v0/b/tinadewatest.appspot.com/o/welcome.jpg?alt=media&token=0a31ad8b-275d-4488-b0a7-248c6adc9245"
                />
                <meta
                  property="og:image:alt"
                  content="The image is an image of the bride"
                />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="1080" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Tina & Dewa" />
                <meta
                  property="og:url"
                  content="https://tinandewa.vercel.app/"
                />
                <meta http-equiv="cache-control" content="no-cache" />
                <meta http-equiv="pragma" content="no-cache" />
                <meta http-equiv="expires" content="0" />
              </Helmet>
              <Toaster reverseOrder={true} position="top-right" gutter={2} />
              <div
                className={`relative w-full min-h-[100dvh] overflow-hidden flex flex-col items-center bg-black z-0`}
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={
                    isOpen && {
                      opacity: 0,
                      // transition: { duration: 0 },
                      transition: { duration: 1.7, delay: 1.2 }, //1.2
                    }
                  }
                  className="absolute top-0 left-0 w-[110dvw] h-[100dvh] -z-10"
                  style={{
                    backgroundImage: "url('/images/welcome.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    filter: "brightness(0.3)",
                  }}
                />
                <MainView isOpen={isOpen} audio={audio} />
                <WelcomeView
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  audio={audio}
                />
                <IntroView />
              </div>
              <audio
                ref={audio}
                id="audio"
                src="/audio/Shane Filan - Beautiful In White (Official Video).mp3"
                loop
              >
                Your browser does not support the audio element.
              </audio>
            </>
          }
        />
        <Route path="/:name/rsvp" element={<RsvpAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
