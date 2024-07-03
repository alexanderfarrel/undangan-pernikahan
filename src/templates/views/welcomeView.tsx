import React from "react";
import Dewa from "../../assets/dewa";
import Dan from "../../assets/dan";
import Tina from "../../assets/tina";

export default function WelcomeView() {
  return (
    <React.Fragment>
      <div className="absolute max-w-xl w-full p-5 h-screen flex flex-col justify-center items-center bg-gray-200 gap-2">
        <p className="text-lg font-medium">The Wedding Of</p>
        <div className="w-36 h-36 bg-emerald-600 rounded-full" />
        <div className="flex max-w-[13rem]">
          <Dewa className="fill-black max-w-[300px] w-full -mr-5" />
          <Dan
            viewBox="-5 68 300 110"
            className="fill-black max-w-[90px] w-full"
          />
          <Tina className="fill-black max-w-[300px] w-full -ml-5" />
        </div>
        <p className="text-black/70 mb-2">Kpd. Bpk/Ibu/Saudara/i</p>
        <button className="p-[6px] px-4 bg-purple-400 text-white rounded-full text-sm">
          Buka Undangan
        </button>
      </div>
    </React.Fragment>
  );
}
