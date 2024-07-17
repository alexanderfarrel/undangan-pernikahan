import CommentBox from "../components/commentBox";
import MainLayout from "../components/mainLayout";

export default function Comment() {
  return (
    <MainLayout height="h-full" className="gap-5">
      <h1 className="text-xl latin-25">Kirim Ucapan & Doa Restu</h1>
      <form action="" className="flex flex-col gap-2 w-full z-10">
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="border p-2 bg-gray-200"
        />
        <input
          type="text"
          placeholder="Tulis ucapan & doa restu"
          className="border p-2 bg-gray-200"
        />
        <button
          type="submit"
          className="bg-purple-500 px-3 py-2 text-white rounded-full"
        >
          Kirim
        </button>
      </form>
      <div className="max-h-[200px] overflow-y-scroll z-10 w-full">
        <CommentBox
          name="Tina"
          comment="Selamat berbahagia salam sejahtera untuk kita semua"
          date="12/10/2024"
        />
        <CommentBox
          name="Tina"
          comment="Selamat berbahagia salam sejahtera untuk kita semua"
          date="12/10/2024"
        />
        <CommentBox
          name="Tina"
          comment="Selamat berbahagia salam sejahtera untuk kita semua"
          date="12/10/2024"
        />
        <CommentBox
          name="Tina"
          comment="Selamat berbahagia salam sejahtera untuk kita semua"
          date="12/10/2024"
        />
        <CommentBox
          name="Tina"
          comment="Selamat berbahagia salam sejahtera untuk kita semua"
          date="12/10/2024"
        />
        <CommentBox
          name="Tina"
          comment="Selamat berbahagia salam sejahtera untuk kita semua"
          date="12/10/2024"
        />
      </div>
    </MainLayout>
  );
}
