'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Newsletter from '@/components/Home4/Newsletter'
import Instagram from '@/components/Home6/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import MenuEight from '@/components/Header/Menu/MenuEight';

const AboutUs = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Custom Sneakers - Free Shipping Over $100" />
            <div id="header" className='relative w-full'>
                <MenuEight/>
                <Breadcrumb heading='About Us' subHeading='About Us' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">I{String.raw`'m`} obsessed with creating unique custom sneaker art that tells a story.</div>
                                <div className="body1 text-center md:mt-7 mt-5">Welcome to the world of custom sneaker artistry. In the past 8 years since I first started hand-painting sneakers, I have built a thriving custom sneaker business, mastered various artistic techniques, traveled to sneaker conventions worldwide, collaborated with anime artists and automotive designers, created thousands of unique pieces, and launched my signature custom Nike AF1 and Jordan collections that blend street culture with artistic expression.</div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'/images/products/product (7)/p7 (4).jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='custom sneaker art'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/products/product (2)/p2 (4).jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='anime inspired sneakers'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/products/product (3)/p3 (3).jpg'}
                                    width={2000}
                                    height={3000}
                                    alt='automotive themed customs'
                                    className='w-full rounded-[30px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <Newsletter props="bg-green md:mt-20 mt-10" />
            <Instagram />
            <Brand />
            <Footer />
        </>
    )
}

export default AboutUs