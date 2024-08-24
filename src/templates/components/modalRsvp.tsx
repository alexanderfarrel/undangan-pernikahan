import { useRef, useState } from "react";
import Modal from "./modal";
import toast from "react-hot-toast";
import { addData } from "../../services/firebase/services";

export default function ModalRsvp({
  setIsModalOpen,
  username,
}: {
  setIsModalOpen: Function;
  username: string;
}) {
  const [close, setClose] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const handleButtonClick = () => {
    if (formRef?.current) {
      formRef?.current?.requestSubmit(); // Programmatically submit the form
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef?.current) {
      return;
    }
    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const telepon = formData.get("telepon") as string;
    const email = formData.get("email") as string;
    let presence = formData.get("presence") as string | boolean;
    const jumlah = formData.get("jumlah") as string;
    const keterangan = formData.get("keterangan") as string;

    const regex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;

    if (
      name === "" ||
      telepon === "" ||
      email === "" ||
      presence === "" ||
      jumlah === ""
    ) {
      toast.error("Data tidak boleh ada yang kosong");
      return;
    }

    if (username !== name) {
      toast.error("Username Tidak Sesuai");
      return;
    }

    if (!regex.test(jumlah) || !regex.test(telepon)) {
      toast.error("Masukkan Angka dengan Benar!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Masukkan Email dengan Benar!");
      return;
    }

    try {
      console.log(presence);
      if (presence == "hadir") {
        presence = true;
      } else if (presence == "tidakHadir") {
        presence = false;
      }
      await addData("rsvp", {
        name,
        telepon,
        email,
        presence,
        jumlah,
        keterangan,
      });
    } catch (error) {
      console.log(error);
    } finally {
      toast.success("Terimakasih Telah Mengisi Form");
      setClose(true);
    }
  };

  const preventInvalidInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
    }
  };

  const preventPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("Text");
    if (
      pasteData.includes("e") ||
      pasteData.includes("E") ||
      pasteData.includes("+") ||
      pasteData.includes("-") ||
      pasteData.includes(".")
    ) {
      e.preventDefault();
    }
  };
  return (
    <Modal
      width="max-w-xl"
      onClose={() => setIsModalOpen(false)}
      closed={close}
    >
      <section className="flex flex-col gap-3 text-neutral-600">
        <h1 className="text-center font-bold text-xl">RSVP</h1>
        <p className="text-sm font-light text-gray-500">
          <span className="text-red-500">*</span> : Wajib Diisikan
        </p>
        <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium">
              Nama Tamu <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={username}
              defaultValue={username}
              className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
              placeholder="Nama tamu"
              required
            />
          </div>
          <section className="flex flex-row gap-3 sm:flex-col w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="telepon" className="font-medium">
                No Telepon <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="telepon"
                id="telepon"
                className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
                required
                placeholder="08123456789"
                onKeyDown={preventInvalidInput}
                onPaste={preventPaste}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
                required
                placeholder="alexbusiness.code@gmail.com"
              />
            </div>
          </section>
          <section>
            <h1 className="mb-1 font-medium">
              Info Kehadiran <span className="text-red-500">*</span>
            </h1>
            <label htmlFor="hadir" className="cursor-pointer">
              <input
                type="radio"
                id="hadir"
                name="presence"
                className="mr-1"
                value="hadir"
                defaultChecked
              />
              Hadir
            </label>
            <label htmlFor="tidakHadir" className="cursor-pointer">
              <input
                type="radio"
                id="tidakHadir"
                name="presence"
                className="mr-1 ml-2 text-black"
                value="tidakHadir"
              />
              Tidak Hadir
            </label>
          </section>
          <div className="flex flex-col gap-1">
            <label htmlFor="jumlah" className="font-medium">
              Jumlah Kehadiran <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
              required
              onKeyDown={preventInvalidInput}
              onPaste={preventPaste}
              placeholder="1 - 99"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="keterangan" className="font-medium">
              Keterangan
            </label>
            <input
              type="text"
              id="keterangan"
              name="keterangan"
              className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full"
              placeholder="(optional) tuliskan pesan kepada mempelai"
            />
          </div>
        </form>
        <div className="w-full flex gap-3 justify-center">
          <button
            onClick={() => handleButtonClick()}
            disabled={close}
            className="bg-blue-400 px-3 py-1 text-white rounded-xl mt-3"
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
