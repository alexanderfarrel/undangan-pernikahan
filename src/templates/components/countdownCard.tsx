import { motion } from "framer-motion";

export default function CountdownCard({
  num,
  desc,
  isInView,
  delay = 0,
}: {
  num: number;
  desc: string;
  isInView: boolean;
  delay?: number;
}) {
  return (
    <div
      id={desc}
      className="relative text-center border rounded-lg py-2 w-[60px] shadow-lg"
    >
      <motion.div
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: 0.7, delay }}
        className="absolute w-full h-full bg-white top-0 left-0 origin-top"
      />
      <p className="text-xl font-medium">{num}</p>
      <p className="font-light">{desc}</p>
    </div>
  );
}
