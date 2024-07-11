import { useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import getMaxValue from "../../services/hooks/getMaxValue";

export default function SwiperCarousel({
  windowWidth,
  imageIndex,
  setImageIndex,
  IMAGES,
}: {
  windowWidth: number;
  imageIndex: number;
  setImageIndex: Function;
  IMAGES: { url: string; id: number }[];
}) {
  const [swiperWidth, setSwiperWidth] = useState(0);
  useEffect(() => {
    setSwiperWidth(
      getMaxValue({
        maxScreenWidth: 1920,
        minScreenWidth: 400,
        maxValue: 50,
        minValue: 50,
      })
    );
  }, []);

  const dragX = useMotionValue(0);

  const DRAG_BUFFER = windowWidth < 1200 ? 20 : 50;

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imageIndex < IMAGES.length - 1) {
      setImageIndex((pv: number) => pv + 1);
    } else if (x >= DRAG_BUFFER && imageIndex > 0) {
      setImageIndex((pv: number) => pv - 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (event.target.dataset.isClose === "true") {
        setImageIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      {/* images swipes */}
      <motion.section
        animate={{
          opacity: imageIndex === null ? 0 : 1,
        }}
        data-isClose="true"
        className={`fixed top-0 left-0 w-full h-full overflow-hidden z-30 opacity-0 bg-black/50 ${
          imageIndex !== null ? "" : "hidden"
        }`}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{
            x: dragX,
          }}
          className="flex absolute top-0 left-0 w-full h-full items-center"
          initial={{
            opacity: 1,
            translateX: `-${imageIndex * 100}%`,
          }}
          animate={{
            translateX: `-${imageIndex * 100}%`,
            // opacity: animateClose || imageIndex == null ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 30,
            opacity: {
              //   delay: animateClose || imageIndex == null ? 0 : 0.35,
            },
          }}
          onDragEnd={onDragEnd}
        >
          <ImagesSwiper
            imageIndex={imageIndex}
            picturesCarousel={IMAGES}
            swiperWidth={swiperWidth}
          />
        </motion.div>
      </motion.section>
    </>
  );
}

const ImagesSwiper = ({
  imageIndex,
  picturesCarousel,
  swiperWidth,
}: {
  imageIndex: number;
  picturesCarousel: { url: string; id: number }[];
  swiperWidth: number;
}) => {
  return (
    <>
      {picturesCarousel.map((item, index) => (
        <motion.div
          initial={{
            y: 100,
          }}
          animate={{
            opacity: imageIndex == null ? 0 : 1,
            y: 0,
          }}
          transition={{
            type: "tween",
            delay: 0.2,
          }}
          data-is-close="true"
          key={index}
          className={`w-full h-full flex justify-center shrink-0 opacity-0`}
        >
          <motion.div
            data-is-close="true"
            style={{ width: `${swiperWidth}vw` }}
            className={`flex items-center`}
            animate={{
              scale: index == imageIndex ? 1 : 0.9,
              transition: {
                type: "tween",
              },
            }}
          >
            <img
              id="doNotClose"
              src={item.url}
              alt=""
              draggable="false"
              className="object-contain w-full cursor-grab active:cursor-grabbing"
            />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};
