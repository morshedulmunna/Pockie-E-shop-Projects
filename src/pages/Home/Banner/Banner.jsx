import React from "react";
import Slider from "./Slider";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 px-12 py-12">
        <div className="flex-col h-[564px] col-span-2  flex justify-between py-12">
          <p className="globalH2">Asus Super Sale Laptop Gaming</p>
          <img
            src="https://m.media-amazon.com/images/I/716MnuVzSJS._AC_UY218_.jpg"
            alt=""
          />
          <button class="globalBtn w-1/2 mx-auto">Order Now</button>
        </div>
        <div className="col-span-7">
          <Slider />
          <div className="h-[172px]">Cad</div>
        </div>
        <div className="col-span-3"> right </div>
      </div>
    </>
  );
};

export default Banner;
