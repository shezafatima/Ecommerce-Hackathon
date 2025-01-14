"use client";
import Container from "../../../../components/Container";
import EmptyCart from "../../../../components/EmptyCart";
import Loading from "../../../../components/Loading";
import NoAccessToCart from "../../../../components/NoAccessToCart";
import PriceFormatter from "../../../../components/PriceFormatter";
import QuantityButtons from "@/components/QuantityButtons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import {  X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import paypalLogo from "@/images/paypalLogo.png";
import {
  createCheckoutSession,
  Metadata,
} from "../../../../actions/createCheckoutSession";

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isSignedIn } = useAuth();
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubtotalPrice,
    resetCart,
    getGroupedItems,
  } = useCartStore();
  const { user } = useUser();
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }
  const cartProducts = getGroupedItems();

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your Cart?");
    if (confirmed) {
      resetCart();
      toast.success("Your cart reset successfully!");
    }
  };
  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product deleted successfully!");
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };
      const checkoutUrl = await createCheckoutSession(cartProducts, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
      {isSignedIn ? (
        <Container>
          {cartProducts?.length ? (
            <>
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

              <Container className="flex">
              <div className="">
                <div>

              <div className="flex items-center justify-around mx-6">
              <h1 className="text-[20px] text-[#1D3178] font-semibold ">
                Product
              </h1>
              <h1 className="text-[20px] text-[#1D3178] font-semibold ">
                Price
              </h1>
              <h1 className="text-[20px] text-[#1D3178] font-semibold">
                Quantity
              </h1>
              <h1 className="text-[20px] text-[#1D3178] font-semibold">
                Total
              </h1>
            </div>

              {cartProducts?.map(({ product }) => {
                const itemCount = getItemCount(product?._id);
                return (
                  <div key={product?._id}>
                    <div className="grid-cols-4 grid mt-10 ">
                      <div className="flex">

                      <div>
                        

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <X
                              onClick={() => handleDeleteProduct(product?._id)}
                              className="absolute ml-[76px] -mt-1 w-3 h-3 p-[2px]  text-white bg-black rounded-full"
                            />
                          </TooltipTrigger>
                          <TooltipContent className="font-bold bg-red-600">
                            Delete product
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {product?.images && (
                        <Image
                          src={urlFor(product?.images[0]).url()}
                          alt="cart"
                          width={1000}
                          height={1000}
                          className="w-[83px] "
                          />
                        )}
                        </div>
                      <div className="flex flex-col justify-center mx-4 ">
                        <h1 className="text-[14px] text-black font-semibold">
                          {product?.name}
                        </h1>
                        <p className="text-[#A1A8C1] text-[12px]">
                          Color Brown
                        </p>
                        <p className="text-[#A1A8C1] text-[12px]">
                          Status :{product?.status}
                        </p>
                      </div>
                      </div>
                      <div className="flex justify-center items-center mx-16">
                        <h1 className="text-[12px] font-semibold text-[#15245E]">
                          ${product?.price}
                        </h1>
                      </div>
                      <div className="flex justify-center items-center mx-16">
                        <div className="bg-[#e2e3e7] w-[51px] h-[20px] text-center flex items-center justify-center p-2  text-[#b0b1b4]">
                          <QuantityButtons product={product} />
                        </div>
                      </div>
                      <div className="flex justify-center items-center mx-16">
                        <h1 className="text-[12px] font-semibold text-[#15245E]">
                        <PriceFormatter
                            amount={(product?.price as number) * itemCount}
                            />
                          {/* <PriceFormatter amount={getTotalPrice()} /> */}
                        </h1>
                      </div>
                    </div>
                    <hr className="mt-8" />

                    <div></div>
                    
                  </div>
                  
                );
              })}
              </div>
              <div className="flex items-center justify-between mt-4 mx-[40px]">
                      <Link href={"/"}>
                        <Button className="py-2 rounded-sm px-4 text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]">
                          Update Cart
                        </Button>
                      </Link>

                      <Button
                        onClick={handleResetCart}
                        className="py-2 rounded-sm px-4 text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]"
                      >
                        Clear Cart
                      </Button>
                    </div>
              </div>
              <div className="flex   items-center flex-col flex-wrap">
                  <h1 className="text-[20px] text-[#1D3178] font-semibold text-center">
                    Cart Totals
                  </h1>
                  <div className="w-[351px] h-[294px] bg-[#efeff0] mt-10 p-7 rounded-sm ">
                    <div className="flex justify-between items-center">
                      <span className="text-[20px] text-[#1D3178] ">
                        SubTotals:
                      </span>
                      <PriceFormatter amount={getSubtotalPrice()} />
                    </div>
                    {/* {getSubtotalPrice() - getTotalPrice() > 0 ? (
                      <div className="flex justify-between items-center mt-10">
                        <span className="text-[20px] text-[#1D3178]">
                          Discount:
                        </span>
                        <PriceFormatter
                          amount={getSubtotalPrice() - getTotalPrice()}
                        />
                      </div>
                    ) : (
                      <span className="text-[16px] text-gray-500">
                        No discounts applied
                      </span>
                    )} */}

                    
                     <hr className="mt-6 bg-black" />
                    <div className="flex justify-between items-center mt-10">
                      <span className="text-[20px] text-[#1D3178] ">
                        Totals:
                      </span>

                      <PriceFormatter amount={getTotalPrice()} />
                    </div>
                    <hr className="mt-6 bg-black" />
                    <div className="flex items-center mt-4 gap-2">
                      <Image
                        width={1000}
                        height={1000}
                        src="/check1.png"
                        alt=""
                        className="w-2 h-2"
                      />{" "}
                      <p className="text-[12px] text-[#8A91AB]">
                        Shipping & taxes calculated at checkout
                      </p>
                    </div>

                    <button
                      disabled={loading}
                      onClick={handleCheckout}
                      className="bg-[#19D16F] text-white text-[14px] text-center py-3 rounded-sm w-full mt-4"
                    >
                      Proceed To Checkout
                    </button>
                    <Link
                      href={"/"}
                      className="flex items-center justify-center py-2 border border-gray-900 rounded-sm hover:border-black hover:bg-gray-700 mt-6 hoverEffect"
                    >
                      <Image
                        src={paypalLogo}
                        alt="paypalLogo"
                        className="w-20"
                      />
                    </Link>
                  </div>
                </div>
              </Container>
              <div className="grid lg:grid-cols-3 md:gap-8">
                {/* Products */}
                <div className="lg:col-span-2 rounded-lg">
                  <div className="border bg-white rounded-md">
                    
                      
                       
                        
                     
                  
                    
                  </div>
                </div>
                {/* summary */}
               
                {/* <div className="lg:col-span-1">
                  <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-4">
                      Order Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <PriceFormatter amount={getSubtotalPrice()} />
                      </div>
                      <div className="flex justify-between">
                        <span>Discount</span>
                        <PriceFormatter
                          amount={getSubtotalPrice() - getTotalPrice()}
                        />
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span>Total</span>
                        <PriceFormatter
                          amount={getTotalPrice()}
                          className="text-lg font-bold text-black"
                        />
                      </div>
                      <Button
                        disabled={loading}
                        onClick={handleCheckout}
                        className="w-full rounded-full font-semibold tracking-wide"
                        size="lg"
                      >
                        Proceed to Checkout
                      </Button>
                      <Link
                        href={"/"}
                        className="flex items-center justify-center py-2 border border-darkColour/50 rounded-full hover:border-darkColour hover:bg-darkColour/5 hoverEffect"
                      >
                        <Image
                          src={paypalLogo}
                          alt="paypalLogo"
                          className="w-20"
                        />
                      </Link>
                    </div>
                  </div>
                </div> */}
                {/* Order summary for mobile view */}
                <div className="md:hidden fixed bottom-0 left-0 w-full bg-white pt-2">
                  <div className="p-4 rounded-lg border mx-4">
                    <h2 className="text-xl font-semibold mb-4">
                      Order Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <PriceFormatter amount={getSubtotalPrice()} />
                      </div>
                      <div className="flex justify-between">
                        <span>Discount</span>
                        <PriceFormatter
                          amount={getSubtotalPrice() - getTotalPrice()}
                        />
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span>Total</span>
                        <PriceFormatter
                          amount={getTotalPrice()}
                          className="text-lg font-bold text-black"
                        />
                      </div>
                      <Button
                        onClick={handleCheckout}
                        className="w-full rounded-full font-semibold tracking-wide"
                        size="lg"
                      >
                        Proceed to Checkout
                      </Button>
                      <Link
                        href={"/"}
                        className="flex items-center justify-center py-2 border border-darkColour/50 rounded-full hover:border-darkColour hover:bg-darkColour/5 hoverEffect"
                      >
                        <Image
                          src={paypalLogo}
                          alt="paypalLogo"
                          className="w-20"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>








            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccessToCart />
      )}
    </div>
  );
};

export default CartPage;
