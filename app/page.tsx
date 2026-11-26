import Image from "next/image";
import { newsItems } from "./content";

const overview = [
  {
    title: "Jejak di Kota",
    copy: "Novel dan cerita Nara berangkat dari lorong, halte, pasar pagi, dan tempat-tempat lain yang diam-diam menyimpan kisah. Tokoh-tokohnya mencari jalan pulang, mengenali perubahan, dan belajar melihat kota dengan cara baru."
  },
  {
    title: "Catatan Perjalanan",
    copy: "Tulisan personal tentang proses mengamati, membuat catatan, lalu mengubah serpihan pengalaman menjadi cerita. Sesekali Nara juga berbagi kabar dari ruang kerjanya dan kegiatan bersama pembaca."
  },
  {
    title: "Cerita untuk Muda",
    copy: "Kisah petualangan yang mengajak pembaca muda mengikuti peta, menyalakan imajinasi, dan menemukan keberanian dalam hal-hal sederhana."
  },
  {
    title: "Ruang Baca",
    copy: "Nara mendukung perpustakaan komunitas dan kegiatan literasi yang membuka lebih banyak kesempatan bagi anak-anak untuk bertemu buku dan menemukan cerita yang mereka sukai."
  }
];

const features = [
  {
    title: "Menyusuri Kota dalam Hujan",
    label: "CATATAN NARA",
    href: "/dewasa#catatan",
    image: "/images/misty-lake.jpg",
    alt: "Kabut pagi di atas danau dan pepohonan"
  },
  {
    title: "Cerita yang Menunggu Dibuka",
    label: "UNTUK PEMBACA MUDA",
    href: "/pembaca-muda",
    image: "/images/open-book.jpg",
    alt: "Buku terbuka di ruang baca"
  }
];

export default function Home() {
  return (
    <main className="front-page">
      <section className="welcome" id="atas" aria-labelledby="welcome-title">
        <div
          className="welcome__image"
          role="img"
          aria-label="Meja tulis kayu dan buku cerita ungu, dua ruang cerita Nara"
        />
        <div className="welcome__veil" aria-hidden="true" />

        <div className="welcome__content">
          <h1 id="welcome-title">Selamat datang di situs<br />resmi Nara Wening.</h1>
          <p>Temukan kabar terbaru, cerita, dan informasi tentang buku-buku Nara Wening.</p>
        </div>

        <div className="welcome__doors">
          <section className="welcome__door" aria-label="Situs dewasa">
            <span className="welcome__signature">Nara Wening</span>
            <p>Untuk kabar terbaru, karya, dan tulisan Nara.</p>
            <a className="portal-button" href="/dewasa">Enter here</a>
          </section>
          <section className="welcome__door welcome__door--young" aria-label="Cerita untuk pembaca muda">
            <span className="welcome__signature">Cerita Muda</span>
            <p>Untuk pembaca muda yang ingin mengenal dunia cerita.</p>
            <a className="portal-button" href="/pembaca-muda">Come on in!</a>
          </section>
        </div>

        <div className="welcome__notice" role="note">
          <span className="welcome__notice-icon" aria-hidden="true">i</span>
          <p>
            Situs ini mengumpulkan kabar, tulisan, dan cerita dari Nara Wening.{' '}
            <a href="/dewasa/tentang">Kenali Nara</a>
          </p>
        </div>
      </section>

      <section className="front-intro" aria-labelledby="front-intro-title">
        <div className="front-intro__copy">
          <p className="eyebrow">PENULIS · INDONESIA</p>
          <h2 id="front-intro-title">Nara Wening</h2>
          <p>
            Nara Wening adalah penulis cerita dan novel yang berangkat dari tempat-tempat
            yang akrab, orang-orang yang kita temui, serta perubahan kecil yang tinggal
            lama dalam ingatan.
          </p>
          <p>
            Di sini pembaca dapat menemukan kabar buku dan proyek terbarunya, catatan
            personal tentang proses menulis, serta kisah untuk pembaca muda.
          </p>
          <a className="text-link" href="/dewasa/tentang">Tentang Nara <span aria-hidden="true">↗</span></a>
        </div>
        <Image
          className="front-intro__portrait"
          src="/images/nara-wening-portrait.png"
          alt="Potret Nara Wening dalam bingkai foto bertumpuk"
          width={1328}
          height={1184}
        />
      </section>

      <section className="front-features" aria-label="Pilihan cerita dan kabar">
        {features.map((feature) => (
          <a className="front-feature" href={feature.href} key={feature.title}>
            <Image src={feature.image} alt={feature.alt} width={1400} height={933} />
            <span className="front-feature__shade" aria-hidden="true" />
            <span className="front-feature__copy">
              <small>{feature.label}</small>
              <strong>{feature.title}</strong>
              <span className="front-feature__link">Baca lebih lanjut ↗</span>
            </span>
          </a>
        ))}
      </section>

      <section className="front-categories" aria-label="Tentang karya dan kegiatan Nara">
        {overview.map((item, index) => (
          <article className="front-category" key={item.title}>
            <p className="eyebrow">0{index + 1} · NARA WENING</p>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="front-news" aria-labelledby="front-news-title">
        <div className="front-news__inner">
          <h2 id="front-news-title">Kabar Terbaru</h2>
          <p className="front-news__intro">
            Ikuti kabar terbaru Nara, termasuk berita buku, proyek menulis, dan kegiatan
            bersama pembaca.
          </p>
          <div className="front-news__list">
            {newsItems.map((item) => (
              <a className="front-news__item" href={`/dewasa#${item.id}`} key={item.id}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={720}
                  height={540}
                />
                <time dateTime={item.dateTime}>{item.date}</time>
                <strong>{item.title}</strong>
              </a>
            ))}
          </div>
          <a className="front-news__all" href="/dewasa#kabar">VIEW ALL</a>
        </div>
      </section>

      <footer className="front-footer">
        <nav className="front-footer__nav" aria-label="Tautan footer">
          <a href="/dewasa#kabar">KABAR</a>
          <a href="/dewasa#catatan">TULISAN</a>
          <a href="/dewasa#karya">KARYA</a>
          <a href="/pembaca-muda">PEMBACA MUDA</a>
          <a href="/dewasa/tentang">TENTANG</a>
        </nav>
        <a className="front-footer__social" href="/dewasa#kabar" aria-label="Lihat kabar terbaru Nara Wening">N</a>
        <span className="front-footer__signature" aria-label="Tanda tangan Nara Wening">Nara Wening</span>
        <p className="front-footer__copyright">© Nara Wening 2026</p>
        <p className="front-footer__notice">Seluruh tulisan dan cerita di situs ini merupakan karya Nara Wening.</p>
        <p className="front-footer__rights">
          Hak cipta atas buku, cerita, dan materi terkait tetap dimiliki oleh penulis dan
          penerbit masing-masing.
        </p>
      </footer>
    </main>
  );
}
