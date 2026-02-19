import GenreBatch from "./GenreBatch";
import { useState } from "react";

const MovieCard = ({ title, desc, img1 , img2 , genre, num}) => {

  
  const [quantity, setQuantity] = useState(1);

  return (
    <header>
      <div className="grid grid-cols-5 h-full gap-5 items-center " key={num}>
        {/* left */}
        <div className="col-span-2 space-y-10 p-10">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p> {desc} </p>
          <div className="flex flex-wrap *:whitespace-nowrap space-x-4 space-y-3 *:last:h-[33.6px]!">
            {genre.map((genre) => (
              <GenreBatch genreName={genre} />
            ))}
          </div>
          {/* star */}
          <div className="flex items-center px-2 py-1 rounded">
            <button
              className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer flex items-center pb-1 justify-center rounded-full text-white text-xl font-bold ml-2 h-8 w-8"
              onClick={() => setQuantity(() => Math.max(1, quantity - 1))}>
              -
            </button>
            <div className="flex ml-2 font-medium space-x-1 justify-center items-center">
              <span>{quantity}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    className={`${num % 2 == 0 ? "fill-amber-600/70" : "fill-white/70"}`}
                    d="m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z"
                  />
                </svg>
              </span>
            </div>
            <button
              className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer flex items-center pb-1 justify-center rounded-full text-white text-xl font-bold ml-2 h-8 w-8"
              onClick={() => setQuantity(() => Math.min(5, quantity + 1))}>
              +
            </button>
          </div>
        </div>
        {/* right */}
        <div className="col-span-3 flex space-x-3 justify-center items-center">
          <img className="h-110 w-75 border border-gray-600" src={img1} />
          <img className="h-110 w-75 border border-gray-600" src={img2} />
        </div>
      </div>
    </header>
  );
};

export default MovieCard;
