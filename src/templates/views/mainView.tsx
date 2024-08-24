import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Opening from "../mainView/opening";
import Introduction from "../mainView/introduction";
import useWindowWidth from "../../services/hooks/useWindowWidth";
import StartAnimation from "../components/startAnimation";
import Location from "../mainView/location";
import Memorable from "../mainView/memorable";
import Doa from "../mainView/doa";
import Gift from "../mainView/gift";
import Rsvp from "../mainView/rsvp";
import Comment from "../mainView/comment";
import EndFooter from "../mainView/endFooter";
import Navbar from "./navbar";

export default function MainView({ isOpen }: { isOpen: Boolean }) {
  const windowWidth = useWindowWidth();

  const refHome = useRef(null);
  const refBride = useRef(null);
  const refLocation = useRef(null);
  const refImage = useRef(null);
  const refComment = useRef(null);

  const [name, setName] = useState("");
  useEffect(() => {
    const path = window.location.pathname;
    const name = path?.split("/")[1].split("-").join(" ");
    setName(name);
  }, []);

  useEffect(() => {
    if (isOpen) {
      StartAnimation();
    }
  }, [isOpen]);

  const audio = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleAudio = () => {
    if (audio.current) {
      if (audio.current.paused) {
        audio.current.play();
        setIsPlaying(true);
      } else {
        audio.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={
          isOpen && {
            opacity: 1,
            display: "block",
            transition: { duration: 0.5, opacity: { delay: 0 } }, //1.2
          }
        }
        className="max-w-xl w-full h-full opacity-0"
      >
        <div className="absolute w-full h-full left-0 top-0 bg-blue-300 -z-10" />
        <div className="absolute w-full h-full left-0 top-0 flex justify-center">
          <div
            className="w-full max-w-xl h-[112vh] -z-10"
            style={{
              backgroundImage: "url('/images/welcome.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundPositionX: "46%",
              backgroundSize: "cover",
              filter: "brightness(0.3)",
            }}
          />
        </div>
        {/* WELCOME */}
        {isOpen && (
          <React.Fragment>
            <button
              onClick={handleAudio}
              className="fixed right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-blue-400 shadow-xl outline-none p-2 z-10"
            >
              {isPlaying ? (
                <img src="/icons/pause.png" alt="" className="w-full h-full" />
              ) : (
                <img src="/icons/play.png" alt="" className="w-full h-full" />
              )}
            </button>
            <Navbar
              refHome={refHome}
              refBride={refBride}
              refLocation={refLocation}
              refImage={refImage}
              refComment={refComment}
            />
            <Opening refHome={refHome} />
            <Introduction windowWidth={windowWidth} refBride={refBride} />
            <Location refLocation={refLocation} />
            <Doa />
            <Memorable windowWidth={windowWidth} refImage={refImage} />
            <Gift />
            <Rsvp name={name} />
            <Comment refComment={refComment} name={name} />
            <EndFooter />
            <audio
              ref={audio}
              src="/audio/Alan-Walker-Different-World-feat-Sofia-Carson-K-391-CORSAK-Lyric-Video_m-PJmmvyP10.mp3"
              autoPlay
              loop
            >
              Your browser does not support the audio element.
            </audio>
          </React.Fragment>
        )}
      </motion.div>
    </React.Fragment>
  );
}
