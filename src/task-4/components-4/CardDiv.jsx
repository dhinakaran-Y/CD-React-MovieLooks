import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

const CardDiv = () => {
  const [inputVal, setInputVal] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const BASE_API = "https://mimic-server-api.vercel.app/movies";
  const [topRate, setTopRate] = useState(false);
  const [popular, setPopular] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      let response;
      if (inputVal !== "") {
        response = await fetch(`${BASE_API}?q=${inputVal}`);
      } else {
        response = await fetch(BASE_API);
      }
      const data = await response.json();
      const sortedData = data.sort((a, b) =>
        a.original_title.localeCompare(b.original_title, "ta-IN"),
      );

      if (topRate) {
        sortedData.sort((a, b) => b.vote_average - a.vote_average);
      }

      if (popular) {
        sortedData.sort((a, b) => b.popularity - a.popularity);
      }

      setMoviesData(sortedData);
      setMoviesCount(sortedData.length);
    }

    fetchUsers();
  }, [inputVal, topRate, popular]);

  return (
    <>
      {/* aside */}
      <aside className="col-span-3 h-full py-8 space-y-7 px-8 border-r border-white/50">
        {/* input */}
        <input
          type="search"
          className="w-full px-3 py-2 rounded-full border border-white/50 focus:border-orange-600 focus:outline-none"
          placeholder="Search by movie name"
          onInput={(e) =>
            e.target.value.length > 1
              ? setInputVal(e.target.value.trim())
              : setInputVal("")
          }
        />

        {/* top rated */}
        <div className="flex items-center ml-3">
          <input
            id="rating-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-white/50 rounded focus:ring focus:ring-orange-600"
            onChange={() => setTopRate(!topRate)}
          />
          <label
            htmlFor="rating-checkbox"
            className="select-none ml-2 text-sm font-medium text-heading">
            Top Rated
          </label>
        </div>

        {/* popular */}
        <div className="flex items-center ml-3">
          <input
            id="popular-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-white/50 rounded focus:ring focus:ring-orange-600"
            onChange={() => setPopular(!popular)}
          />
          <label
            htmlFor="popular-checkbox"
            className="select-none ml-2 text-sm font-medium text-heading">
            Popular
          </label>
        </div>

        {/* filter Indication div */}
        <div className="text-orange-500">
          {inputVal !== "" && (
            <p>
              Movies are filtered by name : <span>{inputVal}</span>
            </p>
          )}
        </div>
      </aside>

      {/* movie section */}
      {moviesCount > 0 ? (
        <section className="col-span-9 grid grid-cols-3 gap-10 h-full overflow-y-scroll p-8">
          <div className="col-span-full py-5 relative">
            <hr className="border border-white/20 mr-25" />
            <span className="text-white/50 absolute right-0 top-1/6">
              {moviesCount} movies
            </span>
          </div>
          {moviesData.map((movies, index) => {
            return (
              <MovieCard
                title={movies.original_title}
                img={movies.poster_path}
                key={`${movies.id}${index}`}
                rating={movies.vote_average}
                popular={movies.popularity}
                desc={movies.overview}
              />
            );
          })}
        </section>
      ) : (
        <div className="text-red-500 text-center font-semibold items-center col-span-9 content-center">
          no data found
        </div>
      )}
    </>
  );
};

export default CardDiv;
