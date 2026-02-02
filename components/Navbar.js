'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            ARMANYA
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black font-medium transition-colors">
              Anasayfa
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-black font-medium transition-colors">
              Ürünler
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black font-medium transition-colors">
              Hakkımızda
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black font-medium transition-colors">
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-black font-medium transition-colors">
              Anasayfa
            </Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-black font-medium transition-colors">
              Ürünler
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-black font-medium transition-colors">
              Hakkımızda
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-black font-medium transition-colors">
              İletişim
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}