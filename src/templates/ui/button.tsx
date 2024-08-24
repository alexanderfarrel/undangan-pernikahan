import useWindowWidth from "../../services/hooks/useWindowWidth";

export default function Button({
  children,
  image,
  onClick,
  className,
}: {
  children: React.ReactNode;
  image?: string;
  onClick?: () => void;
  className?: string;
}) {
  const windowWidth = useWindowWidth();
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-400 text-white rounded-full z-10 hover:bg-blue-400/80 ${
        windowWidth < 500 && "text-[13px]"
      } ${image && "flex justify-center items-center gap-2"} ${className}`}
    >
      <img src={image} alt="" className="w-5 h-5 -mx-1" />
      {children}
    </button>
  );
}
