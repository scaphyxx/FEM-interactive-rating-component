"use client";

import React from "react";
import { useRating } from "../src/store";

const RatingField = () => {
  return (
    <div className="flex justify-between">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <button
          key={index}
          onClick={() => useRating.setState({ rating: index + 1 })}
          className="bg-lighGray/10 rounded-full w-7 h-7 flex items-center justify-center transition-all ease-out text-lighGray text-xs hover:bg-orange hover:text-white focus:bg-lighGray focus:text-white"
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default RatingField;
