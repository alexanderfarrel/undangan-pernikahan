import Wave from "../../assets/wave";

export default function MainLayout({
  children,
  height = "min-h-screen",
  className = "",
  backgroundColor = "bg-white",
  flower = true,
}: {
  children?: React.ReactNode;
  className?: string;
  height?: string;
  backgroundColor?: string;
  flower?: boolean;
}) {
  return (
    <section
      className={`relative w-full ${height} flex flex-col justify-center items-center ${backgroundColor} p-32 px-10 ${className}`}
    >
      {flower && (
        <div className={`w-full h-full overflow-hidden absolute z-0`}>
          <img
            src="/images/bercak2.png"
            alt=""
            className="absolute -left-56 top-1/2 opacity-20"
          />
          <img
            src="/images/bercak2.png"
            alt=""
            className="absolute -right-48 top-[15%] opacity-20"
          />
          <img
            src="/images/bunga3.png"
            alt=""
            className="absolute -top-9 -left-5 w-[60dvw] max-w-64 z-0"
          />
          <img
            src="/images/bunga4.png"
            alt=""
            className="absolute -top-[8rem] -right-10 w-[60dvw] max-w-64 z-0 rotate-[110deg]"
          />

          <img
            src="/images/bunga3.png"
            alt=""
            className="absolute -bottom-9 -right-5 w-[60dvw] max-w-64 z-0 rotate-180"
          />
          <img
            src="/images/bunga4.png"
            alt=""
            className="absolute -bottom-[7.5rem] -left-10 w-[60dvw] max-w-64 z-0 rotate-[-65deg]"
          />
        </div>
      )}
      <div className={`w-full h-full -top-10 overflow-hidden absolute z-0`}>
        <Wave />
      </div>
      {children}
    </section>
  );
}
