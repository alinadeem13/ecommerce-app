import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopCIntext";
import Title from "./Title";
import ProductsItems from "./ProductsItems";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title textOne={"Latest"} textTwo={"Collections"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          {" "}
          Lorem Ipsum Collection
        </p>
      </div>

      {/* Rendering Products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {/* {latestProducts.map((product) => (
          <div key={product.id} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
              <img
                className="hover:scale-110 transistion ease-in-out"
                src={product.image[0]}
                alt="Product Image"
              />
            </div>
            <p className="pt-3 pb-1 text-sm">{product.name}</p>
            <p className="text-sm font-medium">{product.price}</p>
          </div>
        ))} */}

        {latestProducts?.map((item, index) => (
          <ProductsItems
            key={index}
            id={item?._id}
            image={item?.image}
            name={item?.name}
            price={item?.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
