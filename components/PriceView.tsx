import React from "react";
import PriceFormatter from "./PriceFormatter";
import { cn } from "@/lib/utils";

interface Props {
  price: number | undefined;
  discount: number | undefined;

  priceClassName?: string;
  discountClassName?: string;
}

const PriceView = ({ price, discount, priceClassName, discountClassName }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <PriceFormatter amount={price}  className={priceClassName} />
      {price && discount && (
        <PriceFormatter
          amount={price + (discount * price) / 100}
          className={cn("line-through font-medium text-zinc-500", discountClassName)}
        />
      )}
    </div>
  );
};

export default PriceView;