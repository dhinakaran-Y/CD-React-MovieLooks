import { useEffect, useMemo, useState } from "react";
import AsideDiv from "./AsideDiv";
import MovieSection from "./MovieSection";
import UseFetchMovies from "../CustomHook/UseFetchMovies";
import FormDiv from "../../../task-4/components-4/FormDiv";

const TheHero = () => {
  const [inputVal, setInputVal] = useState("");
  const [topRate, setTopRate] = useState(false);
  const [popular, setPopular] = useState(false);
  const [formShow, setFormShow] = useState({
    action: false,
    editId: null,
    deleteId: null,
  });

  const [moviesArr, fetchError, isLoading, refetch] = UseFetchMovies(
    `https://mimic-server-api.vercel.app/movies`,
  );

  const filteredMovies = useMemo(() => {
    let list = [...moviesArr];
    if (inputVal) {
      list = list.filter((movies) =>
        movies.original_title?.toLowerCase().includes(inputVal.toLowerCase()),
      );
    }
    if (topRate)
      list.sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0));
    if (popular) list.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

    return list;
  }, [inputVal, moviesArr, topRate, popular]);

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
      const deleteConfirm = confirm(
        "Are you Sure you want to delete the movie",
      );
      if (deleteConfirm !== true) {
        setFormShow({ action: false, editId: null, deleteId: null });
        return;
      }

      async function handleDeleteMovie() {
        await deleteMovie(formShow.deleteId);
        // reset data
        setFormShow({ action: false, editId: null, deleteId: null });
        refetch();
      }

      handleDeleteMovie();
    }
  }, [formShow.deleteId,refetch]);

  return (
    <main className="grid grid-cols-12 gap-5 h-[90vh]">
      <AsideDiv
        setInputVal={setInputVal}
        setPopular={setPopular}
        setTopRate={setTopRate}
        inputVal={inputVal}
        setFormShow={setFormShow}
      />
      <MovieSection
        movies={filteredMovies}
        isLoading={isLoading}
        error={fetchError}
        setFormShow={setFormShow}
      />
      {formShow.action && (
        <FormDiv
          setFormShow={setFormShow}
          formShow={formShow}
          refreshData={refetch}
        />
      )}
    </main>
  );
};;

export default TheHero;
