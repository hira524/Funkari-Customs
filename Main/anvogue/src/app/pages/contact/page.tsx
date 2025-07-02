'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import MenuEight from '@/components/Header/Menu/MenuEight';

const ContactUs = () => {
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Custom Sneakers - Free Shipping Over $100" />
            <div id="header" className='relative w-full'>
                <MenuEight/>
                <Breadcrumb heading='Contact us' subHeading='Contact us' />
            </div>
            <div className='contact-us md:py-20 py-10'>
                <div className="container">
                    <div className="flex justify-between max-lg:flex-col gap-y-10">
                        <div className="left lg:w-2/3 lg:pr-4">
                            <div className="heading3">Drop Us A Line</div>
                            <div className="body1 text-secondary2 mt-3">Use the form below to get in touch with our custom sneaker team for orders, collaborations, or general inquiries</div>
                            <form className="md:mt-6 mt-4">
                                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5'>
                                    <div className="name ">
                                        <input className="border-line px-4 py-3 w-full rounded-lg" id="username" type="text" placeholder="Your Name *" required />
                                    </div>
                                    <div className="email">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Your Email *" required />
                                    </div>
                                    <div className="message sm:col-span-2">
                                        <textarea className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="message" rows={3} placeholder="Tell us about your custom sneaker project or inquiry *" required />
                                    </div>
                                </div>
                                <div className="block-button md:mt-6 mt-4">
                                    <button className="button-main">Send message</button>
                                </div>
                            </form>
                        </div>
                        <div className="right lg:w-1/4 lg:pl-4">
                            <div className="item">
                                <div className="heading4">Custom Sneaker Studio</div>
                                <p className="mt-3">145 1/2 Church St, Toronto, CA</p>
                                <p className="mt-3">Phone: <span className='whitespace-nowrap'>+1 365-829-1344‬</span></p>
                                <p className="mt-1">Email: <span className='whitespace-nowrap'>Info@futurexasolutions.com</span></p>
                            </div>
                           {/* <div className="item mt-10">
                                <div className="heading4">Studio Hours</div>
                                <p className="mt-3">Mon - Fri: <span className='whitespace-nowrap'>10:00am - 7:00pm PST</span></p>
                                <p className="mt-3">Saturday: <span className='whitespace-nowrap'>11:00am - 6:00pm PST</span></p>
                                <p className="mt-3">Sunday: <span className='whitespace-nowrap'>12:00pm - 5:00pm PST</span></p>
                                <p className="mt-3 text-sm text-secondary2">*Custom consultations by appointment only</p>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs