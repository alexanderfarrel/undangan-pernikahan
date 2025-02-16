import Dan from "../../assets/dan";
import Dewa from "../../assets/dewa";
import Tina from "../../assets/tina";

export default function Opening({ refHome }: { refHome: any }) {
  return (
    <section ref={refHome} className="w-full h-[110vh] ">
      <main className="relative w-full h-[100dvh] flex flex-col items-center justify-center gap-7">
        <p id="theWeddingOf" className="text-white">
          The Wedding Of
        </p>
        <div className="relative flex flex-col max-w-[100px] gap-3">
          <div id="tina" className={`max-w-full mb-2`}>
            <Tina className="fill-white w-full" />
          </div>
          <div id="dan" className="max-w-full -mb-1">
            <Dan className="fill-white w-full" />
          </div>
          <div id="dewa" className={`max-w-full`}>
            <Dewa className="fill-white w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 text-white mt-2">
          <p id="day">Sabtu</p>
          <div
            id="dateParent"
            className="text-center border-r border-l border-gray-200/70 p-3 py-2"
          >
            <h1 id="date" className="text-3xl">
              30
            </h1>
            <p id="year">2030</p>
          </div>
          <p id="month">Januari</p>
        </div>
      </main>
    </section>
  );
}
