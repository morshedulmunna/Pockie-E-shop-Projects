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
      <div className="flex-col px-5 flex-between lg:px-28 md:px-28 lg:flex-row md:flex-row globalContainer">
        <HotDeal />
        <HotDeal />
      </div>
      <PromoProduct />
    </>
  );
};

export default Home;
