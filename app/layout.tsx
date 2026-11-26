import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Nara Wening — Penulis & Pendongeng",
  description: "Ruang resmi Nara Wening: cerita, buku, catatan, dan kabar terbaru.",
  openGraph: {
    title: "Nara Wening — Penulis & Pendongeng",
    description: "Cerita yang berakar di sini, untuk dibawa ke mana saja.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
