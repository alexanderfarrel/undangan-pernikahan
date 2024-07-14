import { motion } from "framer-motion";

export default function ProfileCard({
  name,
  desc,
  refImage,
  isImageInVIew,
  refName,
  isNameInVIew,
  refFlower,
  isFlowerInVIew,
  refDesc,
  isDescInVIew,
}: {
  name: string;
  desc: string;
  refImage: React.RefObject<HTMLDivElement>;
  isImageInVIew: boolean;
  refName: React.RefObject<HTMLHeadingElement>;
  isNameInVIew: boolean;
  refFlower: React.RefObject<HTMLImageElement>;
  isFlowerInVIew: boolean;
  refDesc: React.RefObject<HTMLParagraphElement>;
  isDescInVIew: boolean;
}) {
  return (
    <main className="mt-10 flex flex-col gap-2 items-center">
      <motion.div
        ref={refImage}
        animate={isImageInVIew ? { opacity: 1 } : { opacity: 0 }}
        className="relative p-1 w-36 h-36 bg-blue-200 shadow-xl rounded-full"
      >
        <motion.div
          animate={isImageInVIew ? { opacity: 1 } : { opacity: 0 }}
          className="w-full h-full rounded-full"
          style={{
            backgroundImage: "url('/formal-face.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </motion.div>
      <h1 ref={refName} className="relative text-2xl font-bold">
        {name}{" "}
        <motion.span
          animate={isNameInVIew ? { scaleX: 0 } : { scaleX: 1 }}
          transition={{ type: "tween", duration: 0.4 }}
          className="bg-white absolute top-0 left-0 w-full h-full origin-left"
        />
      </h1>
      <motion.img
        ref={refFlower}
        transition={{ duration: 0.5 }}
        animate={isFlowerInVIew ? { opacity: 1 } : { opacity: 0 }}
        src="https://app.sangmempelai.id/webview/template/front/div/wavy-sfe-04.png"
        alt=""
        className="max-w-[150px] w-full"
      />
      <footer className="max-w-[200px]">
        <motion.p
          ref={refDesc}
          transition={{ duration: 0.5 }}
          animate={isDescInVIew ? { opacity: 1 } : { opacity: 0 }}
          className="font-light"
        >
          {desc}
        </motion.p>
      </footer>
    </main>
  );
}
