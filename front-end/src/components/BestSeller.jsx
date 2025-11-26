import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopCIntext";
import Title from "./Title";
import ProductsItems from "./ProductsItems";

const BestSeller = () => {
  const { products } = useContext(ShopContext);

  const [bestsellerItems, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((product) => product.bestseller);

    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title textOne="Best" textTwo="Sellers" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum here is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols4 lg:grid-cols-5 gap-y-6">
        {console.log("Hmmm", bestsellerItems)}
        {bestsellerItems.map((item, index) => {
          return (
            <ProductsItems
              key={index}
              id={item?._id}
              name={item?.name}
              image={item?.image}
              price={item?.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
