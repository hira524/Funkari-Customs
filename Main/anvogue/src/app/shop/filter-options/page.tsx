'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopFilterOptions from '@/components/Shop/ShopFilterOptions'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'
import MenuEight from '@/components/Header/Menu/MenuEight';

export default function FilterOptions() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    const category = searchParams.get('category')

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuEight/>
            </div>
            <ShopFilterOptions data={productData} productPerPage={12} />
            <Footer />
        </>
    )
}
