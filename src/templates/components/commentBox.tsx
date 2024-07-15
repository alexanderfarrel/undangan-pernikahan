export default function CommentBox({
  name,
  comment,
  date,
}: {
  name: string;
  comment: string;
  date: string;
}) {
  return (
    <div className="border-b p-2">
      <div className="flex justify-between">
        <h1 className="font-medium text-sm">{name}</h1>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <p className="text-sm text-gray-500 font-[400]">{comment}</p>
    </div>
  );
}
