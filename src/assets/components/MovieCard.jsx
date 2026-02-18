import GenreBatch from "./GenreBatch";

const MovieCard = ({ title, desc, img1 , img2 , genre}) => {
  return (
    <header>
      <div className="grid grid-cols-5 h-full gap-5 items-center ">
        {/* left */}
        <div className="col-span-2 space-y-10 p-10">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p> {desc} </p>
          <div className="flex flex-wrap *:whitespace-nowrap space-x-4 space-y-3 *:last:h-[33.6px]!">
            {genre.map((genre) => (
              <GenreBatch genreName={genre} />
            ))}
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
