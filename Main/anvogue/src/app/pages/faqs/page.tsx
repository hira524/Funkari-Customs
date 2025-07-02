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
                <Breadcrumb heading='FAQs' subHeading='FAQs' />
            </div>
            <div className='faqs-block md:py-20 py-10'>
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
                                    <div className="content body1 text-secondary">Yes! We offer free 30-minute design consultations where our artists work with you to develop your concept. We'll discuss color schemes, themes, placement, and technical considerations to ensure your vision comes to life perfectly on your sneakers.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cp5' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cp5')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I request changes during the creation process?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Minor adjustments can be made during the initial design phase before painting begins. Once the painting process starts, major changes may not be possible without starting over, which would incur additional costs. We'll send you progress photos and confirmations at key stages.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cp6' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cp6')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What makes your custom sneakers different from printed designs?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Our sneakers are hand-painted by skilled artists using premium leather paints and sealers. This creates a unique, one-of-a-kind piece of wearable art that's durable and flexible. Unlike printed designs, our hand-painted artwork has texture, depth, and character that can't be replicated by machines.</div>
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
                                    <div className="content body1 text-secondary">Our base pricing covers most custom designs. However, extremely detailed artwork, special materials, or 3D elements may incur additional fees. We'll always discuss any extra costs during the design consultation before beginning work.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'pm4' ? 'open' : ''}`} onClick={() => handleActiveQuestion('pm4')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you offer refunds if I'm not satisfied?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Due to the custom nature of our work, we don't offer refunds once production begins. However, we work closely with you throughout the process to ensure satisfaction. If there's a quality issue with our workmanship, we'll make it right at no additional cost.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'pm5' ? 'open' : ''}`} onClick={() => handleActiveQuestion('pm5')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I get a quote before ordering?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! Contact us with your design ideas, and we'll provide a detailed quote including all costs. Our pricing is transparent with no hidden fees. Complex designs or special requests will be clearly itemized in your quote.</div>
                                </div>
                            </div>
                            {/* Shipping & Delivery */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'shipping & delivery' ? 'active' : ''}`}>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sd1' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sd1')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How do you ship custom sneakers?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We ship via FedEx and UPS with full insurance and tracking. Your custom sneakers are carefully packaged in protective materials and shipped in premium sneaker boxes. Free shipping is included for orders over $100 within the continental US.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sd2' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sd2')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you ship internationally?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We ship worldwide. International shipping rates vary by destination and are calculated at checkout. Please note that customs duties and taxes may apply and are the responsibility of the recipient. Delivery times for international orders are typically 5-10 business days.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sd3' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sd3')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I track my order?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Absolutely! Once your order ships, you'll receive tracking information via email. You can also check your order status anytime by logging into your account on our website. We provide updates throughout the creation process as well.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sd4' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sd4')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What if my package is damaged or lost?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">All shipments are fully insured. If your package arrives damaged or is lost in transit, contact us immediately. We'll work with the carrier to resolve the issue and ensure you receive your custom sneakers in perfect condition.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sd5' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sd5')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I expedite shipping?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We offer express shipping options including overnight and 2-day delivery. Express shipping costs are calculated based on your location and package size. This is separate from rush production, which affects creation time.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sd6' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sd6')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you provide delivery notifications?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! You'll receive email notifications when your order is processed, when it ships, and when it's delivered. We also send SMS notifications if you opt in during checkout. Signature confirmation is required for all deliveries to ensure your investment is secure.</div>
                                </div>
                            </div>
                            {/* Returns & Refunds */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'returns & refunds' ? 'active' : ''}`}>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'rr1' ? 'open' : ''}`} onClick={() => handleActiveQuestion('rr1')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I return custom sneakers?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Due to the personalized nature of custom sneakers, we don't accept returns unless there's a defect in our workmanship or materials. We encourage thorough communication during the design process to ensure your complete satisfaction before production begins.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'rr2' ? 'open' : ''}`} onClick={() => handleActiveQuestion('rr2')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What if there's a defect in my custom sneakers?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">If there's a defect in materials or workmanship, we'll either repair or remake your sneakers at no cost. Please contact us within 30 days of delivery with photos of the issue. We stand behind the quality of our work and want you to love your custom sneakers.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'rr3' ? 'open' : ''}`} onClick={() => handleActiveQuestion('rr3')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">What if the sizing is wrong?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">If we made an error with the sizing, we'll create a new pair in the correct size at no charge. However, if the wrong size was ordered on your end, we can remake them for the cost of new sneakers plus a small repainting fee. We always confirm sizing before beginning work.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'rr4' ? 'open' : ''}`} onClick={() => handleActiveQuestion('rr4')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How long do I have to report issues?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Please inspect your custom sneakers immediately upon delivery and report any issues within 30 days. This allows us to address problems promptly and ensure you're completely satisfied with your purchase. Photos of any issues help us resolve problems quickly.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'rr5' ? 'open' : ''}`} onClick={() => handleActiveQuestion('rr5')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you offer exchanges?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Exchanges are only available for defective items or sizing errors on our part. Since each pair is custom-made to order, we cannot exchange for different designs or colors. We recommend reviewing your design carefully before approving production.</div>
                                </div>
                            </div>
                            {/* Sizing & Fit */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'sizing & fit' ? 'active' : ''}`}>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sf1' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sf1')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How do I know what size to order?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We recommend ordering your true size for the specific sneaker model. Each brand fits differently - Nike tends to run small, while Adidas runs large. Check our detailed sizing guide for each model, or contact us for personalized sizing advice if you're unsure.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sf2' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sf2')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you offer half sizes?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We offer all standard half sizes from 5.5 to 13.5 for most models. Some limited edition or specialty sneakers may have restricted size availability. If you need an uncommon size, contact us to check availability for your specific model.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sf3' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sf3')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you customize kids' sizes?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Absolutely! We love creating custom sneakers for kids. We work with most popular kids' models and sizes. Kids' pricing is slightly lower due to the smaller canvas size. Parents can collaborate with us to create designs their children will love.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sf4' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sf4')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Will the paint affect the fit?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Our premium leather paints are designed to be flexible and won't affect the fit or comfort of your sneakers. The paint adds minimal thickness and actually becomes more flexible over time as the sneakers are worn and the leather naturally flexes.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sf5' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sf5')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I order wide or narrow width options?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Width options depend on the specific sneaker model and brand. Some models like New Balance offer wide options, while others don't. Contact us with your specific needs, and we'll let you know what width options are available for your chosen model.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'sf6' ? 'open' : ''}`} onClick={() => handleActiveQuestion('sf6')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Should I size up for thick socks?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Generally, order your normal size. Most people wear athletic socks with sneakers, and the models we work with accommodate normal sock thickness. If you exclusively wear very thick socks, mention this during ordering and we can advise on sizing.</div>
                                </div>
                            </div>
                            {/* Care Instructions */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'care instructions' ? 'active' : ''}`}>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'ci1' ? 'open' : ''}`} onClick={() => handleActiveQuestion('ci1')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How do I clean my custom sneakers?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Clean gently with a soft brush and mild soap solution. Avoid soaking the painted areas. For stubborn stains, use a slightly damp cloth with gentle pressure. Never put custom sneakers in the washing machine, as this can damage both the paint and the sneaker structure.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'ci2' ? 'open' : ''}`} onClick={() => handleActiveQuestion('ci2')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Are the custom designs waterproof?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Our paints are water-resistant and sealed with protective finishes, but not completely waterproof. Light rain and normal wear won't damage the artwork, but avoid deep puddles or extended exposure to water. We recommend a waterproof spray for extra protection.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'ci3' ? 'open' : ''}`} onClick={() => handleActiveQuestion('ci3')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How long will the artwork last?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">With proper care, our artwork can last for years. The paint is designed to flex with the leather and resist normal wear and tear. High-wear areas like toe caps may show wear first, but most of the artwork will remain vibrant with regular use and proper care.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'ci4' ? 'open' : ''}`} onClick={() => handleActiveQuestion('ci4')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can artwork be touched up or repaired?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We offer touch-up services for normal wear and tear. Minor scuffs and worn areas can usually be repaired. Contact us with photos of the wear, and we'll provide a quote for restoration. Keep in mind that touch-ups work best on simpler designs.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'ci5' ? 'open' : ''}`} onClick={() => handleActiveQuestion('ci5')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Should I use any special products on my custom sneakers?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We recommend using leather conditioner occasionally to keep the base material healthy, but avoid products that might interact with the paint. Waterproof sprays designed for painted surfaces can help protect the artwork. Always test any product on a small, hidden area first.</div>
                                </div>
                            </div>
                            {/* Contact Us */}
                            <div className={`tab-question flex flex-col gap-5 ${activeTab === 'contact us' ? 'active' : ''}`}>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cu1' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cu1')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How can I reach your design team?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">You can reach us via email at studio@customsneakerart.com, phone at (+1) 555-123-KICK, or through our contact form. Our design team is available Monday-Friday, 10am-7pm PST. We typically respond to inquiries within 24 hours.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cu2' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cu2')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you offer in-person consultations?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We offer in-person consultations at our Los Angeles studio by appointment. This is perfect for complex projects or if you want to see our work up close. Video consultations are also available for clients outside the LA area.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cu3' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cu3')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Can I visit your studio to see the process?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Absolutely! We love showing clients our creative process. Studio visits can be arranged by appointment. You can watch our artists work, see finished pieces, and get inspired for your own custom design. Contact us to schedule your visit.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cu4' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cu4')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you have social media where I can see your work?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! Follow us on Instagram @customsneakerart, TikTok @customsneakerart, and Facebook for daily updates, behind-the-scenes content, and our latest creations. We love sharing the artistic process and finished masterpieces with our community.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cu5' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cu5')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">How quickly do you respond to questions?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">We pride ourselves on quick communication. Email inquiries are usually answered within 24 hours on business days. Phone calls during business hours are answered immediately. For urgent matters, calling is always the fastest way to reach us.</div>
                                </div>
                                <div className={`question-item px-7 py-5 rounded-[20px] overflow-hidden border border-line cursor-pointer ${activeQuestion === 'cu6' ? 'open' : ''}`} onClick={() => handleActiveQuestion('cu6')}>
                                    <div className="heading flex items-center justify-between gap-6">
                                        <div className="heading6">Do you work with businesses or bulk orders?</div>
                                        <Icon.CaretRight size={24} />
                                    </div>
                                    <div className="content body1 text-secondary">Yes! We work with businesses, teams, events, and bulk orders. Corporate partnerships, team uniforms, promotional items, and group orders all receive special attention and pricing. Contact us directly to discuss your specific needs and volume discounts.</div>
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

export default Faqs