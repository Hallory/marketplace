"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchAllProducts } from "../store/productsSlice";
import Link from "next/link";

const ProductsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, status } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Failed to load products.</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {items.map((product) => (
          <div className="border p-4" key={product.id}>
            <img
              className="w-full h-48 object-cover"
              src={product.image}
              alt=""
            />
             <h2 className="text-lg font-bold">
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </h2>
            <p className="text-sm text-gray-700">{product.description}</p>
            <p className="text-lg font-semibold">{product.price} €</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
