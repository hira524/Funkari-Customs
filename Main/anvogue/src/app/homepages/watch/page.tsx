import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuWatch from '@/components/Header/Menu/MenuWatch'
import SliderWatch from '@/components/Slider/SliderWatch'
import Category from '@/components/Watch/Category'
import TabFeature from '@/components/Watch/TabFeature'
import Banner from '@/components/Watch/Banner'
import Benefit from '@/components/Home1/Benefit'
import productData from '@/data/Product.json'
import FeaturedProduct from '@/components/Watch/FeaturedProduct'
import TrendingProduct from '@/components/Watch/TrendingProduct'
import PopularProduct from '@/components/Watch/PopularProduct'
import Instagram from '@/components/Watch/Instagram'
import Brand from '@/components/Home6/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'

export default function HomeWatch() {
    // Comprehensive data validation and sanitization
    const validProductData = Array.isArray(productData) 
        ? productData
            .filter(item => item !== null && item !== undefined)
            .map(item => ({
                ...item,
                id: item?.id || Math.random().toString(),
                name: item?.name || 'Unknown Product',
                price: typeof item?.price === 'number' ? item.price : 0,
                originPrice: typeof item?.originPrice === 'number' ? item.originPrice : 0,
                rate: typeof item?.rate === 'number' ? item.rate : 0,
                sold: typeof item?.sold === 'number' ? item.sold : 0,
                quantity: typeof item?.quantity === 'number' ? item.quantity : 0,
                category: item?.category || 'uncategorized',
                type: item?.type || 'product',
                gender: item?.gender || 'unisex',
                new: Boolean(item?.new),
                sale: Boolean(item?.sale),
                brand: item?.brand || 'Unknown',
                quantityPurchase: typeof item?.quantityPurchase === 'number' ? item.quantityPurchase : 1,
                sizes: Array.isArray(item?.sizes) ? item.sizes : [],
                variation: Array.isArray(item?.variation) ? item.variation : [],
                thumbImage: Array.isArray(item?.thumbImage) ? item.thumbImage : [],
                images: Array.isArray(item?.images) ? item.images : [],
                description: item?.description || '',
                action: item?.action || 'add to cart',
                slug: item?.slug || '',
            }))
            .filter(item => item.price > 0) // Only include items with valid prices
        : [];

    return (
        <>
            <div className="bg-black style-watch">
                <TopNavOne props="style-one bg-black" slogan='New customers save 10% with the code GET10' />
                <div id="header" className='relative w-full'>
                    <MenuWatch props="bg-green" />
                    <SliderWatch />
                </div>
                <Category />
                {validProductData.length > 0 && (
                    <>
                        <TabFeature data={validProductData} start={0} limit={5} />
                        <Banner />
                        <FeaturedProduct data={validProductData} />
                        <TrendingProduct data={validProductData} />
                    </>
                )}
                <PopularProduct />
                <Benefit props="md:py-[60px] py-8 style-watch md:mt-20 mt-10" />
                <Instagram />
                <Brand />
                <div className="style-watch">
                    <Footer />
                </div>
            </div>
            <ModalNewsletter />
        </>
    )
}
