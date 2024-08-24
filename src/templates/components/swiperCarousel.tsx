import { useMotionValue, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import getMaxValue from "../../services/hooks/getMaxValue";
import smoothScrollTo from "../../services/hooks/smoothScroll";

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
  const [animateClose, setAnimateClose] = useState(false);
  useEffect(() => {
    setSwiperWidth(
      getMaxValue({
        maxScreenWidth: 1920,
        minScreenWidth: 400,
        maxValue: 98,
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

  const timeoutRef = useRef<number | null>(null);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (event.target.dataset.isClose !== "true") {
        return;
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      setAnimateClose(true);
      timeoutRef.current = window.setTimeout(() => {
        setAnimateClose(false);
        setImageIndex(null);
      }, 400);
    },
    [setImageIndex]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleClickOutside]);
  return (
    <>
      {/* images swipes */}
      <motion.section
        animate={{
          opacity: imageIndex === null ? 0 : animateClose ? 0 : 1,
          transition: {
            delay: animateClose ? 0.35 : 0,
          },
        }}
        data-isclose="true"
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
            // mass: 1,
            opacity: {
              //   delay: animateClose || imageIndex == null ? 0 : 0.35,
            },
          }}
          onDragEnd={onDragEnd}
        >
          <ImagesSwiper
            animateClose={animateClose}
            imageIndex={imageIndex}
            IMAGES={IMAGES}
            swiperWidth={swiperWidth}
          />
        </motion.div>
        <FullImageFooter
          imageIndex={imageIndex}
          IMAGES={IMAGES}
          setImageIndex={setImageIndex}
          animateClose={animateClose}
        />
      </motion.section>
    </>
  );
}

const ImagesSwiper = ({
  imageIndex,
  IMAGES,
  swiperWidth,
  animateClose,
}: {
  imageIndex: number;
  IMAGES: { url: string; id: number }[];
  swiperWidth: number;
  animateClose: boolean;
}) => {
  return (
    <>
      {IMAGES.map((item, index) => (
        <motion.div
          animate={{
            opacity: imageIndex == null ? 0 : animateClose ? 0 : 1,
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

const FullImageFooter = ({
  IMAGES,
  imageIndex,
  setImageIndex,
  animateClose,
}: {
  IMAGES: { url: string; id: number }[];
  imageIndex: number;
  setImageIndex: Function;
  animateClose: boolean;
}) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (container.current) {
      smoothScrollTo(container.current, imageIndex * 104 - 104, 250);
    }
  }, [imageIndex]);

  const parentRef = useRef<HTMLDivElement>(null);
  const [isWindowWidthGreaterThanParent, setIsWindowWidthGreaterThanParent] =
    useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current) {
        setIsWindowWidthGreaterThanParent(
          window.innerWidth > parentRef.current.offsetWidth
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      ref={container}
      className={`absolute bottom-0 w-full flex overflow-x-scroll hidden-scrollbar ${
        isWindowWidthGreaterThanParent ? "justify-center" : "justify-start"
      }`}
    >
      <motion.div
        ref={parentRef}
        initial={{ y: "100%" }}
        animate={{
          y: imageIndex == null ? "100%" : animateClose ? "100%" : "0%",
        }}
        transition={{ type: "tween", delay: animateClose ? 0 : 0.3 }}
        className="flex gap-2 p-2 bg-white rounded-t-xl"
      >
        {IMAGES.map((image, i) => (
          <div
            key={i}
            className={`w-24 h-24 overflow-hidden rounded-lg border-2 ${
              imageIndex == i ? "border-blue-400" : "border-white"
            } transition-all duration-500 shrink-0`}
          >
            <img
              onClick={() => setImageIndex(i)}
              src={image.url}
              alt=""
              className={`w-24 h-24 transition-all duration-300 cursor-pointer ${
                imageIndex == i ? "scale-125" : "scale-100"
              }`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
