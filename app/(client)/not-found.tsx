import Image from "next/image"
import Link from "next/link"
export default function NotFound(){
    return(
        <div>
            <div className="bg-[#F6F5FF] h-[186px] px-[150px]">
        <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
          404 Not Found
        </h1>
        <div className="mt-2 flex items-center gap-3">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/contact" className="text-[#FB2E86] text-[16px]">
          404 Not Found{" "}
          </Link>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mx-auto">
<Image
src="/pagenotfound.png"
alt="404"
width={1000}
height={1000}
className="w-[913px]"/>
<Link href="/">
      
<button className="py-2  rounded-md px-10 text-white bg-[#FB2E86]  mt-1">Back to Home</button>
</Link>
      </div>
      <div className="flex justify-center items-center mt-[96px]">
        <Image
        src="/brand.png"
        alt="brand"
        width={1000}
        height={1000}
        className=""/>
      </div>
        </div>
    )
}