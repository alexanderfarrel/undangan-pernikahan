import MainLayout from "../components/mainLayout";

export default function EndFooter() {
  return (
    <MainLayout
      backgroundColor="bg-purple-400"
      className="py-10 pb-32"
      height="h-full"
    >
      <h1 className="font-medium text-white">Dibuat Dengan Sepenuh Hati ❤️</h1>
      <p
        className="font-medium text-white cursor-pointer z-10"
        onClick={() => window.open("https://alexanderfarrel.vercel.app")}
      >
        by <span className="hover:text-white/80">Alexander Farrel</span>
      </p>
    </MainLayout>
  );
}
