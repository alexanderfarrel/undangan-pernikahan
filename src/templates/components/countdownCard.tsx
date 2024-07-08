export default function CountdownCard({
  num,
  desc,
}: {
  num: number;
  desc: string;
}) {
  return (
    <div
      id={desc}
      className="text-center border rounded-lg py-2 w-[60px] shadow-lg"
    >
      <p className="text-xl font-medium">{num}</p>
      <p className="font-light">{desc}</p>
    </div>
  );
}
