import React from "react";

const CatagoryByProduct = ({ item }) => {
  const { image, title, price } = item;
  return (
    <>
      <div className="text-black rounded globalContainer">
        <div>
          <img className="h-[200px] w-full object-cover" src={image} alt="" />
          <h3> {title.slice(0, 20)} </h3>
          <p className="py-1 font-black">
            $<span>{price} </span>
          </p>
          <p className="text-blue-800 font-bold text-[11px] py-2">
            <span className="text-gray-400">by</span> Co. LTD Miner li
          </p>
        </div>
        <div className="absolute top-0 ">
          {/* <span className="px-2 text-sm font-semibold text-black rounded-lg bg-accent">
            Favorite
          </span> */}
        </div>
      </div>
    </>
  );
};

export default CatagoryByProduct;
