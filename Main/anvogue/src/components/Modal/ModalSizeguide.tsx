'use client'

import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from '@/type/ProductType'

interface Props {
    data: ProductType | null;
    isOpen: boolean;
    onClose: () => void;
}

const ModalSizeguide: React.FC<Props> = ({ isOpen, onClose }) => {
    // Simplified to always show the footwear chart from the image
    return (
        <>
            <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}>
                <div
                    className={`relative bg-white rounded-xl max-w-2xl w-full mx-4 p-6 md:p-8 overflow-y-auto max-h-[90vh] ${isOpen ? 'block' : 'hidden'}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div
                        className="absolute right-4 top-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                        onClick={onClose}
                    >
                        <Icon.X size={16} />
                    </div>

                    {/* Footwear size guide - exact match to the image */}
                    <div>
                        {/* Custom Sneakers Size Chart Title with brown background */}
                        <div className="mb-8">
                            <div className="bg-[#59392A] text-white px-6 py-4 rounded-sm">
                                <h2 className="text-3xl font-bold">Custom</h2>
                                <h2 className="text-3xl font-bold">Sneakers</h2>
                                <h2 className="text-3xl font-bold">Size Chart</h2>
                                <div className="h-0.5 bg-white w-full mt-2"></div>
                            </div>
                        </div>
                        
                        {/* Size Chart Table - exactly matching the image */}
                        <div className="overflow-x-auto mb-6 relative">
                            {/* Gray brushstroke background effect */}
                            <div className="absolute inset-0 bg-gray-200 opacity-30 -z-10" 
                                style={{ 
                                    borderRadius: '2px',
                                    transform: 'rotate(-1deg) scale(1.02)'
                                }}>
                            </div>
                            
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-300">
                                        <th className="py-3 px-6 text-center">US</th>
                                        <th className="py-3 px-6 text-center">UK</th>
                                        <th className="py-3 px-6 text-center">Euro</th>
                                        <th className="py-3 px-6 text-center">Cm</th>
                                        <th className="py-3 px-6 text-center">In</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">5</td>
                                        <td className="py-2 px-6 text-center">4</td>
                                        <td className="py-2 px-6 text-center">38</td>
                                        <td className="py-2 px-6 text-center">23.8</td>
                                        <td className="py-2 px-6 text-center">9 3/8</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">5.5</td>
                                        <td className="py-2 px-6 text-center">4.5</td>
                                        <td className="py-2 px-6 text-center">38-39</td>
                                        <td className="py-2 px-6 text-center">24.1</td>
                                        <td className="py-2 px-6 text-center">9 1/2</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">6</td>
                                        <td className="py-2 px-6 text-center">5</td>
                                        <td className="py-2 px-6 text-center">39</td>
                                        <td className="py-2 px-6 text-center">24.8</td>
                                        <td className="py-2 px-6 text-center">9 3/4</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">6.5</td>
                                        <td className="py-2 px-6 text-center">5.5</td>
                                        <td className="py-2 px-6 text-center">39-40</td>
                                        <td className="py-2 px-6 text-center">25.1</td>
                                        <td className="py-2 px-6 text-center">9 7/8</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">7</td>
                                        <td className="py-2 px-6 text-center">6</td>
                                        <td className="py-2 px-6 text-center">40</td>
                                        <td className="py-2 px-6 text-center">25.4</td>
                                        <td className="py-2 px-6 text-center">10</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">7.5</td>
                                        <td className="py-2 px-6 text-center">6.5</td>
                                        <td className="py-2 px-6 text-center">41</td>
                                        <td className="py-2 px-6 text-center">25.8</td>
                                        <td className="py-2 px-6 text-center">10 1/8</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">8</td>
                                        <td className="py-2 px-6 text-center">7</td>
                                        <td className="py-2 px-6 text-center">41-42</td>
                                        <td className="py-2 px-6 text-center">26</td>
                                        <td className="py-2 px-6 text-center">10 1/4</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">8.5</td>
                                        <td className="py-2 px-6 text-center">7.5</td>
                                        <td className="py-2 px-6 text-center">42</td>
                                        <td className="py-2 px-6 text-center">26.7</td>
                                        <td className="py-2 px-6 text-center">10 1/2</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">9</td>
                                        <td className="py-2 px-6 text-center">8</td>
                                        <td className="py-2 px-6 text-center">43</td>
                                        <td className="py-2 px-6 text-center">27.3</td>
                                        <td className="py-2 px-6 text-center">10 3/4</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">9.5</td>
                                        <td className="py-2 px-6 text-center">8.5</td>
                                        <td className="py-2 px-6 text-center">43-44</td>
                                        <td className="py-2 px-6 text-center">27.7</td>
                                        <td className="py-2 px-6 text-center">10 7/8</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">10</td>
                                        <td className="py-2 px-6 text-center">9</td>
                                        <td className="py-2 px-6 text-center">44</td>
                                        <td className="py-2 px-6 text-center">27.9</td>
                                        <td className="py-2 px-6 text-center">11</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-6 text-center">10.5</td>
                                        <td className="py-2 px-6 text-center">9.5</td>
                                        <td className="py-2 px-6 text-center">44-45</td>
                                        <td className="py-2 px-6 text-center">28.6</td>
                                        <td className="py-2 px-6 text-center">11 1/4</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-6 text-center">11</td>
                                        <td className="py-2 px-6 text-center">10</td>
                                        <td className="py-2 px-6 text-center">45</td>
                                        <td className="py-2 px-6 text-center">29.2</td>
                                        <td className="py-2 px-6 text-center">11 1/2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Attribution */}
                        <div className="text-right text-sm italic text-gray-500 mt-2">Funkari Customs©</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalSizeguide