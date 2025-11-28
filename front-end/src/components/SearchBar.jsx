import React, { useEffect } from "react";
import { ShopContext } from "../context/ShopCIntext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    React.useContext(ShopContext);
  const [visible, setVisible] = React.useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location?.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  if (!showSearch) return null;

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 py-3 flex items-center justify-center gap-3">
      {/* Search Box */}
      <div className="flex items-center gap-3 w-3/4 sm:w-1/2 bg-white px-4 py-2 rounded-full border border-gray-300 shadow-sm">
        <img src={assets.search_icon} className="w-4 opacity-70" alt="Search" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none text-sm bg-transparent"
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* Close Button */}
      <img
        onClick={() => setShowSearch(false)}
        className="w-4 cursor-pointer opacity-70 hover:opacity-100 transition"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
