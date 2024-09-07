import Bank from "../components/bank";
import MainLayout from "../components/mainLayout";

export default function Gift() {
  return (
    <MainLayout className="text-center gap-5" height="h-full">
      <h1 className="latin-25">Wedding Gift</h1>
      <p>
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika
        memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara
        cashless.
      </p>
      <Bank
        image="/images/bca.png"
        rek="2610177657"
        name="a/n Agustina untari"
      />
      <img
        src="https://app.sangmempelai.id/webview/template/front/amplop/187ece4abf101efceac87481ccf9dd5d.png"
        alt=""
        className="w-full max-w-[150px]"
      />
      <div className="font-medium z-10">
        <p>Alamat Pengiriman Kado :</p>
        <p>
          Agustina Untari (08818592509) Pancasan, Desa Blabursari RT 01 RW 06
          Kec. Ajibarang Kab Banyumas
        </p>
      </div>
    </MainLayout>
  );
}
