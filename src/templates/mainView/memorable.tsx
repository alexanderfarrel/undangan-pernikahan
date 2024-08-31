import { useState } from "react";
import Images from "../components/images";
import MainLayout from "../components/mainLayout";
import SwiperCarousel from "../components/swiperCarousel";
import { useInView, motion } from "framer-motion";

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

export default function Memorable({
  windowWidth,
  refImage,
}: {
  windowWidth: number;
  refImage: any;
}) {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const text1 = useInView(refImage, { margin: "-100px 0px", once: true });
  return (
    <>
      <MainLayout className="gap-10">
        <h1 ref={refImage} className="latin-25 text-center relative">
          Memorable Moment
          <motion.span
            animate={text1 ? { scaleX: 0 } : { scaleX: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="bg-white absolute top-0 -right-3 w-full h-full origin-right"
          />
        </h1>

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
