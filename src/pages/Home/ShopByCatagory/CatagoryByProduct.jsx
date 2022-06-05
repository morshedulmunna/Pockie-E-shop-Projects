import React from "react";

const CatagoryByProduct = () => {
  return (
    <>
      <div className=" h-[172px] mt-6 rounded text-black px-10 relative">
        <div className="mt-12">
          <img
            src="https://m.media-amazon.com/images/I/61M-QNJf4pL._AC_UY218_.jpg"
            alt=""
          />
          <h3>Apply Mackbook Pro 2019 MWP4535SA43</h3>
          <p className="py-1 font-black">
            $<span>2,340.45</span>
          </p>
          <p className="text-blue-800 font-bold text-[11px] py-2">
            <span className="text-gray-400">by</span> Co. LTD Miner li
          </p>
        </div>
        <div className="absolute top-0 ">
          <span className="px-4 py-1 font-semibold text-black rounded-lg bg-accent">
            Favorite
          </span>
        </div>
      </div>
    </>
  );
};

export default CatagoryByProduct;
