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
        <div>
          <h1 className="text-black font-extrabold text-3xl poppins px-12 mb-14">NEW ARRIVALS</h1>
          <div className="flex gap-28 justify-center">
            <div>
              <Image
              src='/hoodies.png'
              alt='hoodies'
              height={500}
              width={350}
              />
              <p className="text-black poppins text-xl font-medium mt-4">Hoodies & Sweetshirt</p>
              <Link className="text-gray-600 text-sm cursor-pointer" href='#'>Explore Now!</Link>
            </div>
            <div>
              <Image
              src='/coots.png'
              alt='coots'
              height={500}
              width={350}
              />
              <p className="text-black poppins text-xl font-medium mt-4">Coats & Parkas</p>
              <Link className="text-gray-600 text-sm cursor-pointer" href='#'>Explore Now!</Link>
            </div>
            <div>
              <Image
              src='/tees.png'
              alt='tess'
              height={500}
              width={350}
              />
              <p className="text-black poppins text-xl font-medium mt-4">Tees & T-Shirt</p>
              <Link className="text-gray-600 text-sm cursor-pointer" href='#'>Explore Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
