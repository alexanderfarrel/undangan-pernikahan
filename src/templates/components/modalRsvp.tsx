import { useState } from "react";
import Modal from "./modal";

export default function ModalRsvp({
  setIsModalOpen,
  name,
}: {
  setIsModalOpen: Function;
  name: string;
}) {
  const [close, setClose] = useState(false);
  return (
    <Modal onClose={() => setIsModalOpen(false)} closed={close}>
      <section className="flex flex-col gap-3 text-neutral-600">
        <h1 className="text-center font-bold text-xl">RSVP</h1>
        <p className="text-sm font-light text-gray-500">
          <span className="text-red-500">*</span> : Wajib Diisikan
        </p>
        <form action="" className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium">
              {" "}
              Nama Tamu <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              defaultValue={name}
              className="p-3 py-2 rounded-lg border outline-none bg-gray-200"
              placeholder="Nama tamu"
            />
          </div>
          <section className="flex gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="telepon" className="font-medium">
                {" "}
                No Telepon <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="telepon"
                className="p-3 py-2 rounded-lg border outline-none bg-gray-200"
                placeholder="08123456789"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email" className="font-medium">
                {" "}
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                className="p-3 py-2 rounded-lg border outline-none bg-gray-200"
                placeholder="alexbusiness.code@gmail.com"
              />
            </div>
          </section>

          <section>
            <h1 className="mb-1 font-medium">
              Info Kehadiran <span className="text-red-500">*</span>
            </h1>

            <label htmlFor="hadir" className="">
              {" "}
              <input
                type="radio"
                id="hadir"
                name="hadir-tidakhadir"
                className="mr-1"
              />
              Hadir
            </label>

            <label htmlFor="tidakhadir">
              {" "}
              <input
                type="radio"
                id="tidakhadir"
                name="hadir-tidakhadir"
                className="mr-1 ml-2 text-black"
              />
              Tidak Hadir
            </label>
          </section>

          <div className="flex flex-col gap-1">
            <label htmlFor="jumlah" className="font-medium">
              {" "}
              Jumlah Kehadiran <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="name"
              className="p-3 py-2 rounded-lg border outline-none bg-gray-200"
              placeholder="1 - 99"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="keterangan" className="font-medium">
              {" "}
              Keterangan
            </label>
            <input
              type="text"
              id="keterangan"
              className="p-3 py-2 rounded-lg border outline-none bg-gray-200"
              placeholder="(optional) tuliskan pesan kepada mempelai"
            />
          </div>
        </form>
        <div className="w-full flex gap-3 justify-center">
          <button
            onClick={() => setClose(true)}
            disabled={close}
            className="bg-purple-500 px-3 py-1 text-white rounded-xl mt-3"
          >
            Konfirm
          </button>

          <button
            onClick={() => setClose(true)}
            disabled={close}
            className="bg-gray-500 px-3 py-1 text-white rounded-xl mt-3"
          >
            Cancel
          </button>
        </div>
      </section>
    </Modal>
  );
}
