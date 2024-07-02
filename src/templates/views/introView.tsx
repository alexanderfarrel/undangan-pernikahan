import React from "react";
import Hasby from "../../assets/hasby";
import Hasby2 from "../../assets/hasby2";

export default function IntroView() {
  return (
    <React.Fragment>
      <div className="w-full h-screen grid place-items-center">
        <div className="max-w-xl w-full p-5 h-screen flex flex-col justify-center bg-gray-200/80">
          <Hasby />
          <Hasby2 />
        </div>
      </div>
    </React.Fragment>
  );
}
