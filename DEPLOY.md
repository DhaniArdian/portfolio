# Publikasi Online — Gratis

Situs sudah siap di-build menjadi file statis (`dist/`). Tiga cara gratis untuk
mendapatkan link yang bisa dibuka siapa saja:

## Opsi 1 — Netlify Drop (paling cepat, ±2 menit)

1. Buka <https://app.netlify.com/drop> dan login gratis (bisa pakai Google/GitHub).
2. Jalankan `npm run build` (atau pakai folder `dist` yang sudah ada).
3. Tarik (drag & drop) folder **`dist`** ke halaman Netlify Drop.
4. Link langsung aktif, misalnya `https://dhani-portfolio.netlify.app`.
5. Ganti nama subdomain lewat **Site configuration → Change site name**.

## Opsi 2 — Vercel (gratis, terhubung ke Git)

1. Upload folder proyek ke GitHub.
2. Buka <https://vercel.com/new>, login dengan GitHub, pilih repo tersebut.
3. Vercel mendeteksi Vite otomatis. Klik **Deploy**.
4. Link: `https://nama-proyek.vercel.app`.

## Opsi 3 — GitHub Pages (gratis, otomatis setiap push)

Workflow sudah disiapkan di `.github/workflows/deploy.yml`.

1. Buat repo baru di GitHub, lalu jalankan:
   ```bash
   git init
   git add .
   git commit -m "Portfolio Dhani Ardian Pratama"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
2. Di repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Setiap push ke `main`, situs otomatis ter-deploy ke
   `https://USERNAME.github.io/NAMA-REPO/`.

## Form kontak

Secara default tombol **KIRIM PESAN** membuka aplikasi email pengunjung dengan
pesan yang sudah terisi, lalu dikirim ke `dhaniardian028@gmail.com`.

Agar pesan masuk otomatis tanpa membuka email:

1. Daftar gratis di <https://formspree.io>.
2. Buat form baru dan salin endpoint-nya.
3. Ganti nilai `formspreeEndpoint` di `src/app/App.tsx`:
   ```ts
   formspreeEndpoint: "https://formspree.io/f/xxxxxxx",
   ```

## Mengganti foto proyek

Foto proyek saat ini memakai gambar stok. Ganti dengan foto asli robot:

1. Simpan foto di `src/imports/`.
2. Impor di bagian atas `src/app/App.tsx`, contoh:
   ```ts
   import kungfu from "@/imports/kungfu.jpg";
   ```
3. Pakai pada properti `image` proyek terkait di array `GARAGE`.
