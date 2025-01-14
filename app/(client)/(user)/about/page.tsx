import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div>
      <div className="bg-[#F6F5FF] h-[286px] md:px-[150px] px-[50px]">
        <h1 className="text-[36px] text-[#101750] flex items-center pt-24 font-semibold ">
          About Us
        </h1>
        <div className="mt-2 flex items-center gap-3 flex-wrap">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/about" className="text-[#FB2E86] text-[16px]">
            About{" "}
          </Link>
        </div>
      </div>
      <div className="md:flex items-center justify-center  mt-[120px] gap-[30px] md:mx-[130px] mx-[20px]">
        <div className="md:w-[452px] md:h-[309px] w-[352px] h-[209px] bg-[#2B3CAB] rounded-md pl-5 ">
          <Image
            src="/about.png"
            alt="about"
            width={1000}
            height={1000}
            className="md:w-[455px] md:h-[300px] w-[355px] h-[200px]"
          />
        </div>
        <div className="flex flex-col justify-center  items-center md:w-[522px]">
          <h1 className="font-semibold text-[36px] text-[#151875]">
            Know About Our Ecommerce Business, History
          </h1>
          <p className="mt-3 text-[#8A8FB9] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <Link href="/contact">
          <button className="py-3 px-10 text-white bg-[#FB2E86] rounded-md mt-6 mr-auto">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
      <h1 className="text-[42px] text-black flex justify-center items-center text-center font-semibold mt-20">
        Our Features
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[28px] md:mx-[130px] mx-[20px] mt-[55px]">
        <div className="shadow-xl p-4">
          <Image
            src="/support1.png"
            alt="support"
            width={1000}
            height={1000}
            className=" flex justify-center items-center  mx-auto text-center w-[65px] h-[65px]"
          />
          <h1 className=" flex justify-center items-center text-center text-[22px] text-[#151875]">
            24/7
          </h1>
          <p className=" flex justify-center items-center text-center text-[16px] text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>

        <div className="shadow-xl p-4">
          <Image
            src="/support2.png"
            alt="support"
            width={1000}
            height={1000}
            className=" flex justify-center items-center  mx-auto text-center w-[65px] h-[65px]"
          />
          <h1 className=" flex justify-center items-center text-center text-[22px] text-[#151875]">
            24/7
          </h1>
          <p className=" flex justify-center items-center text-center text-[16px] text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="shadow-xl p-4">
          <Image
            src="/support3.png"
            alt="support"
            width={1000}
            height={1000}
            className=" flex justify-center items-center  mx-auto text-center w-[65px] h-[65px]"
          />
          <h1 className=" flex justify-center items-center text-center text-[22px] text-[#151875]">
            24/7
          </h1>
          <p className=" flex justify-center items-center text-center text-[16px] text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="shadow-xl p-4">
          <Image
            src="/support4.png"
            alt="support"
            width={1000}
            height={1000}
            className=" flex justify-center items-center  mx-auto text-center w-[65px] h-[65px]"
          />
          <h1 className=" flex justify-center items-center text-center text-[22px] text-[#151875]">
            24/7
          </h1>
          <p className=" flex justify-center items-center text-center text-[16px] text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
      </div>
      <div className="md:mx-[130px] mx-[20px]">
        <h1 className="text-[42px] text-black flex justify-center items-center text-center font-semibold mt-48">
          Our Client Say!
        </h1>
        <div className="mt-16 flex items-center  justify-center gap-[13px]">
          <Image
          width={1000}
          height={1000}
            src="/client1.png"
            alt=""
            className="w-[55px] h-[55px] rounded "
          />
          <Image
          width={1000}
          height={1000}
            src="/client2.png"
            alt=""
            className="w-[55px] h-[59px] rounded mb-2"
          />
          <Image
          width={1000}
          height={1000}
            src="/client3.png"
            alt=""
            className="w-[55px] h-[55px] rounded"
          />
        </div>
        <div className="mt-6 flex flex-col justify-center items-center">
          <h1 className="text-[#151875] text-center text-[22px]">
            Selina Gomez
          </h1>
          <p className="mt-2 text-[10px] text-[#8A8FB9] text-center">
            Ceo At Webecy Digital
          </p>
          <p className="text-center text-[16px] text-[#8A8FB9] mt-6 md:w-[689px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent.
          </p>
        </div>
      </div>
    </div>
  );
}
