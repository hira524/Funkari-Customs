'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuEight from '@/components/Header/Menu/MenuEight'
import ShopBreadCrumbImg from '@/components/Shop/ShopBreadCrumbImg';
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function BreadcrumbImg() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    const category = searchParams.get('category')

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan='Custom Sneakers - Free Shipping Over $100' />
            <div id="header" className='relative w-full'>
                <MenuEight />
            </div>
            <ShopBreadCrumbImg data={productData} productPerPage={12} dataType={type} />
            <Footer />
        </>
    )
}