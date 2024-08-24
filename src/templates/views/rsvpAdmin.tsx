import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { retrieveData } from "../../services/firebase/services";
import RsvpBox from "../components/rsvpBox";

interface rsvp {
  id: string;
  name: string;
  presence: boolean;
  email?: string;
  jumlah?: string;
  keterangan?: string;
  telepon?: string;
}

export default function RsvpAdmin() {
  const { name } = useParams();
  const [search, setSearch] = useState("");
  const [rsvpData, setRsvpData] = useState<rsvp[]>([]);

  if (name !== "@tinandewa_admin") {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    getRsvpData();
  }, []);

  function isRsvp(obj: any): obj is rsvp {
    return (
      typeof obj === "object" &&
      "id" in obj &&
      "name" in obj &&
      "presence" in obj
    );
  }
  const getRsvpData = async () => {
    if (name !== "@tinandewa_admin") {
      return <Navigate to="/" />;
    }

    try {
      const data: any = await retrieveData("rsvp");
      if (Array.isArray(data) && data.every(isRsvp)) {
        setRsvpData(data);
      } else {
        throw new Error("Data does not match rsvp[] type");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-blue-400 h-screen flex w-full items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-xl h-full max-h-[500px] p-3 m-5 flex flex-col gap-3">
        <h1 className="font-bold text-center text-xl">Daftar Hadir</h1>
        <input
          type="text"
          className="p-1 px-2 mx-2 mr-3 outline-none rounded-lg bg-gray-200"
          placeholder="Cari..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="overflow-y-scroll comment-scrollbar w-full h-full flex flex-col gap-2 px-2">
          {rsvpData
            .filter((data) =>
              data.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((data: rsvp) => (
              <RsvpBox key={data.id} data={data} search={search} />
            ))}
        </div>
      </div>
    </div>
  );
}
