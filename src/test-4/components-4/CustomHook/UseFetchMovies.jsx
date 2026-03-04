import { useEffect, useState } from "react";

const UseFetchMovies = (url) => {
  const [moviesArr, setMoviesData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reRender, setReRender] = useState(0)

  const refetch = () => setReRender(prev => prev + 1);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies(url) {
      try {
        setFetchError(null);
        setIsLoading(true);

        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok)
          throw new Error(`${response.status}-${response.type}-API Fetch`);

        const data = await response.json();
        const sortedData = [...data].sort((pre, cur) => {
          const titleA = pre.original_title.trim() ?? "";
          const titleB = cur.original_title.trim() ?? "";
          return titleA.localeCompare(titleB);
        });
        
        setMoviesData(sortedData);
      } catch (error) {
        if (error.name !== "AbortError") {
          setFetchError(error.message);
          console.error("fetch error,", error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (url) {
      fetchMovies(url);
    }

    // clean up function
    return () => controller.abort();
  }, [url,reRender]);

  return [moviesArr, fetchError, isLoading, refetch];
};

export default UseFetchMovies;