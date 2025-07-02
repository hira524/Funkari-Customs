'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { motion } from 'framer-motion'
import MenuEight from '@/components/Header/Menu/MenuEight'

const MyAccount = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>('dashboard')
    const [activeAddress, setActiveAddress] = useState<string | null>('billing')
    const [activeOrders, setActiveOrders] = useState<string | undefined>('all')
    const [openDetail, setOpenDetail] = useState<boolean | undefined>(false)

    const handleActiveAddress = (order: string) => {
        setActiveAddress(prevOrder => prevOrder === order ? null : order)
    }

    const handleActiveOrders = (order: string) => {
        setActiveOrders(order)
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Custom Sneakers - Free Shipping Over $100" />
            <div id="header" className='relative w-full'>
                <MenuEight />
                <Breadcrumb heading='My Account' subHeading='My Account' />
            </div>
            <div className="profile-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main flex gap-y-8 max-md:flex-col w-full">
                        <div className="left md:w-1/3 w-full xl:pr-[3.125rem] lg:pr-[28px] md:pr-[16px]">
                            <div className="user-infor bg-surface lg:px-7 px-4 lg:py-10 py-5 md:rounded-[20px] rounded-xl">
                                <div className="heading flex flex-col items-center justify-center">
                                    <div className="avatar">
                                        <Image
                                            src={'/images/avatar/1.png'}
                                            width={300}
                                            height={300}
                                            alt='avatar'
                                            className='md:w-[140px] w-[120px] md:h-[140px] h-[120px] rounded-full'
                                        />
                                    </div>
                                    <div className="name heading6 mt-4 text-center">Alex Jordan</div>
                                    <div className="mail heading6 font-normal normal-case text-secondary text-center mt-1">alex@customsneakerart.com</div>
                                </div>
                                <div className="menu-tab w-full max-w-none lg:mt-10 mt-6">
                                    <Link href={'#!'} scroll={false} className={`item flex items-center gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
                                        <Icon.HouseLine size={20} />
                                        <strong className="heading6">Dashboard</strong>
                                    </Link>
                                    <Link href={'#!'} scroll={false} className={`item flex items-center gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white mt-1.5 ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
                                        <Icon.Package size={20} />
                                        <strong className="heading6">Custom Orders</strong>
                                    </Link>
                                    <Link href={'#!'} scroll={false} className={`item flex items-center gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white mt-1.5 ${activeTab === 'address' ? 'active' : ''}`} onClick={() => setActiveTab('address')}>
                                        <Icon.Tag size={20} />
                                        <strong className="heading6">My Address</strong>
                                    </Link>
                                    <Link href={'#!'} scroll={false} className={`item flex items-center gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white mt-1.5 ${activeTab === 'setting' ? 'active' : ''}`} onClick={() => setActiveTab('setting')}>
                                        <Icon.GearSix size={20} />
                                        <strong className="heading6">Setting</strong>
                                    </Link>
                                    <Link href={'/login'} className="item flex items-center gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white mt-1.5">
                                        <Icon.SignOut size={20} />
                                        <strong className="heading6">Logout</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="right md:w-2/3 w-full pl-2.5">
                            <div className={`tab text-content w-full ${activeTab === 'dashboard' ? 'block' : 'hidden'}`}>
                                <div className="overview grid sm:grid-cols-3 gap-5">
                                    <div className="item flex items-center justify-between p-5 border border-line rounded-lg box-shadow-xs">
                                        <div className="counter">
                                            <span className="text-secondary">In Production</span>
                                            <h5 className="heading5 mt-1">3</h5>
                                        </div>
                                        <Icon.HourglassMedium className='text-4xl' />
                                    </div>
                                    <div className="item flex items-center justify-between p-5 border border-line rounded-lg box-shadow-xs">
                                        <div className="counter">
                                            <span className="text-secondary">Cancelled Orders</span>
                                            <h5 className="heading5 mt-1">2</h5>
                                        </div>
                                        <Icon.ReceiptX className='text-4xl' />
                                    </div>
                                    <div className="item flex items-center justify-between p-5 border border-line rounded-lg box-shadow-xs">
                                        <div className="counter">
                                            <span className="text-secondary">Total Custom Sneakers</span>
                                            <h5 className="heading5 mt-1">47</h5>
                                        </div>
                                        <Icon.Package className='text-4xl' />
                                    </div>
                                </div>
                                <div className="recent_order pt-5 px-5 pb-2 mt-7 border border-line rounded-xl">
                                    <h6 className="heading6">Recent Custom Orders</h6>
                                    <div className="list overflow-x-auto w-full mt-5">
                                        <table className="w-full max-[1400px]:w-[700px] max-md:w-[700px]">
                                            <thead className="border-b border-line">
                                                <tr>
                                                    <th scope="col" className="pb-3 text-left text-sm font-bold uppercase text-secondary whitespace-nowrap">Order</th>
                                                    <th scope="col" className="pb-3 text-left text-sm font-bold uppercase text-secondary whitespace-nowrap">Custom Design</th>
                                                    <th scope="col" className="pb-3 text-left text-sm font-bold uppercase text-secondary whitespace-nowrap">Pricing</th>
                                                    <th scope="col" className="pb-3 text-right text-sm font-bold uppercase text-secondary whitespace-nowrap">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="item duration-300 border-b border-line">
                                                    <th scope="row" className="py-3 text-left">
                                                        <strong className="text-title">CS240103</strong>
                                                    </th>
                                                    <td className="py-3">
                                                        <Link href={'/product/default'} className="product flex items-center gap-3">
                                                            <Image src={'/images/products/product/p1 (5).png'} width={400} height={400} alt='Nike AF1 Anime Abstract' className="flex-shrink-0 w-12 h-12 rounded" />
                                                            <div className="info flex flex-col">
                                                                <strong className="product_name text-button">Nike AF1 Anime Abstract</strong>
                                                                <span className="product_tag caption1 text-secondary">Custom, Size 10</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="py-3 price">$280.00</td>
                                                    <td className="py-3 text-right">
                                                        <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-yellow text-yellow caption1 font-semibold">In Production</span>
                                                    </td>
                                                </tr>
                                                <tr className="item duration-300 border-b border-line">
                                                    <th scope="row" className="py-3 text-left">
                                                        <strong className="text-title">CS240102</strong>
                                                    </th>
                                                    <td className="py-3">
                                                        <Link href={'/product/default'} className="product flex items-center gap-3">
                                                            <Image src={'/images/products/product (2)/p2 (1).png'} width={400} height={400} alt='Nike AF1 GTR Skyline' className="flex-shrink-0 w-12 h-12 rounded" />
                                                            <div className="info flex flex-col">
                                                                <strong className="product_name text-button">Nike AF1 GTR Skyline</strong>
                                                                <span className="product_tag caption1 text-secondary">Custom, Size 9</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="py-3 price">$320.00</td>
                                                    <td className="py-3 text-right">
                                                        <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-purple text-purple caption1 font-semibold">Shipped</span>
                                                    </td>
                                                </tr>
                                                <tr className="item duration-300 border-b border-line">
                                                    <th scope="row" className="py-3 text-left">
                                                        <strong className="text-title">CS240101</strong>
                                                    </th>
                                                    <td className="py-3">
                                                        <Link href={'/product/default'} className="product flex items-center gap-3">
                                                            <Image src={'/images/products/product (3)/p3 (1).png'} width={400} height={400} alt='Nike AF1 Sasuke x Toji' className="flex-shrink-0 w-12 h-12 rounded" />
                                                            <div className="info flex flex-col">
                                                                <strong className="product_name text-button">Nike AF1 Sasuke x Toji</strong>
                                                                <span className="product_tag caption1 text-secondary">Custom, Size 11</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="py-3 price">$295.00</td>
                                                    <td className="py-3 text-right">
                                                        <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-success text-success caption1 font-semibold">Completed</span>
                                                    </td>
                                                </tr>
                                                <tr className="item duration-300 border-b border-line">
                                                    <th scope="row" className="py-3 text-left">
                                                        <strong className="text-title">CS231215</strong>
                                                    </th>
                                                    <td className="py-3">
                                                        <Link href={'/product/default'} className="product flex items-center gap-3">
                                                            <Image src={'/images/products/product (4)/p4 (1).png'} width={400} height={400} alt='Nike AF1 Sunset Abstract' className="flex-shrink-0 w-12 h-12 rounded" />
                                                            <div className="info flex flex-col">
                                                                <strong className="product_name text-button">Nike AF1 Sunset Abstract</strong>
                                                                <span className="product_tag caption1 text-secondary">Custom, Size 8</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="py-3 price">$265.00</td>
                                                    <td className="py-3 text-right">
                                                        <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-yellow text-yellow caption1 font-semibold">In Production</span>
                                                    </td>
                                                </tr>
                                                <tr className="item duration-300 border-b border-line">
                                                    <th scope="row" className="py-3 text-left">
                                                        <strong className="text-title">CS231214</strong>
                                                    </th>
                                                    <td className="py-3">
                                                        <Link href={'/product/default'} className="product flex items-center gap-3">
                                                            <Image src={'/images/products/product (5)/p5 (1).png'} width={400} height={400} alt='Nike Jordan Wave' className="flex-shrink-0 w-12 h-12 rounded" />
                                                            <div className="info flex flex-col">
                                                                <strong className="product_name text-button">Nike Jordan Wave</strong>
                                                                <span className="product_tag caption1 text-secondary">Custom, Size 10.5</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="py-3 price">$350.00</td>
                                                    <td className="py-3 text-right">
                                                        <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-purple text-purple caption1 font-semibold">Shipped</span>
                                                    </td>
                                                </tr>
                                                <tr className="item duration-300">
                                                    <th scope="row" className="py-3 text-left">
                                                        <strong className="text-title">CS231213</strong>
                                                    </th>
                                                    <td className="py-3">
                                                        <Link href={'/product/default'} className="product flex items-center gap-3">
                                                            <Image src={'/images/products/product (6)/p6 (1).png'} width={400} height={400} alt='Nike AF1 Joker White' className="flex-shrink-0 w-12 h-12 rounded" />
                                                            <div className="info flex flex-col">
                                                                <strong className="product_name text-button">Nike AF1 Joker White</strong>
                                                                <span className="product_tag caption1 text-secondary">Custom, Size 9.5</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="py-3 price">$275.00</td>
                                                    <td className="py-3 text-right">
                                                        <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-success text-success caption1 font-semibold">Completed</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab text-content overflow-hidden w-full p-7 border border-line rounded-xl ${activeTab === 'orders' ? 'block' : 'hidden'}`}>
                                <h6 className="heading6">Your Custom Sneaker Orders</h6>
                                <div className="w-full overflow-x-auto">
                                    <div className="menu-tab grid grid-cols-5 max-lg:w-[500px] border-b border-line mt-3">
                                        {['all', 'pending', 'production', 'completed', 'canceled'].map((item, index) => (
                                            <button
                                                key={index}
                                                className={`item relative px-3 py-2.5 text-secondary text-center duration-300 hover:text-black border-b-2 ${activeOrders === item ? 'active border-black' : 'border-transparent'}`}
                                                onClick={() => handleActiveOrders(item)}
                                            >
                                                <span className='relative text-button z-[1]'>
                                                    {item}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="list_order">
                                    <div className="order_item mt-5 border border-line rounded-lg box-shadow-xs">
                                        <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-line">
                                            <div className="flex items-center gap-2">
                                                <strong className="text-title">Order Number:</strong>
                                                <strong className="order_number text-button uppercase">CS240103</strong>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <strong className="text-title">Order status:</strong>
                                                <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-yellow text-yellow caption1 font-semibold">In Production</span>
                                            </div>
                                        </div>
                                        <div className="list_prd px-5">
                                            <div className="prd_item flex flex-wrap items-center justify-between gap-3 py-5 border-b border-line">
                                                <Link href={'/product/default'} className="flex items-center gap-5">
                                                    <div className="bg-img flex-shrink-0 md:w-[100px] w-20 aspect-square rounded-lg overflow-hidden">
                                                        <Image
                                                            src={'/images/products/product/p1 (3).png'}
                                                            width={1000}
                                                            height={1000}
                                                            alt={'Nike AF1 Anime Abstract Custom'}
                                                            className='w-full h-full object-cover'
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="prd_name text-title">Nike AF1 Anime Abstract Custom</div>
                                                        <div className="caption1 text-secondary mt-2">
                                                            <span className="prd_size uppercase">Size 10</span>
                                                            <span>/</span>
                                                            <span className="prd_color capitalize">Custom Paint Job</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className='text-title'>
                                                    <span className="prd_quantity">1</span>
                                                    <span> X </span>
                                                    <span className="prd_price">$280.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4 p-5">
                                            <button className="button-main" onClick={() => setOpenDetail(true)}>Order Details</button>
                                            <button className="button-main bg-surface border border-line hover:bg-black text-black hover:text-white">Request Changes</button>
                                        </div>
                                    </div>
                                    <div className="order_item mt-5 border border-line rounded-lg box-shadow-xs">
                                        <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-line">
                                            <div className="flex items-center gap-2">
                                                <strong className="text-title">Order Number:</strong>
                                                <strong className="order_number text-button uppercase">CS240102</strong>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <strong className="text-title">Order status:</strong>
                                                <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-purple text-purple caption1 font-semibold">Shipped</span>
                                            </div>
                                        </div>
                                        <div className="list_prd px-5">
                                            <div className="prd_item flex flex-wrap items-center justify-between gap-3 py-5 border-b border-line">
                                                <Link href={'/product/default'} className="flex items-center gap-5">
                                                    <div className="bg-img flex-shrink-0 md:w-[100px] w-20 aspect-square rounded-lg overflow-hidden">
                                                        <Image
                                                            src={'/images/products/product (2)/p2 (1).png'}
                                                            width={1000}
                                                            height={1000}
                                                            alt={'Nike AF1 GTR Skyline Custom'}
                                                            className='w-full h-full object-cover'
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="prd_name text-title">Nike AF1 GTR Skyline Custom</div>
                                                        <div className="caption1 text-secondary mt-2">
                                                            <span className="prd_size uppercase">Size 9</span>
                                                            <span>/</span>
                                                            <span className="prd_color capitalize">Automotive Theme</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className='text-title'>
                                                    <span className="prd_quantity">1</span>
                                                    <span> X </span>
                                                    <span className="prd_price">$320.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4 p-5">
                                            <button className="button-main" onClick={() => setOpenDetail(true)}>Order Details</button>
                                            <button className="button-main bg-surface border border-line hover:bg-black text-black hover:text-white">Track Package</button>
                                        </div>
                                    </div>
                                    <div className="order_item mt-5 border border-line rounded-lg box-shadow-xs">
                                        <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-line">
                                            <div className="flex items-center gap-2">
                                                <strong className="text-title">Order Number:</strong>
                                                <strong className="order_number text-button uppercase">CS240101</strong>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <strong className="text-title">Order status:</strong>
                                                <span className="tag px-4 py-1.5 rounded-full bg-opacity-10 bg-success text-success caption1 font-semibold">Completed</span>
                                            </div>
                                        </div>
                                        <div className="list_prd px-5">
                                            <div className="prd_item flex flex-wrap items-center justify-between gap-3 py-5 border-b border-line">
                                                <Link href={'/product/default'} className="flex items-center gap-5">
                                                    <div className="bg-img flex-shrink-0 md:w-[100px] w-20 aspect-square rounded-lg overflow-hidden">
                                                        <Image
                                                            src={'/images/products/product (3)/p3 (1).png'}
                                                            width={1000}
                                                            height={1000}
                                                            alt={'Nike AF1 Sasuke x Toji Custom'}
                                                            className='w-full h-full object-cover'
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="prd_name text-title">Nike AF1 Sasuke x Toji Custom</div>
                                                        <div className="caption1 text-secondary mt-2">
                                                            <span className="prd_size uppercase">Size 11</span>
                                                            <span>/</span>
                                                            <span className="prd_color capitalize">Anime Design</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className='text-title'>
                                                    <span className="prd_quantity">1</span>
                                                    <span> X </span>
                                                    <span className="prd_price">$295.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4 p-5">
                                            <button className="button-main" onClick={() => setOpenDetail(true)}>Order Details</button>
                                            <button className="button-main bg-surface border border-line hover:bg-black text-black hover:text-white">Reorder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab_address text-content w-full p-7 border border-line rounded-xl ${activeTab === 'address' ? 'block' : 'hidden'}`}>
                                <form>
                                    <button
                                        type='button'
                                        className={`tab_btn flex items-center justify-between w-full pb-1.5 border-b border-line ${activeAddress === 'billing' ? 'active' : ''}`}
                                        onClick={() => handleActiveAddress('billing')}
                                    >
                                        <strong className="heading6">Billing address</strong>
                                        <Icon.CaretDown className='text-2xl ic_down duration-300' />
                                    </button>
                                    <div className={`form_address ${activeAddress === 'billing' ? 'block' : 'hidden'}`}>
                                        <div className='grid sm:grid-cols-2 gap-4 gap-y-5 mt-5'>
                                            <div className="first-name">
                                                <label htmlFor="billingFirstName" className='caption1 capitalize'>First Name <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingFirstName" type="text" required />
                                            </div>
                                            <div className="last-name">
                                                <label htmlFor="billingLastName" className='caption1 capitalize'>Last Name <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingLastName" type="text" required />
                                            </div>
                                            <div className="company">
                                                <label htmlFor="billingCompany" className='caption1 capitalize'>Company name (optional)</label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingCompany" type="text" required />
                                            </div>
                                            <div className="country">
                                                <label htmlFor="billingCountry" className='caption1 capitalize'>Country / Region <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingCountry" type="text" required />
                                            </div>
                                            <div className="street">
                                                <label htmlFor="billingStreet" className='caption1 capitalize'>street address <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingStreet" type="text" required />
                                            </div>
                                            <div className="city">
                                                <label htmlFor="billingCity" className='caption1 capitalize'>Town / city <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingCity" type="text" required />
                                            </div>
                                            <div className="state">
                                                <label htmlFor="billingState" className='caption1 capitalize'>state <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingState" type="text" required />
                                            </div>
                                            <div className="zip">
                                                <label htmlFor="billingZip" className='caption1 capitalize'>ZIP <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingZip" type="text" required />
                                            </div>
                                            <div className="phone">
                                                <label htmlFor="billingPhone" className='caption1 capitalize'>Phone <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingPhone" type="text" required />
                                            </div>
                                            <div className="email">
                                                <label htmlFor="billingEmail" className='caption1 capitalize'>Email <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="billingEmail" type="email" required />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type='button'
                                        className={`tab_btn flex items-center justify-between w-full mt-10 pb-1.5 border-b border-line ${activeAddress === 'shipping' ? 'active' : ''}`}
                                        onClick={() => handleActiveAddress('shipping')}
                                    >
                                        <strong className="heading6">Shipping address</strong>
                                        <Icon.CaretDown className='text-2xl ic_down duration-300' />
                                    </button>
                                    <div className={`form_address ${activeAddress === 'shipping' ? 'block' : 'hidden'}`}>
                                        <div className='grid sm:grid-cols-2 gap-4 gap-y-5 mt-5'>
                                            <div className="first-name">
                                                <label htmlFor="shippingFirstName" className='caption1 capitalize'>First Name <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingFirstName" type="text" required />
                                            </div>
                                            <div className="last-name">
                                                <label htmlFor="shippingLastName" className='caption1 capitalize'>Last Name <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingLastName" type="text" required />
                                            </div>
                                            <div className="company">
                                                <label htmlFor="shippingCompany" className='caption1 capitalize'>Company name (optional)</label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingCompany" type="text" required />
                                            </div>
                                            <div className="country">
                                                <label htmlFor="shippingCountry" className='caption1 capitalize'>Country / Region <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingCountry" type="text" required />
                                            </div>
                                            <div className="street">
                                                <label htmlFor="shippingStreet" className='caption1 capitalize'>street address <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingStreet" type="text" required />
                                            </div>
                                            <div className="city">
                                                <label htmlFor="shippingCity" className='caption1 capitalize'>Town / city <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingCity" type="text" required />
                                            </div>
                                            <div className="state">
                                                <label htmlFor="shippingState" className='caption1 capitalize'>state <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingState" type="text" required />
                                            </div>
                                            <div className="zip">
                                                <label htmlFor="shippingZip" className='caption1 capitalize'>ZIP <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingZip" type="text" required />
                                            </div>
                                            <div className="phone">
                                                <label htmlFor="shippingPhone" className='caption1 capitalize'>Phone <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingPhone" type="text" required />
                                            </div>
                                            <div className="email">
                                                <label htmlFor="shippingEmail" className='caption1 capitalize'>Email <span className='text-red'>*</span></label>
                                                <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="shippingEmail" type="email" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-button lg:mt-10 mt-6">
                                        <button className="button-main">Update Address</button>
                                    </div>
                                </form>
                            </div>
                            <div className={`tab text-content w-full p-7 border border-line rounded-xl ${activeTab === 'setting' ? 'block' : 'hidden'}`}>
                                <form>
                                    <div className="heading5 pb-4">Information</div>
                                    <div className="upload_image col-span-full">
                                        <label htmlFor="uploadImage">Upload Avatar: <span className="text-red">*</span></label>
                                        <div className="flex flex-wrap items-center gap-5 mt-3">
                                            <div className="bg_img flex-shrink-0 relative w-[7.5rem] h-[7.5rem] rounded-lg overflow-hidden bg-surface">
                                                <span className="ph ph-image text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary"></span>
                                                <Image
                                                    src={'/images/avatar/1.png'}
                                                    width={300}
                                                    height={300}
                                                    alt='avatar'
                                                    className="upload_img relative z-[1] w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <strong className="text-button">Upload File:</strong>
                                                <p className="caption1 text-secondary mt-1">JPG 120x120px</p>
                                                <div className="upload_file flex items-center gap-3 w-[220px] mt-3 px-3 py-2 border border-line rounded">
                                                    <label htmlFor="uploadImage" className="caption2 py-1 px-3 rounded bg-line whitespace-nowrap cursor-pointer">Choose File</label>
                                                    <input type="file" name="uploadImage" id="uploadImage" accept="image/*" className="caption2 cursor-pointer" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid sm:grid-cols-2 gap-4 gap-y-5 mt-5'>
                                        <div className="first-name">
                                            <label htmlFor="firstName" className='caption1 capitalize'>First Name <span className='text-red'>*</span></label>
                                            <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="firstName" type="text" defaultValue={'Alex'} placeholder='First name' required />
                                        </div>
                                        <div className="last-name">
                                            <label htmlFor="lastName" className='caption1 capitalize'>Last Name <span className='text-red'>*</span></label>
                                            <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="lastName" type="text" defaultValue={'Jordan'} placeholder='Last name' required />
                                        </div>
                                        <div className="phone-number">
                                            <label htmlFor="phoneNumber" className='caption1 capitalize'>Phone Number <span className='text-red'>*</span></label>
                                            <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="phoneNumber" type="text" defaultValue={'(+1) 555-123-KICK'} placeholder="Phone number" required />
                                        </div>
                                        <div className="email">
                                            <label htmlFor="email" className='caption1 capitalize'>Email Address <span className='text-red'>*</span></label>
                                            <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="email" type="email" defaultValue={'alex@customsneakerart.com'} placeholder="Email address" required />
                                        </div>
                                        <div className="gender">
                                            <label htmlFor="gender" className='caption1 capitalize'>Gender <span className='text-red'>*</span></label>
                                            <div className="select-block mt-2">
                                                <select className="border border-line px-4 py-3 w-full rounded-lg" id="gender" name="gender" defaultValue={'default'}>
                                                    <option value="default" disabled>Choose Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <Icon.CaretDown className='arrow-down text-lg' />
                                            </div>
                                        </div>
                                        <div className="birth">
                                            <label htmlFor="birth" className='caption1'>Day of Birth <span className='text-red'>*</span></label>
                                            <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="birth" type="date" placeholder="Day of Birth" required />
                                        </div>
                                    </div>
                                    <div className="heading5 pb-4 lg:mt-10 mt-6">Change Password</div>
                                    <div className="pass">
                                        <label htmlFor="password" className='caption1'>Current password <span className='text-red'>*</span></label>
                                        <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="password" type="password" placeholder="Password *" required />
                                    </div>
                                    <div className="new-pass mt-5">
                                        <label htmlFor="newPassword" className='caption1'>New password <span className='text-red'>*</span></label>
                                        <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="newPassword" type="password" placeholder="New Password *" required />
                                    </div>
                                    <div className="confirm-pass mt-5">
                                        <label htmlFor="confirmPassword" className='caption1'>Confirm new password <span className='text-red'>*</span></label>
                                        <input className="border-line mt-2 px-4 py-3 w-full rounded-lg" id="confirmPassword" type="password" placeholder="Confirm Password *" required />
                                    </div>
                                    <div className="block-button lg:mt-10 mt-6">
                                        <button className="button-main">Save Change</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div className={`modal-order-detail-block flex items-center justify-center`} onClick={() => setOpenDetail(false)}>
                <div className={`modal-order-detail-main grid grid-cols-2 w-[1160px] bg-white rounded-2xl ${openDetail ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <div className="info p-10 border-r border-line">
                        <h5 className="heading5">Custom Order Details</h5>
                        <div className="list_info grid grid-cols-2 gap-10 gap-y-8 mt-5">
                            <div className="info_item">
                                <strong className="text-button-uppercase text-secondary">Contact Information</strong>
                                <h6 className="heading6 order_name mt-2">Alex Jordan</h6>
                                <h6 className="heading6 order_phone mt-2">(+1) 555-123-KICK</h6>
                                <h6 className="heading6 normal-case order_email mt-2">alex@customsneakerart.com</h6>
                            </div>
                            <div className="info_item">
                                <strong className="text-button-uppercase text-secondary">Payment method</strong>
                                <h6 className="heading6 order_payment mt-2">Credit Card</h6>
                            </div>
                            <div className="info_item">
                                <strong className="text-button-uppercase text-secondary">Shipping address</strong>
                                <h6 className="heading6 order_shipping_address mt-2">1234 Art District Blvd, Creative Quarter, Los Angeles, CA, US</h6>
                            </div>
                            <div className="info_item">
                                <strong className="text-button-uppercase text-secondary">Design Notes</strong>
                                <h6 className="heading6 order_billing_address mt-2">Anime-inspired abstract design with vibrant colors and dynamic brushstrokes</h6>
                            </div>
                            <div className="info_item">
                                <strong className="text-button-uppercase text-secondary">Production Status</strong>
                                <h6 className="heading6 order_company mt-2">Hand-painting in progress - ETA 7-10 days</h6>
                            </div>
                        </div>
                    </div>
                    <div className="list p-10">
                        <h5 className="heading5">Custom Items</h5>
                        <div className="list_prd">
                            <div className="prd_item flex flex-wrap items-center justify-between gap-3 py-5 border-b border-line">
                                <Link href={'/product/default'} className="flex items-center gap-5">
                                    <div className="bg-img flex-shrink-0 md:w-[100px] w-20 aspect-square rounded-lg overflow-hidden">
                                        <Image
                                            src={'/images/products/product/p1 (3).png'}
                                            width={1000}
                                            height={1000}
                                            alt={'Nike AF1 Anime Abstract Custom'}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div>
                                        <div className="prd_name text-title">Nike AF1 Anime Abstract Custom</div>
                                        <div className="caption1 text-secondary mt-2">
                                            <span className="prd_size uppercase">Size 10</span>
                                            <span>/</span>
                                            <span className="prd_color capitalize">Custom Paint</span>
                                        </div>
                                    </div>
                                </Link>
                                <div className='text-title'>
                                    <span className="prd_quantity">1</span>
                                    <span> X </span>
                                    <span className="prd_price">$280.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-5">
                            <strong className="text-title">Shipping</strong>
                            <strong className="order_ship text-title">Free</strong>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <strong className="text-title">Rush Order</strong>
                            <strong className="order_discounts text-title">+$50.00</strong>
                        </div>
                        <div className="flex items-center justify-between mt-5 pt-5 border-t border-line">
                            <h5 className="heading5">Total</h5>
                            <h5 className="order_total heading5">$330.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount