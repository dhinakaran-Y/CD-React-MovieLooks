import { useEffect, useState } from "react";
import InputDiv from "./Form/InputDiv";

const FormDiv = ({ setFormShow, formShow, refreshData }) => {
  const [editMovie, setEditMovie] = useState({});

  useEffect(() => {
    (function showModal() {

      if (formShow.deleteId === null) {
        document.getElementById("dialogEl").showModal();

        async function fetchEditUser(movieId) {
          try {
            const response = await fetch(
              `https://mimic-server-api.vercel.app/movies/${movieId}`,
            );

            if (!response.ok) throw new Error("Failed to get movie");

            const data = await response.json();
            // console.log(data);
            setEditMovie(data);
            // const { original_title, vote_average, poster_path, overview } = data;
          } catch (error) {
            console.error("API fetch error :", error);
          }
        }

        if (formShow.editId !== null) {
          fetchEditUser(formShow.editId);
        }
      }
    })();
  }, [formShow]);

  async function handleSubmit(e) {
    e.preventDefault();

    const { movieTitle, movieRating, moviePopularity, movieOverview } =
      e.target;

    const newMovieData = {
      title: movieTitle.value,
      rating: Number(movieRating.value),
      popularity: Number(moviePopularity.value),
      overview: movieOverview.value,
    };

    async function postNewMovie() {
      try {
        const response = await fetch(
          "https://mimic-server-api.vercel.app/movies",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              adult: false,
              genre_ids: [28, 80, 53],
              original_language: "ta",
              original_title: newMovieData.title,
              overview: newMovieData.overview,
              popularity: newMovieData.popularity,
              poster_path:
                "https://www.designer-daily.com/wp-content/uploads/2012/12/lord-war-creative-movie-posters.jpg",
              release_date: "2025-01-24",
              title: newMovieData.title,
              video: false,
              vote_average: newMovieData.rating,
              vote_count: 1,
            }),
          },
        );

        if (!response.ok) throw new Error("Failed to post movie");

        // const data = await response.json();
        // console.log("ok" ,data);
        alert("Movie added successfully!");
      } catch (error) {
        console.error("Error in posting movie:", error);
        alert("Something went wrong.");
      }
    }

    async function editMovie(movieId) {
      try {
        const response = await fetch(
          `https://mimic-server-api.vercel.app/movies/${movieId}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              // adult: false,
              // genre_ids: [28, 80, 53],
              // original_language: "ta",
              original_title: newMovieData.title,
              overview: newMovieData.overview,
              popularity: newMovieData.popularity,
              // poster_path:
              //   "https://www.designer-daily.com/wp-content/uploads/2012/12/lord-war-creative-movie-posters.jpg",
              // release_date: "2025-01-24",
              title: newMovieData.title,
              // video: false,
              vote_average: newMovieData.rating,
              // vote_count: 1,
            }),
          },
        );

        if (!response.ok) throw new Error("Failed to post movie");

        //  const data = await response.json();
        //  console.log("ok" ,data);
        alert("Movie updated successfully!");
      } catch (error) {
        console.error("API PUT error", error);
        alert("Something went wrong in PUT API");
      }
    }

    if (
      formShow.action === true &&
      formShow.editId === null &&
      formShow.deleteId === null
    ) {
      postNewMovie();
    } else if (
      formShow.action === true &&
      formShow.editId !== null &&
      formShow.deleteId === null
    ) {
      editMovie(formShow.editId);
    }
    // reset data
    await setFormShow({ action: false, editId: null, deleteId: null });
    refreshData();
    // console.log("done");
  }

  return (
    <dialog
      id="dialogEl"
      className="m-auto pb-3 justify-self-center text-black mt-[10vh] rounded-2xl bg-slate-50 z-20 w-xl absolute float-end">
      {/* close btn */}
      <button
        type="button"
        className="absolute top-3 right-4 hover:text-orange-600 cursor-pointer outline-none"
        onClick={() => setFormShow(false)}
        title="close">
        X
      </button>
      <form className="w-full space-y-3 h-full p-5" onSubmit={handleSubmit}>
        {/*  head  */}
        <div className="mb-5">
          <h2
            className="text-xl text-orange-600 text-center font-semibold"
            id="dialog-title">
            {formShow.editId === null ? "Add Movie" : "Edit Movie"}
          </h2>
        </div>
        {/* title */}
        <InputDiv
          label={"Movie name"}
          inputId={"movieTitle"}
          movieValue={editMovie.original_title || ""}
        />
        <InputDiv
          label={"Movie Rating"}
          inputId={"movieRating"}
          inputType="number"
          movieValue={editMovie.vote_average}
        />
        <InputDiv
          label={"Movie Popularity"}
          inputId={"moviePopularity"}
          inputType="number"
          movieValue={editMovie.popularity}
        />
        <div className="flex flex-col space-y-1">
          <label htmlFor="movieOverview">Movie Overview</label>
          <textarea
            id="movieOverview"
            name="movieOverview"
            className="px-3 py-1 bg-gray-200 rounded-lg focus:outline-2 outline-orange-300"
            placeholder="Movie Overview"
            rows={6}
            defaultValue={editMovie.overview || ""}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white px-3 py-1 text-center hover:bg-orange-700 active:bg-amber-800 rounded-lg mt-4">
          Submit
        </button>
      </form>
    </dialog>
  );
};

export default FormDiv;
