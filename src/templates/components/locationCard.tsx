export default function LocationCard({
  title,
  date,
  time,
  home,
  location,
}: {
  title: string;
  date: string;
  time: string;
  home: string;
  location: string;
}) {
  return (
    <div className="shadow-custom p-4 flex flex-col gap-3 text-center max-w-[350px]">
      <h1 className="latin-20">{title}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <h2 className="font-medium">Lokasi / Tempat Acara:</h2>
      <p className="-mb-3">{home}</p>
      <p className="leading-6">{location}</p>
    </div>
  );
}
