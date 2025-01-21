

// components/TopCategories.tsx

import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { Category } from '@/components/types/interfaces';

export default async function TopCategories() {
  const query = `*[_type == "categories"]{
      title,
      "imageUrl": image.asset->url,
      "productCount": count(*[_type == "products" && references(^._id)]),
      slug
    }`;

  const categories = await client.fetch(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-start md:mb-24 text-gray-800 mt-12">
        Top Categories
      </h2>
      <div className="flex items-center justify-center">
        <div className="relative items-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 my-12">
          {categories.map((category: Category) => (
            <div key={category._id} className="relative">
              <Link href={`/topcategories${category.slug}`}>
                <div className="relative hover:cursor rounded-lg">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    width={350}
                    height={350}
                  />
                  <div className="absolute bottom-0 bg-black/70 text-white p-2 w-full rounded-b-lg">
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-sm opacity-70 py-1">
                      {category.productCount} products
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

