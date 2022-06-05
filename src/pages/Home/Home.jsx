import React from "react";
import Banner from "./Banner/Banner";
import HotDeal from "./HotDeal/HotDeal";
import PromoProduct from "./PromoProduct/PromoProduct";
import ShopByCatagory from "./ShopByCatagory/ShopByCatagory";

const Home = () => {
  return (
    <>
      <Banner />
      <ShopByCatagory />
      <div className="flex-between px-5 lg:px-28 md:px-28 flex-col lg:flex-row md:flex-row globalContainer">
        <HotDeal />
        <HotDeal />
      </div>
      <PromoProduct />
    </>
  );
};

export default Home;
