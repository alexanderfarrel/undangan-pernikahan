import { useState } from "react";
import MainLayout from "../components/mainLayout";
import ModalRsvp from "../components/modalRsvp";

export default function Rsvp({ name }: { name: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <MainLayout height="h-full" className="text-center gap-4">
        <h1 className="latin-25">RSVP</h1>
        <p className="font-medium">
          Tanpa mengurangi rasa hormat kami kepada para tamu undangan, mohon
          sekiranya tamu undangan dapat melakukan konfirmasi kehadiran terlebih
          dahulu.
        </p>
        <p>Isi konfirmasi kehadiran hanya dapat dilakukan satu kali</p>
        <button
          disabled={isModalOpen}
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-500 px-3 py-2 text-white rounded-full z-10 hover:bg-purple-500/80"
        >
          Isi Konfirmasi Kehadiran
        </button>
      </MainLayout>
      {isModalOpen && (
        <ModalRsvp setIsModalOpen={setIsModalOpen} username={name} />
      )}
    </>
  );
}
