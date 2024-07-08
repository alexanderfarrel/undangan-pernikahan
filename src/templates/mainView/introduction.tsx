import { useState } from "react";
import Wave from "../../assets/wave";
import CountdownCard from "../components/countdownCard";
import ProfileCard from "../components/profileCard";

export default function Introduction({ windowWidth }: { windowWidth: number }) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();

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

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-white py-10">
      <div className="w-full h-full -top-10 overflow-hidden absolute">
        <Wave />
      </div>
      <div className="w-full max-w-[350px] px-5">
        <img src="/images/bismillah.png" alt="bismillah" />
      </div>
      <div className="mx-5 text-center flex flex-col items-center">
        <p className="font-medium">
          Assalamu'alaikum Warahmatullaahi Wabarakaatuh
        </p>
        <p className="font-light text-gray-500">
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
        </p>{" "}
        <ProfileCard
          name="Nadiwa Hasby"
          desc="Putra ketiga dari
Bapak Supriyono, S.Pd.SD.
dan Ibu Siti Sofiyah, S.Pd.I."
        />
        <ProfileCard
          name="Agustina Tari"
          desc="Putra ketiga dari
Bapak Supriyono, S.Pd.SD.
dan Ibu Siti Sofiyah, S.Pd.I."
        />
        <footer className="mx-5 mt-10 flex flex-col gap-10">
          <p className="text-gray-500">Sabtu, 04 Februari 2024</p>
          <div className="flex gap-3 justify-center">
            <CountdownCard num={time.days} desc="Days" />
            <CountdownCard num={time.hours} desc="Hours" />
            <CountdownCard num={time.minutes} desc="Min" />
            <CountdownCard num={time.seconds} desc="Sec" />
          </div>
          <button
            onClick={() => {
              window.open(
                "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGJ2MXVibHQ2N2xuMTBwYzF0N3RjaWFoMzQgMTU5MmJjYjFiNjc5MjQxMjJhZmZmMDVmNjk3YzQ5ZjA2YzFiNzEzMzVjZjBiMDBjMjVmYTBhNDk0MzExNmI0OUBn&tmsrc=1592bcb1b67924122afff05f697c49f06c1b71335cf0b00c25fa0a4943116b49%40group.calendar.google.com",
                "_blank"
              );
            }}
            className={`bg-purple-500 px-4 py-3 text-white rounded-full flex items-center justify-center gap-2 self-center ${
              windowWidth < 500 && "text-xs"
            } cursor-pointer`}
          >
            <img src="/images/calendar.png" alt="" className="max-w-[20px]" />
            Ingatkan Via Google kalender
          </button>
        </footer>
      </div>
    </section>
  );
}
