import React from "react";

const HotDeal = () => {
  return (
    <>
      <div className="globalContainer text-black my-12 px-12">
        <div className="flex items-center justify-center flex-col-reverse lg:flex-row md:flex-row">
          <div className="px-6 w-1/2">
            <span className="mb-12">Hot Deal</span>
            <h2 className="globalH2 py-8 ">
              TOURS SAFE TRUE DISCOUNT TOURS SAFE TRUE DISCOUNT
            </h2>
            <button class="globalBtn w-1/2 mx-auto">Order Now</button>
          </div>
          <img
            className="w-[300px]"
            src="https://m.media-amazon.com/images/I/61pi0H5hKSL._AC_UY218_.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HotDeal;
