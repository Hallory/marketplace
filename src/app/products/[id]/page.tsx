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
      <div className="flex w-full justify-between gap-6">
        <div className="w-4/6 max-h-[560px]">
          <img
            src={product.image}
            className="w-full h-full rounded-xl"
            alt=""
          />
        </div>

        <div className="w-2/6 max-h-[760px] flex flex-col pt-5">
        <div className="w-full flex justify-center">
            <img src={product.image} className="max-w-60 max-h-60 object-cover rounded-md" alt="" />
        </div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="my-4 text-lg">Size: 
            <ul className="flex gap-2">
              <li className="bg-gray-300 px-2 rounded-md hover:bg-gray-400 cursor-pointer">Small</li>
              <li className="bg-gray-300 px-2 rounded-md hover:bg-gray-400 cursor-pointer">Medium</li>
              <li className="bg-gray-300 px-2 rounded-md hover:bg-gray-400 cursor-pointer">Large</li>
            </ul>
          </p>
          <p className="my-4 text-lg">Color: 
            <ul className="flex gap-2">
              <li className="bg-gray-300 px-2 rounded-md hover:bg-gray-400 cursor-pointer">Red</li>
              <li className="bg-gray-300 px-2 rounded-md hover:bg-gray-400 cursor-pointer">Green</li>
              <li className="bg-gray-300 px-2 rounded-md hover:bg-gray-400 cursor-pointer">Blue</li>
            </ul>
          </p>
          <p>Delivery time: 3-5 days</p>
          <p>Delivery </p>
          <p>Price: {product.price} EUR </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
