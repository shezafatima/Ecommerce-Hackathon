import Image from "next/image"
import Link from "next/link"
export default function Login(){
    return(
        <div>
            <div className="bg-[#F6F5FF] h-[186px] px-[50px] md:px-[150px]">
        <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
          My Account
        </h1>
        <div className="mt-2 flex items-center gap-3 flex-wrap">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/" className="text-[#FB2E86] text-[16px]">
          My Account{" "}
          </Link>
        </div>
        </div>
        <div className=" flex  justify-center items-center mt-28 flex-wrap">
            <div className="py-[52px] px-[55px] w-[544px] md:h-[474px] shadow-lg">
<h1 className="text-black text-[32px] font-semibold text-center">Login</h1>
<p className="text-[17px] text-[#9096B2] text-center mt-[7px]">Please login using account detail bellow.</p>
<input type="text" placeholder="Email Address"  className="border text-[16px] mt-7 px-2 text-[#9096B2]  outline-gray-400 w-full py-4"/>
<input type="text" placeholder="Password"  className="border text-[16px] mt-5 px-2 text-[#9096B2]  outline-gray-400 w-full py-4"/>
<p className="text-[17px] text-[#9096B2] mt-4">Forgot your password?</p>
<button className="py-3 w-full text-white bg-[#FB2E86]  mt-4 ">Sign In</button>
<p className="text-[17px] text-[#9096B2] mt-6 text-center">Don’t have an Account?Create account</p>
            </div>

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