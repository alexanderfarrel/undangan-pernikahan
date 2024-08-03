import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
interface rsvp {
  id: string;
  name: string;
  presence: boolean;
  email?: string;
  jumlah?: string;
  keterangan?: string;
  telepon?: string;
}

export default function RsvpBox({
  data,
  search,
}: {
  data: rsvp;
  search: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState("35px");

  useEffect(() => {
    setIsOpen(false);
  }, [search]);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [data, isOpen]);
  return (
    <motion.div
      ref={contentRef}
      onClick={() => setIsOpen(!isOpen)}
      initial={{ height: "35px" }}
      animate={
        isOpen
          ? {
              height: contentHeight,
              minHeight: contentHeight,
            }
          : {
              height: "35px",
              minHeight: "35px",
            }
      }
      className={`flex flex-col gap-1 p-1 px-3 rounded-lg bg-gray-200 cursor-pointer overflow-hidden`}
      key={data.id}
    >
      <div className="flex justify-between w-full">
        {" "}
        <h1 className="font-medium">{data.name}</h1>{" "}
        <p
          className={`font-medium ${
            data.presence ? "text-green-500" : "text-red-500"
          }`}
        >
          {data.presence ? "Hadir" : "Tidak Hadir"}
        </p>
      </div>
      <div className="flex justify-between w-full">
        <h1>Email</h1>
        <p className="font-medium max-w-[150px] break-words">{data.email}</p>
      </div>
      <div className="flex justify-between w-full">
        <h1>Telepon</h1>
        <p className="font-medium max-w-[150px] break-words">{data.telepon}</p>
      </div>
      <div className="flex justify-between w-full">
        <h1>Jumlah</h1>
        <p className="font-medium max-w-[150px]">{data.jumlah}</p>
      </div>
      {data.keterangan && (
        <div className="flex justify-between w-full">
          <h1>Keterangan</h1>
          <p className="font-medium max-w-[150px] break-words">
            {data.keterangan}
          </p>
        </div>
      )}
    </motion.div>
  );
}
