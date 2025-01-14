import Image from "next/image";
import Link from "next/link";
export default function Contact() {
  return (
    <div>
      <div className="bg-[#F6F5FF] h-[186px] md:px-[150px] px-[50px]">
        <h1 className="text-[36px] text-[#101750] flex flex-wrap items-center pt-14 font-semibold ">
          Contact Us
        </h1>
        <div className="mt-2 flex items-center gap-3">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/contact" className="text-[#FB2E86] text-[16px]">
            Contact Us{" "}
          </Link>
        </div>
      </div>
      <div className="mt-28 grid md:grid-cols-2  mx-[20px] md:mx-[130px] gap-24">
        <div className="md:w-[550px]">
          <h1 className="text-[36px] text-[#151875] font-semibold ">
            Information About us
          </h1>
          <p className="mt-3 text-[16px] text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="flex items-center gap-[14px] mt-10">
            <div className="bg-[#5625DF] w-[25px] h-[25px] rounded-full"></div>
            <div className="bg-[#FF27B7] w-[25px] h-[25px] rounded-full"></div>
            <div className="bg-[#37DAF3] w-[25px] h-[25px] rounded-full"></div>
          </div>
        </div>
        <div className="md:w-[550px]">
          <h1 className="text-[36px] text-[#151875] font-semibold ">
            Contact Way
          </h1>
          <div className="mt-14 flex flex-col gap-6 flex-wrap">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-[45px] h-[45px] bg-[#5726DF] rounded-full"></div>
                <div className="flex flex-col ">
                  <p className="mt-3 text-[16px] text-[#8A8FB9]">
                    Tel: 877-67-88-99
                  </p>
                  <p className=" text-[16px] text-[#8A8FB9]">
                    E-Mail: shop@store.com
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-3">
                <div className="w-[45px] h-[45px] bg-[#FB2E86] rounded-full"></div>
                <div className="flex flex-col ">
                  <p className="mt-3 text-[16px] text-[#8A8FB9]">
                    Support Forum
                  </p>
                  <p className=" text-[16px] text-[#8A8FB9]">For over 24hr</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-3 ">
                <div className="w-[45px] h-[45px] bg-[#FFB265] rounded-full"></div>
                <div className="flex flex-col ">
                  <p className="mt-3 text-[16px] text-[#8A8FB9]">
                    20 Margaret st, London
                  </p>
                  <p className=" text-[16px] text-[#8A8FB9]">
                    Great britain, 3NM98-LK
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[45px] h-[45px] bg-[#1BE982] rounded-full"></div>
                <div className="flex flex-col ">
                  <p className="mt-3 text-[16px] text-[#8A8FB9]">
                    Free standard shipping
                  </p>
                  <p className=" text-[16px] text-[#8A8FB9]">on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
        <h1 className="text-[36px] text-[#151875] font-semibold ">
            Get In Touch
          </h1>
          <p className="mt-3 text-[16px] text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristiq
          </p>
          <div className="mt-11">
            <div className="flex gap-6 flex-wrap">
                <input type="text" placeholder="Your Name*" className="py-2 outline-1 text-center pr-[68px] border outline-gray-500" />
                <input type="text" placeholder="Your Email*"  className="py-2 outline-1  text-center pr-[68px] border outline-gray-500"/>

            </div>
            <input type="text" placeholder="Subject"  className="mt-6 p-2 py-2 outline-1 text-start w-full border outline-gray-500" />
    <textarea placeholder="Type Your Message"  className="mt-6  outline-1 text-start w-full h-[166px] border p-2 outline-gray-500"  ></textarea>
    <button className="py-2  rounded-md px-10 text-white bg-[#FB2E86]  mt-6 mr-auto">Send Mail</button>
          </div>
        </div>
        <div className="mt-20 ">
            <Image
            src="/contact.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-[723px]"/>
        </div>
      </div>
    </div>
  );
}
