import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import SinglePromoProduct from "./SinglePromoProduct";

const PromoProduct = () => {
  return (
    <div className="globalContainer mb-28">
      <div className="flex-between">
        <h2 className="globalH2"> Promo Product</h2>
        <div className="flex-center">
          <span className="font-semibold text-primary"> See All</span>
          <div className="ml-16 text-black flex-center">
            <i className="mr-6">
              <MdKeyboardArrowLeft />
            </i>
            <i>
              <MdKeyboardArrowRight />
            </i>
          </div>
        </div>
      </div>
      {/* Catagory */}
      <div className="flex-between flex-col lg:flex-row md:flex-row">
        <SinglePromoProduct />
        <SinglePromoProduct />
      </div>
    </div>
  );
};

export default PromoProduct;
