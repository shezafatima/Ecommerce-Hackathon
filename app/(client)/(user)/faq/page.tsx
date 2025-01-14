import Image from "next/image";
import Link from "next/link";
export default function FAQ() {
  return (
    <div>
      <div className="bg-[#F6F5FF] h-[186px] md:px-[150px] px-[50px]">
        <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
          FAQ
        </h1>
        <div className="mt-2 flex items-center gap-3 flex-wrap">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/faq" className="text-[#FB2E86] text-[16px]">
            Faq{" "}
          </Link>
        </div>
      </div>
      <div className="md:mx-[150px] mx-[20px] mt-20 grid md:grid-cols-2 gap-10">

      <div className=" md:w-[499px] ">
        <h1 className="text-[36px] text-[#151875] font-semibold  ">
          General Information
        </h1>
        <div className="mt-10">
          <p className="text-[17px] text-[#1D3178]">
            Eu dictumst cum at sed euismood condimentum?
          </p>
          <p className="text-[16px] text-[#A1ABCC] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div className="mt-10">
          <p className="text-[17px] text-[#1D3178]">
          Magna bibendum est fermentum eros.
          </p>
          <p className="text-[16px] text-[#A1ABCC] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div className="mt-10">
          <p className="text-[17px] text-[#1D3178]">
          Odio muskana hak eris conseekin sceleton?
          </p>
          <p className="text-[16px] text-[#A1ABCC] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div className="mt-10">
          <p className="text-[17px] text-[#1D3178]">
          Elit id blandit sabara boi velit gua mara?
          </p>
          <p className="text-[16px] text-[#A1ABCC] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
      </div>
      <div className="md:w-[556px] px-11 py-7 bg-[#e0e1ee] rounded-sm">
<h1 className="text-[24px] text-[#1D3178] font-semibold">Ask a Question</h1>
<input type="text" placeholder="Your Name*"  className="border text-[16px] mt-20 px-2 text-[#9096B2]  outline-gray-400 w-full py-4"/>
<input type="text" placeholder="Subject*"  className="border text-[16px] mt-4 px-2 text-[#9096B2]  outline-gray-400 w-full py-4"/>
     <textarea placeholder="Type Your Message*"  className="border text-[16px] h-[190px] mt-4 px-2 text-[#9096B2]  outline-gray-400 w-full py-4"></textarea>
      <button className="py-3 rounded px-10 text-white bg-[#FB2E86]  mt-6 mr-auto">Send Mail</button>
      </div>
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
