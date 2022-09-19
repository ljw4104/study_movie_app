import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./components/Movies";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState("");

  async function getMovieApi() {
    if (0 < movies.length) return;
    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=458fb5b18777c017f4cb010f58f0e3fc&page=3&language=ko&region=kr"
    );
    setMovies(result.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getMovieApi();
  }, []);

  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <>
          <div>영화목록</div>
          {movies.map((e) => {
            return (
              <Movies
                movie_id={e.id}
                post={e.poster_path}
                over={e.overview}
                aver={e.vote_average}
                adu={e.adult}
                lang={e.original_language}
                release={e.release_date}
                title={e.title}
              ></Movies>
            );
          })}
          {/* <Movies 
            post={movies[0].poster_path}
            over={movies[0].overview}
            aver={movies[0].vote_average}
            adu={movies[0].adult}
            lang={movies[0].original_language}
            release={movies[0].release_date}
            title={movies[0].title}
          ></Movies> */}
        </>
      )}
    </>
  );
}

export default App;
