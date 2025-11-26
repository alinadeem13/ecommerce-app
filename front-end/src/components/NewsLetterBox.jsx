import React from "react";

export const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for subscribing!");
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Suscribe now & get 20% off.
      </p>
      <p className="text-gray-300" mt-3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-ful sm:w-1/2 flex itmes-center gap-3 mx-auto my-6 border pl-3"
      >
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
          SUSCRIBE
        </button>
      </form>
    </div>
  );
};
