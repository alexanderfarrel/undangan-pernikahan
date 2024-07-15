import { useCallback, useEffect, useRef, useState } from "react";

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
  const handleClose = useCallback(() => {
    setTimeout(() => {
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
  }, [closed, handleClose, onClose]);
  return (
    <div
      className={`fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-black/50 z-30 opacity-100`}
    >
      <div className={`bg-white p-5 mx-2 rounded-xl ${width}`} ref={ref}>
        {children}
      </div>
    </div>
  );
}
