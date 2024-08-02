import { Navigate, useParams } from "react-router-dom";

export default function RsvpAdmin() {
  const { name } = useParams();

  if (name !== "@tinadewa_admin") {
    return <Navigate to="/" />;
  }

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <div className="bg-purple-600 h-screen flex w-full items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-xl h-full max-h-[500px] p-3 m-5 flex flex-col gap-3">
        <h1 className="font-bold text-center text-xl">Daftar Hadir</h1>
        <input
          type="text"
          className="w-full p-1 px-2 outline-none rounded-lg bg-gray-200"
          placeholder="Cari..."
        />
        <div className="overflow-y-scroll comment-scrollbar w-full h-full flex flex-col gap-2">
          {data.map((n, i) => (
            <div
              className={`flex justify-between p-1 px-3 rounded-lg ${
                i % 2 ? "bg-gray-100" : "bg-gray-100"
              }`}
            >
              <h1 className="font-medium">Tina</h1>
              <p
                className={`font-medium ${
                  n % 2 ? "text-green-500" : "text-red-500"
                }`}
              >
                Hadir
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
