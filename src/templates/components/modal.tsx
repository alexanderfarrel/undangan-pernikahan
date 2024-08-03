import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Modal({
  children,
  onClose,
  closed,
  width = "",
}: {
  children: React.ReactNode;
  onClose: any;
  closed?: any;
  width?: string;
}) {
  const [close, setClose] = useState(false);
  const ref: any = useRef();
  const timeoutRef = useRef<number | null>(null);

  const handleClose = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      onClose();
    }, 300);
    setClose(true);
  }, [onClose]);

  useEffect(() => {
    if (closed) {
      handleClose();
    }
    const handleClickOutside = (event: any) => {
      if (closed) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [closed, handleClose]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={
        close
          ? { opacity: 0, display: "none" }
          : { opacity: 1, display: "fixed" }
      }
      transition={{ duration: 0.2, delay: close ? 0.2 : 0 }}
      className={`fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-black/50 z-30 opacity-100`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={close ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: close ? 0 : 0.2 }}
        className={`bg-white p-5 mx-2 rounded-xl w-full ${width}`}
        ref={ref}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
