import FormDiv from "./FormDiv";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

const CardDiv = () => {
  const [inputVal, setInputVal] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const BASE_API = "https://mimic-server-api.vercel.app/movies";
  const [topRate, setTopRate] = useState(false);
  const [popular, setPopular] = useState(false);
  const [formShow, setFormShow] = useState({
    action: false,
    editId: null,
    deleteId: null,
  });
  const [reRender, setReRender] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      let response;
      if (inputVal !== "") {
        response = await fetch(`${BASE_API}?q=${inputVal}`);
      } else {
        response = await fetch(BASE_API);
      }
      const data = await response.json();
      const sortedData = [...data].sort((a, b) => {
        const titleA = a.original_title ?? "";
        const titleB = b.original_title ?? "";
        return titleA.localeCompare(titleB);
      });

      if (topRate) {
        sortedData.sort((a, b) => {
          const A = a.vote_average ?? 0;
          const B = b.vote_average ?? 0;
          return B - A;
        });
      }

      if (popular) {
        sortedData.sort((a, b) => {
          const A = a.popularity ?? 0;
          const B = b.popularity ?? 0;
          return B - A;
        });
      }

      setMoviesData(sortedData);
      setMoviesCount(sortedData.length);
    }
    fetchMovies();
  }, [inputVal, topRate, popular, reRender]);

  function refreshData() {
    setReRender((pre) => pre + 1);
  }

  // delete
  useEffect(() => {
    async function deleteMovie(movieId) {
      try {
        const response = await fetch(
          `https://mimic-server-api.vercel.app/movies/${movieId}`,
          {
            method: "DELETE",
          },
        );

        if (!response.ok) throw new Error("Failed to post movie");

        //  const data = await response.json();
        //  console.log("ok" ,data);
        alert("Movie deleted successfully!");
      } catch (error) {
        console.error("API PUT error", error);
        alert("Something went wrong in delete API");
      }
    }

    // delete
    if (formShow.deleteId !== null) {
      // confirm msg from user
      const deleteConfirm = confirm("Are you Sure you want to delete the movie");
      if (deleteConfirm !== true) {
        setFormShow({ action: false, editId: null, deleteId: null });
        return
      }

      async function handleDeleteMovie() {
        await deleteMovie(formShow.deleteId);
      // reset data
      setFormShow({ action: false, editId: null, deleteId: null });
      refreshData();
      }

      handleDeleteMovie()      
    }
  }, [formShow.deleteId]);

  // console.log(formShow);
  
  return (
    <>
      {/* aside */}
      <aside className="col-span-3 h-screen py-8 space-y-7 px-8 border-r border-white/50">
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

        <div className="">
          <button
            className="w-full px-4 text-center text-white bg-orange-600 rounded-full py-1 cursor-pointer hover:bg-amber-700 active:scale-105"
            type="button"
            onClick={() =>{
              setFormShow({ action: true, editId: null, deleteId: null });
            }
            }>
            + Add Movies
          </button>
        </div>
      </aside>

      {/* movie section */}
      {moviesCount > 0 ? (
        <section className="col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full overflow-y-scroll p-8">
          <div className="col-span-full py-5 relative">
            <hr className="border border-white/20 mr-25" />
            <span className="text-white/50 absolute right-0 top-1/6">
              {moviesCount} movies
            </span>
          </div>
          {moviesData.map((movie, index) => {
            return (
              <MovieCard
                title={movie.original_title}
                img={movie.poster_path}
                key={`${movie.id}${index}`}
                id={movie.id}
                rating={movie.vote_average}
                popular={movie.popularity}
                desc={movie.overview}
                setFormShow={setFormShow}
              />
            );
          })}
        </section>
      ) : (
        <div className="text-red-500 text-center font-semibold items-center col-span-9 content-center">
          no data found
        </div>
      )}
      <div className=""></div>

      {formShow.action && (
        <FormDiv
          setFormShow={setFormShow}
          formShow={formShow}
          refreshData={refreshData}
        />
      )}
    </>
  );
};

export default CardDiv;
