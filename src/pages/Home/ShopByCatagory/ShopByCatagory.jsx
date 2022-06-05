import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Catagories from "./Catagories";
import CatagoryByProduct from "./CatagoryByProduct";

const ShopByCatagory = () => {
  return (
    <div className="globalContainer">
      <div className="flex-between">
        <h2 className="globalH2"> Shop By Categories</h2>
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
      <div className="flex-between">
        <Catagories />
        <Catagories />
        <Catagories />
        <Catagories />
        <Catagories />
        <Catagories />
      </div>
      <div className="flex-between">
        <CatagoryByProduct />
        <CatagoryByProduct />
        <CatagoryByProduct />
        <CatagoryByProduct />
        <CatagoryByProduct />
        <CatagoryByProduct />
      </div>
    </div>
  );
};

export default ShopByCatagory;
