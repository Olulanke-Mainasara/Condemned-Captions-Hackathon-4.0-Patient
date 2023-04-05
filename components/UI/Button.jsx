import React from "react";

function Button({ cState, label, clickFunction }) {
  return (
    <button
      className={`relative ${
        cState ? "after:w-full" : ""
      } after:left-0 after:scale-x-110 after:content-[""] after:absolute after:-bottom-2  after:h-[2px] after:bg-[#1C665B]`}
      onClick={clickFunction}
    >
      {label}
    </button>
  );
}

export default Button;
