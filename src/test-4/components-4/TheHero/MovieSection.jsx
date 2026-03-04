import MovieCard from "../MovieCard";

const MovieSection = ({ movies, isLoading, error, setFormShow }) => {
  return (
    <section className="col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full overflow-y-auto p-8">
      {/*Count */}
      <div className="col-span-full py-5 relative">
        <hr className="border border-white/20 mr-25" />
        <span className="text-white/50 absolute right-0 top-1/6">
          {movies.length} movies
        </span>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="col-span-full text-center text-white text-xl">
          🎬 Loading Movies...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="col-span-full text-red-400 text-center">
          <p>Error: {error}</p>
        </div>
      )}

      {/* Movie Cards */}
      {!isLoading &&
        movies.length > 0 &&
        movies.map((movie, index) => (
          <MovieCard key={`${movie.id}${index}`} setFormShow={setFormShow} {...movie} />
        ))}

      {/* no data*/}
      {!isLoading && !error && movies.length === 0 && (
        <div className="col-span-full text-center text-gray-400">
          No movies found.
        </div>
      )}
    </section>
  );
};

export default MovieSection;