
import Image from 'next/image';
import Conatainer from '@/components/Container';
import Link from 'next/link';
import AddToCartButton from "@/components/AddToCartButton";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import ProductCharacteristics from "../../../../components/ProductCharacteristics";

import {
  Heart,

} from "lucide-react";

import React from "react";
import MediaIcon from '@/components/MediaIcon';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/sanity/helpers/queries';


 const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }


  return (
    <Conatainer>

<div className="bg-[#F6F5FF] h-[186px] px-[50px] md:px-[150px]">
        <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
          Shopping Cart
        </h1>
        <div className="mt-2 flex items-center gap-3 flex-wrap">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/faq" className="text-[#FB2E86] text-[16px]">
            Product Details{" "}
          </Link>
        </div>
        </div>

<div className='w-[90%]  h-[609px] mx-auto bg-white shadow-xl py-10 flex flex-col md:flex-row gap-5 px-6 mt-12'>

{product?.images && <ImageView images={product?.images} />}
      <div className="w-full md:w-1/2 flex flex-col gap-5 ">
        <div>
          <h2 className="text-3xl text-[#0D134E] md:text-4xl font-bold mb-2">
            {product?.name}
          </h2>
      <div className='flex items-center my-2  gap-4'>

          <Image
          src="/review.png"
          width={1000}
          height={1000}
          className='w-36 h-8'
          alt='image'/>
          <p className='text-[#151875] text-lg'>(22)</p>
          </div>
        <div>

          <PriceView
          
            price={product?.price}
            priceClassName='text-[#151875] text-lg font-bold'
            discount={product?.discount}
            discountClassName='text-[#FB2E86] text-lg font-bold'
            
          />
        </div>
          </div>
        {product?.stock && (
          <p className="bg-pink-100 w-24 text-center text-[#FB2E86] text-sm py-2.5 font-semibold rounded-lg">
            In Stock
          </p>
        )}
        <p className="text-sm text-[#A9ACC6] text-[16px] tracking-wide">
          {product?.description}
        </p>
        <div className="flex items-center gap-2.5 lg:gap-5">
          <AddToCartButton
           
            product={product}
            className=" text-[#151875] text-[16px] hover:bg-[#0D134E] hover:text-white"
          />
          <button className="border-2 text-[#151875]  px-2.5 py-1.5 rounded-md ">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <ProductCharacteristics product={product} />
        {/* <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2">
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
            <BoxIcon className="w-5 h-5" />
            <p>Compare color</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
            <FileQuestion className="w-5 h-5" />
            <p>Ask a question</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
            <ListOrderedIcon className="w-5 h-5" />
            <p>Delivery & Return</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
            <Share className="w-5 h-5" />
            <p>Share</p>
          </div>
        </div> */}
        <div className="flex flex-wrap items-center gap-5">
          <div className="border border-[#FB2E86] text-center p-3 hover:border-[#eb3a86] rounded-md hoverEffect">
            <p className="text-base font-semibold text-[#151875]">
              Free Shipping
            </p>
            <p className="text-sm text-gray-500">
              Free shipping over order $120
            </p>
          </div>
          <div className="border border-[rgb(216,54,124)] text-center p-3 hover:border-[#eb3a86] rounded-md hoverEffect">
            <p className="text-base font-semibold text-[#151875]">
              Flexible Payment
            </p>
            <p className="text-sm text-gray-500">
              Pay with Multiple Credit Cards
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between '>
          <h1 className=" text-[#151875] text-[16px]">
            Share
          </h1>
          <MediaIcon/>
        </div>
      </div>
 
    </div>
        </Conatainer>
  );
}
export default ProductPage