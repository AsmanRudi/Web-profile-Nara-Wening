import type { Metadata } from "next";
import Image from "next/image";
import { AdultSiteHeader, AudienceSwitch } from "../components/SiteChrome";
import { newsItems } from "../content";

const stories = [
  {
    label: "CATATAN DARI MEJA KERJA",
    title: "Menemukan cerita di tempat yang akrab",
    image: "/images/writing-notes.jpg",
    alt: "Buku catatan terbuka di atas meja kayu",
    href: "/dewasa#catatan",
    className: "journal-card--feature"
  },
  {
    label: "KABAR BUKU",
    title: "Atlas Hujan hadir dengan sampul baru",
    image: "/images/book-shelves.jpg",
    alt: "Rak buku di perpustakaan",
    href: "/dewasa#kabar",
    className: ""
  },
  {
    label: "DARI RUANG BACA",
    title: "Tiga kisah yang sedang Nara tulis",
    image: "/images/morning-pages.jpg",
    alt: "Buku dan cahaya pagi",
    href: "/dewasa#karya",
    className: ""
  }
];

const works = [
  {
    title: "Atlas Hujan",
    type: "NOVEL · 2024",
    text: "Sebuah peta tua membawa Laras menyusuri kota yang menyimpan kenangan orang-orangnya.",
    image: "/images/book-shelves.jpg",
    alt: "Rak buku tinggi"
  },
  {
    title: "Surat untuk Pagi",
    type: "KUMPULAN CERITA · 2022",
    text: "Cerita pendek tentang rumah, perjalanan pulang, dan hal-hal yang terlambat diucapkan.",
    image: "/images/morning-pages.jpg",
    alt: "Cahaya pagi di halaman buku"
  },
  {
    title: "Kota di Ujung Peta",
    type: "BUKU ANAK · 2021",
    text: "Dua sahabat belajar bahwa tempat paling jauh kadang ada di halaman belakang.",
    image: "/images/forest-path.jpg",
    alt: "Jalan setapak di hutan"
  }
];

export const metadata: Metadata = {
  title: "Nara Wening — Karya & Kabar",
  description: "Kabar, karya, dan tulisan dari Nara Wening."
};

export default function AdultPage() {
  return (
    <main className="adult-page">
      <AudienceSwitch active="adult" />
      <AdultSiteHeader />

      <section className="journal-board" aria-label="Kabar dan tulisan terbaru">
        <div className="journal-grid">
          {stories.map((story) => (
            <a className={`journal-card ${story.className}`} href={story.href} key={story.title}>
              <Image src={story.image} alt={story.alt} width={1400} height={933} />
              <span className="journal-card__shade" aria-hidden="true" />
              <span className="journal-card__copy">
                <small>{story.label}</small>
                <strong>{story.title}</strong>
                <span>Baca selengkapnya <span aria-hidden="true">↗</span></span>
              </span>
            </a>
          ))}
        </div>
        <span className="journal-board__folio">CATATAN NARA · 01—03</span>
      </section>

      <section className="adult-bio" id="catatan">
        <div className="adult-bio__copy">
          <p className="eyebrow">TENTANG NARA</p>
          <h1>
            Menulis tentang
            <br />
            <em>yang dekat.</em>
          </h1>
          <p>
            Nara Wening menulis cerita dan novel yang berangkat dari tempat-tempat yang
            kita kenal, orang-orang yang kita temui, dan perubahan kecil yang tinggal
            lama di ingatan.
          </p>
          <a className="text-link" href="/dewasa/tentang">Baca kisah Nara <span aria-hidden="true">↗</span></a>
        </div>
        <div
          className="adult-bio__image"
          role="img"
          aria-label="Ruang baca dengan buku dan catatan"
        />
      </section>

      <section className="works-section" id="karya">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BUKU & CERITA</p>
            <h2>Karya pilihan</h2>
          </div>
          <span className="section-heading__note">01 — 03</span>
        </div>
        <div className="work-list">
          {works.map((work, index) => (
            <article className="work" key={work.title}>
              <Image src={work.image} alt={work.alt} width={1000} height={667} />
              <div className="work__meta">
                <span>0{index + 1}</span>
                <span>{work.type}</span>
              </div>
              <h3>{work.title}</h3>
              <p>{work.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="news-section" id="kabar">
        <p className="eyebrow">PEMBARUAN TERBARU</p>
        <h2>Kabar dari Nara</h2>
        <div className="news-list">
          {newsItems.map((item) => (
            <article className="news-list__item" id={item.id} key={item.id}>
              <time dateTime={item.dateTime}>{item.date}</time>
              <span>
                <small>{item.category}</small>
                <strong>{item.title}</strong>
              </span>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="/dewasa">
          <span className="wordmark__mark" aria-hidden="true">N</span>
          <span>Nara Wening<small>PENULIS & PENDONGENG</small></span>
        </a>
        <p>© Nara Wening · Seluruh nama dan karya adalah rekaan.</p>
        <a href="/">Pilih ruang cerita ↑</a>
      </footer>
    </main>
  );
}
