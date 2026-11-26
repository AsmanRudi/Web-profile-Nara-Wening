type Audience = "adult" | "young";

export function AudienceSwitch({ active }: { active: Audience }) {
  return (
    <div className={`audience-switch${active === "young" ? " audience-switch--young" : ""}`}>
      <a className={active === "adult" ? "audience-switch__current" : undefined} href="/dewasa">Dewasa</a>
      <span aria-hidden="true">|</span>
      <a className={active === "young" ? "audience-switch__current" : undefined} href="/pembaca-muda">Pembaca muda</a>
    </div>
  );
}

export function AdultSiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/dewasa">
        <span className="wordmark__mark" aria-hidden="true">N</span>
        <span>Nara Wening<small>PENULIS & PENDONGENG</small></span>
      </a>
      <nav className="nav" aria-label="Navigasi utama">
        <a href="/dewasa">Beranda</a>
        <a href="/dewasa#kabar">Kabar</a>
        <a href="/dewasa#catatan">Tulisan</a>
        <a href="/dewasa#karya">Karya</a>
        <a href="/dewasa/tentang">Tentang</a>
      </nav>
    </header>
  );
}

export function YoungSiteHeader() {
  return (
    <header className="site-header site-header--young">
      <a className="wordmark" href="/pembaca-muda">
        <span className="wordmark__mark" aria-hidden="true">C</span>
        <span>Cerita Muda<small>RUANG BACA NARA WENING</small></span>
      </a>
      <nav className="nav" aria-label="Navigasi pembaca muda">
        <a href="#cerita">Cerita</a>
        <a href="#kabar">Kabar</a>
        <a href="/dewasa/tentang">Tentang</a>
      </nav>
      <a className="header-contact" href="/">Kembali <span aria-hidden="true">↗</span></a>
    </header>
  );
}
