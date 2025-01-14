import Image from "next/image"
import Link from "next/link"
export default function LatestBlog(){
    return(
        <div className=" mx-[50px] mt-[96px]">
<h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">
       Latest Blog
      </h1>
      <div className="grid lg:grid-cols-3  mt-20 gap-[56px] ">
        <div className="sm:w-[370px] h-[493px] w-[270px]  shadow-xl group">
            <Image
            src="/latestblog1.png"
            alt="img"
            width={1000}
            height={1000}
            className="rounded-lg"/>
            <div className="flex gap-7 mt-[19px] mx-4 flex-wrap">
<div className="flex justify-center items-center gap-[2px] ">
    <Image width={1000} height={1000} src="/author.png" alt="" className="w-4" /><p className="text-[16px] text-[#1A0B5B]">SaberAli</p>
</div>
<div className="flex justify-center items-center gap-[2px]">
    <Image width={1000} height={1000} src="/calendar.png" alt=""  className="w-4"/><p className="text-[16px] text-[#1A0B5B]">21 August,2020</p>
</div>
            </div>
            <div className="mx-4 flex flex-col  mt-5 flex-wrap">

<h1 className="text-[20px] font-semibold text-[#1A0B5B]  group-hover:text-[#FB2E86]">Top essential Trends in 2021</h1>
<p className="text-[17px] text-[#72718F] mt-4">More off this less hello samlande lied much
over tightly circa horse taped mightly</p>
<Link href="/blog" className="text-[17px] text-[#1A0B5B] mt-4 underline underline-offset-4 group-hover:text-[#FB2E86]">Read More</Link>
            </div>
        </div>
        <div className="sm:w-[370px] h-[493px] w-[270px] shadow-xl group">
            <Image
            src="/latestblog2.png"
            alt="img"
            width={1000}
            height={1000}
            className="rounded-lg"/>
            <div className="flex gap-7 mt-[19px] mx-4 flex-wrap">
<div className="flex justify-center items-center gap-[2px] ">
    <Image width={1000} height={1000} src="/author.png" alt=""  className="w-4" /><p className="text-[16px] text-[#1A0B5B]">Surfauxion</p>
</div>
<div className="flex justify-center items-center gap-[2px]">
    <Image width={1000} height={1000} src="/calendar.png" alt="" className="w-4" /><p className="text-[16px] text-[#1A0B5B]">21 August,2020</p>
</div>
            </div>
            <div className="mx-4 flex flex-col  mt-5 flex-wrap">

<h1 className="text-[20px] font-semibold text-[#1A0B5B] group-hover:text-[#FB2E86]">Top essential Trends in 2021</h1>
<p className="text-[17px] text-[#72718F] mt-4">More off this less hello samlande lied much
over tightly circa horse taped mightly</p>
<Link href="/blog" className="text-[17px] text-[#1A0B5B] mt-4 underline underline-offset-4 group-hover:text-[#FB2E86]">Read More</Link>
            </div>
        </div>
        <div className="sm:w-[370px] h-[493px] w-[270px] shadow-xl group">
            <Image
            src="/latestblog3.png"
            alt="img"
            width={1000}
            height={1000}
            className="rounded-lg"/>
            <div className="flex gap-7 mt-[19px] mx-4 flex-wrap">
<div className="flex justify-center items-center gap-[2px] ">
    <Image width={1000} height={1000} src="/author.png" alt=""  className="w-4"/><p className="text-[16px] text-[#1A0B5B]">SaberAli</p>
</div>
<div className="flex justify-center items-center gap-[2px]">
    <Image width={1000} height={1000} src="/calendar.png" alt="" className="w-4" /><p className="text-[16px] text-[#1A0B5B]">21 August,2020</p>
</div>
            </div>
            <div className="mx-4 flex flex-col  mt-5 flex-wrap">

<h1 className="text-[20px] font-semibold text-[#1A0B5B] group-hover:text-[#FB2E86]">Top essential Trends in 2021</h1>
<p className="text-[17px] text-[#72718F] mt-4">More off this less hello samlande lied much
over tightly circa horse taped mightly</p>
<Link href="/blog" className="text-[17px] text-[#1A0B5B] mt-4 underline underline-offset-4 group-hover:text-[#FB2E86]">Read More</Link>
            </div>
        </div>

      </div>
        </div>
    )
}