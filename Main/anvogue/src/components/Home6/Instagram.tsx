'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

const Instagram = () => {
    return (
        <>
            <div className="instagram-block md:pt-20 pt-10">
                <div className="heading">
                    <div className="heading3 text-center">Custom Sneaker Art On Instagram</div>
                    <div className="text-center mt-3">#CustomSneakerArt</div>
                </div>
                <div className="list-instagram md:mt-7 mt-4">
                    <Swiper
                        slidesPerView={2}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 4000,
                        }}
                        breakpoints={{
                            500: {
                                slidesPerView: 2,
                            },
                            680: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/products/product (8)/p8 (4).jpg'}
                                    width={500}
                                    height={500}
                                    alt='custom anime sneakers'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/products/product (2)/p2 (4).jpg'}
                                    width={500}
                                    height={500}
                                    alt='gtr skyline custom sneakers'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/products/product (3)/p3 (3).jpg'}
                                    width={500}
                                    height={500}
                                    alt='sasuke toji anime sneakers'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/products/product (4)/p4 (4).jpg'}
                                    width={500}
                                    height={500}
                                    alt='sunset abstract custom sneakers'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/products/product (5)/p5 (6).jpg'}
                                    width={500}
                                    height={500}
                                    alt='jordan wave custom sneakers'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                <Image
                                    src={'/images/products/product (6)/p6 (3).jpg'}
                                    width={500}
                                    height={500}
                                    alt='joker custom sneakers'
                                    className='h-full w-full duration-500 relative'
                                />
                                <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                    <div className="icon-instagram text-2xl text-black"></div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Instagram