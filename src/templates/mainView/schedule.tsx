import MainLayout from "../components/mainLayout";

export default function Schedule() {
  return (
    <MainLayout className="gap-5" height="h-full">
      <h1 className="latin-20">Susunan Acara</h1>
      <div className="w-full h-full flex flex-col gap-5">
        {/* column 1 */}
        <div className="relative h-full w-full flex flex-col items-center">
          <h2 className="font-bold text-2xl text-gray-400 mb-4">Tanggal 18</h2>
          <div className="border-2 border-gray-400 rounded-full min-h-[6rem] relative text-xl">
            {/* rounded */}
            <span className="w-3 h-3 rounded-full bg-gray-400 absolute -translate-y-1/2 -translate-x-1/2"></span>
            <div className="absolute top-0 right-full whitespace-nowrap p-4 mt-4 text-gray-400">
              <p>16 WIB</p>
              <div className="absolute top-0 left-full whitespace-nowrap px-4 pb-1 border-b-2 border-gray-400 border-dashed">
                <p className="font-bold">Siraman</p>
                {/* <p className="absolute top-full left-0 pt-2 pl-4 w-full whitespace-normal capitalize text-[14px]">
                  awal pembukaan acara oleh shiina mashiro untuk menakhlukan
                  sekai
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* column 2 */}
        <div className="relative h-full w-full flex flex-col items-center">
          <h2 className="font-bold text-2xl text-gray-400 mb-4">Tanggal 19</h2>
          <div className="border-2 border-gray-400 rounded-full min-h-[16rem] relative text-xl">
            {/* content */}
            <div className="absolute top-0 left-full whitespace-nowrap p-4 mt-4 text-gray-400">
              <p>9 WIB</p>
              <div className="absolute top-0 right-full whitespace-nowrap px-4 pb-1 border-b-2 border-gray-400 border-dotted">
                <p className="font-bold">Akad</p>
                {/* <p className="absolute top-full left-0 pt-2 pr-4 w-full whitespace-normal capitalize text-[14px] text-right">
                  akad nikah dengan makoto shinkai sebagai penghulu
                </p> */}
              </div>
            </div>
            {/* content */}
            <div className="absolute top-20 right-full whitespace-nowrap p-4 mt-4 text-gray-400">
              <p>10 WIB</p>
              <div className="absolute top-0 left-full whitespace-nowrap px-4 pb-1 border-b-2 border-gray-400 border-dashed">
                <p className="font-bold">Resepsi</p>
                {/* <p className="absolute top-full left-0 pt-2 pl-4 w-full whitespace-normal capitalize text-[14px]">
                  resepsi pernikah dan pengambilan foto bersama monkey D luffy
                </p> */}
              </div>
            </div>
            {/* content */}
            <div className="absolute top-40 left-full whitespace-nowrap p-4 mt-4 text-gray-400">
              <p>20 WIB</p>
              <div className="absolute top-0 right-full whitespace-nowrap px-4 pb-1 border-b-2 border-gray-400 border-dotted">
                <p className="font-bold">Pengajian</p>
                {/* <p className="absolute top-full left-0 pt-2 pr-4 w-full whitespace-normal capitalize text-[14px] text-right">
                  pengajian yang dipimpin oleh ust. jiraya
                </p> */}
              </div>
            </div>
            {/* rounded */}
            <span className="w-3 h-3 rounded-full bg-gray-400 absolute bottom-0 translate-y-1/2 -translate-x-1/2"></span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
