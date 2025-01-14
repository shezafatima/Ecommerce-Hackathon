// import productsData from "../../../data/products.json"
// import Link from "next/link";
// import Image from "next/image";

"use client"
import Image from "next/image"
import { useEffect, useState } from 'react';
import { client } from '../../../sanity/lib/client';
import { Product } from '../../../sanity.types'; // Import the generated type
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
export default function Products(){

  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const query = `*[_type == "product" && "Products" in tags[]->name]`;
    const fetchData = async () => {
      try {
        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchData();
  }, []);
  
  
  
      return(
            <div> 
                <div className="bg-[#F6F5FF] h-[186px] md:px-[150px] px-[50px]">
            <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
              Shop Grid Default
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Link href="/" className="text-black text-[16px]">
                Home .{" "}
              </Link>
              <Link href="/" className="text-black text-[16px]">
                Pages .{" "}
              </Link>
              <Link href="/faq" className="text-[#FB2E86] text-[16px]">
  
              Shop Grid Default{" "}
            </Link>
          </div>
        </div>
        <div className="flex mt-20 md:mx-[150px] mx-[20px] justify-between flex-wrap">
  <div className="flex flex-col">
  <h1 className="text-[22px] text-[#151875] font-semibold">Ecommerce Acceories & Fashion item </h1>
  <p className="mt-2 text-[12px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
  </div>
  <div className="flex mt-8 gap-5 flex-wrap">
      <div className="flex gap-2">
          <h1 className="text-[16px] text-[#3F509E]">Per Page:</h1>
          <div className="w-[55px] h-[25px] border border-[#E7E6EF]"></div>
      </div>
      <div className="flex gap-2 items-center">
          <h1 className="text-[16px] text-[#3F509E]">Sort By:</h1>
          <div className="w-[96px] h-[25px] border border-[#E7E6EF] text-[#3F509E] py-1 text-[12px] font-light text-center">Best Match </div>
      </div>
      <div className="flex gap-2 items-center">
          <h1 className="text-[16px] text-[#3F509E]">View:</h1>
          <Image width={1000} height={1000} src="/view1.png" alt="" className="w-4"/>
          <Image width={1000} height={1000} src="/view2.png" alt="" className="w-4"/>
          <div className="w-[106px] h-[25px] border border-[#E7E6EF] "> </div>
      </div>
      
  </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 mx-[20px]  md:mx-[130px] mt-10 sm:gap-10">
          {products.map((product:Product)=>(
            <div key={product?._id} className="relative group   w-[270px] h-[363px]  rounded-[4px] ">
                    <Link href={`/product/${product?.slug?.current}`}>
      <div className="">
  
  <div className=" rounded-t-[4px] bg-[#EBF4F3] pb-2">
     {product?.images && (

       <Image
       src={urlFor(product?.images[0]).url()} 
       alt="image"
       width={1000}
       height={1000}
       className="w-[169px] flex justify-center items-center mx-auto pt-10"/>
      )}  
      <div className="absolute flex flex-col items-center top-32  ml-3 opacity-0 group-hover:opacity-100  transition-opacity gap-2 duration-300 ">
          <Image width={1000} height={1000} src="/productcart.png" alt=""  className="w-4"/>
          <Image width={1000} height={1000} src="/heart.png" alt=""  className="w-4"/>
          <Image width={1000} height={1000} src="/zoom.png" alt="" className="w-4" />
      </div>
  </div>
  <div className="flex  items-center flex-col  mt-1 space-y-2 mx-2 ">
      <h1 className="text-[#151875] text-[14px] text-center font-semibold">{product?.name}</h1>
      <div className="mt-2 flex items-center justify-center gap-2">
          <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
          <div className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></div>
          <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></div>
      </div>
      <div className="flex mt-2 gap-3">
  
      <p className ="text-[#151875] text-[14px] ">${product?.price}</p>
      <p className ="text-[#FB2E86] text-[13px] line-through">${product?.discount}</p>
      </div>
  </div>
  </div>
          </Link>
      </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-[96px]">
          <Image
            src="/brand.png"
            alt="brand"
            width={1000}
            height={1000}
            className=""
          />
        </div>
          </div>
      )
}