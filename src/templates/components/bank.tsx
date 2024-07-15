export default function Bank({
  rek,
  name,
  image,
}: {
  rek: string;
  name: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="max-w-[150px] w-full" src={image} alt="" />
      <p className="font-medium">{rek}</p>
      <p className="font-medium">{name}</p>
      <button className="bg-purple-500 px-3 py-2 text-white rounded-full mt-5 z-10 hover:bg-purple-500/80">
        Salin Nomer Rekening
      </button>
    </div>
  );
}
