'use client'

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-xl text-gray-300">
            ARMANYA'nın hikayesi ve değerleri
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Company Story */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Biz Kimiz?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ARMANYA olarak, Trendyol'da müşterilerimize en kaliteli ürünleri sunma misyonuyla yola çıktık. 
                Kurulduğumuz günden bu yana, müşteri memnuniyetini ve ürün kalitesini her şeyin üstünde tutarak 
                binlerce müşterimize hizmet verdik.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Türkiye'nin en güvenilir ve tercih edilen online alışveriş markalarından biri olmak. 
                Her müşterimize premium kalitede ürünler sunarak, online alışveriş deneyimini 
                mükemmelleştirmek için çalışıyoruz.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Müşterilerimize en uygun fiyatlarla premium kalitede ürünler sunmak ve 
                her alışverişte kusursuz bir deneyim yaşatmak. Trendyol'un güvencesi altında, 
                hızlı kargo ve müşteri hizmetleriyle sizlere en iyi hizmeti vermeyi hedefliyoruz.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Değerlerimiz</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">✓ Kalite</h3>
                  <p className="text-gray-300">
                    Tüm ürünlerimiz en yüksek kalite standartlarında seçilir ve test edilir.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">✓ Güven</h3>
                  <p className="text-gray-300">
                    Müşterilerimizle kurduğumuz güven ilişkisi bizim en değerli varlığımızdır.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">✓ Hız</h3>
                  <p className="text-gray-300">
                    Trendyol'un hızlı kargo ağı ile siparişleriniz en kısa sürede elinizde.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">✓ Müşteri Memnuniyeti</h3>
                  <p className="text-gray-300">
                    %100 müşteri memnuniyeti için sürekli kendimizi geliştiriyoruz.
                  </p>
                </div>
              </div>
            </div>

            {/* Trendyol Partnership */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trendyol İş Ortaklığı</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Türkiye'nin en büyük e-ticaret platformu Trendyol ile iş ortaklığımız, 
                müşterilerimize güvenli alışveriş deneyimi sunmamızı sağlıyor. Trendyol'un 
                güvencesi, hızlı kargo ağı ve kolay iade sistemi ile alışveriş yapmak 
                artık çok daha güvenli ve kolay.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">10.000+</div>
                <p className="text-gray-600">Mutlu Müşteri</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <p className="text-gray-600">Kaliteli Ürün</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
                <p className="text-gray-600">Müşteri Puanı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siz de ARMANYA Ailesine Katılın
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Trendyol'da güvenle alışveriş yapın
          </p>
          <a
            href="https://www.trendyol.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Ürünleri İncele
          </a>
        </div>
      </section>
    </div>
  )
}