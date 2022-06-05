import React from "react";
import { IoHome } from "react-icons/io5";

const Catagories = () => {
  return (
    <div className="flex flex-col items-center px-12 mt-6 p-5 border-[1px] hover:border-green-500 py-7 border-white cursor-pointer">
      <i className="mb-6 text-7xl">
        <IoHome />
      </i>
      <p className="font-bold text-black">Real Estate</p>
    </div>
  );
};

export default Catagories;
