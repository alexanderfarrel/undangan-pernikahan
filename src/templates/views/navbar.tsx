import { useEffect, useLayoutEffect, useState } from "react";
import Heart from "../navbar/heart";
import Location from "../navbar/location";
import Home from "../navbar/home";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import Schedule from "../navbar/schedule";

export default function Navbar({
  refHome,
  refBride,
  refLocation,
  refSchedule,
  refComment,
}: any) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#rounded", {
        clipPath: "circle(0px at 50% 50%)",
        y: 100,
        duration: 0.8,
        ease: "bounce",
        delay: 1.8,
      })
        .to("#parentRounded", { overflow: "hidden" })
        .to(
          "#rounded",
          {
            clipPath: "circle(130px at 50% 50%)",
            y: 0,
            duration: 0.8,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0,0 0.251,0.503 0.501,0.753 0.751,1.003 1,1 1,1 "
            ),
          },
          "-=0.35"
        )

        .from(
          "#location",
          {
            opacity: 0,
          },
          "-=0.12"
        )
        .from(
          "#heart",
          {
            opacity: 0,
            x: 20,
          },
          "-=0.4"
        )
        .from(
          "#schedule",
          {
            opacity: 0,
            x: -20,
          },
          "<"
        )
        .from(
          "#home",
          {
            opacity: 0,
            x: 20,
          },
          "-=0.3"
        )
        .from(
          "#comment",
          {
            opacity: 0,
            x: -20,
          },
          "<"
        )
        .from(
          "#bgRounded",
          {
            scale: 0,
            ease: "circ",
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);
  const [xPosition, setXPosition] = useState(12.2);

  const home = useInView(refHome);
  const bride = useInView(refBride);
  const location = useInView(refLocation);
  const schedule = useInView(refSchedule);
  // const comment = useInView(refComment);

  useEffect(() => {
    const updateXWhenScroll = () => {
      if (home) {
        setXPosition(12.2);
      } else if (bride) {
        setXPosition(36.4);
      } else if (location) {
        setXPosition(60.8);
      } else if (schedule) {
        setXPosition(85.1);
      }
      // else if (comment) {
      //   setXPosition(90);
      // }
    };

    window.addEventListener("scroll", updateXWhenScroll);

    return () => window.removeEventListener("scroll", updateXWhenScroll);
  });

  const handleScroll = (desc: string) => {
    if (desc === "home") {
      // setXPosition(10);
      refHome.current.scrollIntoView({ behavior: "smooth" });
    } else if (desc == "bride") {
      // setXPosition(29.5);
      refBride.current.scrollIntoView({ behavior: "smooth" });
    } else if (desc === "location") {
      // setXPosition(50);
      refLocation.current.scrollIntoView({ behavior: "smooth" });
    } else if (desc === "schedule") {
      // setXPosition(70);
      refSchedule.current.scrollIntoView({ behavior: "smooth" });
    } else if (desc === "comment") {
      // setXPosition(90);
      refComment.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 min-w-[3rem] h-12 flex justify-center items-center z-30 px-0">
      <div id="parentRounded" className="w-full h-full absolute rounded-full">
        <div
          id="rounded"
          className="absolute w-full h-full bg-blue-400 rounded-full overflow-hidden"
          style={{ clipPath: "circle(13px at 50% 50%)" }}
        />
      </div>
      <motion.div
        id="bgRounded"
        initial={{ clipPath: "circle(0px at 50% 50%)" }}
        animate={{ clipPath: `circle(22px at ${xPosition}% 50%)` }}
        className="w-full h-full absolute bg-blue-500 opacity-100"
      />
      <Home onClick={() => handleScroll("home")} />
      <Heart onClick={() => handleScroll("bride")} />
      <Location onClick={() => handleScroll("location")} />
      <Schedule onClick={() => handleScroll("schedule")} />
      {/* <Comment onClick={() => handleScroll("comment")} /> */}
    </div>
  );
}
