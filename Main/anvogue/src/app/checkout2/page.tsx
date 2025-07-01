'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'

const Checkout = () => {
    const { openModalCart } = useModalCartContext()
    const { cartState } = useCart();
    let totalCart = 0;
    cartState.cartArray.forEach(item => totalCart += item.price * item.quantity);

    return (
        <>
            <div id="header" className='relative w-full'>
                <div className={`header-menu style-one fixed top-0 left-0 right-0 w-full md:h-[74px] h-[56px]`}>
                    <div className="container mx-auto h-full">
                        <div className="header-main flex items-center justify-between h-full">
                            <Link href={'/homepages/fashion8'} className='flex items-center'>
                                <div className="heading4">Funkari Customs</div>
                            </Link>
                            <button className="max-md:hidden cart-icon flex items-center relative h-fit cursor-pointer" onClick={openModalCart}>
                                <Icon.Handbag size={24} color='black' />
                                <span className="quantity cart-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">{cartState.cartArray.length}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout-block relative md:pt-[74px] pt-[56px]">
                <div className="content-main flex max-lg:flex-col-reverse justify-between">
                    <div className="left flex lg:justify-end w-full">
                        <div className="lg:max-w-[716px] flex-shrink-0 w-full lg:pt-20 pt-12 lg:pr-[70px] pl-[16px] max-lg:pr-[16px]">
                            <form>
                                <div className="login flex justify-between gap-4">
                                    <h4 className="heading4">Contact</h4>
                                    <Link href={"/login"} className="text-button underline">Login here</Link>
                                </div>
                                <div>
                                    <input type="text" className="border-line mt-5 px-4 py-3 w-full rounded-lg" placeholder="Email or mobile phone number" required />
                                    <div className="flex items-center mt-5">
                                        <div className="block-input">
                                            <input type="checkbox" name="remember" id="remember" />
                                            <Icon.CheckSquare weight='fill' className="icon-checkbox text-2xl" />
                                        </div>
                                        <label htmlFor="remember" className="pl-2 cursor-pointer">Email me with news and offers</label>
                                    </div>
                                </div>
                                <div className="information md:mt-10 mt-6">
                                    <div className="heading5">Delivery</div>
                                    <div className="deli_type mt-5">
                                        <div className="item flex items-center gap-2 relative px-5 border border-line rounded-t-lg">
                                            <input type="radio" name="deli_type" id="ship_type" className="cursor-pointer" defaultChecked />
                                            <label htmlFor="ship_type" className="w-full py-4 cursor-pointer">Ship</label>
                                            <Icon.Truck className="text-xl absolute top-1/2 right-5 -translate-y-1/2" />
                                        </div>
                                        <div className="item flex items-center gap-2 relative px-5 border border-line rounded-b-lg">
                                            <input type="radio" name="deli_type" id="store_type" className="cursor-pointer" />
                                            <label htmlFor="store_type" className="w-full py-4 cursor-pointer">Pickup in store</label>
                                            <Icon.Storefront className="text-xl absolute top-1/2 right-5 -translate-y-1/2" />
                                        </div>
                                    </div>
                                    <div className="form-checkout mt-5">
                                        <div className="grid sm:grid-cols-2 gap-4 gap-y-5 flex-wrap">
                                            <div className="col-span-full select-block">
                                                <select className="border border-line px-4 py-3 w-full rounded-lg" id="region" name="region">
                                                    <option value="default">Choose Country/Region</option>
                                                    <option value="United State">United State</option>
                                                    <option value="France">France</option>
                                                    <option value="Singapore">Singapore</option>
                                                </select>
                                                <Icon.CaretDown className="arrow-down" />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="firstName" type="text" placeholder="First Name (optional)" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="lastName" type="text" placeholder="Last Name" required />
                                            </div>
                                            <div className="col-span-full relative">
                                                <input className="border-line pl-4 pr-12 py-3 w-full rounded-lg" id="address" type="text" placeholder="Address" required />
                                                <Icon.MagnifyingGlass className="text-xl absolute top-1/2 -translate-y-1/2 right-5" />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="apartment" type="text" placeholder="Apartment, suite,etc.(optional)" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="city" type="text" placeholder="City" required />
                                            </div>
                                            <div className="select-block">
                                                <select className="border border-line px-4 py-3 w-full rounded-lg" id="state" name="state">
                                                    <option value="default">State</option>
                                                    <option value="Nevada">Nevada</option>
                                                    <option value="California">California</option>
                                                    <option value="Los Angeles">Los Angeles</option>
                                                </select>
                                                <Icon.CaretDown className="arrow-down" />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="zipcode" type="text" placeholder="Zip Code" required />
                                            </div>
                                        </div>
                                        <h4 className="heading4 md:mt-10 mt-6">Shipping method</h4>
                                        <div className="body1 text-secondary2 py-6 px-5 border border-line rounded-lg bg-surface mt-5">Enter your shipping address to view available shipping methods</div>
                                        <div className="payment-block md:mt-10 mt-6">
                                            <h4 className="heading4">Payment</h4>
                                            <p className="body1 text-secondary2 mt-3">All transactions are secure and encrypted.</p>
                                            <div className="list-payment mt-5">
                                                <div className="item">
                                                    <div className="type flex items-center justify-between bg-linear p-5 border border-black rounded-t-lg">
                                                        <strong className="text-title">Credit Card</strong>
                                                        <Icon.CreditCard className="text-2xl" />
                                                    </div>
                                                    <div className="form_payment grid grid-cols-2 gap-4 gap-y-5 p-5 rounded-b-lg bg-surface">
                                                        <div className="col-span-full relative">
                                                            <input className="border-line pl-4 pr-12 py-3 w-full rounded-lg" id="cardNumbers" type="text" placeholder="Card Numbers" required />
                                                            <Icon.LockSimple className="text-xl text-secondary absolute top-1/2 -translate-y-1/2 right-5" />
                                                        </div>
                                                        <div className="relative">
                                                            <input className="border-line px-4 py-3 w-full rounded-lg" id="expirationDate" type="text" placeholder="Expiration date (MM /YY)" required />
                                                        </div>
                                                        <div className="relative">
                                                            <input className="border-line pl-4 pr-12 py-3 w-full rounded-lg" id="securityCode" type="text" placeholder="Security code" required />
                                                            <Icon.Question className="text-xl text-secondary absolute top-1/2 -translate-y-1/2 right-5" />
                                                        </div>
                                                        <div className="col-span-full relative">
                                                            <input className="border-line px-4 py-3 w-full rounded-lg" id="cardName" type="text" placeholder="Name On Card" required />
                                                        </div>
                                                        <div className="col-span-full flex items-center">
                                                            <div className="block-input">
                                                                <input type="checkbox" name="useAddress" id="useAddress" />
                                                                <Icon.CheckSquare weight='fill' className="icon-checkbox text-2xl" />
                                                            </div>
                                                            <label htmlFor="useAddress" className="text-title pl-2 cursor-pointer">Use shipping address as billing address</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block-button md:mt-10 mt-6">
                                            <button className="button-main w-full tracking-widest">Paynow</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="copyright caption1 md:mt-20 mt-12 py-3 border-t border-line">©2025 copyright by FutuRexa Solutions Inc. All Rights Reserved.</div>
                        </div>
                    </div>
                    <div className="right justify-start flex-shrink-0 lg:w-[47%] bg-surface lg:py-20 py-12">
                        <div className="lg:sticky lg:top-24 h-fit lg:max-w-[606px] w-full flex-shrink-0 lg:pl-[80px] pr-[16px] max-lg:pl-[16px]">
                            <div className="list_prd flex flex-col gap-7">
                                {/* 2 colorful Splash nike af1 */}
                                <div className="item flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-6">
                                        <Image src="/images/products/product (13)/p13 (1).png" alt="2 colorful Splash nike af1" width={100} height={100} className="w-full h-full object-cover rounded-lg" />
                                        <span className="quantity flex items-center justify-center absolute -top-3 -right-3 w-7 h-7 rounded-full bg-black text-white">1</span>
                                    </div>
                                    <div>
                                        <strong className="name text-title">Dual colorful Splash nike af1</strong>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Icon.Tag className="text-secondary" />
                                            <span className="code text-secondary">SKU: AF1-SPLASH-02</span>
                                        </div>
                                        <div className="relative group mt-2">
                                            <span className="underline text-sm cursor-pointer group-hover:text-primary transition">Description</span>
                                            <div className="absolute left-0 z-20 w-[340px] p-4 bg-white border border-gray-300 rounded shadow-lg text-xs text-black opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                                Make a bold statement with the 2 colorful Splash nike af1. These custom sneakers feature a vibrant, hand-painted splash design in multiple colors, turning every step into a work of art. Built on the classic Nike Air Force 1 silhouette, this pair offers premium comfort, durability, and a unique look that stands out from the crowd. Perfect for sneaker enthusiasts and anyone who loves creative, one-of-a-kind footwear.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <del className="caption1 text-secondary text-end org_price">$220.00</del>
                                        <strong className="text-title price">$185.00</strong>
                                    </div>
                                </div>
                                {/* Nike Gran Tourismo */}
                                <div className="item flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-6">
                                        <Image src="/images/products/product (21)/p21 (1).png" alt="Nike Gran Tourismo" width={100} height={100} className="w-full h-full object-cover rounded-lg" />
                                        <span className="quantity flex items-center justify-center absolute -top-3 -right-3 w-7 h-7 rounded-full bg-black text-white">1</span>
                                    </div>
                                    <div>
                                        <strong className="name text-title">Nike Gran Tourismo</strong>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Icon.Tag className="text-secondary" />
                                            <span className="code text-secondary">SKU: GRAN-TOURISMO-01</span>
                                        </div>
                                        <div className="relative group mt-2">
                                            <span className="underline text-sm cursor-pointer group-hover:text-primary transition">Description</span>
                                            <div className="absolute left-0 z-20 w-[340px] p-4 bg-white border border-gray-300 rounded shadow-lg text-xs text-black opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                                                Inspired by the thrill of racing, the Nike Gran Tourismo brings speed and style to your sneaker collection. These custom sneakers feature hand-painted Gran Turismo graphics, bold blue accents, and dynamic details that capture the essence of motorsport. Built on the classic Nike silhouette, this pair offers premium comfort, durability, and a unique look for car enthusiasts and sneakerheads alike. Step into the fast lane and showcase your passion for racing with every stride.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <del className="caption1 text-secondary text-end org_price">$320.00</del>
                                        <strong className="text-title price">$260.00</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout