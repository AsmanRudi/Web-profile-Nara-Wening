"use client";

import { useEffect, useState } from "react";

export default function AudienceDock({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [visible, setVisible] = useState(alwaysVisible);

  useEffect(() => {
    if (alwaysVisible) {
      setVisible(true);
      return;
    }

    const update = () => setVisible(window.scrollY > window.innerHeight * 0.78);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [alwaysVisible]);

  if (!visible) return null;

  return (
    <nav className="audience-dock" aria-label="Pilih ruang cerita">
      <div className="audience-dock__card audience-dock__card--adult">
        <span className="audience-dock__mark" aria-hidden="true">Nara Wening</span>
        <p>Untuk kabar terbaru, karya, dan tulisan Nara.</p>
        <a href="/dewasa">Enter here</a>
      </div>
      <div className="audience-dock__card audience-dock__card--young">
        <span className="audience-dock__mark" aria-hidden="true">Cerita Muda</span>
        <p>Untuk pembaca muda yang ingin mengenal dunia cerita.</p>
        <a href="/pembaca-muda">Come on in!</a>
      </div>
    </nav>
  );
}
