'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Marka */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ARMANYA</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trendyol'da güvenle alışveriş yapabileceğiniz kaliteli ürünlerin adresi.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@armanya.com</li>
              <li>Telefon: +90 555 123 45 67</li>
              <li>
                <a 
                  href="https://www.trendyol.com/magaza/armanya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Trendyol Mağazamız
                </a>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">📘</span> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">📷</span> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">🐦</span> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">💼</span> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ARMANYA. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}