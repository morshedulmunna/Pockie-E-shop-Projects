import React from "react";

const Timerer = () => {
  return (
    <>
      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col pl-6">
          <span class="countdown font-mono text-3xl">
            <span></span>
          </span>
          days
        </div>
        <div class="flex flex-col pl-6">
          <span class="countdown font-mono text-3xl">
            <span></span>
          </span>
          hours
        </div>
        <div class="flex flex-col pl-6">
          <span class="countdown font-mono text-3xl">
            <span></span>
          </span>
          min
        </div>
        <div class="flex flex-col pl-6">
          <span class="countdown font-mono text-3xl">
            <span></span>
          </span>
          sec
        </div>
      </div>
    </>
  );
};

export default Timerer;
