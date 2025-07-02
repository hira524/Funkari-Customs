'use client'
import React, { useState } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import MenuEight from '@/components/Header/Menu/MenuEight';

const Faqs = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>('custom process')
    const [activeQuestion, setActiveQuestion] = useState<string | undefined>('')

    const handleActiveTab = (tab: string) => {
        setActiveTab(tab)
        setActiveQuestion('') // Reset open question when tab changes
    }

    const handleActiveQuestion = (question: string) => {
        setActiveQuestion(prevQuestion => prevQuestion === question ? undefined : question)
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Custom Sneakers - Free Shipping Over $100" />
            <div id="header" className='relative w-full'>
                <MenuEight />
                <Breadcrumb heading="FAQs" subHeading="FAQs" />
            </div>
            <div className="faqs-block md:py-20 py-10">
                <div className="container">
                    <div className="flex justify-between max-md:flex-col max-md:gap-10">
                        <div className="left md:w-1/4 w-full">
                            <div className="menu-tab flex flex-col gap-5">
                                {[
                                    'custom process', 'payment methods', 'shipping & delivery', 'returns & refunds', 'sizing & fit', 'care instructions', 'contact us'
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`tab-item inline-block w-fit heading6 has-line-before text-secondary2 hover:text-black duration-300 cursor-pointer ${activeTab === item ? 'active' : ''}`}
                                        onClick={() => handleActiveTab(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="right md:w-2/3 w-full">
                            {/* Custom Process */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'custom process' ? 'active' : ''}`}>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cp1' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cp1')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How long does it take to create my custom sneakers?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Our custom sneaker creation process typically takes 2-3 weeks from design approval to completion. This includes design consultation, hand-painting, drying time, and quality inspection. Rush orders are available for an additional fee and can be completed in 5-7 business days.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cp2' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cp2')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I provide my own design or artwork?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Absolutely! We love working with your original artwork, photos, or design concepts. Simply upload your images during the order process or send them to us via email. Our artists will work with you to adapt your design to work perfectly on sneakers while maintaining the artistic integrity of your vision.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cp3' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cp3')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What sneaker brands and models do you customize?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We primarily work with Nike Air Force 1s, Nike Air Jordans, Adidas Stan Smiths, and Vans Old Skool models. These brands provide the best canvas for our artwork. If you have a specific model in mind, contact us to discuss compatibility with our customization process.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cp4' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cp4')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you offer design consultations?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We offer free 30-minute design consultations where our artists work with you to develop your concept. We&apos;ll discuss color schemes, themes, placement, and technical considerations to ensure your vision comes to life perfectly on your sneakers.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cp5' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cp5')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I request changes during the creation process?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Minor adjustments can be made during the initial design phase before painting begins. Once the painting process starts, major changes may not be possible without starting over, which would incur additional costs. We&apos;ll send you progress photos and confirmations at key stages.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cp6' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cp6')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What makes your custom sneakers different from printed designs?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Our sneakers are hand-painted by skilled artists using premium leather paints and sealers. This creates a unique, one-of-a-kind piece of wearable art that&apos;s durable and flexible. Unlike printed designs, our hand-painted artwork has texture, depth, and character that can&apos;t be replicated by machines.</div>
                                </div>
                            </div>
                            {/* Payment Methods */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'payment methods' ? 'active' : ''}`}>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'pm1' ? 'open' : ''}`} onClick={() => handleActiveQuestion('pm1')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What payment methods do you accept?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Afterpay for flexible payment options. All transactions are secured with SSL encryption for your protection.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'pm2' ? 'open' : ''}`} onClick={() => handleActiveQuestion('pm2')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you require payment upfront?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We require a 50% deposit to begin work on your custom sneakers, with the remaining balance due before shipping. For orders over $500, we offer payment plans through Afterpay or Klarna to make your custom sneakers more affordable.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'pm3' ? 'open' : ''}`} onClick={() => handleActiveQuestion('pm3')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Are there additional fees for complex designs?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Our base pricing covers most custom designs. However, extremely detailed artwork, special materials, or 3D elements may incur additional fees. We&apos;ll always discuss any extra costs during the design consultation before beginning work.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'pm4' ? 'open' : ''}`} onClick={() => handleActiveQuestion('pm4')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you offer refunds if I&apos;m not satisfied?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Due to the custom nature of our work, we don&apos;t offer refunds once production begins. However, we work closely with you throughout the process to ensure satisfaction. If there&apos;s a quality issue with our workmanship, we&apos;ll make it right at no additional cost.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'pm5' ? 'open' : ''}`} onClick={() => handleActiveQuestion('pm5')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I get a quote before ordering?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! Contact us with your design ideas, and we&apos;ll provide a detailed quote including all costs. Our pricing is transparent with no hidden fees. Complex designs or special requests will be clearly itemized in your quote.</div>
                                </div>
                            </div>
                            {/* Shipping & Delivery */}
                            {/* ...existing code... */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faqs