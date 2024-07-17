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
        image="https://app.sangmempelai.id/webview/template/front/amplop/3858392155330e473a00303bd34d374e.png"
        rek="2148036309"
        name="a/n Gesty Wijining Tyas"
      />
      <Bank
        image="https://app.sangmempelai.id/webview/template/front/amplop/40fc5c042265bc203fea6827bca563ca.png"
        rek="7315006091"
        name="a/n Dimas Ilham Rakhmawan"
      />
      <img
        src="https://app.sangmempelai.id/webview/template/front/amplop/187ece4abf101efceac87481ccf9dd5d.png"
        alt=""
        className="w-full max-w-[150px]"
      />
      <div className="font-medium">
        <p>Alamat Pengiriman Kado :</p>
        <p>
          Gesty wijining Tyas (08818592509) Jl.Pramuka Desa Kedungwringin
          RT.02/RW.05 Kecamatan Jatilawang Kabupaten Banyumas
        </p>
      </div>
    </MainLayout>
  );
}
