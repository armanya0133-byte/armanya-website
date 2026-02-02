'use client'
import ProductCard from '../../components/ProductCard'


const products = [
  {
    id: 1,
    name: 'Premium Deri Çanta',
    description: 'El işçiliği ile üretilmiş, gerçek deri premium çanta. Günlük kullanım için ideal. Geniş iç hacmi ve çoklu bölmeleri ile pratik kullanım sağlar.',
    price: '599',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  },
  {
    id: 2,
    name: 'Şık Erkek Kol Saati',
    description: 'Paslanmaz çelik kasa, su geçirmez, zarif tasarım. İş ve günlük hayat için mükemmel. Japon mekanizması ile hassas zaman gösterimi.',
    price: '899',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  },
  {
    id: 3,
    name: 'Minimalist Cüzdan',
    description: 'Kompakt tasarım, maksimum fonksiyon. RFID korumalı, gerçek deri minimalist cüzdan. 8 kart bölmesi ve gizli bölme ile pratik.',
    price: '299',
    image: 'https://images.unsplash.com/photo-1627123339143-085c90d5d8f8?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  },
  {
    id: 4,
    name: 'Kadın Spor Ayakkabı',
    description: 'Rahat, hafif ve şık. Ortopedik taban yapısı ile uzun süreli konfor. Günlük kullanım ve spor için ideal. Nefes alabilen kumaş.',
    price: '449',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  },
  {
    id: 5,
    name: 'Premium Güneş Gözlüğü',
    description: 'UV400 korumalı, polarize camlı güneş gözlüğü. Metal çerçeve, hafif ve dayanıklı. Şık tasarımı ile her kombine uyum sağlar.',
    price: '379',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  },
  {
    id: 6,
    name: 'Deri Erkek Kemer',
    description: 'İtalyan derisi, el işçiliği, klasik toka. İş ve günlük kullanım için mükemmel. Çift taraflı kullanım özelliği ile 2 renk seçeneği.',
    price: '249',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  },
  {
    id: 7,
    name: 'Unisex Sırt Çantası',
    description: 'Su geçirmez kumaş, laptop bölmeli, ergonomik tasarım. 15.6" laptop sığar. Şık ve fonksiyonel, iş ve seyahat için ideal.',
    price: '499',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  },
  {
    id: 8,
    name: 'Kadın Omuz Çantası',
    description: 'Zarif tasarım, yumuşak deri, ayarlanabilir askı. Gece ve gündüz kullanımı için ideal. Çoklu bölmeli, düzenli kullanım.',
    price: '549',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop',
    trendyolLink: 'https://www.trendyol.com/'
  }
]

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Tüm Ürünlerimiz</h1>
          <p className="text-xl text-gray-300">
            Trendyol'da güvenle satılan kaliteli ürünlerimizi keşfedin
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Trendyol'da Daha Fazla Ürünümüzü Keşfedin
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Mağazamızda yüzlerce farklı ürün sizi bekliyor
          </p>
          <a
            href="https://www.trendyol.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Trendyol Mağazamıza Git
          </a>
        </div>
      </section>
    </div>
  )
}