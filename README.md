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
