
import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import {  getMyOrders } from "@/sanity/helpers/queries";

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import MobileMenu from "./MobileMenu";
import { Heart, ListOrdered,  User } from "lucide-react";
import SearchBar from "./SearchBar";

export default  async function Navbar() {
  const user = await currentUser();
  const {userId} = await auth();

let orders=null
if(userId){
orders=await getMyOrders(userId)
}
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="bg-[#7E33E0] md:grid grid-cols-2 flex items-center flex-wrap justify-center px-2   py-3 md:px-auto">
        <div className="flex gap-[48px] justify-center ">
          <div className="flex justify-center items-center flex-wrap gap-[10px]">
            <Image
              width={1000}
              height={1000}
              src="/mail.png"
              alt="mail"
              className="text-white w-4 h-4"
            />
            <h1 className="text-white text-16px">hekto@gmail.com</h1>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-[10px]  ">
            <Image
              width={1000}
              height={1000}
              src="/phone.png"
              alt="mail"
              className="text-white w-4 h-4"
            />
            <h1 className="text-white text-16px">(12345)67890</h1>
          </div>
        </div>
        <div className="flex items-center justify-end flex-wrap md:px-0 px-2 md:mt-0 mt-2 gap-4 pr-20">
          <div className="gap-2 flex items-center ">
            <h1 className="text-white text-[16px] ">English</h1>
            <Image
              width={1000}
              height={1000}
              src="/arrow.png"
              alt="arrow"
              className="text-white w-2"
            />
          </div>
          <div className="gap-2 flex items-center">
            <h1 className="text-white text-[16px] ">USD</h1>
            <Image
              width={1000}
              height={1000}
              src="/arrow.png"
              alt="arrow"
              className="text-white w-2"
            />
          </div>
          
<CartIcon/>
         
<ClerkLoaded>
<SignedIn>
  <div className="mx-4 flex items-center gap-3">

 
            <h1 className="text-white text-[16px] ">Wishlist</h1>
           <Heart className="w-5 text-white"/>
         
<Link href={"/orders"} className='group relative'>
    <ListOrdered className='w-5 h-5 text-white'/>
    <span className='absolute -top-1 -right-1 bg-darkColour text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>{orders?.length ? orders?.length :0}</span>
   </Link>

   <UserButton />
  </div>
</SignedIn>
       {!user && (<SignInButton mode="modal">

          <button className="text-[16px] text-white flex gap-2 justify-center items-center mx-4 ">Login

          <User className="text-white w-5" />
          </button>
       </SignInButton>)}
        </ClerkLoaded>
           
          

        </div>
      </div>
     <MobileMenu/>
      <div className="flex justify-evenly items-center flex-wrap mx-auto my-[22px] ">
        <div>
      <Logo>
        Hekto
      </Logo>
        </div>
        <div className="flex justify-center items-center ">
          <ul className="md:flex hidden  space-x-[35px]  justify-center flex-wrap items-center">
            <li className="text-[#FB2E86] flex  justify-center items-center gap-[2px]">
              <Link href="/" className="test-[16px]">
                Home
              </Link>
              <Image
                width={1000}
                height={1000}
                src="/homearrow.png"
                alt="arrow"
                className="w-3 "
              />
            </li>
            <li>
              <Link href="/about" className="text-[#0D0E43] text-[16px]">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/product" className="text-[#0D0E43] text-[16px]">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[#0D0E43] text-[16px]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-[#0D0E43] text-[16px]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#0D0E43] text-[16px]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center ">
          <SearchBar/>
          {/* <input
            type="text"
            className="border border-gray-400 outline-gray-400"
          />
          <button className="bg-[#FB2E86] w-6 h-[26px] ">
            <Image
              width={1000}
              height={1000}
              src="/homesearch.png"
              alt="search"
              className="flex justify-center items-center p-1  "
            />
          </button> */}
        </div>
      </div>
    </div>
  );
}
