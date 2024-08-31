import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Doa() {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();

  return (
    <MainLayout height="h-full gap-5 text-center">
      <motion.h1
        ref={text1.ref}
        className="font-bold z-10 relative"
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
      >
        وَمِنۡ اٰيٰتِهٖۤ اَنۡ خَلَقَ لَكُمۡ مِّنۡ اَنۡفُسِكُمۡ اَزۡوَاجًا
        لِّتَسۡكُنُوۡۤا اِلَيۡهَا وَجَعَلَ بَيۡنَكُمۡ مَّوَدَّةً وَّرَحۡمَةً  ؕ
        اِنَّ فِىۡ ذٰ لِكَ لَاٰيٰتٍ لِّقَوۡمٍ يَّتَفَكَّرُوۡنَ
      </motion.h1>
      <motion.p
        ref={text2.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="font-light z-10"
      >
        {
          "“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”"
        }
      </motion.p>
      <motion.h1
        ref={text3.ref}
        animate={
          text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="font-bold z-10"
      >
        QS Ar-Rum: 21
      </motion.h1>
    </MainLayout>
  );
}
