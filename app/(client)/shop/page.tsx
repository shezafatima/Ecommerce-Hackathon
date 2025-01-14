import shopData from "../../../data/shop.json";
import Link from "next/link";
import Image from "next/image";
export default function ShopList() {
  return (
    <div>
      <div className="bg-[#F6F5FF] h-[186px]  px-[50px] md:px-[150px]">
        <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
          Shop List
        </h1>
        <div className="mt-2 flex items-center gap-3 flex-wrap">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/faq" className="text-[#FB2E86] text-[16px]">
            Shop List{" "}
          </Link>
        </div>
      </div>
      <div className="flex mt-20  mx-[20px] lg:mx-[150px] justify-between flex-wrap">
        <div className="flex flex-col flex-wrap">
          <h1 className="text-[22px] text-[#151875] font-semibold">
            Ecommerce Acceories & Fashion item{" "}
          </h1>
          <p className="mt-2 text-[12px] text-[#8A8FB9]">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex mt-8 gap-5 flex-wrap">
          <div className="flex gap-2">
            <h1 className="text-[16px] text-[#3F509E]">Per Page:</h1>
            <div className="w-[55px] h-[25px] border border-[#E7E6EF]"></div>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-[16px] text-[#3F509E]">Sort By:</h1>
            <div className="w-[96px] h-[25px] border border-[#E7E6EF] text-[#3F509E] py-1 text-[12px] font-light text-center">
              Best Match{" "}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-[16px] text-[#3F509E]">View:</h1>
            <Image width={1000} height={1000} src="/view1.png" alt="" className="w-4" />
            <Image width={1000} height={1000} src="/view2.png" alt="" className="w-4" />
            <div className="w-[106px] h-[25px] border border-[#E7E6EF] "> </div>
          </div>
        </div>
      </div>
      <div className="mx-[20px] lg:mx-[130px] mt-10 gap-10">
        {shopData.shop.map((product) => (
          <div key={product.id}>
            <div className="flex mt-20 flex-wrap">
              <div className="">
                <Image
                  src={product.img}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-[320px] "
                />
              </div>
              <div className="flex flex-col justify-center mx-8 flex-wrap">
                <div className="flex gap-4 ">
                  <h1 className="text-[#151875] text-[18px] text-center font-semibold">
                    {product.name}
                  </h1>
                  <div className=" flex items-center gap-2">
                    <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
                    <div className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></div>
                    <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></div>
                  </div>
                </div>
                <div className="flex mt-2 gap-4">
                  <p className="text-[#151875] text-[16px] ">$26.00 </p>
                  <p className="text-[#FB2E86] text-[16px] ">$52.00</p>
                  <Image width={1000} height={1000} src="/Four Star.png" alt="" className="w-20 h-5 flex items-center justify-center" />
                </div>
                <div>
                  <p className="text-[17px] text-[#9295AA] md:w-[591px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </p>
                </div>
                <div className="flex  items-center gap-5">
                  <Image width={1000} height={1000} src="/productcart.png" alt=""  className="w-4"/>
                  <Image width={1000} height={1000} src="/heart.png" alt="" className="w-4" />
                  <Image width={1000} height={1000} src="/zoom.png" alt="" className="w-4" />
                </div>
              </div>
              <div className="flex  items-center flex-col  mt-1 space-y-2 mx-2 "></div>
            </div>
          </div>
        ))}
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
