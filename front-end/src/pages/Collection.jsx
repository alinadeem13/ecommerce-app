import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopCIntext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductsItems from "../components/ProductsItems";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [categoryFilters, setCategoryFilters] = useState([]);
  const [subCategoryFilters, setSubCategoryFilters] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 pb-20 border-t">
      {/* Sidebar */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
          <img
            className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}
            src={assets?.dropdown_icon}
            alt="Filters Icon"
          />
        </p>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilters ? "block" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Categories</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Men" />
              Men
            </label>

            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Women" />
              Women
            </label>

            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Kids" />
              Kids
            </label>
          </div>
        </div>

        {/* SubCategoty Filters */}

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilters ? "block" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value={"Topwear"} />
              Topwear
            </label>

            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value={"Bottomwear"} />
              Bottomwear
            </label>

            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value={"Winterwear"} />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title textOne={"All"} textTwo={"Collections"} />

          {/* Sorting Products */}

          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort By</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}

        <div className="grid grid-cols02 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => {
            return (
              <ProductsItems
                key={index}
                id={item?._id}
                name={item?.name}
                price={item?.price}
                image={item?.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
