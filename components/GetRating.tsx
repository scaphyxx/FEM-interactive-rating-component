"use client";

import { useRating } from "../src/store";

const GetRating = () => {
  return (
    <div>
      <p className="bg-lighGray/10 rounded-full px-3 py-1 text-orange text-xs">
        You selected {useRating.getState().rating} out of 5
      </p>
    </div>
  );
};

export default GetRating;
