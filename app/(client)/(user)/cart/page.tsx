import Image from "next/image";
import Link from "next/link";
export default function ShoppingCart() {
  return (
    <div>
      <div className="bg-[#F6F5FF] h-[186px] px-[50px] md:px-[150px]">
        <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
          Shopping Cart
        </h1>
        <div className="mt-2 flex items-center gap-3 flex-wrap">
          <Link href="/" className="text-black text-[16px]">
            Home .{" "}
          </Link>
          <Link href="/" className="text-black text-[16px]">
            Pages .{" "}
          </Link>
          <Link href="/faq" className="text-[#FB2E86] text-[16px]">
            Shopping Cart{" "}
          </Link>
        </div>
      </div>
      <div className="flex md:mx-[150px] mx-[20px] mt-20 gap-6 " >
        <div className="flex md:w-[718px] w-[218px]">
          <div>
            <div className="grid grid-cols-4 space-x-16">
              <h1 className="text-[20px] text-[#1D3178] font-semibold">
                Product
              </h1>
              <h1 className="text-[20px] text-[#1D3178] font-semibold pl-4">
                Price
              </h1>
              <h1 className="text-[20px] text-[#1D3178] font-semibold">
                Quantity
              </h1>
              <h1 className="text-[20px] text-[#1D3178] font-semibold">
                Total
              </h1>
            </div>
            
                <div>

{/* <div className="flex mt-10">
  <Image width={1000} height={1000}
    src="/cross.png"
    alt="cross"
    className="absolute ml-[76px] -mt-1 w-3"
    />
  <Image
    src="/cart2.png"
    alt="cart"
    width={1000}
    height={1000}
    className="w-[83px] "
    />
  <div className="flex flex-col justify-center mx-4 ">
    <h1 className="text-[14px] text-black font-semibold">
    Vel faucibus posuere
    </h1>
    <p className="text-[#A1A8C1] text-[12px]">Color Brown</p>
    <p className="text-[#A1A8C1] text-[12px]">Size : XL</p>
  </div>
  <div className="flex justify-center items-center mx-16">
    <h1 className="text-[12px] font-semibold text-[#15245E]">
      $32.00
    </h1>
  </div>
  <div className="flex justify-center items-center mx-16">
    <div className="bg-[#e2e3e7] w-[51px] h-[15px] text-center flex items-center justify-center p-2 text-[14px] text-[#b0b1b4]">
      - 1 +
    </div>
  </div>
  <div className="flex justify-center items-center mx-16">
    <h1 className="text-[12px] font-semibold text-[#15245E]">
      ‎£219.00
    </h1>
  </div>
</div>
<hr className="mt-8" />
    </div>
    <div>

<div className="flex mt-10">
  <Image width={1000} height={1000}
    src="/cross.png"
    alt="cross"
    className="absolute ml-[76px] -mt-1 w-3"
    />
  <Image
    src="/cart3.png"
    alt="cart"
    width={1000}
    height={1000}
    className="w-[83px] "
    />
  <div className="flex flex-col justify-center mx-4 ">
    <h1 className="text-[14px] text-black font-semibold">
    Ac vitae vestibulum
    </h1>
    <p className="text-[#A1A8C1] text-[12px]">Color Brown</p>
    <p className="text-[#A1A8C1] text-[12px]">Size : XL</p>
  </div>
  <div className="flex justify-center items-center mx-16">
    <h1 className="text-[12px] font-semibold text-[#15245E]">
      $32.00
    </h1>
  </div>
  <div className="flex justify-center items-center mx-16">
    <div className="bg-[#e2e3e7] w-[51px] h-[15px] text-center flex items-center justify-center p-2 text-[14px] text-[#b0b1b4]">
      - 1 +
    </div>
  </div>
  <div className="flex justify-center items-center mx-16">
    <h1 className="text-[12px] font-semibold text-[#15245E]">
      ‎£219.00
    </h1>
  </div>
</div>
<hr className="mt-8" />
    </div>
    <div>

<div className="flex mt-10">
  <Image width={1000} height={1000}
    src="/cross.png"
    alt="cross"
    className="absolute ml-[76px] -mt-1 w-3"
    />
  <Image
    src="/cart4.png"
    alt="cart"
    width={1000}
    height={1000}
    className="w-[83px] "
    />
  <div className="flex flex-col justify-center mx-4 ">
    <h1 className="text-[14px] text-black font-semibold">
    Elit massa diam
    </h1>
    <p className="text-[#A1A8C1] text-[12px]">Color Brown</p>
    <p className="text-[#A1A8C1] text-[12px]">Size : XL</p>
  </div>
  <div className="flex justify-center items-center mx-16">
    <h1 className="text-[12px] font-semibold text-[#15245E]">
      $32.00
    </h1>
  </div>
  <div className="flex justify-center items-center mx-16">
    <div className="bg-[#e2e3e7] w-[51px] h-[15px] text-center flex items-center justify-center p-2 text-[14px] text-[#b0b1b4]">
      - 1 +
    </div>
  </div>
  <div className="flex justify-center items-center mx-16">
    <h1 className="text-[12px] font-semibold text-[#15245E]">
      ‎£219.00
    </h1>
  </div>
</div>
<hr className="mt-8" />
    </div>
    <div>

<div className="flex mt-10">
  <Image width={1000} height={1000}
    src="/cross.png"
    alt="cross"
    className="absolute ml-[76px] -mt-1 w-3"
    />
  <Image
    src="/cart5.png"
    alt="cart"
    width={1000}
    height={1000}
    className="w-[83px] "
    />
  <div className="flex flex-col justify-center mx-4 ">
    <h1 className="text-[14px] text-black font-semibold">
    Proin pharetra elementum
    </h1>
    <p className="text-[#A1A8C1] text-[12px]">Color Brown</p>
    <p className="text-[#A1A8C1] text-[12px]">Size : XL</p>
  </div>
  <div className="flex justify-center items-center mx-16">
    <h1 className="text-[12px] font-semibold text-[#15245E]">
      $32.00
    </h1>
  </div>
  <div className="flex justify-center items-center mx-16">
    <div className="bg-[#e2e3e7] w-[51px] h-[15px] text-center flex items-center justify-center p-2 text-[14px] text-[#b0b1b4]">
      - 1 +
    </div>
  </div>
  <div className="flex justify-center items-center mx-16">
    <h1 className="text-[12px] font-semibold text-[#15245E]">
      ‎£219.00
    </h1>
  </div>
</div>
<hr className="mt-8" />
    </div> */}
    <div className="flex justify-between items-center mt-8 flex-wrap">
        <Link href="/products">
    <button className="py-2 rounded-sm px-4 text-white bg-[#FB2E86]  ">Update Cart</button>
        </Link>
    <button className="py-2 rounded-sm px-4 text-white bg-[#FB2E86]   ">Clear Cart</button>
    </div>
          </div>
          
        </div>
        <div className="flex flex-col">

        <div  className="flex   items-center flex-col flex-wrap">
        <h1 className="text-[20px] text-[#1D3178] font-semibold text-center">
              Cart Totals
              </h1>
              <div className="w-[351px] h-[294px] bg-[#efeff0] mt-10 p-7 rounded-sm ">
<div className="flex justify-between items-center">
<h1 className="text-[20px] text-[#1D3178] ">SubTotals:</h1>
<h1 className="text-[20px] text-[#1D3178] ">‎£219.00</h1>
</div>
<hr  className="mt-6 bg-black"/>
<div className="flex justify-between items-center mt-10">
<h1 className="text-[20px] text-[#1D3178] ">Totals:</h1>
<h1 className="text-[20px] text-[#1D3178] ">‎£325.00</h1>
</div>
<hr  className="mt-6 bg-black"/>
<div className="flex items-center mt-4 gap-2">
<Image width={1000} height={1000} src="/check1.png" alt="" className="w-2 h-2" /> <p className="text-[12px] text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
</div>
<Link href="/">
<button className="bg-[#19D16F] text-white text-[14px] text-center py-3 rounded-sm w-full mt-4">Proceed To Checkout</button>
</Link>
              </div>
              
        </div>
        <div  className="flex   items-center flex-col mt-20 flex-wrap">
        <h1 className="text-[20px] text-[#1D3178] font-semibold text-center">
              Calculate Shopping
              </h1>
              <div className="w-[351px] h-[294px] bg-[#efeff0] mt-10 p-7 rounded-sm ">

<div className="">

<h1 className="text-[20px] text-[#C5CBE3] ">Bangladesh</h1>

<hr  className="mt-3 bg-black"/>
</div>

<div className="mt-6">

<h1 className="text-[20px] text-[#C5CBE3] ">Mirpur Dhaka - 1200</h1>

<hr  className="mt-3 bg-black"/>
</div>

<div className="mt-6">

<h1 className="text-[20px] text-[#C5CBE3] ">Postal Code</h1>

<hr  className="mt-3 bg-black"/>
</div>
<Link href="/ordercompleted">
<button className="py-2 rounded-sm px-4 text-white bg-[#FB2E86] mt-7 ">Calculate Shiping</button>
</Link>


              </div>
              
        </div>
        </div>
        

      </div>
    </div>
    </div>
  );
}