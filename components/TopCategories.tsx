"use client"
import Image from "next/image"
import { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
import { Product } from '../sanity.types'; 

import Link from "next/link";

function TopCategories() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      const query = `*[_type == "product" && "Top Categories" in tags[]->name] | order(name asc) `;
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



  return (
    <>
    <div className="mt-20">
      <h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">
        Top Categories
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10  mt-[56px]">
{products.map((product:Product)=>(
<div key={product?._id}>
    <div  className="hover:bg-[#151875] w-[256px] h-[256px] rounded-full">

          <div className="bg-gray-200  w-[256px] h-[256px] bottom-[8px] -right-[8px] rounded-full relative group">
           {product?.images && (

               <Image
               src="/chair1.png"
               alt="img"
               width={1000}
               height={1000}
               className="w-[170px] flex items-center justify-center mx-auto pt-10"
               />
            )}
            <Link href={`/product/${product?.slug?.current}`}>
            <button className=" flex items-center   text-center py-2 px-3 justify-center  mx-auto bg-[#08D15F] rounded-[2px] text-white text-[12px]  opacity-0 group-hover:opacity-100  transition-opacity duration-300">
     View Shop
    </button>
            </Link>
          </div>
          <div className="mt-3 flex justify-center items-center flex-col">
            <h1 className="text-[16px] text-[#151875]">{product?.name}</h1>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-[14px] text-[#151875]">${product?.price} </p>

            </div>
          </div>
</div>
              </div>
        ))}

      </div>
      </div>
        </>
  )
}

export default TopCategories