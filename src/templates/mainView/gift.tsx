import useVisibility from "../../services/hooks/useVisibility";
import Bank from "../components/bank";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Gift() {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();
  const text4 = useVisibility();
  const image = useVisibility();
  return (
    <MainLayout className="text-center gap-5" height="h-full">
      <motion.h1
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 0.7 }}
        className="latin-25"
      >
        Wedding Gift
      </motion.h1>
      <motion.p
        ref={text2.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 0.7 }}
      >
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika
        memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara
        cashless.
      </motion.p>
      <Bank image="/images/bca.png" rek="0123456789" name="a/n Tina" />
      <motion.img
        ref={image.ref}
        animate={
          image.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
        }
        transition={{ duration: 0.7 }}
        src="https://app.sangmempelai.id/webview/template/front/amplop/187ece4abf101efceac87481ccf9dd5d.png"
        alt=""
        className="w-full max-w-[150px]"
      />
      <div className="font-medium z-10">
        <motion.p
          ref={text3.ref}
          animate={
            text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
        >
          Alamat Pengiriman Kado :
        </motion.p>
        <motion.p
          ref={text4.ref}
          animate={
            text4.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
        >
          Tina, Jl. Malioboro, Sosromenduran, Gedong Tengen, Kota Yogyakarta
        </motion.p>
      </div>
    </MainLayout>
  );
}
