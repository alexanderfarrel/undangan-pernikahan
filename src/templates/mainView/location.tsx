import Dan from "../../assets/dan";
import Dewa from "../../assets/dewa";
import Tina from "../../assets/tina";
import LocationCard from "../components/locationCard";
import MainLayout from "../components/mainLayout";

export default function Location({ windowWidth }: { windowWidth: number }) {
  return (
    <MainLayout className="gap-10">
      <div className="flex flex-col gap-5">
        <LocationCard
          title="Akad Nikah"
          date="Sabtu, 04 Februari 2023"
          time="09.00 - 10.00 WIB"
          home="Kediaman mempelai wanita"
          location="
        jl. Pramuka, Desa Kedungwringin RT.02/RW.05 Kecamatan Jatilawang Kabupaten Banyumas"
        />
        <LocationCard
          title="Akad Nikah"
          date="Sabtu, 04 Februari 2023"
          time="09.00 - 10.00 WIB"
          home="Kediaman mempelai pria"
          location="
        jl. Pramuka, Desa Kedungwringin RT.02/RW.05 Kecamatan Jatilawang Kabupaten Banyumas"
        />
      </div>
      <p className="text-center text-gray-600">
        Merupakan kehormatan serta kebahagiaan bagi kami sekeluarga apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
        kedua mempelai.
      </p>
      <p className="text-center font-medium -mt-5">
        Jazakumullah Khairan Katsiran Wassalamuallaikum Warrahmatullahi
        Wabarakatuh
      </p>
      <p className="text-center font-medium -mt-5">Kami yang berbahagia,</p>
      <div className="flex max-w-[13rem] -mt-5">
        <Tina className="fill-black max-w-[60px] w-full -mr-5" />
        <Dan
          viewBox="-5 68 300 110"
          className="fill-black max-w-[70px] w-full"
        />
        <Dewa className="fill-black max-w-[60px] w-full -ml-5" />
      </div>
      <p className="text-center font-medium -mt-5">
        Beserta Keluarga Besar Kedua Mempelai
      </p>
      <img
        src="https://app.sangmempelai.id/webview/template/front/div/wavy-sfe-04.png"
        alt=""
        className="max-w-[150px] w-full -mt-5"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831443.6190069598!2d139.11043531907956!3d35.50856474307545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Jepang!5e0!3m2!1sid!2sid!4v1720714870513!5m2!1sid!2sid"
        width="100%"
        height="400"
        className="max-h-[400px] z-10 -mt-5 border-2 border-purple-400 rounded-xl outline-none"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <button
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/Tokyo,+Jepang/@35.6220674,139.6615576,9z/data=!4m6!3m5!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6764225!4d139.650027!16zL20vMDdkZms?hl=id&entry=ttu"
          )
        }
        className={`px-4 py-2 bg-purple-500 text-white rounded-full z-10 ${
          windowWidth < 500 && "text-[13px]"
        }`}
      >
        Lihat Lokasi Acara
      </button>
    </MainLayout>
  );
}
