import toast from "react-hot-toast";
import Button from "../ui/button";

export default function Bank({
  rek,
  name,
  image,
}: {
  rek: string;
  name: string;
  image: string;
}) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(rek);
    toast.success("Berhasil Di Copy");
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="max-w-[150px] w-full" src={image} alt="" />
      <p className="font-medium">{rek}</p>
      <p className="font-medium">{name}</p>
      <Button onClick={copyToClipboard} image="/icons/copy.png">
        Salin No Rekening
      </Button>
    </div>
  );
}
