'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import blogData from '@/data/Blog.json'
import NewsInsight from '@/components/Home3/NewsInsight';
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/navigation'
import MenuEight from '@/components/Header/Menu/MenuEight';

const BlogDetailOne = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    let blogId = searchParams.get('id')
    if (blogId === null) {
        blogId = '14'
    }

    const blogMain = blogData[Number(blogId) - 1]

    const handleBlogClick = (category: string) => {
        // Go to blog detail with category selected
        router.push(`/blog/default?category=${category}`);
    };

    const handleBlogDetail = (id: string) => {
        // Go to blog detail with id selected
        router.push(`/blog/detail1?id=${id}`);
    };

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Custom Sneakers - Free Shipping Over $100" />
            <div id="header" className='relative w-full'>
                <MenuEight />
            </div>
            <div className='blog detail1'>
                <div className="bg-img md:mt-[74px] mt-14">
                    <Image
                        src={blogMain.thumbImg}
                        width={5000}
                        height={4000}
                        alt={blogMain.thumbImg}
                        className='w-full min-[1600px]:h-[800px] xl:h-[640px] lg:h-[520px] sm:h-[380px] h-[260px] object-cover'
                    />
                </div>
                <div className="container md:pt-20 pt-10">
                    <div className="blog-content flex items-center justify-center">
                        <div className="main md:w-5/6 w-full">
                            <div className="blog-tag bg-green py-1 px-2.5 rounded-full text-button-uppercase inline-block">{blogMain.tag}</div>
                            <div className="heading3 mt-3">{blogMain.title}</div>
                            <div className="author flex items-center gap-4 mt-4">
                                <div className="avatar w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                    <Image
                                        src={blogMain.avatar}
                                        width={200}
                                        height={200}
                                        alt='avatar'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className="caption1 text-secondary">by {blogMain.author}</div>
                                    <div className="line w-5 h-px bg-secondary"></div>
                                    <div className="caption1 text-secondary">{blogMain.date}</div>
                                </div>
                            </div>
                            <div className="content md:mt-8 mt-5">
                                <div className="body1">{blogMain.description}</div>
                                <div className="body1 mt-3">I&apos;ve always been passionate about custom sneaker art and have built an extensive collection over the years! When it comes to custom designs, I could never find exactly what I was looking for in stores, so I started hand-painting and customizing my own sneakers to create the unique style and artistic expression I craved.</div>
                                <div className="grid sm:grid-cols-2 gap-[30px] md:mt-8 mt-5">
                                    {blogMain.subImg.map((item, index) => (
                                        <Image
                                            key={index}
                                            src={item}
                                            width={3000}
                                            height={2000}
                                            alt={item}
                                            className='w-full rounded-3xl'
                                        />
                                    ))}
                                </div>
                                <div className="heading4 md:mt-8 mt-5">How did Custom Sneaker Art begin?</div>
                                <div className="body1 mt-4">This is such an exciting question! Honestly, every time we create a new custom design, I get completely obsessed with it. The pieces that have become my absolute favorites are some of our most intricate hand-painted styles. I wear our custom Nike AF1s almost every day – they&apos;re not just shoes, they&apos;re wearable art that expresses my personality and creativity.</div>
                                <div className="body1 mt-4">For sneaker customization, I love working with anime-inspired designs – they offer incredible detail and vibrant colors that really pop on the canvas of a sneaker. I also enjoy creating automotive-themed customs like our GTR Skyline series – they capture the speed, power, and sleek aesthetics of legendary cars while maintaining that street-ready comfort and style.</div>
                            </div>
                            <div className="action flex items-center justify-between flex-wrap gap-5 md:mt-8 mt-5">
                                <div className="left flex items-center gap-3 flex-wrap">
                                    <p>Tag:</p>
                                    <div className="list flex items-center gap-3 flex-wrap">
                                        <div
                                            className={`tags bg-surface py-1.5 px-4 rounded-full text-button-uppercase cursor-pointer duration-300 hover:bg-black hover:text-white`}
                                            onClick={() => handleBlogClick('fashion')}
                                        >
                                            custom sneakers
                                        </div>
                                        <div
                                            className={`tags bg-surface py-1.5 px-4 rounded-full text-button-uppercase cursor-pointer duration-300 hover:bg-black hover:text-white`}
                                            onClick={() => handleBlogClick('cosmetic')}
                                        >
                                            anime art
                                        </div>
                                        <div
                                            className={`tags bg-surface py-1.5 px-4 rounded-full text-button-uppercase cursor-pointer duration-300 hover:bg-black hover:text-white`}
                                            onClick={() => handleBlogClick('organic')}
                                        >
                                            streetwear
                                        </div>
                                    </div>
                                </div>
                                <div className="right flex items-center gap-3 flex-wrap">
                                    <p>Share:</p>
                                    <div className="list flex items-center gap-3 flex-wrap">
                                        <Link href={'https://www.facebook.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-facebook duration-100"></div>
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-instagram duration-100"></div>
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-twitter duration-100"></div>
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-youtube duration-100"></div>
                                        </Link>
                                        <Link href={'https://www.pinterest.com/'} target='_blank' className='bg-surface w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:bg-black hover:text-white'>
                                            <div className="icon-pinterest duration-100"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="next-pre flex items-center justify-between md:mt-8 mt-5 py-6 border-y border-line">
                                {blogId === '1' ? (
                                    <>
                                        <div className="left cursor-pointer"
                                            onClick={() => handleBlogDetail(String(blogData.length))}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Previous</div>
                                            <div className="text-title mt-2">{blogData[blogData.length - 1].title}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="left cursor-pointer"
                                            onClick={() => handleBlogDetail(blogData[Number(blogId) - 2].id)}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Previous</div>
                                            <div className="text-title mt-2">{blogData[Number(blogId) - 2].title}</div>
                                        </div>
                                    </>
                                )}
                                {Number(blogId) === blogData.length ? (
                                    <>
                                        <div className="right text-right cursor-pointer"
                                            onClick={() => handleBlogDetail('1')}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Next</div>
                                            <div className="text-title mt-2">{blogData[0].title}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="right text-right cursor-pointer"
                                            onClick={() => handleBlogDetail(blogData[Number(blogId)].id)}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Next</div>
                                            <div className="text-title mt-2">{blogData[Number(blogId)].title}</div>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:pb-20 pb-10'>
                    <NewsInsight data={blogData} start={0} limit={3} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetailOne