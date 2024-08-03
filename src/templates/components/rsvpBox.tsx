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
      className={`flex justify-between p-1 px-3 rounded-lg bg-gray-200 cursor-pointer overflow-hidden`}
      key={data.id}
    >
      <div className="flex flex-col gap-1">
        <h1 className="font-medium">{data.name}</h1>
        <h1>Email</h1>
        <h1>Telepon</h1>
        <h1>Jumlah</h1>
        {data.keterangan && <h1>Keterangan</h1>}
      </div>
      <div className="text-end flex flex-col gap-1">
        <p
          className={`font-medium ${
            data.presence ? "text-green-500" : "text-red-500"
          }`}
        >
          {data.presence ? "Hadir" : "Tidak Hadir"}
        </p>
        <p>{data.email}</p>
        <p>{data.telepon}</p>
        <p>{data.jumlah}</p>
        {data.keterangan && <p>{data.keterangan}</p>}
      </div>
    </motion.div>
  );
}
