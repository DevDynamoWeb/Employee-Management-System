import { set } from "mongoose";
import React, { useState } from "react";

const Accepttask = ({ data }) => {
  
  return (
    <div
      className="h-full w-80 bg-yellow-400 rounded-lg flex-shrink-0 p-3"
      key={data.taskId}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-black font-bold underline italic">
          Task-{data.taskId}
        </h1>

        <h2 className="text-black">{data.date}</h2>
      </div>
      <div className="mt-2">
        <h1 className="text-xl text-black font-bold">{data.title}</h1>
      </div>
      <div className="mt-2">
        <h1 className="text-[15px] text-black">{data.description}</h1>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="mt-2 py-1 px-3 text-sm bg-green-500 text-black rounded-md"
        >
          Mark as Complete{" "}
        </button>
        <button className="mt-2 py-1 px-3 text-sm bg-red-500 text-black rounded-md">
          Mark as Failed{" "}
        </button>
      </div>
    </div>
  );
};

export default Accepttask;
