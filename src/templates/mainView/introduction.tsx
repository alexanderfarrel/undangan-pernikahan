import { useState } from "react";
import CountdownCard from "../components/countdownCard";
import ProfileCard from "../components/profileCard";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";
import useVisibility from "../../services/hooks/useVisibility";
import ButtonAnimate from "../ui/buttonAnimate";

export default function Introduction({
  windowWidth,
  refBride,
}: {
  windowWidth: number;
  refBride: any;
}) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownDate = new Date("January 30, 2030 09:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(interval);
      updateDuration(0);
      return;
    }

    updateDuration(distance);
  }, 1000);

  const updateDuration = (duration: number) => {
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    setTime({ days, hours, minutes, seconds });
  };

  const bismillah = useVisibility();
  const text1 = useVisibility();
  const text2 = useVisibility();
  const profileCard1 = useVisibility();
  const profileCard2 = useVisibility();
  const name1 = useVisibility();
  const name2 = useVisibility();
  const flower1 = useVisibility();
  const flower2 = useVisibility();
  const desc1 = useVisibility();
  const desc2 = useVisibility();
  const text3 = useVisibility();
  const countdown = useVisibility();
  const button = useVisibility();

  return (
    <MainLayout>
      <div
        ref={refBride}
        className="relative flex justify-center items-center w-full max-w-[350px] -my-10"
      >
        <motion.div
          ref={bismillah.ref}
          animate={bismillah.isVisible ? { scaleX: 0 } : { scaleX: 1 }}
          transition={{
            duration: 0.7,
            type: "tween",
          }}
          className="absolute w-full h-20 bg-white origin-right"
        />
        <img src="/bismillah.png" alt="bismillah" />
      </div>
      <div className="text-center flex flex-col items-center">
        <motion.p
          ref={text1.ref}
          className="font-medium"
          animate={
            text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7 }}
        >
          Assalamu'alaikum Warahmatullaahi Wabarakaatuh
        </motion.p>
        <motion.p
          ref={text2.ref}
          animate={
            text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7 }}
          className="font-light text-gray-500"
        >
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
        </motion.p>{" "}
        <ProfileCard
          refImage={profileCard1.ref}
          refName={name1.ref}
          isNameInVIew={name1.isVisible}
          isImageInVIew={profileCard1.isVisible}
          refFlower={flower1.ref}
          isFlowerInVIew={flower1.isVisible}
          refDesc={desc1.ref}
          isDescInVIew={desc1.isVisible}
          name="Tina"
          desc="Putri kedua dari Bapak Naruto dan Ibu Hinata"
        />
        <ProfileCard
          refImage={profileCard2.ref}
          refName={name2.ref}
          isNameInVIew={name2.isVisible}
          isImageInVIew={profileCard2.isVisible}
          refFlower={flower2.ref}
          isFlowerInVIew={flower2.isVisible}
          refDesc={desc2.ref}
          isDescInVIew={desc2.isVisible}
          name="Dewa"
          desc="Putra pertama dari Bapak Sasuke dan Ibu Sakura"
        />
        <footer className="mx-5 mt-10 flex flex-col gap-10">
          <motion.p
            ref={text3.ref}
            animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-500"
          >
            Sabtu, 30 Januari 2030
          </motion.p>
          <div ref={countdown.ref} className="flex gap-3 justify-center">
            <CountdownCard
              isInView={countdown.isVisible}
              num={time.days}
              desc="Days"
            />
            <CountdownCard
              isInView={countdown.isVisible}
              num={time.hours}
              desc="Hours"
              delay={0.2}
            />
            <CountdownCard
              isInView={countdown.isVisible}
              num={time.minutes}
              desc="Min"
              delay={0.4}
            />
            <CountdownCard
              isInView={countdown.isVisible}
              num={time.seconds}
              desc="Sec"
              delay={0.6}
            />
          </div>
          <ButtonAnimate
            button={button}
            windowWidth={windowWidth}
            img="/calendar.png"
            onClick={() => {
              window.open(
                "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGc5OGIyb2tjMmY0NGtlMWg4bzI2aDY0dnUgMWJiNTJjNGUyOTMyNWY3MDRmNDJjMjM5NjIyM2I2NTFhOTZiMTg3ZGUyYzYzMzk1NTI2MGQ1ZjQxNjE5ZThiMEBn&tmsrc=1bb52c4e29325f704f42c2396223b651a96b187de2c633955260d5f41619e8b0%40group.calendar.google.com",
                "_blank"
              );
            }}
          >
            Ingatkan Via Google Kalender
          </ButtonAnimate>
        </footer>
      </div>
    </MainLayout>
  );
}
