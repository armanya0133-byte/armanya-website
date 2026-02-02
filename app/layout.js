import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ARMANYA - Premium Ürünler',
  description: 'Trendyol\'da satış yapan güvenilir markanız',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}