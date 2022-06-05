import React from "react";

const MainHeader = () => {
  return (
    <div className="h-[56px] flex-between globalContainer">
      <div className="w-[40%] ">
        <p className="text-3xl font-bold">Pockie</p>
      </div>
      <div className="flex justify-between w-full ">
        <div className="w-full gap-4 flex-between">
          <input
            type="text"
            placeholder="Search Here............"
            class="input  input-bordered input-primary w-full text-black"
          />
          <button class="btn btn-primary">Search</button>
        </div>
        <div className="flex items-center justify-end ml-12 w-[10%]">
          <div className="mr-6 cursor-pointer hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="relative cursor-pointer hover:text-primary">
            {/* addto Cart */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute p-1 text-sm font-bold text-black rounded-full -top-2 left-3 bg-primary hover:bg-secondary">
              92
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
