import { useState, useRef, useLayoutEffect, useCallback } from "react";
import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Doa() {
  const text1 = useVisibility();

  const [text, setText] = useState("");
  const [isStepFinish, setIsStepFinish] = useState(false);
  const intervalRef: any = useRef(null); // Use a ref to store the interval ID

  const dataText =
    "“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”";

  useLayoutEffect(() => {
    if (text1.isVisible && !intervalRef.current) {
      addText();
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text1.isVisible]);

  const addText = useCallback(() => {
    const words = dataText.split("");
    let currentText = "";

    intervalRef.current = setInterval(() => {
      if (words.length > 0) {
        currentText += words.shift();
        setText(currentText);
        return;
      }
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Reset the interval ref
      setIsStepFinish(true);
    }, 20);
  }, []);

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
      <p className="font-light z-10">{text}</p>
      <motion.h1
        animate={isStepFinish ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="font-bold z-10"
      >
        QS Ar-Rum: 21
      </motion.h1>
    </MainLayout>
  );
}
