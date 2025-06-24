"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-white">
        {/* Header */}
        <div className="flex justify-between bg-white p-4">
          <Image
            src="/logo.png"
            alt="logo"
            height={50}
            width={130}
            className="ml-10"
          />
          <div className="flex gap-12 mr-10 items-center text-black text-sm font-bold">
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
              className="bg-black font-normal text-white p-2 cursor-pointer rounded-sm"
              onClick={() => {}}
            >
              SIGN UP
            </button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="bg-gray-100 px-12 pt-12 mt-2 mb-4 mr-13 ml-13 rounded-4xl">
          <div className="flex">
            <div className="p-2 text-black">
              <p className="text-left text-8xl text-wrap poppins font-extrabold tracking-tight">
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
              className="mt-6"
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
        <div className="mb-22">
          <h1 className="text-black font-extrabold text-3xl poppins px-28 mb-14">
            NEW ARRIVALS
          </h1>
          <div className="flex gap-28 justify-center">
            <div>
              <Image
                src="/hoodies.png"
                alt="hoodies"
                height={500}
                width={350}
              />
              <p className="text-black poppins text-xl font-medium mt-4">
                Hoodies & Sweetshirt
              </p>
              <Link className="text-gray-600 text-sm cursor-pointer" href="#">
                Explore Now!
              </Link>
            </div>
            <div>
              <Image src="/coots.png" alt="coots" height={500} width={350} />
              <p className="text-black poppins text-xl font-medium mt-4">
                Coats & Parkas
              </p>
              <Link className="text-gray-600 text-sm cursor-pointer" href="#">
                Explore Now!
              </Link>
            </div>
            <div>
              <Image src="/tees.png" alt="tess" height={500} width={350} />
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
        <div className="bg-[#fad13b] justify-between px-12 gap-24 flex">
          <Image src="/model-2.png" alt="model-2" height={700} width={650} />
          <div className="my-18 mx-18">
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
            <button className="bg-black py-4 px-8 rounded-md my-8">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="mt-24">
          <p className="text-black font-extrabold text-3xl poppins px-24 mb-14">
            Young's Favourite
          </p>
          <div className="flex justify-center gap-6">
            <div>
              <Image
                src="/model-3.png"
                alt="model-3"
                height={420}
                width={650}
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
                height={420}
                width={650}
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
        <div className="flex justify-between items-center ml-18 mr-36 my-18">
          <div className="py-24 px-24 w-128">
            <p className="poppins font-[900] text-3xl text-black">
              DOWNLOAD APP & GET THE VOUCHER!
            </p>
            <p className="text-gray-400 text-md my-8 font-[400]">
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
            height={450}
            width={300}
          />
        </div>
        <div className="bg-[#fad13b] flex flex-col justify-center my-12 ">
          <div className="text-center py-24 px-120">
          <p className="poppins text-3xl font-[900] text-wrap">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </p>
          <p className="poppins text-md">
            Type your email down below and be young wild generation
          </p>
          <div className="bg-white rounded-xl justify-center w-fit">
          <input 
          style= "border: none"
          className="bg-white text-gray-600 p-6 rounded-lg"
          placeholder="Add your email here"
          

          />
            <button className="bg-black py-4 px-8 rounded-lg mr-[8px]">
              SEND
            </button>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default page;
