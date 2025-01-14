import Link from "next/link"
import Image from "next/image"
import Logo from "./Logo"
import Conatainer from "./Container"
export default function Footer(){
    return(
        <Conatainer className="  ">

        <div className="bg-[#EEEFFB] mt-28 lg:flex sm:grid-cols-2 grid lg:gap-0  py-24 md:px-[130px] px-[50px] justify-between">
            <div className="flex flex-col flex-wrap sm:mt-0 ">
      <Logo>Hekto</Logo>
            <div className="flex mt-10 ">
            <input type="text" placeholder="Enter Email Adress" className="outline-1 outline-gray-500 text-center sm:py-2 sm:px-6 text-[#8A8FB9] text-[16px] bg-white"
                />
                <Link href="/login">
            <button className="sm:py-2 sm:px-8  text-white bg-[#FB2E86]  rounded-r-[3px]">Sign Up</button>
                
                </Link>
            </div>
            <p className="text-[16px] text-[#8A8FB9] mt-6">Contact info</p>
            <p className="text-[16px] text-[#8A8FB9] mt-2">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
<div className="flex flex-col flex-wrap sm:mt-0 mt-10">
    <h1 className="text-[22px] text-black">Categories</h1>
    <div className="mt-10 space-y-5">
    <p className="text-[16px] text-[#8A8FB9] ">Laptops & Computers</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Cameras & Photography</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Smart Phones & Tablets</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Video Games & Consoles</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Waterproof Headphones</p>
    </div>

</div>
<div className="flex flex-col flex-wrap">
    <h1 className="text-[22px] text-black">Customer Care</h1>
    <div className="mt-10 space-y-5">
    <p className="text-[16px] text-[#8A8FB9] ">My Account</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Discount</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Returns</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Orders History</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Order Tracking</p>
    </div>

</div>
<div className="flex flex-col flex-wrap">
    <h1 className="text-[22px] text-black">Pages</h1>
    <div className="mt-10 space-y-5">
        <Link href="/blog">
    <p className="text-[16px] text-[#8A8FB9] ">Blog</p>
        </Link>
        <Link href="/shop">
    <p className="text-[16px] text-[#8A8FB9] mt-6">Browse the Shop</p>
        </Link>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Category</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Pre-Built Pages</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">Visual Composer Elements</p>
    <p className="text-[16px] text-[#8A8FB9] mt-6">WooCommerce Pages</p>
    </div>

</div>

        </div>
        <div className="py-4  px-[130px] justify-between flex flex-wrap">
<h1 className="text-[16px] text-[#9DA0AE]">©Webecy - All Rights Reserved</h1>
<div className="flex gap-[11px] items-center">
    <Image width={1000} height={1000} src="/facebook.png" alt="image" className="w-4" />
    <Image width={1000} height={1000} src="/insta.png" alt="image" className="w-4"/>
    <Image width={1000} height={1000} src="/twitter.png" alt="image"className="w-4" />
</div>
        </div>
        </Conatainer>
    )
}