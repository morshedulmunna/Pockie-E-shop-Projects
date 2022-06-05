import React from "react";
import CardButtom from "./CardButtom";
import CardRight from "./CardRight";
import CardRightTop from "./CardRightTop";
import Slider from "./Slider";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 px-12 py-12 w-[1780px] mx-auto">
        <div className="flex-col h-[564px] col-span-2  flex justify-between py-12">
          <p className="globalH2">
            Asus Super cool Sale Laptop Gaming | Top Class Brand
          </p>
          <img
            src="https://m.media-amazon.com/images/I/716MnuVzSJS._AC_UY218_.jpg"
            alt=""
          />
          <button class="globalBtn w-1/2 mx-auto">Order Now</button>
        </div>
        <div className="col-span-7">
          <Slider />
          <div className="h-[172px] flex items-center justify-between">
            <CardButtom />
            <CardButtom />
            <CardButtom />
          </div>
        </div>
        <div className="col-span-3 px-5">
          <CardRightTop />
          <CardRightTop />
          <div className="flex items-center justify-between">
            <CardRight />
            <CardRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
