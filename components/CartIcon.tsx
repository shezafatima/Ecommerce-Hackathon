"use client";
import useCartStore from "@/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  const { items } = useCartStore();
  return (
    <Link href={"/shopingcart"} className="group relative mx-2">
      <ShoppingCart className="w-5 h-5  text-white " />
      <span className="absolute -top-2 -right-1  text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {items.length ? items.length : 0}
      </span>
    </Link>
  );
};

export default CartIcon;