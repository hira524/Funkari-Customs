'use client'

import React, { useState } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from '@/type/ProductType'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

interface Props {
    data: ProductType | null;
    isOpen: boolean;
    onClose: () => void;
}

const ModalSizeguide: React.FC<Props> = ({ data, isOpen, onClose }) => {
    const [activeSize, setActiveSize] = useState<string>('')
    const [heightRange, setHeightRange] = useState<{ min: number; max: number }>({ min: 100, max: 200 });
    const [weightRange, setWeightRange] = useState<{ min: number; max: number }>({ min: 30, max: 90 });
    const [showFootwear, setShowFootwear] = useState<boolean>(false);
    const [footLength, setFootLength] = useState<number>(25);

    // Check if product is footwear based on category or tags
    React.useEffect(() => {
        if (data?.category?.includes('shoes') || 
            data?.category?.includes('sneakers') || 
            (data?.tags && data.tags.includes('footwear'))) {
            setShowFootwear(true);
        }
    }, [data]);

    const calculateSize = (height: number, weight: number) => {
        if (height > 180 || weight > 70) {
            setActiveSize('2XL');
        } else if (height > 170 || weight > 60) {
            setActiveSize('XL');
        } else if (height > 160 || weight > 50) {
            setActiveSize('L');
        } else if (height > 155 || weight > 45) {
            setActiveSize('M');
        } else if (height > 150 || weight > 40) {
            setActiveSize('S');
        } else {
            setActiveSize('XS');
        }
    };

    const calculateFootwearSize = (length: number) => {
        // Match foot length in cm to the closest size
        if (length < 24) {
            setActiveSize('5 US / 38 EU');
        } else if (length < 24.5) {
            setActiveSize('5.5 US / 38-39 EU');
        } else if (length < 25) {
            setActiveSize('6 US / 39 EU');
        } else if (length < 25.3) {
            setActiveSize('6.5 US / 39-40 EU');
        } else if (length < 25.6) {
            setActiveSize('7 US / 40 EU');
        } else if (length < 26) {
            setActiveSize('7.5 US / 41 EU');
        } else if (length < 26.5) {
            setActiveSize('8 US / 41-42 EU');
        } else if (length < 27) {
            setActiveSize('8.5 US / 42 EU');
        } else if (length < 27.5) {
            setActiveSize('9 US / 43 EU');
        } else if (length < 28) {
            setActiveSize('9.5 US / 43-44 EU');
        } else if (length < 28.3) {
            setActiveSize('10 US / 44 EU');
        } else if (length < 29) {
            setActiveSize('10.5 US / 44-45 EU');
        } else {
            setActiveSize('11 US / 45 EU');
        }
    };

    const handleHeightChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setHeightRange({ min: values[0], max: values[1] });
        }
        calculateSize(heightRange.max, weightRange.max)
    };

    const handleWeightChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setWeightRange({ min: values[0], max: values[1] });
        }
        calculateSize(heightRange.max, weightRange.max)
    };

    const handleFootLengthChange = (values: number | number[]) => {
        if (Array.isArray(values) && values.length > 0) {
            setFootLength(values[1]);
            calculateFootwearSize(values[1]);
        } else if (typeof values === 'number') {
            setFootLength(values);
            calculateFootwearSize(values);
        }
    };

    return (
        <>
            <div className={`modal-sizeguide-block`} onClick={onClose}>
                <div
                    className={`modal-sizeguide-main md:p-10 p-6 rounded-[32px] ${isOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div
                        className="close-btn absolute right-5 top-5 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                        onClick={onClose}
                    >
                        <Icon.X size={14} />
                    </div>
                    <div className="heading3">Size guide</div>

                    {showFootwear ? (
                        // Footwear size guide styled to match the provided image
                        <div>
                            {/* Custom Sneakers Size Chart Title with brown background */}
                            <div className="mt-6 mb-8">
                                <div className="bg-[#59392A] text-white px-6 py-4 rounded-md">
                                    <h2 className="text-2xl font-bold">Custom</h2>
                                    <h2 className="text-2xl font-bold">Sneakers</h2>
                                    <h2 className="text-2xl font-bold">Size Chart</h2>
                                    <div className="h-1 bg-white w-full mt-2"></div>
                                </div>
                            </div>
                            
                            {/* Size Chart Table with minimal styling matching the image */}
                            <div className="overflow-x-auto mb-8">
                                <div className="relative">
                                    {/* Light gray brushstroke background effect */}
                                    <div className="absolute inset-0 bg-[#f1f1f1] opacity-50 -z-10" 
                                        style={{ 
                                            borderRadius: '8px',
                                            transform: 'rotate(-2deg) scale(1.05)'
                                        }}>
                                    </div>
                                    
                                    <table className="w-full border-collapse bg-white">
                                        <thead>
                                            <tr className="border-b border-gray-300">
                                                <th className="py-3 px-4 text-center font-semibold">US</th>
                                                <th className="py-3 px-4 text-center font-semibold">UK</th>
                                                <th className="py-3 px-4 text-center font-semibold">Euro</th>
                                                <th className="py-3 px-4 text-center font-semibold">Cm</th>
                                                <th className="py-3 px-4 text-center font-semibold">In</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">5</td>
                                                <td className="py-2 px-4 text-center">4</td>
                                                <td className="py-2 px-4 text-center">38</td>
                                                <td className="py-2 px-4 text-center">23.8</td>
                                                <td className="py-2 px-4 text-center">9 3/8</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">5.5</td>
                                                <td className="py-2 px-4 text-center">4.5</td>
                                                <td className="py-2 px-4 text-center">38-39</td>
                                                <td className="py-2 px-4 text-center">24.1</td>
                                                <td className="py-2 px-4 text-center">9 1/2</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">6</td>
                                                <td className="py-2 px-4 text-center">5</td>
                                                <td className="py-2 px-4 text-center">39</td>
                                                <td className="py-2 px-4 text-center">24.8</td>
                                                <td className="py-2 px-4 text-center">9 3/4</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">6.5</td>
                                                <td className="py-2 px-4 text-center">5.5</td>
                                                <td className="py-2 px-4 text-center">39-40</td>
                                                <td className="py-2 px-4 text-center">25.1</td>
                                                <td className="py-2 px-4 text-center">9 7/8</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">7</td>
                                                <td className="py-2 px-4 text-center">6</td>
                                                <td className="py-2 px-4 text-center">40</td>
                                                <td className="py-2 px-4 text-center">25.4</td>
                                                <td className="py-2 px-4 text-center">10</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">7.5</td>
                                                <td className="py-2 px-4 text-center">6.5</td>
                                                <td className="py-2 px-4 text-center">41</td>
                                                <td className="py-2 px-4 text-center">25.8</td>
                                                <td className="py-2 px-4 text-center">10 1/8</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">8</td>
                                                <td className="py-2 px-4 text-center">7</td>
                                                <td className="py-2 px-4 text-center">41-42</td>
                                                <td className="py-2 px-4 text-center">26</td>
                                                <td className="py-2 px-4 text-center">10 1/4</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">8.5</td>
                                                <td className="py-2 px-4 text-center">7.5</td>
                                                <td className="py-2 px-4 text-center">42</td>
                                                <td className="py-2 px-4 text-center">26.7</td>
                                                <td className="py-2 px-4 text-center">10 1/2</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">9</td>
                                                <td className="py-2 px-4 text-center">8</td>
                                                <td className="py-2 px-4 text-center">43</td>
                                                <td className="py-2 px-4 text-center">27.3</td>
                                                <td className="py-2 px-4 text-center">10 3/4</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">9.5</td>
                                                <td className="py-2 px-4 text-center">8.5</td>
                                                <td className="py-2 px-4 text-center">43-44</td>
                                                <td className="py-2 px-4 text-center">27.7</td>
                                                <td className="py-2 px-4 text-center">10 7/8</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">10</td>
                                                <td className="py-2 px-4 text-center">9</td>
                                                <td className="py-2 px-4 text-center">44</td>
                                                <td className="py-2 px-4 text-center">27.9</td>
                                                <td className="py-2 px-4 text-center">11</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="py-2 px-4 text-center">10.5</td>
                                                <td className="py-2 px-4 text-center">9.5</td>
                                                <td className="py-2 px-4 text-center">44-45</td>
                                                <td className="py-2 px-4 text-center">28.6</td>
                                                <td className="py-2 px-4 text-center">11 1/4</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 text-center">11</td>
                                                <td className="py-2 px-4 text-center">10</td>
                                                <td className="py-2 px-4 text-center">45</td>
                                                <td className="py-2 px-4 text-center">29.2</td>
                                                <td className="py-2 px-4 text-center">11 1/2</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            {/* Foot measurement section */}
                            <div className="md:mt-8 mt-6 progress">
                                <div className="flex md:items-center gap-10 justify-between max-md:flex-col gap-y-5 max-md:pr-3">
                                    <div className="flex items-center flex-shrink-0 gap-8">
                                        <span className='flex-shrink-0 md:w-14'>Foot Length</span>
                                        <div className="flex items-center justify-center w-20 gap-1 py-2 border border-line rounded-lg flex-shrink-0">
                                            <span>{footLength}</span>
                                            <span className='caption1 text-secondary'>Cm</span>
                                        </div>
                                    </div>
                                    <Slider
                                        range
                                        defaultValue={[23, 29]}
                                        min={23}
                                        max={30}
                                        onChange={handleFootLengthChange}
                                    />
                                </div>
                            </div>
                            
                            {/* Size recommendation */}
                            <div className="heading6 mt-8">Suggested size for you:</div>
                            <div className="flex items-center justify-center mt-4 mb-8">
                                <div className="px-6 py-3 bg-[#59392A] text-white rounded-lg font-semibold text-center">
                                    {activeSize}
                                </div>
                            </div>

                            {/* Attribution */}
                            <div className="text-right text-sm italic text-gray-600 mt-4">Funkari Customs©</div>
                        </div>
                    ) : (
                        // Original apparel size guide
                        <>
                            <div className="md:mt-8 mt-6 progress">
                                <div className="flex imd:items-center gap-10 justify-between max-md:flex-col gap-y-5 max-md:pr-3">
                                    <div className="flex items-center flex-shrink-0 gap-8">
                                        <span className='flex-shrink-0 md:w-14'>Height</span>
                                        <div className="flex items-center justify-center w-20 gap-1 py-2 border border-line rounded-lg flex-shrink-0">
                                            <span>{heightRange.max}</span>
                                            <span className='caption1 text-secondary'>Cm</span>
                                        </div>
                                    </div>
                                    <Slider
                                        range
                                        defaultValue={[100, 200]}
                                        min={100}
                                        max={200}
                                        onChange={handleHeightChange}
                                    />
                                </div>
                                <div className="flex md:items-center gap-10 justify-between max-md:flex-col gap-y-5 max-md:pr-3 mt-5">
                                    <div className="flex items-center gap-8 flex-shrink-0">
                                        <span className='flex-shrink-0 md:w-14'>Weight</span>
                                        <div className="flex items-center justify-center w-20 gap-1 py-2 border border-line rounded-lg flex-shrink-0">
                                            <span>{weightRange.max}</span>
                                            <span className='caption1 text-secondary'>Kg</span>
                                        </div>
                                    </div>
                                    <Slider
                                        range
                                        defaultValue={[30, 90]}
                                        min={30}
                                        max={90}
                                        onChange={handleWeightChange}
                                    />
                                </div>
                            </div>
                            <div className="heading6 mt-8">suggests for you:</div>
                            <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                                {data?.sizes.map((item, index) => (
                                    <div
                                        className={`size-item w-12 h-12 flex items-center justify-center text-button rounded-full bg-white border border-line ${activeSize === item ? 'active' : ''}`}
                                        key={index}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <table className="w-full mt-8 border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-300">
                                        <th className="py-3 px-4 text-left font-semibold">Size</th>
                                        <th className="py-3 px-4 text-left font-semibold">Bust</th>
                                        <th className="py-3 px-4 text-left font-semibold">Waist</th>
                                        <th className="py-3 px-4 text-left font-semibold">Low Hip</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-4">XS</td>
                                        <td className="py-2 px-4">32</td>
                                        <td className="py-2 px-4">24-25</td>
                                        <td className="py-2 px-4">33-34</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-4">S</td>
                                        <td className="py-2 px-4">34-35</td>
                                        <td className="py-2 px-4">26-27</td>
                                        <td className="py-2 px-4">35-36</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-4">M</td>
                                        <td className="py-2 px-4">36-37</td>
                                        <td className="py-2 px-4">28-29</td>
                                        <td className="py-2 px-4">38-40</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-4">L</td>
                                        <td className="py-2 px-4">38-39</td>
                                        <td className="py-2 px-4">30-31</td>
                                        <td className="py-2 px-4">42-44</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-4">XL</td>
                                        <td className="py-2 px-4">40-41</td>
                                        <td className="py-2 px-4">32-33</td>
                                        <td className="py-2 px-4">45-47</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4">2XL</td>
                                        <td className="py-2 px-4">42-43</td>
                                        <td className="py-2 px-4">34-35</td>
                                        <td className="py-2 px-4">48-50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default ModalSizeguide