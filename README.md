# ARMANYA - E-Ticaret Vitrin Sitesi

Premium görünümlü, modern e-ticaret vitrin sitesi. Trendyol'da satış yapan markalar için hazırlanmıştır.

## 🚀 Özellikler

- ✅ Next.js 14 (App Router)
- ✅ React 18
- ✅ Tailwind CSS
- ✅ Responsive (Mobil uyumlu)
- ✅ Premium tasarım
- ✅ Hover animasyonları
- ✅ Sabit navbar
- ✅ Dolu ve işlevsel footer
- ✅ 4 sayfa (Anasayfa, Ürünler, Hakkımızda, İletişim)
- ✅ 8+ örnek ürün
- ✅ Trendyol entegrasyonu

## 📁 Proje Yapısı

```
armanya-site/
├── app/
│   ├── layout.js          # Ana layout (Navbar + Footer)
│   ├── globals.css        # Global stiller
│   ├── page.js            # Anasayfa
│   ├── products/
│   │   └── page.js        # Ürünler sayfası
│   ├── about/
│   │   └── page.js        # Hakkımızda sayfası
│   └── contact/
│       └── page.js        # İletişim sayfası
├── components/
│   ├── Navbar.js          # Navigasyon bileşeni
│   ├── Footer.js          # Footer bileşeni
│   └── ProductCard.js     # Ürün kartı bileşeni
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
npm install
# veya
yarn install

# Development sunucusunu başlat
npm run dev
# veya
yarn dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## 📄 Sayfalar

### 1. Anasayfa (/)
- Hero section (büyük başlık + CTA)
- Öne çıkan 3 ürün
- "Neden ARMANYA?" bölümü
- Trendyol CTA

### 2. Ürünler (/products)
- 8 ürün grid görünümü
- Her üründe "Trendyol'da İncele" butonu
- Responsive tasarım

### 3. Hakkımızda (/about)
- Şirket hikayesi
- Vizyon ve misyon
- Değerler
- İstatistikler

### 4. İletişim (/contact)
- İletişim bilgileri
- Çalışan iletişim formu
- Sosyal medya linkleri
- Konum bilgisi

## 🎨 Tasarım

- **Renk Paleti**: Beyaz, koyu gri, siyah
- **Tipografi**: Inter font
- **Stil**: Modern, minimalist, premium
- **Animasyonlar**: Hover efektleri, fade-in

## 🌐 Vercel'e Deploy

```bash
# Vercel CLI ile deploy
npm install -g vercel
vercel
```

veya Vercel dashboard'dan GitHub repo'nuzu bağlayın.

## 📱 Responsive Tasarım

- Mobile: Tam responsive
- Tablet: Grid düzeni otomatik ayarlanır
- Desktop: Geniş ekran için optimize

## 🔗 Trendyol Entegrasyonu

Her ürün kartında "Trendyol'da İncele" butonu bulunur. Ürün linklerini `/app/app/products/page.js` dosyasından güncelleyebilirsiniz:

```javascript
trendyolLink: 'https://www.trendyol.com/urun-linki'
```

## ⚙️ Özelleştirme

### Renkleri Değiştirme
`tailwind.config.js` dosyasından renk paletini özelleştirebilirsiniz.

### Ürün Ekleme/Çıkarma
`/app/app/products/page.js` dosyasındaki `products` array'ini düzenleyin.

### İçerik Güncelleme
Her sayfa kendi dosyasında, içerikleri doğrudan düzenleyebilirsiniz.

## 📦 Kullanılan Teknolojiler

- Next.js 14
- React 18
- Tailwind CSS
- next/font (Google Fonts - Inter)

## 👨‍💻 Geliştirici Notları

- Tüm sayfalar server-side rendering destekler
- 'use client' directive'leri gerekli yerlerde kullanılmıştır
- Image'lar Unsplash'den placeholder olarak kullanılmıştır
- Form submit gerçek API'ye bağlanmamıştır (alert ile simüle edilmiştir)

## 📄 Lisans

Bu proje ARMANYA için özel olarak geliştirilmiştir.

## 📞 İletişim

- Email: info@armanya.com
- Telefon: +90 555 123 45 67
- Trendyol: [www.trendyol.com/magaza/armanya](https://www.trendyol.com/magaza/armanya)

---

**ARMANYA** - Kalite ve Şıklığın Buluştuğu Nokta
