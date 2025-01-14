"use client";
import { Loader2, Search } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }
    setLoading(true);
    try {
      const query = `*[_type == "product" && name match $search] | order(name asc)`;
      const params = { search: `${search}*` };
      const response = await client.fetch(query, params);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 300); // Debounce for 300ms
    return () => clearTimeout(debounceTimer);
  }, [search, fetchProducts]);

  const handleItemClick = () => {
    setSearch(""); // Reset the search bar
    setProducts([]); // Clear the product list
  };

  return (
    <div className="relative">
      <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="border border-gray-400 outline-gray-400 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className={`bg-[#FB2E86] w-8 h-[26px] text-white ${search}`}
          disabled={!search}
        >
          <Search className="flex justify-center items-center p-1 " />
        </button>
      </form>

      {/* Display Search Results */}
      <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
        {loading ? (
          <p className="p-4 text-[#FB2E86] flex items-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" /> Searching...
          </p>
        ) : products.length ? (
          products.map((product: Product) => (
            <div
              key={product?._id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleItemClick} 
            >
              <Link href={`/product/${product.slug?.current}`} className="flex items-center w-full">
                {product?.images && (
                  <Image
                    src={urlFor(product?.images[0]).url()}
                    alt="name"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-md border border-gray-200"
                  />
                )}
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold text-gray-800">{product?.name}</h3>
                  <p className="text-sm text-gray-600">{product?.intro}</p>
                </div>
              </Link>
            </div>
          ))
        ) : search ? (
          <p className="p-4 text-red-600">No products found for &quot;{search}&quot;.</p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
