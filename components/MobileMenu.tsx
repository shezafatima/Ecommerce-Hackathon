import React from 'react'
import {
    Sheet,
    SheetContent,
   SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "../components/ui/sheet";
import Link from 'next/link';
import Image from 'next/image';
import { IoMdMenu } from "react-icons/io";
function MobileMenu() {
  return (
    <div>
 <div className="md:hidden  block">
        <Sheet>
          <div className="flex justify-end px-8 items-center mt-6 text-2xl flex-wrap">
            <SheetTrigger>
              <IoMdMenu />
            </SheetTrigger>
          </div>
          <SheetContent className="w-[400px] sm:w-[540px] ">
            <SheetHeader>
              <div className="flex flex-col justify-center items-center flex-wrap space-y-6 py-20">
                
                <Link href="/" >
                  <SheetTitle className="text-[#FB2E86] text-[16px] hover:underline underline-offset-4  flex  justify-center items-center gap-[4px]">Home

                  <Image
                width={1000}
                height={1000}
                src="/homearrow.png"
                alt="arrow"
                className="w-3 "
                />
                </SheetTitle>
                </Link>
               
                <Link href="/about" >
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Pages</SheetTitle>
                </Link>
                <Link href="/product" >
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Products</SheetTitle>
                </Link>
                <Link href="/blog" >
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Blog</SheetTitle>
                </Link>
                <Link href="/shop" >
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Shop</SheetTitle>
                </Link>
                <Link href="/contact">
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Contact</SheetTitle>
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

    </div>
  )
}

export default MobileMenu