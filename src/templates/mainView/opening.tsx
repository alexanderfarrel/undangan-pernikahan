import Dan from "../../assets/dan";
import Dewa from "../../assets/dewa";
import Tina from "../../assets/tina";

export default function Opening() {
  return (
    <section className="relative w-full h-[112dvh] flex flex-col items-center justify-center gap-7">
      <p id="theWeddingOf" className="text-white">
        The Wedding Of
      </p>
      <div className="relative flex flex-col max-w-[100px] gap-3">
        <div id="dewa" className={`max-w-full`}>
          <Dewa className="fill-white w-full" />
        </div>
        <div id="dan" className="max-w-full -mt-1">
          <Dan className="fill-white w-full" />
        </div>
        <div id="tina" className={`max-w-full mt-2`}>
          <Tina className="fill-white w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 text-white mt-2">
        <p id="day">Sabtu</p>
        <div
          id="dateParent"
          className="text-center border-r border-l border-gray-200/70 p-3 py-2"
        >
          <h1 id="date" className="text-3xl">
            04
          </h1>
          <p id="year">2024</p>
        </div>
        <p id="month">Februari</p>
      </div>
    </section>
  );
}
