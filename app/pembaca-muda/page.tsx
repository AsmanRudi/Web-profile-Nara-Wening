import type { Metadata } from "next";
import Image from "next/image";
import { AudienceSwitch, YoungSiteHeader } from "../components/SiteChrome";

const books = [
  {
    title: "Peta Rahasia Sungai",
    kind: "PETUALANGAN",
    copy: "Dua sahabat mengikuti garis biru di peta tua dan menemukan jalan menuju hutan bambu.",
    image: "/images/open-book.jpg",
    alt: "Buku terbuka di ruang baca"
  },
  {
    title: "Rumah di Atas Awan",
    kind: "CERITA PENDEK",
    copy: "Sebuah rumah kecil berpindah tempat setiap kali angin sore datang dari utara.",
    image: "/images/forest-path.jpg",
    alt: "Jalan setapak di antara pepohonan"
  },
  {
    title: "Lampu untuk Lintang",
    kind: "NOVEL ANAK",
    copy: "Lintang belajar membaca langit bersama kakeknya dan menamai bintang-bintang baru.",
    image: "/images/starlit-sky.jpg",
    alt: "Langit malam berbintang"
  }
];

export const metadata: Metadata = {
  title: "Cerita Muda — Nara Wening",
  description: "Cerita, kabar buku, dan petualangan untuk pembaca muda."
};

export default function YoungReadersPage() {
  return (
    <main className="young-page">
      <AudienceSwitch active="young" />
      <YoungSiteHeader />

      <section className="young-hero" aria-labelledby="young-title">
        <div className="young-hero__backdrop" aria-hidden="true" />
        <div className="young-hero__shade" aria-hidden="true" />
        <div className="young-hero__copy">
          <p className="eyebrow eyebrow--light">CERITA MUDA · NARA WENING</p>
          <h1 id="young-title">
            Satu halaman,
            <br />
            <em>banyak petualangan.</em>
          </h1>
          <p>Tempat untuk menemukan cerita baru, kabar buku, dan kejutan kecil dari meja Nara.</p>
          <a className="portal-button" href="#cerita">Pilih cerita <span aria-hidden="true">↓</span></a>
        </div>
        <span className="young-hero__folio">UNTUK PEMBACA MUDA · 01</span>
      </section>

      <section className="young-note" id="kabar">
        <div>
          <p className="eyebrow">DARI MEJA NARA</p>
          <h2>
            Ide cerita bisa datang
            <br />
            dari mana saja.
          </h2>
        </div>
        <p>
          Di antara buku catatan, peta kecil, dan pensil warna, Nara mengumpulkan awal
          cerita. Setiap halaman membuka tempat baru untuk dijelajahi.
        </p>
      </section>

      <section className="young-books" id="cerita">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RAK CERITA</p>
            <h2>Pilih petualanganmu</h2>
          </div>
          <span className="section-heading__note">BUKA SATU HALAMAN ↓</span>
        </div>
        <div className="young-book-grid">
          {books.map((book, index) => (
            <article className="young-book" key={book.title}>
              <Image src={book.image} alt={book.alt} width={1000} height={667} />
              <div className="work__meta">
                <span>0{index + 1}</span>
                <span>{book.kind}</span>
              </div>
              <h3>{book.title}</h3>
              <p>{book.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="young-end">
        <p className="eyebrow eyebrow--light">HALAMAN BERIKUTNYA MENUNGGU</p>
        <h2>Selalu ada cerita<br />yang bisa dimulai.</h2>
        <a className="portal-button" href="/">Kembali ke pilihan ruang <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="site-footer site-footer--young">
        <a className="wordmark" href="/pembaca-muda">
          <span className="wordmark__mark" aria-hidden="true">C</span>
          <span>Cerita Muda<small>RUANG BACA NARA WENING</small></span>
        </a>
        <p>Seluruh nama dan kisah pada situs ini adalah rekaan.</p>
        <a href="/dewasa">Situs dewasa ↗</a>
      </footer>
    </main>
  );
}
