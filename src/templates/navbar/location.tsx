export default function Location({ onClick }: { onClick: () => void }) {
  return (
    <div
      id="location"
      onClick={onClick}
      className="w-12 h-12 relative cursor-pointer p-2"
    >
      <img src="/icons/location.png" className="w-full h-full" alt="" />
    </div>
  );
}
