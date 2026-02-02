'use client'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Ürün Görseli */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Ürün Bilgileri */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        
        {/* Fiyat */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-900">{product.price} TL</span>
        </div>

        {/* Trendyol Butonu */}
        <a
          href={product.trendyolLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-black text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          Trendyol'da İncele
        </a>
      </div>
    </div>
  )
}