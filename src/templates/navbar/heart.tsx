export default function Heart({ onClick }: { onClick: () => void }) {
  return (
    <div
      id="heart"
      onClick={onClick}
      className="w-12 h-12 relative cursor-pointer p-2"
    >
      <img src="/icons/heart.png" className="w-full h-full" alt="" />
    </div>
  );
}
