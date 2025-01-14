"use client"
import Image from "next/image"
import { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
import { Product } from '../sanity.types'; // Import the generated type
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
export default function LatestProducts(){
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const query = `*[_type == "product" && "Latest Products" in tags[]->name] | order(name asc) `;
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
        <div className=" mt-[129px]">
<h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">Latest Products</h1>

<ul className="flex justify-center items-center flex-wrap mx-auto gap-[60px] flex-row mt-[19px]">
    <li>
        <Link href="
        /" className="text-[#FB2E86] text-[18px] underline underline-offset-4">New Arrival</Link>
    </li>
    <li>
        <Link href="
        /" className="text-[#151875] text-[18px]">Best Seller</Link>
    </li>
    <li>
        <Link href="
        /l" className="text-[#151875] text-[18px]">Featured</Link>
    </li>
    <li>
        <Link href="
        /" className="text-[#151875] text-[18px]">Special Offer</Link>
    </li>
</ul>

   <div className="mt-[48px] grid lg:grid-cols-3   gap-[20px] mb-[120px] ">
    {products.map((product:Product)=>(
        
        <div key={product?._id} className="relative group  md:w-[360px] md:h-[306px] w-[270px] shadow-xl rounded-[4px] ">
    <Link href={`/product/${product?.slug?.current}`}>
    <div className="">

<div className="bg-gray-300 rounded-t-[4px] hover:bg-white pb-2">
    <Image
    src="/sale.png"
    alt="sale"
    width={1000}
    height={1000}
    className="w-20 absolute  p-2 mx-auto  opacity-0 group-hover:opacity-100  transition-opacity duration-300"
    />
     {product?.images && (

         <Image
         src={urlFor(product?.images[0]).url()} 
         alt="image"
         width={1000}
         height={1000}
         className="w-[223px] h-[229px] flex justify-center items-center mx-auto pt-10"/>
        )}
    <div className="absolute flex flex-col items-center bottom-20 ml-3 opacity-0 group-hover:opacity-100  transition-opacity gap-2 duration-300 ">
        <Image width={1000} height={1000} src="/productcart.png" alt=""  className="w-4"/>
        <Image width={1000} height={1000} src="/heart.png" alt=""  className="w-4"/>
        <Image width={1000} height={1000} src="/zoom.png" alt=""  className="w-4"/>
    </div>
</div>
<div className="flex justify-between items-center  mt-1 space-y-2 mx-2 ">
    <h1 className=" text-[18px] text-[#151875] ">{product?.name}</h1>
    <div></div>
    <p className ="text-[#151875] text-[14px] ">${product?.price}</p>
    <p className ="text-[#FB2E86] text-[13px] line-through">${product?.discount}</p>
</div>
</div>
    </Link>
    </div>
    )
    )}

   </div>
        </div>
    )
}