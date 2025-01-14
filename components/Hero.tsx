import Image from "next/image"
import Link from "next/link"
export default function Hero(){
    return(
        <div className="bg-[#F2F0FF] lg:h-[764px] px-[70px] 
">
    <div className="lg:flex  ">

    <Image
    src="/lamp.png"
    alt="lamp"
    width={1000}
    height={1000}
    className="lg:w-[320px] lg:h-[360px] w-[120px] h-[150px]"/>
<div className="flex justify-center flex-col flex-wrap -ml-12 lg:w-[644px] lg:h-[248px lg:mt-[203px]">
<p className="text-[16px] text-[#FB2E86]">Best Furniture For Your Castle....</p>
<h1 className="text-4xl text-black font-semibold mt-3">New Furniture Collection <br />
Trends in 2025</h1>
<p className="text-[#8A8FB9] text-[16px] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
in phasellus non in justo.</p>
<Link href="/shop">
<button className="py-4 px-10 text-white bg-[#FB2E86]  mt-6 mr-auto">Shop Now</button>
</Link>
</div>
    <div className="lg:bg-[#ECD2FA59] rounded-full lg:w-[450px] lg:h-[501px]  mt-[39px]">
        <div className="lg:bg-[#ECD2FA59] rounded-full  lg:w-[488px]  lg:h-[488px]">
            <Image width={1000} height={1000} src="/off.png" alt="off" className="absolute lg:right-2 lg:w-[116px] w-[96px] pb-4" />
        <Image
        src="/homesofa.png"
        alt="sofa"
        width={1000}
        height={1000}
        className="lg:w-[529px] lg:h-[550px] w-[400px] lg:mt-[99px]  "/>
        </div>
    </div>
        </div>
        <div className="flex justify-center items-center gap-3 w-[10px] h-[10px] mx-auto mt-[169px]">
<Image width={1000} height={1000} src="/rec.png" alt="rectangle"  className=""/>
<Image width={1000} height={1000} src="/fillrec.png" alt="rectangle"  className=""/>
<Image width={1000} height={1000} src="/fillrec.png" alt="rectangle"  className=""/>
        </div>
        </div>
    )
}