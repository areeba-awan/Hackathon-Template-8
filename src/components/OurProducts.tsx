'use client'

import React, { useState, useEffect } from 'react';
import { fetchOurProducts } from '@/sanity/lib/products/getOurProduct';
import ProductGrid from '@/components/ProductGrid';
import { Product } from '@/components/types/interfaces';

export default function OurProduct() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchOurProducts();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-20">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-start my-24 text-gray-800">
        Our Products
      </h2>
      <ProductGrid products={products || []} />
    </div>
  );
}
