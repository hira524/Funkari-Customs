'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

const SliderEight = () => {
    return (
        <>
            <div className="slider-block style-one bg-linear lg:h-[540px] md:h-[360px] h-[300px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container lg:pl-[320px] w-full h-full flex items-center relative z-10">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display text-sm md:text-base">Sale! Up To 50% Off!</div>
                                        <div className="heading1 text-xl md:text-3xl mt-2 md:mt-5">Find Your Perfect Look with Ease</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main text-sm md:text-base mt-3 md:mt-8">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute lg:w-[54%] sm:w-3/5 w-[92%] lg:-right-[100px] -right-[60px] bottom-0 z-0">
                                        <video
                                            src="/images/videos/slider8-1.mp4"
                                            width={2000}
                                            height={1936}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container lg:pl-[320px] w-full h-full flex items-center relative z-10">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display text-sm md:text-base">Sale! Up To 50% Off!</div>
                                        <div className="heading1 text-xl md:text-3xl mt-2 md:mt-5">Where Style Meets Creativity</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main text-sm md:text-base mt-3 md:mt-8">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute z-0 xl:w-[55%] sm:w-3/5 w-[86%] xl:-right-[100px] sm:-right-[40px] -right-[40px] sm:-bottom-7 bottom-0">
                                        <Image
                                            src={'/images/slider/bg8-2.png'}
                                            width={2000}
                                            height={1936}
                                            alt='bg8-2'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container lg:pl-[320px] w-full h-full flex items-center relative z-10">
                                    <div className="text-content basis-1/2">
                                        <div className="text-sub-display text-sm md:text-base">Sale! Up To 50% Off!</div>
                                        <div className="heading1 text-xl md:text-3xl mt-2 md:mt-5">Stay Ahead of the Trends</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main text-sm md:text-base mt-3 md:mt-8">Shop Now</Link>
                                    </div>
                                    <div className="sub-img absolute lg:w-[57%] sm:w-[63%] w-[90%] xl:-right-[130px] lg:-right-[80px] md:-right-[50px] -right-[50px] bottom-0 md:-bottom-[30px] z-0">
                                        <Image
                                            src={'/images/slider/bg8-3.png'}
                                            width={2000}
                                            height={2000}
                                            alt='bg8-3'
                                            priority={true}
                                            className='w-full'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <style jsx global>{`
                .slider-block {
                    position: relative;
                    overflow: hidden;
                }
                .slider-item {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                .swiper-slide-active .slider-item {
                    opacity: 1;
                }
                .text-content {
                    position: relative;
                    z-index: 10;
                }
                .sub-img {
                    position: absolute;
                    z-index: 0;
                }
                @media (min-width: 1024px) {
                    .heading1 { font-size: 2.5rem !important; }
                    .text-sub-display { font-size: 1.25rem !important; }
                    .button-main { font-size: 1rem !important; }
                }
            `}</style>
        </>
    )
}

export default SliderEight