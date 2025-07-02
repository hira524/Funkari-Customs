'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';

const Collection = () => {
    const router = useRouter()

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb-img?type=${type}`);
    };

    return (
        <>
            <div className="collection-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Explore Collections</div>
                    <div className="list-collection section-swiper-navigation style-outline style-center style-small-border md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                            }}
                            className='h-full'
                        >
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('shoes')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/product (4)/p4 (3).png' }
                                            width={1000}
                                            height={600}
                                            alt='/images/collection/product (4)/p4 (2).png'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Collection 1</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('shoes')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/product (5)/p5 (5).png'}
                                            width={1000}
                                            height={600}
                                            alt='/images/collection/product (4)/p4 (6).png'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Collection 2</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('shoes')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/product (6)/p6 (3).png'}
                                            width={1000}
                                            height={600}
                                            alt='/images/collection/product (6)/p6 (5).png'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Collection 3</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('shoes')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/product (7)/p7 (3).png'}
                                            width={1000}
                                            height={600}
                                            alt='/images/collection/product (7)/p7 (5).png'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Collection 4</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('shoes')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/product (8)/p8 (2).png'}
                                            width={1000}
                                            height={600}
                                            alt='/images/collection/product (8)/p8 (4).png'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Collection 5</div>
                                </div>
                            </SwiperSlide> 
                            <SwiperSlide>
                                <div className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleTypeClick('shoes')}>
                                    <div className="bg-img">
                                        <Image
                                            src={'/images/collection/product (9)/p9 (9).png'}
                                            width={1000}
                                            height={600}
                                            alt='/images/collection/product (9)/p9 (4).png'
                                        />
                                    </div>
                                    <div className="collection-name heading6 text-center sm:bottom-5 bottom-3 lg:w-[140px] md:w-[120px] w-[100px] md:py-1.5 py-1 bg-white rounded-xl duration-500">Collection 6</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection