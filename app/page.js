'use client'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'


const featuredProducts = [
  {
    id: 1,
    name: 'Premium Deri Çanta',
    description: 'El işçiliği ile üretilmiş, gerçek deri premium çanta. Günlük kullanım için ideal.',
    price: '599',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  },
  {
    id: 2,
    name: 'Şık Erkek Kol Saati',
    description: 'Paslanmaz çelik kasa, su geçirmez, zarif tasarım. İş ve günlük hayat için mükemmel.',
    price: '899',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  },
  {
    id: 3,
    name: 'Minimalist Cüzdan',
    description: 'Kompakt tasarım, maksimum fonksiyon. RFID korumalı, gerçek deri minimalist cüzdan.',
    price: '299',
    image: 'https://images.unsplash.com/photo-1627123339143-085c90d5d8f8?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Kalite ve Şıklığın Buluştuğu Nokta
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
              Trendyol'da binlerce müşterimizin güvenle tercih ettiği premium ürünler
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 animate-fade-in"
            >
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-xl text-gray-600">
              En çok tercih edilen ürünlerimizi keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Tüm Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden ARMANYA?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-4">Kaliteli Ürünler</h3>
              <p className="text-gray-600">
                Tüm ürünlerimiz en yüksek kalite standartlarında üretilmektedir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold mb-4">Hızlı Kargo</h3>
              <p className="text-gray-600">
                Trendyol'un güvencesiyle hızlı ve güvenli teslimat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-2xl font-bold mb-4">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">
                Binlerce memnun müşterimizin güvenle tercih ettiği marka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Trendyol'da Güvenle Alışveriş Yapın
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            ARMANYA olarak Trendyol'da sizlere en kaliteli ürünleri sunmaktan gurur duyuyoruz.
          </p>
          <a
            href="https://www.trendyol.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Trendyol Mağazamızı Ziyaret Edin
          </a>
        </div>
      </section>
    </div>
  )
}