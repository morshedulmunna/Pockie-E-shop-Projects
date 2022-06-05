import React from "react";

const CardButtom = () => {
  return (
    <>
      <div className="flex items-center justify-between  h-[160px] w-full mx-5 mt-12 ">
        <div className="px-5 text-black">
          <span>Laptop</span>
          <p className="mt-8 font-semibold">Drunkenness Deep Flavor</p>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61h2kiuavTL._AC_UY218_.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CardButtom;
