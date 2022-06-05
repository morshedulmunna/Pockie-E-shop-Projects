import React from "react";
import {
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
  RiServiceLine,
} from "react-icons/ri";

const TopHeader = () => {
  return (
    <>
      <div className="h-[56px] flex-between globalContainer">
        <div className="flex-between">
          <i className="pr-2 cursor-pointer hover:text-primary">
            <RiFacebookBoxLine />
          </i>
          <i className="px-2 cursor-pointer hover:text-primary">
            <RiLinkedinBoxLine />
          </i>
          <i className="px-2 cursor-pointer hover:text-primary">
            <RiTwitterLine />
          </i>
          <i className="px-2 cursor-pointer hover:text-primary">
            <RiServiceLine />
          </i>
        </div>
        <ul className="flex-between">
          <li className="px-5 text-sm transition-all cursor-pointer hover:text-primary">
            Introduce
          </li>
          <li className="px-5 text-sm transition-all cursor-pointer hover:text-primary">
            Partner Incentives
          </li>
          <li className="px-5 text-sm transition-all cursor-pointer hover:text-primary">
            Promotion
          </li>
          <li className="px-5 text-sm transition-all cursor-pointer hover:text-primary">
            Contact
          </li>
          <li className="pl-5 text-sm transition-all cursor-pointer hover:text-primary">
            Frequently asked questions
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopHeader;
