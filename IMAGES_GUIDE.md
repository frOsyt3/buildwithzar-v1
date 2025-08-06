# 🖼️ Panduan Menambahkan Gambar di Website Portofolio

## 📁 Struktur Folder Gambar

```
my-portfolio/
├── public/
│   └── images/
│       ├── profile.jpg          ← Foto profil Anda
│       ├── hero-bg.jpg          ← Background hero section
│       ├── project1.jpg         ← Screenshot project 1
│       ├── project2.jpg         ← Screenshot project 2
│       ├── project3.jpg         ← Screenshot project 3
│       └── about-bg.jpg         ← Background about section (opsional)
```

## 🎯 Cara Menambahkan Gambar

### 1. **Foto Profil** 👤

**Langkah 1:** Simpan foto profil Anda di `public/images/profile.jpg`

**Langkah 2:** Edit file `src/pages/Home.jsx` dan `src/pages/About.jsx`:

```javascript
// Uncomment bagian ini dan comment bagian initial
<img 
  src="/images/profile.jpg" 
  alt="Nazar Nur Fauzan" 
  className="w-32 h-32 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
/>

// Comment bagian ini
{/* <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-2xl flex items-center justify-center">
  <span className="text-white text-5xl font-bold">
    {bio.name.split(' ').map(n => n[0]).join('')}
  </span>
</div> */}
```

### 2. **Background Hero Section** 🌟

**Langkah 1:** Simpan gambar background di `public/images/hero-bg.jpg`

**Langkah 2:** Gambar akan otomatis muncul sebagai background dengan opacity rendah

**Tips:** Gunakan gambar yang:
- ✅ Resolusi tinggi (1920x1080 atau lebih)
- ✅ Tidak terlalu ramai
- ✅ Warna yang sesuai dengan tema website
- ✅ Format JPG/PNG

### 3. **Gambar Project** 📱

**Langkah 1:** Ambil screenshot project Anda dan simpan di folder `public/images/`

**Langkah 2:** Edit file `src/config/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "/images/project1.jpg", // Ganti dengan nama file Anda
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com",
    category: "Web Development"
  },
  // ... project lainnya
];
```

## 🎨 Tips Optimasi Gambar

### **Format File**
- ✅ **JPG/JPEG** - untuk foto dan gambar dengan banyak warna
- ✅ **PNG** - untuk screenshot dengan transparansi
- ✅ **WebP** - untuk optimasi ukuran file (modern browser)

### **Ukuran yang Disarankan**
- 👤 **Foto Profil:** 400x400px (akan di-resize otomatis)
- 🌟 **Background Hero:** 1920x1080px atau lebih besar
- 📱 **Screenshot Project:** 800x600px atau 1200x800px
- 🖼️ **Gambar Lainnya:** Sesuaikan dengan kebutuhan

### **Optimasi Performa**
- 📏 Kompres gambar agar tidak terlalu besar (max 500KB)
- 🎯 Gunakan rasio aspek yang konsisten
- 📱 Pastikan gambar terlihat baik di mobile
- ⚡ Gunakan lazy loading untuk gambar besar

## 🔧 Contoh Penggunaan Lainnya

### **Background Section**
```javascript
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
  style={{
    backgroundImage: "url('/images/your-image.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
></div>
```

### **Image dengan Fallback**
```javascript
<img 
  src="/images/profile.jpg" 
  alt="Profile"
  onError={(e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  }}
  className="w-32 h-32 rounded-full"
/>
<div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hidden">
  <span className="text-white text-4xl font-bold">N</span>
</div>
```

### **Responsive Images**
```javascript
<img 
  src="/images/project.jpg"
  srcSet="/images/project-small.jpg 300w, /images/project-medium.jpg 600w, /images/project-large.jpg 900w"
  sizes="(max-width: 768px) 300px, (max-width: 1200px) 600px, 900px"
  alt="Project"
  className="w-full h-auto"
/>
```

## 🚀 Langkah Selanjutnya

1. **Tambahkan foto profil** Anda
2. **Siapkan screenshot project** yang menarik
3. **Pilih background image** yang sesuai
4. **Test di berbagai device** untuk memastikan responsif
5. **Optimasi ukuran file** untuk performa yang baik

## 📝 Catatan Penting

- 🖼️ Semua gambar harus disimpan di folder `public/images/`
- 🔗 URL gambar dimulai dengan `/images/` (tanpa `public`)
- 📱 Pastikan gambar responsif untuk mobile
- ⚡ Optimasi gambar untuk loading yang cepat
- 🎨 Sesuaikan dengan tema warna website

---

**Happy Coding! 🎉** 