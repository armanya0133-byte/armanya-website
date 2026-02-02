'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-xl text-gray-300">
            Sorularınız için bize ulaşın
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">E-posta</h3>
                    <p className="text-gray-600">info@armanya.com</p>
                    <p className="text-gray-600">destek@armanya.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">+90 555 123 45 67</p>
                    <p className="text-sm text-gray-500">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🛍️</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Trendyol Mağazamız</h3>
                    <a 
                      href="https://www.trendyol.com/magaza/armanya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      www.trendyol.com/magaza/armanya
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Atatürk Mahallesi, İş Merkezi Caddesi<br />
                      No: 123, Kat: 5<br />
                      Kadıköy / İstanbul
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-3xl hover:opacity-70 transition-opacity">📘</a>
                  <a href="#" className="text-3xl hover:opacity-70 transition-opacity">📷</a>
                  <a href="#" className="text-3xl hover:opacity-70 transition-opacity">🐦</a>
                  <a href="#" className="text-3xl hover:opacity-70 transition-opacity">💼</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  Mesajı Gönder
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Tüm alanların doldurulması zorunludur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bizi Ziyaret Edin</h2>
          <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-xl font-semibold">Atatürk Mahallesi, İş Merkezi Caddesi No: 123</p>
                <p className="text-lg">Kadıköy / İstanbul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Trendyol'da Ürünlerimize Göz Atın
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Yüzlerce kaliteli ürünümüzü keşfedin
          </p>
          <a
            href="https://www.trendyol.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Trendyol Mağazamız
          </a>
        </div>
      </section>
    </div>
  )
}