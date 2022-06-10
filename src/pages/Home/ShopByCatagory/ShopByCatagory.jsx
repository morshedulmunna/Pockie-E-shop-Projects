import React, { useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Catagories from "./Catagories";
import CatagoryByProduct from "./CatagoryByProduct";

const ShopByCatagory = () => {
  const [catagory, setCatagory] = React.useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCatagory(data);
      });
  }, []);

  return (
    <div className="globalContainer mb-28">
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
      <div className="grid grid-cols-9 gap-5">
        {catagory.map((item) => (
          <CatagoryByProduct item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCatagory;
