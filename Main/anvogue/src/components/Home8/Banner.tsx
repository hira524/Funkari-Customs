import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="banner-block style-one md:pt-20 pt-10">
                <div className="container grid sm:grid-cols-2 gap-5">
                    <Link href={'/shop/breadcrumb-img'} className="banner-item relative block overflow-hidden rounded-2xl duration-500">
                        <div className="banner-img">
                            <Image
                                src={'/images/banner/Nike-AJ-TOFU-3.png'}
                                width={2000}
                                height={1300}
                                alt='banner1'
                                className='duration-1000 w-full'
                            />
                        </div>
                        <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                            <div className="heading4 text-white text-center">Nike Air Force <br />Custom Collection</div>
                            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Shop Now</div>
                        </div>
                    </Link>
                    <Link href={'/shop/breadcrumb-img'} className="banner-item relative block overflow-hidden rounded-2xl duration-500">
                        <div className="banner-img">
                            <Image
                                src={'/images/banner/Nike-Af1-Turquoise-Abstract-7.png'}
                                width={2000}
                                height={1300}
                                alt='banner2'
                                className='duration-1000 w-full'
                            />
                        </div>
                        <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                            <div className="heading4 text-white text-center">Jordan Customs <br />Premium Sneakers</div>
                            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2">Shop Now</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
        )
}

export default Banner