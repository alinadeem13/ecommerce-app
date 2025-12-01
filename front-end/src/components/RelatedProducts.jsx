import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopCIntext";
import Title from "./Title";
import ProductsItems from "./ProductsItems";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);

  const [relatedProducts, setRelatedProducts] = React.useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    let productsCopy = products.slice();

    productsCopy = productsCopy.slice();
    productsCopy = productsCopy.filter((p) => category === p.category);
    productsCopy = productsCopy.filter((p) => subCategory === p.subCategory);

    setRelatedProducts(productsCopy.slice(0, 5));
  }, [category, subCategory, products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title textOne={"Related"} textTwo={"Products"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map((item, index) => {
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

export default RelatedProducts;
