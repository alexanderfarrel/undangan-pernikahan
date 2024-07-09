export default function ProfileCard({
  name,
  desc,
}: {
  name: string;
  desc: string;
}) {
  return (
    <main className="mt-10 flex flex-col gap-2 items-center">
      <div className="p-1 w-36 h-36 bg-blue-200 shadow-xl rounded-full">
        <div
          className="w-full h-full rounded-full"
          style={{
            backgroundImage: "url('/formal-face.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <img
        src="https://app.sangmempelai.id/webview/template/front/div/wavy-sfe-04.png"
        alt=""
        className="max-w-[150px] w-full"
      />
      <footer className="max-w-[200px]">
        <p className="font-light">{desc}</p>
      </footer>
    </main>
  );
}
