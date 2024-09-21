export default function Schedule({ onClick }: { onClick: () => void }) {
  return (
    <div
      id="schedule"
      onClick={onClick}
      className="w-12 h-12 relative cursor-pointer p-2 mr-1"
    >
      <img src="/icons/schedule.png" alt="" />
    </div>
  );
}
