import { useState } from "react";
import RatingBatch2 from "./RatingBatch2";

const RatingDiv2 = () => {
  const ratingLoopArr = [1, 2, 3, 4, 5];
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center px-2 py-1 rounded">
      <div className="flex ml-2 font-medium space-x-1 justify-center items-center">
        {ratingLoopArr.map((star, index) => (
          <RatingBatch2 index={star} quantity={quantity} setQuantity={setQuantity} num={index} />
        ))}
      </div>
    </div>
  );
};

export default RatingDiv2;
