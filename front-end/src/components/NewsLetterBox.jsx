import React from "react";

export const NewsLetterBox = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Suscribe now & get 20% off.
      </p>
      <p className="text-gray-300" mt-3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
      <form className="mt-5">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Suscribe
        </button>
      </form>
    </div>
  );
};
