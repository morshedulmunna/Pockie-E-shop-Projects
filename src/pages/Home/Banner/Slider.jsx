import React from "react";

const Slider = () => {
  return (
    <>
      <div className="h-[367px] relative ml-12">
        <div>{/* slider */}</div>
        <div className="absolute top-28 ">
          <span className="font-bold text-gray-800 ">New Product</span>
          <h1 className="py-12 mt-3 globalH1">
            HAND WATCH <br /> ROSSINI
          </h1>
          <button class="btn btn-primary mx-auto">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Slider;
