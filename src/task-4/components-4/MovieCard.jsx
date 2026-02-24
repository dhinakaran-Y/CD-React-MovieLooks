
const MovieCard = ({title, img, id , rating , popular, desc}) => {
  return (
    <div className="h-120 brightness-70 relative" key={id}>
      <img src={img} className="h-full object-center object-cover w-full" />
      <div className="absolute flex-col space-y-3 text-white/90 font-semibold bg-black/80 top-0 right-0 left-0 bottom-0 flex items-center justify-center opacity-0 text-div hover:opacity-100 transition-all duration-300">
        <h1 className="text-orange-600/70 capitalize font-semibold text-center text-3xl font-mono">
          {title}
        </h1>
        <p>Rating : {rating}</p>
        <p>Popular : {popular}</p>
        <p className="w-[90%] line-clamp-10">{desc}</p>
      </div>
    </div>
  );
};

export default MovieCard;