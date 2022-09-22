import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";
import "./MovieInterface.css";

function MovieInterface(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState("");
  //   const [flag, setFlag] = useState("");
  //   console.log(props.apiPath);
  //   if (props.apiPath != flag) {
  //     setFlag(props.apiPath);
  //   }

  //   console.log("왜 여러번");
  //   setUrl(props.apiPath);

  async function getMovieApi() {
    //console.log("get 무비 에이피아이 !!!!!!!!!!!!!");
    //console.log(movies.length);
    if (!props.apiPath) return;
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.apiPath}?api_key=458fb5b18777c017f4cb010f58f0e3fc&language=ko&region=kr`
    );
    setMovies(result.data.results);
    setLoading(false);
  }

  useEffect(() => {
    getMovieApi();
  }, [props.apiPath]);

  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <>
          {movies.map((e) => {
            return (
              <Movies
                key={e.id}
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

export default MovieInterface;
