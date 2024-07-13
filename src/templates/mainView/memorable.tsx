import { useEffect, useState } from "react";
import Images from "../components/images";
import MainLayout from "../components/mainLayout";
import SwiperCarousel from "../components/swiperCarousel";

const IMAGES = [
  {
    id: 1,
    url: "/formal-face.jpg",
  },
  {
    id: 2,
    url: "/shiina.jpg",
  },
  {
    id: 3,
    url: "/formal-face.jpg",
  },
  {
    id: 4,
    url: "/shiina.jpg",
  },
  {
    id: 5,
    url: "/formal-face.jpg",
  },
];

export default function Memorable({ windowWidth }: { windowWidth: number }) {
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  useEffect(() => {
    document.body.style.overflow = imageIndex == null ? "auto" : "hidden";
  }, [imageIndex]);
  return (
    <>
      <MainLayout className="gap-10">
        <h1 className="text-xl font-bold">Memorable Moment</h1>

        <div className="flex flex-col gap-5 z-10">
          {IMAGES.map((image, i) => (
            <Images
              onClick={() => setImageIndex(i)}
              url={image.url}
              id={i}
              key={i}
            />
          ))}
        </div>

        <div className="shadow-custom rounded-lg text-center flex flex-col gap-5 max-w-[450px] p-5 text-neutral-500">
          <h2 className="font-medium text-xl text-black">Our Story</h2>
          <p>Our Story</p>
          {/* <a
            href="/shiina.jpg"
            download={"shiina.jpg"}
            className="cursor-pointer z-10"
          >
            testes
          </a> */}
          <p>Keluarga & Sahabat,</p>
          <p>
            Tidak ada yang spesial dalam cerita kami. Tapi kami sangat spesial
            untuk satu sama lain Awal pertama kali kami bertemu pada tahun 2013
            dimasa SMA, pada waktu itu kami mulai dekat hingga menjalin hubungan
            namun setelah beberapa bulan kami memutuskan untuk berpisah karena
            suatu alasan.
          </p>
          <p>Butuh waktu yang amat panjang untuk saling bertemu kembali</p>
          <p>
            Butuh banyak cerita dan pengalaman kami lewati sebelum akhirnya
            saling bertemu kembali dan memutuskan menjalin hubungan serius.
          </p>
          <p>23 Maret 2022</p>
          <p>
            Acara lamaran kami berlangsung, petualangan baru menuju
            pernikahanpun dimulai.
          </p>
          <p>
            Kami bersyukur, dipertemukan Allah diwaktu terbaik, Kini kami
            menanti hari istimewa kami. Hari yang tak lelah kami pintakan dalam
            doa pada-Nya.
          </p>
          <p>
            Di tahun 2023 yang sangat spesial ini, Momen spesial kami akan
            dimulai dari titik ini, momen kebahagiaan kami bersama membangun
            keluarga kecil kami. Semoga Allah SWT memberikan keberkahan untuk
            pernikahan kami amin.
          </p>
          <p>
            Kebahagiaan di hari yang sakral ini, tentunya tak akan lengkap tanpa
            doa dan restu dari sahabat dan keluarga.
          </p>
        </div>
      </MainLayout>
      {imageIndex !== null && (
        <SwiperCarousel
          windowWidth={windowWidth}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          IMAGES={IMAGES}
        />
      )}
    </>
  );
}
