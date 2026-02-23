import { useState } from "react";
import RatingBatch from "./RatingBatch";

const RatingDiv = () => {
  const ratingLoopArr = [1, 2, 3, 4, 5];
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center px-2 py-1 rounded">
      <button
        className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer flex items-center pb-1 justify-center rounded-full text-white text-xl font-bold ml-2 h-8 w-8"
        onClick={() => setQuantity(() => Math.max(1, quantity - 1))}>
        -
      </button>
      <div className="flex ml-2 font-medium space-x-1 justify-center items-center">
        {ratingLoopArr.map((star, index) => (
          <RatingBatch index={star} quantity={quantity} num={index} />
        ))}
      </div>
      <button
        className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer flex items-center pb-1 justify-center rounded-full text-white text-xl font-bold ml-2 h-8 w-8"
        onClick={() => setQuantity(() => Math.min(5, quantity + 1))}>
        +
      </button>
    </div>
  );
};

export default RatingDiv;
