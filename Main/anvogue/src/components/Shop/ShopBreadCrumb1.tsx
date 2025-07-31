"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from "@/type/ProductType";
import Product from "../Product/Product";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface Props {
  data: Array<ProductType>;
  productPerPage: number;
  dataType: string | null | undefined;
  gender: string | null;
  category: string | null;
}

const ShopBreadCrumb1: React.FC<Props> = ({
  data,
  productPerPage,
  dataType,
  gender,
  category,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize state
  const [showOnlySale, setShowOnlySale] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [type, setType] = useState<string | null | undefined>(dataType);
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 50,
    max: 2000,
  });
  const [currentPage, setCurrentPage] = useState(1); // Change to 1-based
  const [isInitialized, setIsInitialized] = useState(false);

  const productsPerPage = productPerPage;

  // Initialize from URL on mount
  useEffect(() => {
    if (!isInitialized) {
      const urlParams = new URLSearchParams(window.location.search);
      
      setShowOnlySale(urlParams.get('sale') === 'true');
      setSortOption(urlParams.get('sort') || "");
      setType(urlParams.get('type') || dataType);
      setSize(urlParams.get('size') || null);
      setColor(urlParams.get('color') || null);
      setBrand(urlParams.get('brand') || null);
      setPriceRange({
        min: parseInt(urlParams.get('minPrice') || '50'),
        max: parseInt(urlParams.get('maxPrice') || '2000'),
      });
      setCurrentPage(parseInt(urlParams.get('page') || '1'));
      setIsInitialized(true);
    }
  }, [isInitialized, dataType]);

  // Update URL when state changes (but not on initial load)
  useEffect(() => {
    if (!isInitialized) return;

    const params = new URLSearchParams();
    
    if (showOnlySale) params.set('sale', 'true');
    if (sortOption) params.set('sort', sortOption);
    if (type) params.set('type', type);
    if (size) params.set('size', size);
    if (color) params.set('color', color);
    if (brand) params.set('brand', brand);
    if (priceRange.min !== 50) params.set('minPrice', priceRange.min.toString());
    if (priceRange.max !== 2000) params.set('maxPrice', priceRange.max.toString());
    if (currentPage > 1) params.set('page', currentPage.toString());
    
    const newUrl = `${pathname}${params.toString() ? '?' + params.toString() : ''}`;
    router.replace(newUrl, { scroll: false });
  }, [isInitialized, showOnlySale, sortOption, type, size, color, brand, priceRange, currentPage, pathname, router]);

  const handleShowOnlySale = () => {
    setShowOnlySale(prev => !prev);
    setCurrentPage(1);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const handleType = (selectedType: string | null) => {
    setType(prevType => prevType === selectedType ? null : selectedType);
    setCurrentPage(1);
  };

  const handleSize = (selectedSize: string) => {
    setSize(prevSize => prevSize === selectedSize ? null : selectedSize);
    setCurrentPage(1);
  };

  const handlePriceChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setPriceRange({ min: values[0], max: values[1] });
      setCurrentPage(1);
    }
  };

  const handleColor = (selectedColor: string) => {
    setColor(prevColor => prevColor === selectedColor ? null : selectedColor);
    setCurrentPage(1);
  };

  const handleBrand = (selectedBrand: string) => {
    setBrand(prevBrand => prevBrand === selectedBrand ? null : selectedBrand);
    setCurrentPage(1);
  };

  // Filter products
  let filteredData = data.filter((product) => {
    let isShowOnlySaleMatched = true;
    if (showOnlySale) {
      isShowOnlySaleMatched = product.sale;
    }

    let isDatagenderMatched = true;
    if (gender) {
      isDatagenderMatched = product.gender === gender;
    }

    let isDataCategoryMatched = true;
    if (category) {
      isDataCategoryMatched = product.category === category;
    }

    let isDataTypeMatched = true;
    if (dataType) {
      isDataTypeMatched = product.type === dataType;
    }

    let isTypeMatched = true;
    if (type) {
      isTypeMatched = product.type === type;
    }

    let isSizeMatched = true;
    if (size) {
      isSizeMatched = product.sizes.includes(size);
    }

    let isPriceRangeMatched = true;
    if (priceRange.min !== 50 || priceRange.max !== 2000) {
      isPriceRangeMatched =
        product.price >= priceRange.min && product.price <= priceRange.max;
    }

    let isColorMatched = true;
    if (color) {
      isColorMatched = product.variation.some((item) => item.color === color);
    }

    let isBrandMatched = true;
    if (brand) {
      isBrandMatched = product.brand === brand;
    }

    return (
      isShowOnlySaleMatched &&
      isDatagenderMatched &&
      isDataCategoryMatched &&
      isDataTypeMatched &&
      isTypeMatched &&
      isSizeMatched &&
      isColorMatched &&
      isBrandMatched &&
      isPriceRangeMatched
    );
  });

  // Sort products
  let sortedData = [...filteredData];

  if (sortOption === "soldQuantityHighToLow") {
    filteredData = sortedData.sort((a, b) => b.sold - a.sold);
  }

  if (sortOption === "discountHighToLow") {
    filteredData = sortedData.sort(
      (a, b) =>
        Math.floor(2000 - (b.price / b.originPrice) * 2000) -
        Math.floor(2000 - (a.price / a.originPrice) * 2000)
    );
  }

  if (sortOption === "priceHighToLow") {
    filteredData = sortedData.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "priceLowToHigh") {
    filteredData = sortedData.sort((a, b) => a.price - b.price);
  }

  const totalProducts = filteredData.length;
  const pageCount = Math.ceil(totalProducts / productsPerPage);
  
  // Ensure current page is valid
  const validCurrentPage = Math.min(Math.max(1, currentPage), Math.max(1, pageCount));
  const offset = (validCurrentPage - 1) * productsPerPage;

  // Get current page products
  const currentProducts = totalProducts > 0 
    ? filteredData.slice(offset, offset + productsPerPage)
    : [];

  const handleClearAll = () => {
    setShowOnlySale(false);
    setSortOption("");
    setType(null);
    setSize(null);
    setColor(null);
    setBrand(null);
    setPriceRange({ min: 50, max: 2000 });
    setCurrentPage(1);
  };

  // Simple pagination component
  const renderPagination = () => {
    if (pageCount <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, validCurrentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    if (validCurrentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => setCurrentPage(validCurrentPage - 1)}
          className="px-3 py-2 mx-1 border border-gray-300 rounded hover:bg-gray-100"
        >
          &lt;
        </button>
      );
    }

    // First page
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => setCurrentPage(1)}
          className="px-3 py-2 mx-1 border border-gray-300 rounded hover:bg-gray-100"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="dots1" className="px-2">...</span>);
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-2 mx-1 border rounded ${
            i === validCurrentPage
              ? 'bg-black text-white border-black'
              : 'border-gray-300 hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }

    // Last page
    if (endPage < pageCount) {
      if (endPage < pageCount - 1) {
        pages.push(<span key="dots2" className="px-2">...</span>);
      }
      pages.push(
        <button
          key={pageCount}
          onClick={() => setCurrentPage(pageCount)}
          className="px-3 py-2 mx-1 border border-gray-300 rounded hover:bg-gray-100"
        >
          {pageCount}
        </button>
      );
    }

    // Next button
    if (validCurrentPage < pageCount) {
      pages.push(
        <button
          key="next"
          onClick={() => setCurrentPage(validCurrentPage + 1)}
          className="px-3 py-2 mx-1 border border-gray-300 rounded hover:bg-gray-100"
        >
          &gt;
        </button>
      );
    }

    return (
      <div className="flex items-center justify-center mt-8">
        {pages}
      </div>
    );
  };

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="breadcrumb-block style-img">
        <div className="breadcrumb-main bg-linear overflow-hidden">
          <div className="container lg:pt-[134px] pt-24 pb-10 relative">
            <div className="main-content w-full h-full flex flex-col items-center justify-center relative z-[1]">
              <div className="text-content">
                <div className="heading2 text-center">
                  {type || dataType || "Shop"}
                </div>
                <div className="link flex items-center justify-center gap-1 caption1 mt-3">
                  <Link href={"/homepages/fashion8"}>Homepage</Link>
                  <Icon.CaretRight size={14} className="text-secondary2" />
                  <Link href="/shop" className="capitalize">Shop</Link>
                  {(type || dataType) && (
                    <>
                      <Icon.CaretRight size={14} className="text-secondary2" />
                      <div className="text-secondary2 capitalize">
                        {type || dataType}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
        <div className="container">
          <div className="flex max-md:flex-wrap max-md:flex-col-reverse gap-y-8">
            <div className="sidebar lg:w-1/4 md:w-1/3 w-full md:pr-12">
              <div className="filter-type pb-8 border-b border-line">
                <div className="heading6">Products Type</div>
                <div className="list-type mt-4">
                  {["Nike Air Force Collection"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "fashion"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["nike aj collection"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "fashion"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["custom vases"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "art"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["custom jewelry"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "jewelry"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["custom painted khussa"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "fashion"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["denim jackets", "leather jackets", "hoodies"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "fashion"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["wallets-clutches"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "fashion"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["hightops"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "fashion"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["lowtops"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "fashion"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["slip-ons"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "fashion"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["custom portrait"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "art"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-type mt-4">
                  {["custom painted bags"].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        type === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category === "fashion"
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="filter-price pb-8 border-b border-line mt-8">
                <div className="heading6">Price Range</div>
                <Slider
                  range
                  value={[priceRange.min, priceRange.max]}
                  min={50}
                  max={2000}
                  onChange={handlePriceChange}
                  className="mt-5"
                />
                <div className="price-block flex items-center justify-between flex-wrap mt-4">
                  <div className="min flex items-center gap-1">
                    <div>Min price:</div>
                    <div className="price-min">
                      $<span>{priceRange.min}</span>
                    </div>
                  </div>
                  <div className="min flex items-center gap-1">
                    <div>Max price:</div>
                    <div className="price-max">
                      $<span>{priceRange.max}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-color pb-8 border-b border-line mt-8">
                <div className="heading6">colors</div>
                <div className="list-color flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                  <div
                    className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line cursor-pointer ${
                      color === "pink" ? "active" : ""
                    }`}
                    onClick={() => handleColor("pink")}
                  >
                    <div className="color bg-[#F4C5BF] w-5 h-5 rounded-full"></div>
                    <div className="caption1 capitalize">pink</div>
                  </div>
                  <div
                    className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line cursor-pointer ${
                      color === "red" ? "active" : ""
                    }`}
                    onClick={() => handleColor("red")}
                  >
                    <div className="color bg-red w-5 h-5 rounded-full"></div>
                    <div className="caption1 capitalize">red</div>
                  </div>
                  <div
                    className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line cursor-pointer ${
                      color === "green" ? "active" : ""
                    }`}
                    onClick={() => handleColor("green")}
                  >
                    <div className="color bg-green w-5 h-5 rounded-full"></div>
                    <div className="caption1 capitalize">green</div>
                  </div>
                  <div
                    className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line cursor-pointer ${
                      color === "yellow" ? "active" : ""
                    }`}
                    onClick={() => handleColor("yellow")}
                  >
                    <div className="color bg-yellow w-5 h-5 rounded-full"></div>
                    <div className="caption1 capitalize">yellow</div>
                  </div>
                  <div
                    className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line cursor-pointer ${
                      color === "purple" ? "active" : ""
                    }`}
                    onClick={() => handleColor("purple")}
                  >
                    <div className="color bg-purple w-5 h-5 rounded-full"></div>
                    <div className="caption1 capitalize">purple</div>
                  </div>
                  <div
                    className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line cursor-pointer ${
                      color === "black" ? "active" : ""
                    }`}
                    onClick={() => handleColor("black")}
                  >
                    <div className="color bg-black w-5 h-5 rounded-full"></div>
                    <div className="caption1 capitalize">black</div>
                  </div>
                  <div
                    className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line cursor-pointer ${
                      color === "white" ? "active" : ""
                    }`}
                    onClick={() => handleColor("white")}
                  >
                    <div className="color bg-[#F6EFDD] w-5 h-5 rounded-full"></div>
                    <div className="caption1 capitalize">white</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-product-block lg:w-3/4 md:w-2/3 w-full md:pl-3">
              <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                <div className="left flex has-line items-center flex-wrap gap-5">
                  <div className="choose-layout flex items-center gap-2">
                    <div className="item three-col w-8 h-8 border border-line rounded flex items-center justify-center cursor-pointer active">
                      <div className="flex items-center gap-0.5">
                        <span className="w-[3px] h-4 bg-secondary2 rounded-sm"></span>
                        <span className="w-[3px] h-4 bg-secondary2 rounded-sm"></span>
                        <span className="w-[3px] h-4 bg-secondary2 rounded-sm"></span>
                      </div>
                    </div>
                    <Link
                      href={"/shop/sidebar-list"}
                      className="item row w-8 h-8 border border-line rounded flex items-center justify-center cursor-pointer"
                    >
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="w-4 h-[3px] bg-secondary2 rounded-sm"></span>
                        <span className="w-4 h-[3px] bg-secondary2 rounded-sm"></span>
                        <span className="w-4 h-[3px] bg-secondary2 rounded-sm"></span>
                      </div>
                    </Link>
                  </div>
                  <div className="check-sale flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="filterSale"
                      id="filter-sale"
                      className="border-line"
                      checked={showOnlySale}
                      onChange={handleShowOnlySale}
                    />
                    <label
                      htmlFor="filter-sale"
                      className="cation1 cursor-pointer"
                    >
                      Show only products on sale
                    </label>
                  </div>
                </div>
                <div className="right flex items-center gap-3">
                  <div className="select-block relative">
                    <select
                      id="select-filter"
                      name="select-filter"
                      className="caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line"
                      value={sortOption || "Sorting"}
                      onChange={(e) => handleSortChange(e.target.value)}
                    >
                      <option value="Sorting" disabled>
                        Sorting
                      </option>
                      <option value="soldQuantityHighToLow">
                        Best Selling
                      </option>
                      <option value="discountHighToLow">Best Discount</option>
                      <option value="priceHighToLow">Price High To Low</option>
                      <option value="priceLowToHigh">Price Low To High</option>
                    </select>
                    <Icon.CaretDown
                      size={12}
                      className="absolute top-1/2 -translate-y-1/2 md:right-4 right-2"
                    />
                  </div>
                </div>
              </div>

              <div className="list-filtered flex items-center gap-3 mt-4">
                <div className="total-product">
                  {totalProducts}
                  <span className="text-secondary pl-1">Products Found</span>
                </div>
                {(type || size || color || brand) && (
                  <>
                    <div className="list flex items-center gap-3">
                      <div className="w-px h-4 bg-line"></div>
                      {type && (
                        <div
                          className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize cursor-pointer"
                          onClick={() => setType(null)}
                        >
                          <Icon.X className="cursor-pointer" />
                          <span>{type}</span>
                        </div>
                      )}
                      {size && (
                        <div
                          className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize cursor-pointer"
                          onClick={() => setSize(null)}
                        >
                          <Icon.X className="cursor-pointer" />
                          <span>{size}</span>
                        </div>
                      )}
                      {color && (
                        <div
                          className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize cursor-pointer"
                          onClick={() => setColor(null)}
                        >
                          <Icon.X className="cursor-pointer" />
                          <span>{color}</span>
                        </div>
                      )}
                      {brand && (
                        <div
                          className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize cursor-pointer"
                          onClick={() => setBrand(null)}
                        >
                          <Icon.X className="cursor-pointer" />
                          <span>{brand}</span>
                        </div>
                      )}
                    </div>
                    <div
                      className="clear-btn flex items-center px-2 py-1 gap-1 rounded-full border border-red cursor-pointer"
                      onClick={handleClearAll}
                    >
                      <Icon.X
                        color="rgb(219, 68, 68)"
                        className="cursor-pointer"
                      />
                      <span className="text-button-uppercase text-red">
                        Clear All
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="list-product hide-product-sold grid lg:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-7">
                {currentProducts.length > 0 ? (
                  currentProducts.map((item) => (
                    <Product key={item.id} data={item} type="grid" style={""} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-lg text-gray-500">No products found matching your criteria.</p>
                  </div>
                )}
              </div>

              {renderPagination()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBreadCrumb1;
