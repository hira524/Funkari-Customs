'use client'
import React, { Suspense } from 'react';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOne';
import ShopFilterCanvas from '@/components/Shop/ShopFilterCanvas';
import productData from '@/data/Product.json';
import Footer from '@/components/Footer/Footer';

export default function FilterCanvasProductFive() {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
      </div>

      {/* Wrapped in Suspense to fix useSearchParams build error */}
      <Suspense fallback={<div>Loading products...</div>}>
        <ClientFilterCanvas />
      </Suspense>

      <Footer />
    </>
  );
}

// ✅ Nested client-side component to use useSearchParams
function ClientFilterCanvas() {
  'use client';
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  return (
    <ShopFilterCanvas
      data={productData}
      productPerPage={12}
      dataType={type}
      productStyle="style-5"
    />
  );
}
import { useSearchParams } from 'next/navigation';