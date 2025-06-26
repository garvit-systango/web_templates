"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-white">
        {/* Header */}
        <div className="flex justify-between bg-white p-4 mx-24">
          <Image
            src="/logo.png"
            alt="logo"
            height={100}
            width={200}
            className="ml-10"
          />
          <div className="flex gap-12 mr-10 items-center text-black text-xl font-bold">
            <Link className="cursor-pointer" href="#">
              CATALOGUE
            </Link>
            <Link className="cursor-pointer" href="#">
              FASHION
            </Link>
            <Link className="cursor-pointer" href="#">
              FAVOURITE
            </Link>
            <Link className="cursor-pointer" href="#">
              LIFESTYLE
            </Link>
            <button
              className="bg-black font-normal items-center text-white px-4 py-2 cursor-pointer rounded-lg"
              onClick={() => {}}
            >
              SIGN UP
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="bg-gray-100 pl-16 pt-12 mt-2 mb-4 mx-36 rounded-4xl relative">
          <div className="flex justify-between">
            <div className="p-2 text-black">
              <p className="text-left text-8xl w-lg text-wrap poppins font-extrabold tracking-tight">
                LET'S EXPLORE UNIQUE CLOTHES.
              </p>
              <p className="my-8 text-black font-light text-3xl tracking-tight">
                Live for influential and innovative fashion!
              </p>
              <button className="bg-black p-4 pr-8 pl-8 items-center text-white rounded-lg text-[30px] font-[500]">
                Shop Now
              </button>
            </div>
            <Image
              className="absolute right-50 top-25"
              src="/hero-star.png"
              alt="star"
              height={40}
              width={40}
            />
            <Image
              className="absolute right-10 bottom-20"
              src="/hero-star.png"
              alt="star"
              height={40}
              width={40}
            />
            <Image
              className="absolute right-170 bottom-10"
              src="/hero-star.png"
              alt="star"
              height={40}
              width={40}
            />
            <Image
              className="absolute right-180 top-23"
              src="/hero-star.png"
              alt="star"
              height={50}
              width={50}
            />
            <Image
              className="mt-6 mx-auto"
              src="/hero-model-1.png"
              alt="model-1"
              height={500}
              width={690}
            />
          </div>
        </div>
        {/* Brands Strip */}
        <div className="flex my-12 bg-amber-300 gap-20 justify-center p-6 items-center">
          <Image src="/hnm.png" alt="h&m" height={100} width={150} />
          <Image src="/obey.png" alt="obey" height={100} width={150} />
          <Image src="/shopify.png" alt="shopify" height={100} width={150} />
          <Image src="/lacoste.png" alt="lacoste" height={100} width={150} />
          <Image src="/levis.png" alt="levi's" height={100} width={150} />
          <Image src="/amazon.png" alt="amazon" height={100} width={150} />
        </div>
        {/* NEW ARRIVALS */}
        <div className="mb-36 px-28">
          <h1 className="text-black font-extrabold text-3xl poppins ml-4  mb-14">
            NEW ARRIVALS
          </h1>
          <div className="flex gap-28 justify-center">
            <div>
              <Image
                src="/hoodies.png"
                alt="hoodies"
                height={650}
                width={500}
              />
              <p className="text-black poppins text-xl font-medium mt-4">
                Hoodies & Sweetshirt
              </p>
              <Link className="text-gray-600 text-sm cursor-pointer" href="#">
                Explore Now!
              </Link>
            </div>
            <div>
              <Image src="/coots.png" alt="coots" height={650} width={500} />
              <p className="text-black poppins text-xl font-medium mt-4">
                Coats & Parkas
              </p>
              <Link className="text-gray-600 text-sm cursor-pointer" href="#">
                Explore Now!
              </Link>
            </div>
            <div>
              <Image src="/tees.png" alt="tess" height={650} width={500} />
              <p className="text-black poppins text-xl font-medium mt-4">
                Tees & T-Shirt
              </p>
              <Link className="text-gray-600 text-sm cursor-pointer" href="#">
                Explore Now!
              </Link>
            </div>
          </div>
        </div>
        {/* SALE BOARD */}
        <div className="bg-[#fad13b] justify-between px-12 gap-24 flex relative">
        <Image
            className="absolute left-138 top-15"
            src="/sale-star.png"
            alt="sale-star"
            height={50}
            width={50}
          />
          <Image
            className="absolute left-150 bottom-40"
            src="/sale-star.png"
            alt="sale-star"
            height={50}
            width={50}
          />
          <Image
            className="absolute left-25 top-30"
            src="/sale-star.png"
            alt="sale-star"
            height={50}
            width={50}
          />
          <Image
            className="absolute left-45 bottom-65"
            src="/sale-star.png"
            alt="sale-star"
            height={50}
            width={50}
          />
          <Image src="/model-2.png" alt="model-2" height={700} width={650} />
          <div className="w-138 m-auto">
            <p className="text-8xl font-[900] poppins text-black">
              PAYDAY SALE NOW
            </p>
            <p className="text-black my-6 font-[400] text-3xl">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className="text-black font-[900] text-3xl poppins">
              1 June - 10 June 2021
            </p>
            <p className="text-black text-3xl">*Terms & Conditions apply</p>
            <button className="bg-black text-white font-bold text-2xl py-4 px-8 rounded-md my-8">
              SHOP NOW
            </button>
          </div>
        </div>
        {/* young's */}
        <div className="mt-24">
          <p className="text-black font-extrabold text-3xl poppins px-24 mb-14">
            Young's Favourite
          </p>
          <div className="flex justify-center gap-6">
            <div>
              <Image
                src="/model-3.png"
                alt="model-3"
                height={520}
                width={750}
              />
              <p className="text-black poppins text-xl font-medium mt-4">
                Trending on instagram
              </p>
              <Link className="text-gray-600 text-sm cursor-pointer" href="#">
                Explore Now!
              </Link>
            </div>
            <div>
              <Image
                src="/model-4.png"
                alt="model-4"
                height={520}
                width={750}
              />
              <p className="text-black poppins text-xl font-medium mt-4">
                All Under $40
              </p>
              <Link className="text-gray-600 text-sm cursor-pointer" href="#">
                Explore Now!
              </Link>
            </div>
          </div>
        </div>
        {/* DOWNLOAD APP */}
        <div className="flex justify-around items-center mx-auto my-18">
          <div className="py-24 px-24 w-150">
            <p className="poppins font-[900] text-4xl text-black">
              DOWNLOAD APP & GET THE VOUCHER!
            </p>
            <p className="text-gray-400 w-80 text-md my-8 font-[400]">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>
            <div className="flex gap-1">
              <Link href="#">
                <Image
                  src="/app-store.png"
                  alt="app-store"
                  height={70}
                  width={130}
                />
              </Link>
              <Link href="#">
                <Image
                  className=""
                  src="/google-play.png"
                  alt="google-play"
                  height={70}
                  width={130}
                />
              </Link>
            </div>
          </div>
          <Image
            src="/mobile-app.png"
            alt="mobile-app"
            height={550}
            width={400}
          />
        </div>
        <div className="bg-[#fad13b] flex flex-col justify-center mt-12 ">
          <div className="text-center py-24 mx-auto px-120">
            <p className="poppins text-5xl font-[700]  max-w-3xl text-wrap">
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </p>
            <p className="poppins font-medium text-2xl my-6">
              Type your email down below and be young wild generation
            </p>
            <div className="bg-white mx-auto rounded-xl justify-between w-fit">
              <input
                className="bg-white border-none outline-none focus:ring-0 text-gray-600 py-6 px-10 rounded-lg"
                placeholder="Add your email here"
              />
              <button className="bg-black py-4 px-8 rounded-lg mr-[8px]">
                SEND
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black flex px-24 py-24 justify-between">
          <div className="w-[320px]">
            <p className="text-white poppins font-[900] text-4xl mb-6">
              FASHION
            </p>
            <p className="text-gray-500 text-xl mb-6">
              Complete your style with awesome clothes from us.
            </p>
            <div className="flex gap-3">
              <Image
                src="/facebook.png"
                alt="facebook"
                height={50}
                width={50}
              />
              <Image
                src="/instagram.png"
                alt="instagram"
                height={50}
                width={50}
              />
              <Image
                src="/linkedin.png"
                alt="linkedin"
                height={50}
                width={50}
              />
              <Image src="/twitter.png" alt="twitter" height={50} width={50} />
            </div>
          </div>
          <div className="flex gap-60 text-xl leading-[2.5] text-gray-400">
            <div>
              <p className="font-extrabold">Company</p>
              <p>About</p>
              <p>Contact us</p>
              <p>Support</p>
              <p>Careers</p>
            </div>
            <div>
              <p className="font-extrabold">Quick Link</p>
              <p>Share Location</p>
              <p>Orders Tracking</p>
              <p>Size Guide</p>
              <p>FAQs</p>
            </div>
            <div>
              <p className="font-extrabold">Legal</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
