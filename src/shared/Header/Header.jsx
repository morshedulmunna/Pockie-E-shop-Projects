import React from "react";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <>
      <header className="h-[168px] bg-black ">
        <TopHeader />
        <MainHeader />
      </header>
    </>
  );
};

export default Header;
