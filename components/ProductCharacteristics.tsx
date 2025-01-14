import { Product } from "@/sanity.types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ProductCharacteristics = ({ product }: { product: Product }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[#FB2E86]">{product?.name}: Characteristics</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1 ">
          <p className="flex items-center justify-between text-[#0D134E]">
            Brand: <span className="font-semibold tracking-wide">Hekto</span>
          </p>
          <p className="flex items-center justify-between text-[#0D134E]">
            Collection:{" "}
            <span className="font-semibold tracking-wide">2025</span>
          </p>
          <p className="flex items-center justify-between text-[#0D134E]">
            Type:{" "}
            <span className="font-semibold tracking-wide">
              {product?.status}
            </span>
          </p>
          <p className="flex items-center justify-between text-[#0D134E]">
            Stock:{" "}
            <span className="font-semibold tracking-wide">
              {product?.stock ? "Available" : "Out of Stock"}
            </span>
          </p>
          <p className="flex items-center justify-between text-[#0D134E]">
            Intro:{" "}
            <span className="font-semibold tracking-wide">
              {product?.intro}
            </span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;