'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useSearchParams } from 'next/navigation';
import MenuEight from '@/components/Header/Menu/MenuEight'

// Stripe Elements imports
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

function StripeCardForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement!,
        });

        if (error) {
            setError(error.message || 'Payment error');
        } else {
            setError(null);
            // Send paymentMethod.id to your backend to complete the payment
            alert('Card details submitted! (Integrate backend for real payment)');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="border-line px-4 py-3 w-full rounded mt-2 bg-white" />
            <button className="button-main w-full mt-4 bg-blue-600 text-black rounded-lg py-2" type="submit" disabled={!stripe}>
                Pay with Stripe
            </button>
            {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
    );
}

const Checkout = () => {
    const searchParams = useSearchParams()
    let discount = searchParams.get('discount') || 0
    let ship = searchParams.get('ship') || 0
    const { cartState } = useCart();
    let totalCart = 0
    const [activePayment, setActivePayment] = useState<string>('stripe')

    cartState.cartArray.map(item => totalCart += item.price * item.quantity)

    const handlePayment = (item: string) => {
        setActivePayment(item)
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuEight />
                <Breadcrumb heading='Shopping cart' subHeading='Shopping cart' />
            </div>
            <div className="cart-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main flex justify-between">
                        <div className="left w-1/2">
                            <div className="login bg-surface py-3 px-4 flex justify-between rounded-lg">
                                <div className="left flex items-center"><span className="text-on-surface-variant1 pr-4">Already have an account? </span><span className="text-button text-on-surface hover-underline cursor-pointer">Login</span></div>
                                <div className="right"><i className="ph ph-caret-down fs-20 d-block cursor-pointer"></i></div>
                            </div>
                            <div className="form-login-block mt-3">
                                <form className="p-5 border border-line rounded-lg">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="email ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="username" type="email" placeholder="Username or email" required />
                                        </div>
                                        <div className="pass ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="password" type="password" placeholder="Password" required />
                                        </div>
                                    </div>
                                    <div className="block-button mt-3">
                                        <button className="button-main button-blue-hover">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div className="information mt-5">
                                <div className="heading5">Information</div>
                                <div className="form-checkout mt-5">
                                    <form>
                                        <div className="grid sm:grid-cols-2 gap-4 gap-y-5 flex-wrap">
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="firstName" type="text" placeholder="First Name *" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="lastName" type="text" placeholder="Last Name *" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="email" type="email" placeholder="Email Address *" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="phoneNumber" type="number" placeholder="Phone Numbers *" required />
                                            </div>
                                            <div className="col-span-full select-block">
                                                <select className="border border-line px-4 py-3 w-full rounded-lg" id="region" name="region" defaultValue={'default'}>
                                                    <option value="default" disabled>Choose Country/Region</option>
                                                    <option value="India">India</option>
                                                    <option value="France">France</option>
                                                    <option value="Singapore">Singapore</option>
                                                </select>
                                                <Icon.CaretDown className='arrow-down' />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="city" type="text" placeholder="Town/City *" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="apartment" type="text" placeholder="Street,..." required />
                                            </div>
                                            <div className="select-block">
                                                <select className="border border-line px-4 py-3 w-full rounded-lg" id="country" name="country" defaultValue={'default'}>
                                                    <option value="default" disabled>Choose State</option>
                                                    <option value="India">India</option>
                                                    <option value="France">France</option>
                                                    <option value="Singapore">Singapore</option>
                                                </select>
                                                <Icon.CaretDown className='arrow-down' />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="postal" type="text" placeholder="Postal Code *" required />
                                            </div>
                                            <div className="col-span-full">
                                                <textarea className="border border-line px-4 py-3 w-full rounded-lg" id="note" name="note" placeholder="Write note..."></textarea>
                                            </div>
                                        </div>
                                        <div className="payment-block md:mt-10 mt-6">
                                            <div className="heading5">Choose payment Option:</div>
                                            <div className="list-payment mt-5">
                                                {/* Stripe */}
                                                <div className={`type bg-surface p-5 border border-line rounded-lg ${activePayment === 'stripe' ? 'open' : ''}`}>
                                                    <input className="cursor-pointer" type="radio" id="stripe" name="payment" checked={activePayment === 'stripe'} onChange={() => handlePayment('stripe')} />
                                                    <label className="text-button pl-2 cursor-pointer" htmlFor="stripe">Stripe</label>
                                                    {activePayment === 'stripe' && (
                                                        <div className="infor pt-4">
                                                            <div className="text-on-surface-variant1 mb-3">Pay with your credit or debit card via Stripe.</div>
                                                            <Elements stripe={stripePromise}>
                                                                <StripeCardForm />
                                                            </Elements>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* PayPal */}
                                                <div className={`type bg-surface p-5 border border-line rounded-lg mt-5 ${activePayment === 'paypal' ? 'open' : ''}`}>
                                                    <input className="cursor-pointer" type="radio" id="paypal" name="payment" checked={activePayment === 'paypal'} onChange={() => handlePayment('paypal')} />
                                                    <label className="text-button pl-2 cursor-pointer" htmlFor="paypal">PayPal</label>
                                                    {activePayment === 'paypal' && (
                                                        <div className="infor pt-4">
                                                            <div className="text-on-surface-variant1 mb-3">Pay securely using your PayPal account.</div>
                                                            <div className="row">
                                                                <div className="col-12 mt-3">
                                                                    <label htmlFor="paypalEmail">PayPal Email</label>
                                                                    <input className="border-line px-4 py-3 w-full rounded mt-2" type="email" id="paypalEmail" placeholder="your@email.com" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* Apple Pay */}
                                                <div className={`type bg-surface p-5 border border-line rounded-lg mt-5 ${activePayment === 'apple-pay' ? 'open' : ''}`}>
                                                    <input className="cursor-pointer" type="radio" id="apple-pay" name="payment" checked={activePayment === 'apple-pay'} onChange={() => handlePayment('apple-pay')} />
                                                    <label className="text-button pl-2 cursor-pointer" htmlFor="apple-pay">Apple Pay</label>
                                                    {activePayment === 'apple-pay' && (
                                                        <div className="infor pt-4">
                                                            <div className="text-on-surface-variant1 mb-3">Pay quickly and securely with Apple Pay.</div>
                                                            <div className="row">
                                                                <div className="col-12 mt-3">
                                                                    <label htmlFor="applePayDevice">Device Account Number</label>
                                                                    <input className="border-line px-4 py-3 w-full rounded mt-2" type="text" id="applePayDevice" placeholder="Device Account Number" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* Visa */}
                                                <div className={`type bg-surface p-5 border border-line rounded-lg mt-5 ${activePayment === 'visa' ? 'open' : ''}`}>
                                                    <input className="cursor-pointer" type="radio" id="visa" name="payment" checked={activePayment === 'visa'} onChange={() => handlePayment('visa')} />
                                                    <label className="text-button pl-2 cursor-pointer" htmlFor="visa">Visa</label>
                                                    {activePayment === 'visa' && (
                                                        <div className="infor pt-4">
                                                            <div className="text-on-surface-variant1 mb-3">Enter your Visa card details:</div>
                                                            <div className="row">
                                                                <div className="col-12 mt-3">
                                                                    <label htmlFor="visaCardNumber">Card Number</label>
                                                                    <input className="border-line px-4 py-3 w-full rounded mt-2" type="text" id="visaCardNumber" placeholder="ex. 1234 5678 9012 3456" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <label htmlFor="visaDate">Expiry Date</label>
                                                                    <input className="border-line px-4 py-3 w-full rounded mt-2" type="text" id="visaDate" placeholder="MM/YY" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <label htmlFor="visaCvv">CVV</label>
                                                                    <input className="border-line px-4 py-3 w-full rounded mt-2" type="text" id="visaCvv" placeholder="***" />
                                                                </div>
                                                                <div className="mt-3">
                                                                    <label htmlFor="visaName">Name on Card</label>
                                                                    <input className="border-line px-4 py-3 w-full rounded mt-2" type="text" id="visaName" placeholder="Cardholder Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* Payoneer */}
                                                <div className={`type bg-surface p-5 border border-line rounded-lg mt-5 ${activePayment === 'payoneer' ? 'open' : ''}`}>
                                                    <input className="cursor-pointer" type="radio" id="payoneer" name="payment" checked={activePayment === 'payoneer'} onChange={() => handlePayment('payoneer')} />
                                                    <label className="text-button pl-2 cursor-pointer" htmlFor="payoneer">Payoneer</label>
                                                    {activePayment === 'payoneer' && (
                                                        <div className="infor pt-4">
                                                            <div className="text-on-surface-variant1 mb-3">Pay using your Payoneer account.</div>
                                                            <div className="row">
                                                                <div className="col-12 mt-3">
                                                                    <label htmlFor="payoneerEmail">Payoneer Email</label>
                                                                    <input className="border-line px-4 py-3 w-full rounded mt-2" type="email" id="payoneerEmail" placeholder="your@email.com" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* Amazon Pay */}
                                                <div className={`type bg-surface p-5 border border-line rounded-lg mt-5 ${activePayment === 'amazon-pay' ? 'open' : ''}`}>
                                                    <input className="cursor-pointer" type="radio" id="amazon-pay" name="payment" checked={activePayment === 'amazon-pay'} onChange={() => handlePayment('amazon-pay')} />
                                                    <label className="text-button pl-2 cursor-pointer" htmlFor="amazon-pay">Amazon Pay</label>
                                                    {activePayment === 'amazon-pay' && (
                                                        <div className="infor pt-4">
                                                            <div className="text-on-surface-variant1 mb-3">Pay easily with your Amazon account.</div>
                                                            <div className="row">
                                                                <div className="col-12 mt-3">
                                                                    <label htmlFor="amazonEmail">Amazon Email</label>
                                                                    <input className="border-line px-4 py-3 w-full rounded mt-2" type="email" id="amazonEmail" placeholder="your@email.com" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block-button md:mt-10 mt-6">
                                            <button className="button-main w-full">Payment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="right w-5/12">
                            <div className="checkout-block">
                                <div className="heading5 pb-3">Your Order</div>
                                <div className="list-product-checkout">
                                    {cartState.cartArray.length < 1 ? (
                                        <p className='text-button pt-3'>No product in cart</p>
                                    ) : (
                                        cartState.cartArray.map((product) => (
                                            <div key={product.id} className="item flex items-center justify-between w-full pb-5 border-b border-line gap-6 mt-5">
                                                <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={product.thumbImage[0]}
                                                        width={500}
                                                        height={500}
                                                        alt='img'
                                                        className='w-full h-full'
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between w-full">
                                                    <div>
                                                        <div className="name text-title">{product.name}</div>
                                                        <div className="caption1 text-secondary mt-2">
                                                            <span className='size capitalize'>{product.selectedSize || product.sizes[0]}</span>
                                                            <span>/</span>
                                                            <span className='color capitalize'>{product.selectedColor || product.variation[0].color}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-title">
                                                        <span className='quantity'>{product.quantity}</span>
                                                        <span className='px-1'>x</span>
                                                        <span>
                                                            ${product.price}.00
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="discount-block py-5 flex justify-between border-b border-line">
                                    <div className="text-title">Discounts</div>
                                    <div className="text-title">-${discount}.00</div>
                                </div>
                                <div className="ship-block py-5 flex justify-between border-b border-line">
                                    <div className="text-title">Shipping</div>
                                    <div className="text-title">{Number(ship) === 0 ? 'Free' : `$${ship}.00`}</div>
                                </div>
                                <div className="total-cart-block pt-5 flex justify-between">
                                    <div className="heading5">Total</div>
                                    <div className="heading5 total-cart">${totalCart - Number(discount) + Number(ship)}.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout