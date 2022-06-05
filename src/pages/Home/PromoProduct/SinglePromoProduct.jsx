import React from "react";
import Timerer from "./Timerer";

const SinglePromoProduct = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center flex-col lg:flex-row md:flex-row mt-12">
          <img
            src="https://m.media-amazon.com/images/I/61M-QNJf4pL._AC_UY218_.jpg"
            alt=""
          />
          <div className="text-black ml-5">
            <p>Apple Macbook Air MWTJ2SA/A Space Grey (2020)</p>
            <p className="py-1 font-black">
              $<span>2,340.45</span>
              <span className=" line-through ml-6">3,340.45</span>
            </p>
            <div className="flex-between pt-2">
              <p>
                Sold: <span>700</span>{" "}
              </p>
              <p>
                In Stock: <span>300</span>
              </p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              class="range range-xs  mt-2"
            />
            <Timerer />
            <button class="globalBtn w-full mt-6 mx-auto">Order Now</button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SinglePromoProduct;
