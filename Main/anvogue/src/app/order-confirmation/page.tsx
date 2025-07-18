/* eslint-disable react/no-unescaped-entities */
'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuEight from '@/components/Header/Menu/MenuEight';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function OrderConfirmation() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId') || 'ORD000000';
    // Use the cart methods provided by CartContext
    const { cartState, removeFromCart } = useCart();
    const [orderDate] = useState(new Date().toLocaleDateString());
    
    // Calculate order total safely
    let totalCart = 0;
    if (cartState && cartState.cartArray) {
        cartState.cartArray.forEach(item => {
            totalCart += item.price * item.quantity;
        });
    }
    
    // Clear cart on successful order - using removeFromCart for each item
    useEffect(() => {
        if (cartState?.cartArray?.length > 0) {
            // Create a copy of the array to avoid mutation issues during iteration
            const itemsToRemove = [...cartState.cartArray];
            itemsToRemove.forEach(item => {
                removeFromCart(item.id.toString());
            });
        }
    }, [cartState, removeFromCart]);
    
    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuEight />
                <Breadcrumb heading='Order Confirmation' subHeading='Order Complete' />
            </div>
            <div className="container py-16">
                <div className="max-w-2xl mx-auto bg-white p-8 border rounded-lg shadow-sm">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
                        <p className="text-gray-600">Thank you for your purchase</p>
                    </div>
                    
                    <div className="border-t border-b py-4 my-6">
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">Order ID:</span>
                            <span className="text-gray-600">{orderId}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">Date:</span>
                            <span className="text-gray-600">{orderDate}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">Total Amount:</span>
                            <span className="text-gray-600">${totalCart}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Payment Method:</span>
                            <span className="text-gray-600">Credit Card (Stripe)</span>
                        </div>
                    </div>
                    
                    <p className="text-center text-gray-600 mb-6">
                        We've sent a confirmation email with all order details.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/shop" className="button-main w-full text-center py-3 block bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Continue Shopping
                        </Link>
                        <Link href="/" className="bg-gray-100 text-gray-800 w-full text-center py-3 rounded-lg block hover:bg-gray-200">
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </> 
    );  
}