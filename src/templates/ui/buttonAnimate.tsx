import { motion } from "framer-motion";

export default function ButtonAnimate({
  button,
  windowWidth,
  img,
  children,
  onClick,
}: {
  button: {
    ref: React.RefObject<HTMLButtonElement>;
    isVisible: boolean;
  };
  windowWidth: number;
  img?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      ref={button.ref}
      onClick={onClick}
      className={`relative bg-blue-400 px-4 py-[10px] text-white rounded-full flex items-center justify-center gap-2 self-center hover:bg-blue-400/80 ${
        windowWidth < 500 && "text-[13px]"
      } cursor-pointer z-20 overflow-hidden`}
    >
      <motion.div
        animate={button.isVisible ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-400 origin-right"
      />
      {img && <img src={img} alt="" className="max-w-[20px]" />}
      {children}
    </button>
  );
}
