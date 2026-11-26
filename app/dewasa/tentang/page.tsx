import type { Metadata } from "next";
import AudienceDock from "../../components/AudienceDock";
import { AdultSiteHeader, AudienceSwitch } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Tentang Nara Wening",
  description: "Catatan tentang Nara Wening dan cara ia menulis cerita."
};

export default function AboutNaraPage() {
  return (
    <main className="profile-page">
      <AudienceSwitch active="adult" />
      <AdultSiteHeader />

      <section className="profile-intro">
        <p className="eyebrow">PENULIS · INDONESIA</p>
        <h1>Nara Wening</h1>
        <p>
          Nara Wening menulis novel dan cerita tentang tempat yang akrab, persahabatan,
          dan perubahan yang pelan-pelan membentuk hidup sehari-hari.
        </p>
        <p>
          Di ruang kerjanya, catatan kecil, buku, dan peta menjadi awal bagi dunia-dunia
          yang ia bangun di halaman.
        </p>
        <div
          className="profile-intro__image"
          role="img"
          aria-label="Rak buku dan ruang baca yang tenang"
        />
      </section>

      <section className="profile-note">
        <p className="eyebrow">TENTANG TULISAN</p>
        <h2>
          Cerita dimulai
          <br />
          dari hal yang dekat.
        </h2>
        <a className="text-link" href="/dewasa#karya">Lihat pilihan karya <span aria-hidden="true">↗</span></a>
      </section>

      <AudienceDock alwaysVisible />
    </main>
  );
}
