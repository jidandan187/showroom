# Thomy Showroom — Static Website

Website katalog showroom mobil berbasis HTML, CSS, dan JavaScript murni. Bisa di-host di GitHub Pages.

## Struktur
- `index.html` — halaman utama dan section katalog
- `style.css` — visual dan responsive layout
- `script.js` — data mobil, filter, pencarian, detail, WhatsApp
- `assets/` — tempat menyimpan aset tambahan (versi ini tidak membutuhkan folder foto lokal karena foto model tertentu dimuat dari URL resmi produsen)

## Sebelum dipublikasikan
1. Buka `script.js`.
2. Ganti nilai `CONTACT_WA` dengan nomor WhatsApp resmi Thomy Showroom (format internasional, tanpa `+`, spasi, atau strip; contoh `6281234567890`).
3. Periksa dan ganti foto mobil dengan foto unit asli showroom bila tersedia.
4. Perbarui tahun contoh dan informasi katalog sesuai unit aktual.

## Catatan katalog
Katalog demo berisi 18 model yang umum/relevan di pasar Indonesia, termasuk city car, MPV, SUV, sedan, diesel, hybrid, dan EV. Tahun pada kartu hanya data demo; bukan pernyataan stok aktual. Harga dan ketersediaan sengaja diarahkan untuk dikonfirmasi ke showroom. Foto demo berasal dari URL gambar eksternal, sehingga koneksi internet diperlukan untuk menampilkannya.

## GitHub Pages
Upload isi folder ini ke root repository, lalu aktifkan Settings → Pages → Deploy from a branch → `main` → `/(root)`.


## Foto katalog
- Foto Hyundai IONIQ 5, KONA Electric, dan IONIQ 6 menggunakan URL gambar dari situs resmi Hyundai Indonesia.
- Foto Wuling Air ev, BinguoEV, dan Cloud EV menggunakan URL gambar dari situs resmi Wuling.
- Foto BYD Seal, Atto 3, dan M6 menggunakan URL gambar dari situs resmi BYD Indonesia.
- Model lain yang belum memiliki foto model terverifikasi menampilkan placeholder dengan nama merek/model, bukan foto mobil yang berpotensi salah.
- Foto eksternal memerlukan koneksi internet dan dapat berubah jika produsen mengganti URL. Untuk stabilitas jangka panjang, unduh foto yang berizin dan simpan di folder `assets/cars/`, lalu ubah URL pada data `cars` di `script.js` menjadi path lokal.


## Update v5
- Nomor WhatsApp showroom: 6287886555076 (format internasional tanpa tanda +).
- Tombol WhatsApp mengambang tersedia di desktop dan mobile.
- Bagian sorotan Electric Edit menampilkan 25 model EV dan tombol filter mobil listrik.
- Jumlah katalog dihitung otomatis dari hasil filter.


## Detail mobil dan WhatsApp (v7)
Setiap kartu mobil memiliki deskripsi ringkas dan tombol **Tanya via WhatsApp**. Tombol tersebut membuka chat dengan pesan otomatis berisi merek, model, dan tahun mobil yang dipilih. Tombol Info Mobil membuka detail spesifikasi dan deskripsi yang lebih lengkap.


## Update v8 — technical specifications
- Detail mobil sekarang menampilkan data teknis khusus per model: mesin/motor, tenaga, torsi, transmisi atau baterai, jarak tempuh EV, sistem penggerak, dan kapasitas.
- Tombol WhatsApp tetap tersedia di bawah spesifikasi.
- Spesifikasi ditulis sebagai referensi varian/pasar Indonesia. Beberapa angka memiliki rentang karena berbeda menurut trim, tahun produksi, dan standar pengujian (misalnya WLTP, NEDC, atau CLTC). Konfirmasikan tipe unit aktual sebelum transaksi.


v9: Mobile catalog uses a compact two-column card layout with shorter vehicle images, condensed text, and smaller action buttons. Desktop/tablet layouts remain unchanged.


v10: Catalog initially shows 4 vehicles on mobile and 8 on wider screens, with a show-all/show-less control. Search and category filters show matching results. Contact section redesigned with direct WhatsApp action and showroom information cards.


v11: All vehicle photos are loaded through online image URLs. No local photo assets or image folder are required. Models without a fixed photo URL receive a remote model-tagged image fallback.


v12: Foto dicari otomatis secara online (Wikimedia Commons, cadangan Wikipedia) berdasarkan nama mobil dan di-cache di browser. Katalog bertambah menjadi 51 model sesuai penjualan Indonesia 2026 (Gaikindo), model terlaris tampil lebih dulu dengan badge TERLARIS 2026.

v13: Panel filter (merek, tipe bodi, kapasitas, bahan bakar), urutan (terlaris/tahun/nama/merek), favorit (tersimpan di browser, kirim semua via WhatsApp), dan bandingkan hingga 3 mobil.

