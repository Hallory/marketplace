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
            <img
              src={product.image}
              className="max-w-60 max-h-60 object-cover rounded-md"
              alt=""
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <div className="mb-6">
            <p className="text-lg font-semibold mb-2">Size:</p>
            <ul className="flex gap-3">
              {["Small", "Medium", "Large"].map((size) => (
                <li
                  key={size}
                  className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 cursor-pointer transition"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-lg font-semibold mb-2">Color:</p>
            <ul className="flex gap-3">
              {["Red", "Green", "Blue"].map((color) => (
                <li
                  key={color}
                  className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition ${
                    color === "Red"
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : color === "Green"
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {color}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-lg font-semibold">Delivery time:</p>
            <p className="text-gray-700">3-5 days</p>
          </div>

          <div className="mb-6">
            <p className="text-lg font-semibold mb-2">Delivery variants:</p>
            <ul className="flex gap-3">
              {["Standard", "Express"].map((variant) => (
                <li
                  key={variant}
                  className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 cursor-pointer transition"
                >
                  {variant}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-bold">Price: {product.price} EUR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
