<div align="center">

# Nara Wening

### Sebuah ruang untuk cerita, catatan, dan pembaca muda.

*Situs profil penulis yang dirancang untuk membawa pengunjung masuk ke dua dunia cerita.*

<br />

**[Lihat panduan deploy](docs/deploy-vercel.md)** · **[Jalankan secara lokal](#menjalankan-secara-lokal)**

</div>

---

## Tentang proyek

Nara Wening adalah situs profil penulis berbahasa Indonesia. Halaman pembuka memperkenalkan dua pintu masuk—ruang utama untuk kabar dan karya, serta ruang cerita untuk pembaca muda. Pengunjung dapat melanjutkan ke halaman tentang penulis, kabar, dan pilihan bacaan.

Desainnya memakai nuansa editorial: tipografi serif, warna hangat, fotografi atmosferik, dan navigasi yang sederhana. Identitas, teks, dan aset dibuat khusus untuk proyek ini.

## Isi situs

| Halaman | Rute | Isi |
| --- | --- | --- |
| Beranda | `/` | Pintu masuk ke situs dan pilihan cerita |
| Ruang Nara | `/dewasa` | Kabar, karya, dan catatan penulis |
| Pembaca muda | `/pembaca-muda` | Ruang cerita untuk pembaca muda |
| Tentang Nara | `/dewasa/tentang` | Profil dan perjalanan menulis |

## Teknologi

**Next.js 16** · **React 19** · **TypeScript** · **CSS**

Situs menggunakan static export. Hasil produksi dibuat ke folder `out/`, siap disajikan sebagai situs statis.

## Menjalankan secara lokal

Pastikan Node.js 22 dan npm tersedia, lalu jalankan:

```bash
npm ci
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat situs dalam mode pengembangan.

## Pemeriksaan dan build

```bash
npm run typecheck
npm run build
npm run start
```

Build produksi menghasilkan file situs di `out/`. Perintah `start` menyajikan hasil build lokal.

## Deploy ke Vercel

Konfigurasi proyek sudah disiapkan di [`vercel.json`](vercel.json): framework Next.js, build `npm run build`, dan output `out`. Node.js ditetapkan ke `22.x`; saat ini proyek tidak memerlukan environment variable.

Untuk langkah menghubungkan repository dan menerbitkan situs, lihat **[Panduan deploy Vercel](docs/deploy-vercel.md)**.

## Struktur ringkas

```text
app/                  Halaman, konten, dan gaya situs
public/images/        Gambar dan aset visual
docs/deploy-vercel.md Panduan deploy
out/                  Hasil static export setelah build
```

---

<div align="center">

*Dibuat untuk pembaca yang percaya setiap tempat menyimpan cerita.*

</div>
