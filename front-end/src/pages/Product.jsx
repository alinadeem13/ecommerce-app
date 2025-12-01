import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopCIntext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    if (!products || products.length === 0) return;

    const found = products.find((p) => p._id === productId);

    if (found) {
      setProductData(found);
      setImage(found.image[0]);
    } else {
      setProductData(null);
    }
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Images Section */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img
              onClick={() => setImage(image)}
              src={image}
              alt="Image"
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* Product Informations */}
        <div className="flex-1">
          <h1 className="fint-medium text-2xl mt-2">{productData?.name}</h1>
          <div className="flex item-center gap-1 mt-2">
            <img src={assets?.star_icon} alt=" " className="w-3 5" />

            <img src={assets?.star_icon} alt=" " className="w-3 5" />

            <img src={assets?.star_icon} alt=" " className="w-3 5" />

            <img src={assets?.star_icon} alt=" " className="w-3 5" />

            <img src={assets?.star_dull_icon} alt=" " className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData?.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData?.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2 relative z-20">
              {productData?.sizes?.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setSize(value)}
                  className={`border py-2 px-4 rounded bg-gray-100 cursor-pointer
        ${size === value ? "border-orange-500 font-semibold" : ""}`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">
            Add to Cart
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on Delivery Available</p>
            <p>Easy Return and Exchange Policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* ------------- Description & Review Section */}

      <div className="mt-20 mb-28">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            {productData?.longDescription ||
              "No additional description available."}
          </p>
          <p>E-Commerce Product Description available here in this section.</p>
        </div>
      </div>
      {/* Display Relaed Products */}

      <RelatedProducts
        category={productData?.category}
        subCategory={productData?.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
