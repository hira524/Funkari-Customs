"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/type/ProductType";
import Product from "../Product";
import Rate from "@/components/Other/Rate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from "swiper/core";
import { useCart } from "@/context/CartContext";
import { useModalCartContext } from "@/context/ModalCartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useModalWishlistContext } from "@/context/ModalWishlistContext";
import { useCompare } from "@/context/CompareContext";
import { useModalCompareContext } from "@/context/ModalCompareContext";
import ModalSizeguide from "@/components/Modal/ModalSizeguide";
import { useRouter } from "next/navigation";
import ModalSizeguideCanvas from "@/components/Modal/ModalSizeguideCanvas";

SwiperCore.use([Navigation, Thumbs]);

interface Props {
  data: Array<ProductType>;
  productId: string | number | null;
}

const Default: React.FC<Props> = ({ data, productId }) => {
  const swiperRef: any = useRef();
  const router = useRouter();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [openPopupImg, setOpenPopupImg] = useState(false);
  const [openSizeGuide, setOpenSizeGuide] = useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeColor, setActiveColor] = useState<string>("");
  const [activeSize, setActiveSize] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string | undefined>("description");
  const { addToCart, updateCart, cartState } = useCart();
  const { openModalCart } = useModalCartContext();
  const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist();
  const { openModalWishlist } = useModalWishlistContext();
  const { addToCompare, removeFromCompare, compareState } = useCompare();
  const { openModalCompare } = useModalCompareContext();
  let productMain = data.find(
    (product) => product.id === productId
  ) as ProductType;
  if (productMain === undefined) {
    productMain = data[0];
  }

  const percentSale = Math.floor(
    100 - (productMain?.price / productMain?.originPrice) * 100
  );

  const handleOpenSizeGuide = () => {
    setOpenSizeGuide(true);
  };

  const handleCloseSizeGuide = () => {
    setOpenSizeGuide(false);
  };

  const handleSwiper = (swiper: SwiperCore) => {
    // Do something with the thumbsSwiper instance
    setThumbsSwiper(swiper);
  };

  const handleActiveColor = (item: string) => {
    setActiveColor(item);

    // // Find variation with selected color
    // const foundColor = productMain.variation.find((variation) => variation.color === item);
    // // If found, slide next to img
    // if (foundColor) {
    //     const index = productMain.images.indexOf(foundColor.image);

    //     if (index !== -1) {
    //         swiperRef.current?.slideTo(index);
    //     }
    // }
  };

  const handleActiveSize = (item: string) => {
    setActiveSize(item);
  };

  const handleIncreaseQuantity = () => {
    productMain.quantityPurchase += 1;
    updateCart(
      productMain.id,
      productMain.quantityPurchase + 1,
      activeSize,
      activeColor
    );
  };

  const handleDecreaseQuantity = () => {
    if (productMain.quantityPurchase > 1) {
      productMain.quantityPurchase -= 1;
      updateCart(
        productMain.id,
        productMain.quantityPurchase - 1,
        activeSize,
        activeColor
      );
    }
  };

  const handleAddToCart = () => {
    if (!cartState.cartArray.find((item) => item.id === productMain.id)) {
      addToCart({ ...productMain });
      updateCart(
        productMain.id,
        productMain.quantityPurchase,
        activeSize,
        activeColor
      );
    } else {
      updateCart(
        productMain.id,
        productMain.quantityPurchase,
        activeSize,
        activeColor
      );
    }
    openModalCart();
  };

  const handleAddToWishlist = () => {
    // if product existed in wishlit, remove from wishlist and set state to false
    if (
      wishlistState.wishlistArray.some((item) => item.id === productMain.id)
    ) {
      removeFromWishlist(productMain.id);
    } else {
      // else, add to wishlist and set state to true
      addToWishlist(productMain);
    }
    openModalWishlist();
  };

  const handleAddToCompare = () => {
    // if product existed in wishlit, remove from wishlist and set state to false
    if (compareState.compareArray.length < 3) {
      if (
        compareState.compareArray.some((item) => item.id === productMain.id)
      ) {
        removeFromCompare(productMain.id);
      } else {
        // else, add to wishlist and set state to true
        addToCompare(productMain);
      }
    } else {
      alert("Compare up to 3 products");
    }

    openModalCompare();
  };

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };
  const handleCustomizeClick = () => {
    router.push(`/customize?productId=${productMain.id}`);
  };

  return (
    <>
      <div className="product-detail default">
        <div className="featured-product underwear md:py-20 py-10">
          <div className="container flex justify-between gap-y-6 flex-wrap">
            <div className="list-img md:w-1/2 md:pr-[45px] w-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
                className="mySwiper2 rounded-2xl overflow-hidden"
              >
                {productMain.images.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => {
                      swiperRef.current?.slideTo(index);
                      setOpenPopupImg(true);
                    }}
                  >
                    <Image
                      src={item}
                      width={1000}
                      height={1000}
                      alt="prd-img"
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={(swiper) => {
                  handleSwiper(swiper);
                }}
                spaceBetween={0}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper"
              >
                {productMain.images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={item}
                      width={1000}
                      height={1000}
                      alt="prd-img"
                      className="w-full aspect-[3/4] object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={`popup-img ${openPopupImg ? "open" : ""}`}>
                <span
                  className="close-popup-btn absolute top-4 right-4 z-[2] cursor-pointer"
                  onClick={() => {
                    setOpenPopupImg(false);
                  }}
                >
                  <Icon.X className="text-3xl text-white" />
                </span>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  modules={[Navigation, Thumbs]}
                  navigation={true}
                  loop={true}
                  className="popupSwiper"
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {productMain.images.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      onClick={() => {
                        setOpenPopupImg(false);
                      }}
                    >
                      <Image
                        src={item}
                        width={1000}
                        height={1000}
                        alt="prd-img"
                        className="w-full aspect-[3/4] object-cover rounded-xl"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="product-infor md:w-1/2 w-full lg:pl-[15px] md:pl-2">
              <div className="flex justify-between">
                <div>
                  <div className="caption2 text-secondary font-semibold uppercase">
                    {productMain.type}
                  </div>
                  <div className="heading4 mt-1">{productMain.name}</div>
                </div>
                <div
                  className={`add-wishlist-btn w-12 h-12 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white ${
                    wishlistState.wishlistArray.some(
                      (item) => item.id === productMain.id
                    )
                      ? "active"
                      : ""
                  }`}
                  onClick={handleAddToWishlist}
                >
                  {wishlistState.wishlistArray.some(
                    (item) => item.id === productMain.id
                  ) ? (
                    <>
                      <Icon.Heart
                        size={24}
                        weight="fill"
                        className="text-white"
                      />
                    </>
                  ) : (
                    <>
                      <Icon.Heart size={24} />
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center mt-3">
                <Rate currentRate={productMain.rate} size={14} />
                <span className="caption1 text-secondary">(1.234 reviews)</span>
              </div>
              <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                <div className="product-price heading5">
                  ${productMain.price}
                </div>
                <div className="w-px h-4 bg-line"></div>
                <div className="product-origin-price font-normal text-secondary2">
                  <del>${productMain.originPrice}</del>
                </div>
                {productMain.originPrice && (
                  <div className="product-sale caption2 font-semibold bg-green px-3 py-0.5 inline-block rounded-full">
                    -{percentSale}%
                  </div>
                )}
                <div className="desc text-secondary mt-3">
                  {productMain.description}
                </div>
              </div>
              <div className="list-action mt-6">
                <div className="choose-color">
                  <div className="text-title">
                    Colors:{" "}
                    <span className="text-title color">{activeColor}</span>
                  </div>
                  <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                    {productMain.variation.map((item, index) => (
                      <div
                        className={`color-item w-12 h-12 rounded-xl duration-300 relative ${
                          activeColor === item.color ? "active" : ""
                        }`}
                        key={index}
                        datatype={item.image}
                        onClick={() => {
                          handleActiveColor(item.color);
                        }}
                      >
                        <Image
                          src={item.colorImage}
                          width={100}
                          height={100}
                          alt="color"
                          className="rounded-xl"
                        />
                        <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                          {item.color}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="choose-size mt-5">
                  <div className="heading flex items-center justify-between">
                    <div className="text-title">
                      Size:{" "}
                      <span className="text-title size">{activeSize}</span>
                    </div>
                    {productMain.type === "shoes" && (
                      <>
                        <div
                          className="caption1 size-guide text-red underline cursor-pointer"
                          onClick={handleOpenSizeGuide}
                        >
                          Size Guide
                        </div>
                        <ModalSizeguide
                          data={productMain}
                          isOpen={openSizeGuide}
                          onClose={handleCloseSizeGuide}
                        />
                      </>
                    )}
                    {["hightops", "lowtops", "slip-ons"].includes(productMain.type) && (
                      <>
                        <div
                          className="caption1 size-guide text-red underline cursor-pointer"
                          onClick={handleOpenSizeGuide}
                        >
                          Size Guide
                        </div>
                        <ModalSizeguideCanvas
                          data={productMain}
                          isOpen={openSizeGuide}
                          onClose={handleCloseSizeGuide}
                        />
                      </>
                    )}
                  </div>
                  <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                    {productMain.sizes.map((item, index) => (
                      <div
                        className={`size-item ${
                          item === "freesize" ? "px-3 py-2" : "w-12 h-12"
                        } flex items-center justify-center text-button rounded-full bg-white border border-line ${
                          activeSize === item ? "active" : ""
                        }`}
                        key={index}
                        onClick={() => handleActiveSize(item)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-title mt-5">Quantity:</div>
                <div className="choose-quantity flex items-center lg:justify-between gap-5 gap-y-3 mt-3">
                  <div className="quantity-block md:p-3 max-md:py-1.5 max-md:px-3 flex items-center justify-between rounded-lg border border-line sm:w-[180px] w-[120px] flex-shrink-0">
                    <Icon.Minus
                      size={20}
                      onClick={handleDecreaseQuantity}
                      className={`${
                        productMain.quantityPurchase === 1 ? "disabled" : ""
                      } cursor-pointer`}
                    />
                    <div className="body1 font-semibold">
                      {productMain.quantityPurchase}
                    </div>
                    <Icon.Plus
                      size={20}
                      onClick={handleIncreaseQuantity}
                      className="cursor-pointer"
                    />
                  </div>
                  <div
                    onClick={handleAddToCart}
                    className="button-main w-full text-center bg-white text-black border border-black"
                  >
                    Add To Cart
                  </div>
                </div>
                <div className="button-block mt-5 flex flex-col gap-3">
                  <div
                    className="button-main w-full text-center bg-black text-white cursor-pointer hover:bg-blue-700 transition"
                    onClick={() => router.push("/checkout")}
                  >
                    Buy It Now
                  </div>
                  {/* Customization Button */}
                  <button
                    className="button-main w-full text-center bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition mt-2"
                    onClick={handleCustomizeClick}
                  >
                    Customize Product
                  </button>
                </div>
                <div className="flex items-center lg:gap-20 gap-8 mt-5 pb-6 border-b border-line">
                  <div
                    className="compare flex items-center gap-3 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCompare();
                    }}
                  >
                    <div className="compare-btn md:w-12 md:h-12 w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white">
                      <Icon.ArrowsCounterClockwise className="heading6" />
                    </div>
                    <span>Compare</span>
                  </div>
                  <div className="share flex items-center gap-3 cursor-pointer">
                    <div className="share-btn md:w-12 md:h-12 w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white">
                      <Icon.ShareNetwork weight="fill" className="heading6" />
                    </div>
                    <span>Share Products</span>
                  </div>
                </div>
                <div className="more-infor mt-6">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Icon.ArrowClockwise className="body1" />
                      <div className="text-title">Delivery & Return</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon.Question className="body1" />
                      <div className="text-title">Ask A Question</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <Icon.Timer className="body1" />
                    <div className="text-title">Estimated Delivery:</div>
                    <div className="text-secondary">
                      14 January - 18 January
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <Icon.Eye className="body1" />
                    <div className="text-title">38</div>
                    <div className="text-secondary">
                      people viewing this product right now!
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <div className="text-title">SKU:</div>
                    <div className="text-secondary">53453412</div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <div className="text-title">Categories:</div>
                    <div className="text-secondary">
                      {productMain.category}, {productMain.gender}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <div className="text-title">Tag:</div>
                    <div className="text-secondary">{productMain.type}</div>
                  </div>
                </div>
                <div className="list-payment mt-7">
                  <div className="main-content lg:pt-8 pt-6 lg:pb-6 pb-4 sm:px-4 px-3 border border-line rounded-xl relative max-md:w-2/3 max-sm:w-full">
                    <div className="heading6 px-5 bg-white absolute -top-[14px] left-1/2 -translate-x-1/2 whitespace-nowrap">
                      Guranteed safe checkout
                    </div>
                    <div className="list grid grid-cols-6">
                      <div className="item flex items-center justify-center lg:px-3 px-1">
                        <Image
                          src={"/images/payment/Frame-0.png"}
                          width={500}
                          height={450}
                          alt="payment"
                          className="w-full"
                        />
                      </div>
                      <div className="item flex items-center justify-center lg:px-3 px-1">
                        <Image
                          src={"/images/payment/Frame-1.png"}
                          width={500}
                          height={450}
                          alt="payment"
                          className="w-full"
                        />
                      </div>
                      <div className="item flex items-center justify-center lg:px-3 px-1">
                        <Image
                          src={"/images/payment/Frame-2.png"}
                          width={500}
                          height={450}
                          alt="payment"
                          className="w-full"
                        />
                      </div>
                      <div className="item flex items-center justify-center lg:px-3 px-1">
                        <Image
                          src={"/images/payment/Frame-3.png"}
                          width={500}
                          height={450}
                          alt="payment"
                          className="w-full"
                        />
                      </div>
                      <div className="item flex items-center justify-center lg:px-3 px-1">
                        <Image
                          src={"/images/payment/Frame-4.png"}
                          width={500}
                          height={450}
                          alt="payment"
                          className="w-full"
                        />
                      </div>
                      <div className="item flex items-center justify-center lg:px-3 px-1">
                        <Image
                          src={"/images/payment/Frame-5.png"}
                          width={500}
                          height={450}
                          alt="payment"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="get-it mt-6 pb-8 border-b border-line">
                <div className="heading5">Get it today</div>
                <div className="item flex items-center gap-3 mt-4">
                  <div className="icon-delivery-truck text-4xl"></div>
                  <div>
                    <div className="text-title">Free shipping</div>
                    <div className="caption1 text-secondary mt-1">
                      free shipping on orders over $300.
                    </div>
                  </div>
                </div>
                <div className="item flex items-center gap-3 mt-4">
                  <div className="icon-phone-call text-4xl"></div>
                  <div>
                    <div className="text-title">Support everyday</div>
                    <div className="caption1 text-secondary mt-1">
                      Support from 8:30 AM to 10:00 PM everyday
                    </div>
                  </div>
                </div>
                <div className="item flex items-center gap-3 mt-4">
                  <div className="icon-return text-4xl"></div>
                  <div>
                    <div className="text-title">7 Day Returns</div>
                    <div className="caption1 text-secondary mt-1">
                      Not impressed? Get a refund. You have 7 days to break
                      our hearts.
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-product hide-product-sold  menu-main mt-6">
                <div className="heading5 pb-4">
                  You{String.raw`'ll`} love this too
                </div>
                <Swiper
                  spaceBetween={12}
                  slidesPerView={2}
                  scrollbar={{
                    hide: false,
                  }}
                  modules={[Navigation, Scrollbar]}
                  breakpoints={{
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 12,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1290: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  className="pb-4"
                >
                  {data
                    .filter((item) => item.action !== "quick shop")
                    .slice(0, 5)
                    .map((product) => (
                      <SwiperSlide key={product.id}>
                        <Product data={product} type="grid" style="style-1" />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="desc-tab md:pb-20 pb-10">
          <div className="container">
            <div className="flex items-center justify-center w-full">
              <div className="menu-tab flex items-center md:gap-[60px] gap-8">
                <div
                  className={`tab-item heading5 has-line-before text-secondary2 hover:text-black duration-300 ${
                    activeTab === "description" ? "active" : ""
                  }`}
                  onClick={() => handleActiveTab("description")}
                >
                  Description
                </div>
                <div
                  className={`tab-item heading5 has-line-before text-secondary2 hover:text-black duration-300 ${
                    activeTab === "specifications" ? "active" : ""
                  }`}
                  onClick={() => handleActiveTab("specifications")}
                >
                  Specifications
                </div>
              </div>
            </div>
            <div className="desc-block mt-8">
              <div
                className={`desc-item description ${
                  activeTab === "description" ? "open" : ""
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 gap-y-5">
                  <div className="left">
                    <div className="heading6">Description</div>
                    <div className="text-secondary mt-2">
                      {productMain.description}
                    </div>
                  </div>
                  <div className="right">
                    <div className="heading6">Care Instructions</div>
                    <div className="list-feature">
                      <div className="item flex gap-1 text-secondary mt-1">
                        <div>
                          {typeof productMain.careInstructions === "string"
                            ? productMain.careInstructions
                                .split("\n")
                                .map((line: string, idx: number) => (
                                  <div key={idx}>{line}</div>
                                ))
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-[30px] md:mt-10 mt-6">
                  <div className="item">
                    <div className="icon-delivery-truck text-4xl"></div>
                    <div className="heading6 mt-4">Fast Shipping</div>
                    <div className="text-secondary mt-2">
                      Get your custom sneakers delivered quickly and securely to
                      your doorstep.
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon-cotton text-4xl"></div>
                    <div className="heading6 mt-4">Premium Materials</div>
                    <div className="text-secondary mt-2">
                      Crafted with high-quality leather and durable materials
                      for lasting comfort.
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon-guarantee text-4xl"></div>
                    <div className="heading6 mt-4">Hand-Painted Art</div>
                    <div className="text-secondary mt-2">
                      Each pair features unique, hand-painted designs for a
                      one-of-a-kind look.
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon-leaves-compatible text-4xl"></div>
                    <div className="heading6 mt-4">Care Instructions</div>
                    <div className="text-secondary mt-2">
                      Easy to maintain—see the care instructions above for best
                      results.
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`desc-item specifications flex items-center justify-center ${
                  activeTab === "specifications" ? "open" : ""
                }`}
              >
                <div className="lg:w-1/2 sm:w-3/4 w-full">
                  <div className="item bg-surface flex items-center gap-8 py-3 px-10">
                    <div className="text-title sm:w-1/4 w-1/3">Rating</div>
                    <div className="flex items-center gap-1">
                      <Rate currentRate={productMain.rate} size={12} />
                      <p>({productMain.sold} sold)</p>
                    </div>
                  </div>
                  <div className="item flex items-center gap-8 py-3 px-10">
                    <div className="text-title sm:w-1/4 w-1/3">Outer Shell</div>
                    <p>Premium leather</p>
                  </div>
                  <div className="item bg-surface flex items-center gap-8 py-3 px-10">
                    <div className="text-title sm:w-1/4 w-1/3">Lining</div>
                    <p>Soft textile</p>
                  </div>
                  <div className="item flex items-center gap-8 py-3 px-10">
                    <div className="text-title sm:w-1/4 w-1/3">Size</div>
                    <p>{productMain.sizes && productMain.sizes.join(", ")}</p>
                  </div>
                  <div className="item bg-surface flex items-center gap-8 py-3 px-10">
                    <div className="text-title sm:w-1/4 w-1/3">Colors</div>
                    <p>
                      {productMain.variation &&
                        productMain.variation.map((v) => v.color).join(", ")}
                    </p>
                  </div>
                  <div className="item flex items-center gap-8 py-3 px-10">
                    <div className="text-title sm:w-1/4 w-1/3">Care</div>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary">
                        {productMain.careInstructions
                          ? "See care instructions above"
                          : "Wipe clean with a damp cloth"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-block md:py-20 py-10 bg-surface">
          <div className="container">
            <div className="heading flex items-center justify-between flex-wrap gap-4">
              <div className="heading4">Customer Review</div>
              <Link
                href={"#form-review"}
                className="button-main bg-white text-black border border-black"
              >
                Write Reviews
              </Link>
            </div>
            <div className="top-overview flex justify-between py-6 max-md:flex-col gap-y-6">
              <div className="rating lg:w-1/4 md:w-[30%] lg:pr-[75px] md:pr-[35px]">
                <div className="heading flex items-center justify-center flex-wrap gap-3 gap-y-4">
                  <div className="text-display">
                    {productMain.rate ? productMain.rate.toFixed(1) : "5.0"}
                  </div>
                  <div className="flex flex-col items-center">
                    <Rate currentRate={productMain.rate || 5} size={18} />
                    <div className="text-secondary text-center mt-1">
                      ({productMain.sold ? productMain.sold * 200 : 1968}{" "}
                      Ratings)
                    </div>
                  </div>
                </div>
                <div className="list-rating mt-3">
                  <div className="item flex items-center justify-between gap-1.5">
                    <div className="flex items-center gap-1">
                      <div className="caption1">5</div>
                      <Icon.Star size={14} weight="fill" />
                    </div>
                    <div className="progress bg-line relative w-3/4 h-2">
                      <div className="progress-percent absolute bg-yellow w-[50%] h-full left-0 top-0"></div>
                    </div>
                    <div className="caption1">50%</div>
                  </div>
                  <div className="item flex items-center justify-between gap-1.5 mt-1">
                    <div className="flex items-center gap-1">
                      <div className="caption1">4</div>
                      <Icon.Star size={14} weight="fill" />
                    </div>
                    <div className="progress bg-line relative w-3/4 h-2">
                      <div className="progress-percent absolute bg-yellow w-[20%] h-full left-0 top-0"></div>
                    </div>
                    <div className="caption1">20%</div>
                  </div>
                  <div className="item flex items-center justify-between gap-1.5 mt-1">
                    <div className="flex items-center gap-1">
                      <div className="caption1">3</div>
                      <Icon.Star size={14} weight="fill" />
                    </div>
                    <div className="progress bg-line relative w-3/4 h-2">
                      <div className="progress-percent absolute bg-yellow w-[10%] h-full left-0 top-0"></div>
                    </div>
                    <div className="caption1">10%</div>
                  </div>
                  <div className="item flex items-center justify-between gap-1.5 mt-1">
                    <div className="flex items-center gap-1">
                      <div className="caption1">2</div>
                      <Icon.Star size={14} weight="fill" />
                    </div>
                    <div className="progress bg-line relative w-3/4 h-2">
                      <div className="progress-percent absolute bg-yellow w-[10%] h-full left-0 top-0"></div>
                    </div>
                    <div className="caption1">10%</div>
                  </div>
                  <div className="item flex items-center justify-between gap-1.5 mt-1">
                    <div className="flex items-center gap-2">
                      <div className="caption1">1</div>
                      <Icon.Star size={14} weight="fill" />
                    </div>
                    <div className="progress bg-line relative w-3/4 h-2">
                      <div className="progress-percent absolute bg-yellow w-[10%] h-full left-0 top-0"></div>
                    </div>
                    <div className="caption1">10%</div>
                  </div>
                </div>
              </div>
              <div className="list-img lg:w-3/4 md:w-[70%] lg:pl-[15px] md:pl-[15px]">
                <div className="heading5">
                  All Images ({productMain.images?.length || 0})
                </div>
                <div className="list md:mt-6 mt-3">
                  <Swiper
                    spaceBetween={16}
                    slidesPerView={3}
                    modules={[Navigation]}
                    breakpoints={{
                      576: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                      },
                      640: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                      },
                      992: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                      },
                      1100: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                      },
                      1290: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                      },
                    }}
                  >
                    {productMain.images &&
                      productMain.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <Image
                            src={img}
                            width={400}
                            height={400}
                            alt={productMain.name}
                            className="w-[120px] aspect-square object-cover rounded-lg"
                          />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
                <div className="sorting flex items-center flex-wrap md:gap-5 gap-3 gap-y-3 mt-6">
                  <div className="text-button">Sort by</div>
                  <div className="item bg-white px-4 py-1 border border-line rounded-full">
                    Newest
                  </div>
                  <div className="item bg-white px-4 py-1 border border-line rounded-full">
                    5 Star
                  </div>
                  <div className="item bg-white px-4 py-1 border border-line rounded-full">
                    4 Star
                  </div>
                  <div className="item bg-white px-4 py-1 border border-line rounded-full">
                    3 Star
                  </div>
                  <div className="item bg-white px-4 py-1 border border-line rounded-full">
                    2 Star
                  </div>
                  <div className="item bg-white px-4 py-1 border border-line rounded-full">
                    1 Star
                  </div>
                </div>
              </div>
            </div>
            <div className="list-review">
              {/* Example reviews for custom sneakers */}
              <div className="item flex max-lg:flex-col gap-y-4 w-full py-6 border-t border-line">
                <div className="left lg:w-1/4 w-full lg:pr-[15px]">
                  <div className="list-img-review flex gap-2">
                    <Image
                      src={"/images/products/product (18)/p18 (1).jpg"}
                      width={200}
                      height={200}
                      alt="Nike Jordan HOWL"
                      className="w-[60px] aspect-square rounded-lg"
                    />
                    <Image
                      src={"/images/products/product (19)/p19 (1).jpg"}
                      width={200}
                      height={200}
                      alt="Nike Af1 Devil Jin Customs"
                      className="w-[60px] aspect-square rounded-lg"
                    />
                    <Image
                      src={"/images/products/product (20)/p20 (1).jpg"}
                      width={200}
                      height={200}
                      alt="Nike Af1 Bloody Skull"
                      className="w-[60px] aspect-square rounded-lg"
                    />
                  </div>
                  <div className="user mt-3">
                    <div className="text-title">SneakerHead92</div>
                    <div className="flex items-center gap-2">
                      <div className="text-secondary2">2 days ago</div>
                      <div className="text-secondary2">-</div>
                      <div className="text-secondary2">
                        <span>Grey</span> / <span>10</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right lg:w-3/4 w-full lg:pl-[15px]">
                  <Rate currentRate={5} size={16} />
                  <div className="heading5 mt-3">Incredible Custom Work!</div>
                  <div className="body1 mt-3">
                    The Nike Jordan HOWL is a masterpiece. The hand-painted
                    details are stunning and the comfort is top-notch. Highly
                    recommend for collectors!
                  </div>
                  <div className="action mt-3">
                    <div className="flex items-center gap-4">
                      <div className="like-btn flex items-center gap-1 cursor-pointer">
                        <Icon.HandsClapping size={18} />
                        <div className="text-button">34</div>
                      </div>
                      <Link
                        href={"#form-review"}
                        className="reply-btn text-button text-secondary cursor-pointer hover:text-black"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item flex max-lg:flex-col gap-y-4 w-full py-6 border-t border-line">
                <div className="left lg:w-1/4 w-full lg:pr-[15px]">
                  <div className="list-img-review flex gap-2">
                    <Image
                      src={"/images/products/product (19)/p19 (1).jpg"}
                      width={200}
                      height={200}
                      alt="Nike Af1 Devil Jin Customs"
                      className="w-[60px] aspect-square rounded-lg"
                    />
                  </div>
                  <div className="user mt-3">
                    <div className="text-title">TekkenFan</div>
                    <div className="flex items-center gap-2">
                      <div className="text-secondary2">5 days ago</div>
                      <div className="text-secondary2">-</div>
                      <div className="text-secondary2">
                        <span>Black</span> / <span>9</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right lg:w-3/4 w-full lg:pl-[15px]">
                  <Rate currentRate={5} size={16} />
                  <div className="heading5 mt-3">Perfect for Tekken Lovers</div>
                  <div className="body1 mt-3">
                    The Devil Jin Customs are so cool! The artwork is exactly
                    like the game and the shoes are super comfortable.
                  </div>
                  <div className="action mt-3">
                    <div className="flex items-center gap-4">
                      <div className="like-btn flex items-center gap-1 cursor-pointer">
                        <Icon.HandsClapping size={18} />
                        <div className="text-button">18</div>
                      </div>
                      <Link
                        href={"#form-review"}
                        className="reply-btn text-button text-secondary cursor-pointer hover:text-black"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item flex max-lg:flex-col gap-y-4 w-full py-6 border-t border-line">
                <div className="left lg:w-1/4 w-full lg:pr-[15px]">
                  <div className="list-img-review flex gap-2">
                    <Image
                      src={"/images/products/product (20)/p20 (1).jpg"}
                      width={200}
                      height={200}
                      alt="Nike Af1 Bloody Skull"
                      className="w-[60px] aspect-square rounded-lg"
                    />
                  </div>
                  <div className="user mt-3">
                    <div className="text-title">CustomKing</div>
                    <div className="flex items-center gap-2">
                      <div className="text-secondary2">1 week ago</div>
                      <div className="text-secondary2">-</div>
                      <div className="text-secondary2">
                        <span>Red</span> / <span>11</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right lg:w-3/4 w-full lg:pl-[15px]">
                  <Rate currentRate={5} size={16} />
                  <div className="heading5 mt-3">Bold and Unique</div>
                  <div className="body1 mt-3">
                    The Bloody Skull AF1s are a real head-turner. The red
                    accents and skull art are amazing. Will buy again!
                  </div>
                  <div className="action mt-3">
                    <div className="flex items-center gap-4">
                      <div className="like-btn flex items-center gap-1 cursor-pointer">
                        <Icon.HandsClapping size={18} />
                        <div className="text-button">22</div>
                      </div>
                      <Link
                        href={"#form-review"}
                        className="reply-btn text-button text-secondary cursor-pointer hover:text-black"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-button more-review-btn text-center mt-2 underline">
                View More Comments
              </div>
            </div>
            <div id="form-review" className="form-review pt-6">
              <div className="heading4">Leave A comment</div>
              <form className="grid sm:grid-cols-2 gap-4 gap-y-5 mt-6">
                <div className="name ">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    id="username"
                    type="text"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div className="mail ">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div className="col-span-full message">
                  <textarea
                    className="border border-line px-4 py-3 w-full rounded-lg"
                    id="message"
                    name="message"
                    placeholder="Your message *"
                    required
                  ></textarea>
                </div>
                <div className="col-span-full flex items-start -mt-2 gap-2">
                  <input
                    type="checkbox"
                    id="saveAccount"
                    name="saveAccount"
                    className="mt-1.5"
                  />
                  <label className="" htmlFor="saveAccount">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <div className="col-span-full sm:pt-3">
                  <button className="button-main bg-white text-black border border-black">
                    Submit Reviews
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="related-product md:py-20 py-10">
          <div className="container">
            <div className="heading3 text-center">Related Products</div>
            <div className="list-product hide-product-sold  grid lg:grid-cols-4 grid-cols-2 md:gap-[30px] gap-5 md:mt-10 mt-6">
              {data
                .slice(Number(productId), Number(productId) + 4)
                .map((item, index) => (
                  <Product
                    key={index}
                    data={item}
                    type="grid"
                    style="style-1"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Default;
