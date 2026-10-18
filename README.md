# Bayiku

Catatan harian bayi yang bisa diisi siapa pun yang sedang pegang anaknya — ibu, ayah,
nenek, atau pengasuh.

**Pasang:** https://tamfanman.github.io/bayiku/

Ini **prototipe**. Semua data tersimpan di peramban HP kamu sendiri, tidak dikirim ke
server mana pun, dan tidak ada akun. Bukan alat medis dan bukan pengganti pemeriksaan
dokter.

---

## Cara memasang di HP

Bayiku bukan aplikasi dari Play Store atau App Store, tapi tetap bisa ditaruh di layar
utama dan dibuka seperti aplikasi biasa — lengkap dengan ikonnya sendiri, layar penuh,
dan bisa dipakai tanpa internet.

**Android (Chrome)**
1. Buka https://tamfanman.github.io/bayiku/
2. Akan muncul tawaran "Pasang Bayiku di layar utama" — ketuk **Pasang**.
3. Kalau tidak muncul: ketuk tombol titik tiga di pojok kanan atas → **Tambahkan ke
   layar Utama** atau **Instal aplikasi**.

**iPhone (Safari)**
1. Buka https://tamfanman.github.io/bayiku/ — harus lewat Safari, bukan Chrome.
2. Ketuk tombol **Bagikan** (kotak dengan panah ke atas) di bawah.
3. Gulir ke bawah, pilih **Tambahkan ke Layar Utama**, lalu **Tambah**.

Setelah terpasang, Bayiku bisa dibuka tanpa internet.

---

## Isinya

- Catat tidur, nenen, botol, popok, pumping, MPASI, suhu, dan obat
- Perkiraan kapan anak ngantuk lagi, dihitung dari jendela bangun sesuai umurnya
- Riwayat per tanggal dan tren tujuh hari
- Kurva pertumbuhan WHO untuk berat, panjang, dan lingkar kepala, dengan umur koreksi
  untuk bayi prematur
- Jadwal imunisasi IDAI dan program nasional
- Stok ASI perah: urutan pakai terdekat-dulu dan perkiraan kapan habis
- Kolom "tulis seperti di WhatsApp" — ketik `nenen kiri 10 menit`, `pup`,
  `sufor 120 ml`, `tidur jam 13`

---

## Catatan untuk yang mencoba

Tiga angka di dalam aplikasi ini **belum diverifikasi** dan sedang dalam peninjauan:
tabel jendela bangun per umur, masa simpan ASI perah, dan koreksi z-score di luar
±3 SD. Jangan dipakai sebagai acuan medis.

Masukan sangat ditunggu — terutama soal apa yang bikin kamu berhenti pakai di hari
kedua.

---

## Teknis

Satu berkas HTML tanpa kerangka kerja, dibungkus jadi PWA dengan manifest, service
worker, dan ikon yang dibuat tanpa pustaka luar. Semua isi folder ini adalah keluaran
hasil rakitan; berkas sumbernya tidak ikut diterbitkan.
