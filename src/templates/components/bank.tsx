import toast from "react-hot-toast";
import Button from "../ui/button";
import useVisibility from "../../services/hooks/useVisibility";
import { motion } from "framer-motion";

export default function Bank({
  rek,
  name,
  image,
}: {
  rek: string;
  name: string;
  image: string;
}) {
  const imageAnim = useVisibility();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(rek);
    toast.success("Berhasil Di Copy");
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.img
        ref={imageAnim.ref}
        animate={
          imageAnim.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 0.7 }}
        className="max-w-[150px] -my-5 w-full"
        src={image}
        alt=""
      />
      <p className="font-medium">{rek}</p>
      <p className="font-medium mb-2">{name}</p>
      <Button onClick={copyToClipboard} image="/icons/copy.png">
        Salin No Rekening
      </Button>
    </div>
  );
}
