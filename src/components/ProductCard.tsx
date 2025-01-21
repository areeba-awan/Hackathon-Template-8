import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/components/types/interfaces';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="relative items-start overflow-hidden rounded-lg">
      <div className="relative w-full">
        <Link href="/">
          {product.badge && (
            <span
              className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded ${
                product.badge.toLowerCase() === 'new'
                  ? 'bg-green-500'
                  : 'bg-red-500'
              }`}
            >
              {product.badge}
            </span>
          )}
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={300}
            height={240}
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
          />
        </Link>
        <div className="mt-4 w-full flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-800 text-start">
            {product.title.slice(0, 20)}...
          </h3>
          <div className="flex items-start mt-2">
            {product.priceWithoutDiscount && (
              <span className="text-gray-500 line-through mr-2">
                ${product.priceWithoutDiscount}
              </span>
            )}
            <span className="text-red-500 font-bold">${product.price}</span>
          </div>
        </div>
        <button className="absolute bottom-4 right-0 text-white bg-[#F0F2F3] p-2 rounded-lg hover:bg-[#029FAE] transition">
          <Image src="/img1.jpg"alt="add to Cart"width ={ 22} height= {12} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
