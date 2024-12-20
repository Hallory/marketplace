"use client";
import { RootState } from "@/app/store/store";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const params = useParams();
  const id = params.id;

  const product = useSelector((state: RootState) =>
    state.products.items.find((product) => product.id === Number(id))
  );

  if (!id) {
    return <div>Product not found</div>;
  }
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-col mx-auto">
      <div className="flex flex-row gap-10 justify-between">
        <div className="w-[580px] h-[580px] bg-white">
          <img src={product.image} className="w-full object-contain max-w-[600px] max-h-[462px]" alt={product.title} />
        </div>
        <div className=" max-w-2xl">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-lg">{product.description}</p>
          <p className="text-lg font-bold">€{product.price}</p>
        </div>
        <div className="max-w-[250px]">
          <p className="text-lg">€{product.price}</p>
        </div>
      </div> 
    </div>
  );
};

export default ProductDetailsPage;
