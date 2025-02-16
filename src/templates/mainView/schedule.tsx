import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Schedule({ refSchedule }: { refSchedule: any }) {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();
  return (
    <MainLayout className="gap-5" height="h-full">
      <section ref={refSchedule}>
        <motion.h1
          ref={text1.ref}
          animate={
            text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
          className="latin-20 z-10"
        >
          Susunan Acara
        </motion.h1>
        <div className="w-full h-full flex flex-col gap-5 z-10 relative p-2 pb-4">
          {/* column 1 */}
          <div className="relative h-full w-full flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={
                text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-bold text-2xl text-gray-400 mb-4"
            >
              Tanggal 29
            </motion.h2>
            {/* middle line */}
            <motion.div
              ref={text2.ref}
              initial={{ scaleY: 0 }}
              animate={text2.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="border-2 border-gray-400 rounded-full min-h-[6rem] relative text-xl origin-top"
            >
              {/* rounded */}
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={
                  text2.isVisible
                    ? { height: "12px", width: "12px" }
                    : { height: 0, width: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute -translate-y-1/2 -translate-x-1/2"
              />
              <div className="absolute top-0 right-full whitespace-nowrap p-4 mt-4 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    text2.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="flex items-center justify-center"
                >
                  16 WIB
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text2.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="absolute top-0 left-full whitespace-nowrap px-4 pb-1 border-b-2 border-gray-400 border-dashed"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      text2.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="font-bold"
                  >
                    Siraman
                  </motion.p>
                  {/* <p className="absolute top-full left-0 pt-2 pl-4 w-full whitespace-normal capitalize text-[14px]">
                    awal pembukaan acara oleh shiina mashiro untuk menakhlukan
                    sekai
                  </p> */}
                </motion.div>
              </div>
              {/* rounded end */}
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={
                  text2.isVisible
                    ? { height: "12px", width: "12px" }
                    : { height: 0, width: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute bottom-0 translate-y-1/2 -translate-x-1/2"
              />
            </motion.div>
          </div>
          {/* column 2 */}
          <div className="relative h-full w-full flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={
                text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-bold text-2xl text-gray-400 mb-4"
            >
              Tanggal 30
            </motion.h2>
            {/* middle line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={text3.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="border-2 border-gray-400 rounded-full min-h-[16rem] relative text-xl origin-top"
            >
              {/* rounded */}
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={
                  text3.isVisible
                    ? { height: "12px", width: "12px" }
                    : { height: 0, width: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.9,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute -translate-y-1/2 -translate-x-1/2"
              />
              {/* content */}

              <div
                ref={text3.ref}
                className="absolute top-0 left-full whitespace-nowrap p-4 mt-2 text-gray-400"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.7, delay: 1 }}
                  className="flex items-center justify-center gap-2 ml-5"
                >
                  <img
                    src="/images/ring.png"
                    alt="ring"
                    className="w-full h-full max-w-12 max-h-12"
                  />
                  9 WIB
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="absolute top-2 right-full whitespace-nowrap px-4 pb-1 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.7, delay: 1 }}
                    className="font-bold"
                  >
                    Akad
                  </motion.p>
                  {/* <p className="absolute top-full left-0 pt-2 pr-4 w-full whitespace-normal capitalize text-[14px] text-right">
                    akad nikah dengan makoto shinkai sebagai penghulu
                  </p> */}
                </motion.div>
              </div>
              {/* content */}
              <div className="absolute top-20 right-full whitespace-nowrap p-4 mt-2 mr-4 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className="flex items-center justify-center"
                >
                  10 WIB
                  <img
                    src="/images/reception.png"
                    alt="reception"
                    className="w-full h-full max-w-12 max-h-12"
                  />
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="absolute top-2 left-full whitespace-nowrap px-4 pb-1 ml-4 border-b-2 border-gray-400 border-dashed"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="font-bold"
                  >
                    Resepsi
                  </motion.p>
                  {/* <p className="absolute top-full left-0 pt-2 pl-4 w-full whitespace-normal capitalize text-[14px]">
                    resepsi pernikah dan pengambilan foto bersama monkey D luffy
                  </p> */}
                </motion.div>
              </div>
              {/* content */}
              <div className="absolute top-40 left-full whitespace-nowrap p-4 mt-2 ml-5 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    text3.isVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.7, delay: 1.4 }}
                  className="flex items-center justify-center gap-2"
                >
                  <img
                    src="/images/quran.png"
                    alt="quran"
                    className="w-full h-full max-w-12 max-h-12"
                  />
                  20 WIB
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  className="absolute top-2 right-full whitespace-nowrap px-4 pb-1 mr-5 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      text3.isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.7, delay: 1.4 }}
                    className="font-bold"
                  >
                    Pengajian
                  </motion.p>
                  {/* <p className="absolute top-full left-0 pt-2 pr-4 w-full whitespace-normal capitalize text-[14px] text-right">
                    pengajian yang dipimpin oleh ust. jiraya
                  </p> */}
                </motion.div>
              </div>
              {/* rounded */}
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={
                  text3.isVisible
                    ? { height: "12px", width: "12px" }
                    : { height: 0, width: 0 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.9,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute bottom-0 translate-y-1/2 -translate-x-1/2"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
