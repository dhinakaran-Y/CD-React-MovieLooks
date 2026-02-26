import { useEffect, useState } from "react";
import AsideDiv from "./AsideDiv";
import MovieSection from "./MovieSection";

const TheHero = () => {
  const [inputVal, setInputVal] = useState("");
  const [moviesData, setMoviesData] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const [topRate, setTopRate] = useState(false);
  const [popular, setPopular] = useState(false);

  const BASE_API = "https://mimic-server-api.vercel.app/movies";

  useEffect(() => {
    async function fetchMovies() {
      let response;

      if (inputVal !== "") {
        response = await fetch(`${BASE_API}?q=${inputVal}`);
      } else {
        response = await fetch(BASE_API);
      }

      const data = await response.json();
      let sortedData = [...data];

      if (topRate) {
        sortedData.sort((a, b) => b.vote_average - a.vote_average);
      } else if (popular) {
        sortedData.sort((a, b) => b.popularity - a.popularity);
      } else {
        sortedData.sort((a, b) =>
          a.original_title.localeCompare(b.original_title),
        );
      }

      setMoviesData(sortedData);
      setMoviesCount(sortedData.length);
    }

    fetchMovies();
  }, [inputVal, topRate, popular]);

  return (
    <>
      <AsideDiv
        inputVal={inputVal}
        setInputVal={setInputVal}
        topRate={topRate}
        setTopRate={setTopRate}
        popular={popular}
        setPopular={setPopular}
      />

      <MovieSection moviesData={moviesData} moviesCount={moviesCount} />
    </>
  );
};

export default TheHero;