## v14 — fitur layanan (tanpa alamat, harga & booking via WhatsApp)
- Status unit per mobil: Ready / Indent / Terjual / Bisa dicarikan, plus kondisi (baru/bekas), warna, kilometer; ada filter Status dan Kondisi.
- Form di bagian Layanan: Carikan Mobil, Booking Jadwal (lihat unit / test drive), Tukar Tambah / Jual. Semuanya membuka WhatsApp dengan pesan terisi otomatis.
- Link per mobil: `index.html#mobil-39` membuka detail Innova Reborn. Tombol Bagikan memakai menu share HP.
- FAQ.
- Galeri foto unit asli: isi kolom foto1–foto3 di sheet; foto pertama menggantikan foto katalog.

### Update stok lewat Google Sheet (tanpa edit kode)
1. Buka `data-unit-template.csv` di Google Sheets (File → Import).
2. Ubah kolom `status` (ready / indent / sold / cari), `kondisi` (baru / bekas), `warna`, `km`, `harga` (contoh: Rp 250 juta; kosongkan = Tanya harga), `foto1`–`foto3` (link gambar), `catatan`.
3. Tambah mobil baru: isi baris dengan id baru (mis. 100), `brand`, `name`, `tahun`.
4. File → Share → Publish to web → pilih sheet → format CSV → Publish. Salin link.
5. Tempel link itu ke `SHEET_CSV_URL` di bagian atas blok "v14" pada `script.js`.

## v15
- Perbaikan: foto kartu tidak lagi macet di "MEMUAT FOTO…" (penyebab: lazy-load pada gambar tersembunyi). Foto kini dimuat lewat preload dan ada batas waktu 15 detik.
- Perbaikan: filter pencarian foto sebelumnya salah menolak judul berisi "Toyota"; sekarang memakai pencocokan kata utuh.
- Judul bagian dan footer diganti ke Bahasa Indonesia; ditambah tag Open Graph untuk preview link di WhatsApp/Instagram.
- `SITE_CONFIG` di akhir script.js: isi `instagram`, `tiktok`, dan `jamBalas` agar tampil di bagian Kontak (kosong = disembunyikan).

## v16
- Permintaan foto kini punya batas waktu (6 dtk per permintaan, 22 dtk per kartu) sehingga kartu tidak pernah macet di "MEMUAT FOTO…"; jika foto tidak ditemukan tampil "FOTO MODEL MENYUSUL".
- `script.js?v=16` dan `style.css?v=16` di index.html mencegah browser memakai file lama dari cache. Setiap kali mengubah script/style, naikkan angka v-nya.
- Footer menampilkan nomor versi (· v16) untuk memastikan versi terbaru yang terbuka.

## v17 — Berita Otomotif otomatis
- Website membaca `articles.json` dan menampilkan 6 berita terbaru (judul, ringkasan pendek, gambar kecil, tautan ke sumber).
- Pembaruan otomatis dilakukan oleh SATU file: `update-news.yml` (sudah berisi skrip Python-nya). Simpan di repo dengan path `.github/workflows/update-news.yml`.
- Sumber berita diatur di daftar `SOURCES` di dalam file yml itu.
- Pasang: (1) upload semua file situs ke repo; (2) GitHub: Add file → Create new file → ketik nama `.github/workflows/update-news.yml` → tempel isi `update-news.yml` → Commit; (3) Settings → Actions → General → Workflow permissions → Read and write → Save; (4) tab Actions → "Update berita otomotif" → Run workflow; (5) buka log, baris `[ok]` = sumber berhasil dibaca.
- Hanya judul + ringkasan pendek yang ditampilkan; pembaca diarahkan ke situs sumber. Untuk menyembunyikan gambar berita, ubah `NEWS_IMAGES` menjadi `false` di script.js.

## v18 — UI/UX
- Filter diringkas: pencarian + tombol FILTER (panel bisa dibuka/tutup, ada badge jumlah filter aktif) + chip merek yang bisa digeser.
- Kartu di HP lebih ramping: deskripsi disembunyikan, tombol bandingkan jadi ikon ⇄ di foto, "Tanya harga" hanya tampil bila harga sudah diisi di sheet.
- Tombol WhatsApp melayang jadi ikon bulat di HP.
- Tombol "CARIKAN MOBIL" di header, hero, dan banner di bawah katalog.
- Ukuran huruf terkecil dinaikkan ke 10px, warna teks abu-abu digelapkan.

## v19
- Kolom `status` di sheet kini menerima sinonim: tersedia/stok/siap → Ready, inden/PO → Indent, terjual/habis → Terjual. Nilai yang tidak dikenali tetap menjadi "Bisa dicarikan".
- Kolom `harga` yang diawali angka otomatis diberi awalan "Rp", dan `km` yang hanya berisi angka diberi akhiran "km".
- update-news.yml: bila RSS tidak menyertakan gambar, gambar diambil dari halaman artikel (og:image), sehingga semua kartu berita punya gambar.
