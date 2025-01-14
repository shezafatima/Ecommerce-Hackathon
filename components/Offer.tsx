import Image from "next/image"
import Link from "next/link"
export default function Offer(){
    return (
        <div className="mt-[58px]">
<h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">What Shopex Offer</h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[28px] mx-[50px] lg:mx-[130px] mt-[55px]" >
            <div className="shadow-xl p-4">
<Image
src="/support1.png"
alt="support"
width={1000}
height={1000}
className=" flex justify-center items-center  mx-auto text-center w-[65px] h-[65px]"/>
<h1 className=" flex justify-center items-center text-center text-[22px] text-[#151875]">24/7</h1>
<p className=" flex justify-center items-center text-center text-[16px] text-[#1A0B5B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>

            <div className="shadow-xl p-4">
<Image
src="/support2.png"
alt="support"
width={1000}
height={1000}
className=" flex justify-center items-center  mx-auto text-center w-[65px] h-[65px]"/>
<h1 className=" flex justify-center items-center text-center text-[22px] text-[#151875]">24/7</h1>
<p className=" flex justify-center items-center text-center text-[16px] text-[#1A0B5B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="shadow-xl p-4">
<Image
src="/support3.png"
alt="support"
width={1000}
height={1000}
className=" flex justify-center items-center  mx-auto text-center w-[65px] h-[65px]"/>
<h1 className=" flex justify-center items-center text-center text-[22px] text-[#151875]">24/7</h1>
<p className=" flex justify-center items-center text-center text-[16px] text-[#1A0B5B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="shadow-xl p-4">
<Image
src="/support4.png"
alt="support"
width={1000}
height={1000}
className=" flex justify-center items-center  mx-auto text-center w-[65px] h-[65px]"/>
<h1 className=" flex justify-center items-center text-center text-[22px] text-[#151875]">24/7</h1>
<p className=" flex justify-center items-center text-center text-[16px] text-[#1A0B5B4D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>

        </div>
        <div className="mt-[135px] bg-[#F1F0FF] md:h-[579px]">
            <div className="flex md:flex-row flex-col  justify-center  mx-auto">
                <div>
                    <Image
                    src="/offersofa.png"
                    alt="sofa"
                    width={1000}
                    height={1000}
                    className="md:w-[558px] md:h-[550px] w-[400px] mt-6"/>
                </div>
<div className="flex flex-col md:mx-0 mx-[50px]">
<h1 className="text-[35px] text-[#1A0B5B] font-semibold md:mt-[97px] ">Unique Features Of leatest & <br />
Trending Products</h1>
<div className="flex items-center  mt-[29px] gap-2">
<div className="rounded-full flex items-center w-[11px] h-[11px] bg-[#F52B70]"></div> <p className="text-[16px] text-[#ACABC3]">All frames constructed with hardwood solids and laminates</p>
</div>
<div className="flex items-center  mt-3 gap-2">
<div className="rounded-full flex items-center justify-center w-[11px] h-[11px] bg-[#2B2BF5]"></div> <p className="text-[16px] text-[#ACABC3]">Reinforced with double wood dowels, glue, screw - nails corner <br />
blocks and machine nails</p>
</div>
<div className="flex items-center  mt-3 gap-2">
<div className="rounded-full flex items-center w-[11px] h-[11px] bg-[#2BF5CC]"></div> <p className="text-[16px] text-[#ACABC3]">Arms, backs and seats are structurally reinforced</p>
</div>
<div className="flex  mt-6">
    <Link href="/shopingcart">
<button className="py-4 px-10 text-white bg-[#FB2E86]   mr-auto">Add To Cart</button>
    </Link>
<div className="flex flex-col mr-auto mx-2">
    <p className="text-[14px] text-[#1A0B5B] ">B&B Italian Sofa </p>
    <p className="text-[14px] text-[#1A0B5B]">$32.00</p>
</div>

</div>
</div>
            </div>

        </div>
        </div>
    )
}