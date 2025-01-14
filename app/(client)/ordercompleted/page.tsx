import Image from "next/image";
import Link from "next/link";
export default function OrderCompleted() {
  return (
    <div>
      <div className="bg-[#F6F5FF] h-[186px] md:px-[150px] px-[50px]">
        <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
          Order Completed{" "}
        </h1>
        <div className="mt-2 flex items-center gap-3 flex-wrap">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/faq" className="text-[#FB2E86] text-[16px]">
            Order Completed{" "}
          </Link>
        </div>
      </div>
      <div className="md:mx-[150px] mx-[20px] flex-wrap flex mt-20">
        <div>
          <Image
            src="/clock 1.png"
            alt="clock"
            width={1000}
            height={1000}
            className="w-[94px]"
          />
        </div>
        <div className="w-[625px] flex flex-col justify-center items-center mx-20 flex-wrap">
          <div className="w-[65px] h-[65px] rounded-full border bg-[#F6F5FF] flex items-center justify-center">
            <Image
              src="/ordercomp.png"
              alt="ordercomp"
              width={1000}
              height={1000}
              className="w-11 flex items-center justify-center"
            />
          </div>
          <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
            Your Order is Completed!{" "}
          </h1>
          <p className="mt-5 text-[16px] text-center text-[#8D92A7]">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Link href="/">
<button className="py-3 rounded-sm px-4 text-white bg-[#FB2E86] mt-7 ">Countinue Shopping</button>
</Link>

        </div>
            </div>
        <div className="md:mx-[150px] mx-[20px]">
          <Image
            src="/checklist 1.png"
            alt="clock"
            width={1000}
            height={1000}
            className="w-[94px] ml-auto mt-2 "
            />
        </div>
      <div className="flex justify-center items-center mt-[96px]">
        <Image
          src="/brand.png"
          alt="brand"
          width={1000}
          height={1000}
          className=""
        />
      </div>
    </div>
  );
}
