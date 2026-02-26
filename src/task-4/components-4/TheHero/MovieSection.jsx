import MovieCard from "../MovieCard";

const MovieSection = ({ moviesData, moviesCount }) => {
  if (moviesCount === 0) {
    return (
      <div className="text-red-500 text-center font-semibold col-span-9 content-center">
        no data found
      </div>
    );
  }

  return (
    <section className="col-span-9 grid grid-cols-3 gap-10 h-full overflow-y-scroll p-8">
      <div className="col-span-full py-5 relative">
        <hr className="border border-white/20 mr-25" />
        <span className="text-white/50 absolute right-0 top-1/6">
          {moviesCount} movies
        </span>
      </div>

      {moviesData.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.original_title}
          img={movie.poster_path}
          rating={movie.vote_average}
          popular={movie.popularity}
          desc={movie.overview}
        />
      ))}
    </section>
  );
};

export default MovieSection;
