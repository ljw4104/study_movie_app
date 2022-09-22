import PropTypes from "prop-types";
import "./Movies.css";

function Movies(props) {
  return (
    <div className="movie">
      <div>무비컴포</div>
      <div className="movie_data">
        <img
          className="post"
          width={250}
          src={`https://image.tmdb.org/t/p/original${props.post}`}
        />
        <div className="title">타이틀 : {props.title}</div>
        <div className="over">오버뷰 : {props.over.slice(0, 70)}...</div>
        <div className="aver">평점 : {"👍".repeat(Math.floor(props.aver))}</div>
        <div className="adu">19 {props.adu ? "19" : null}</div>
        <div className="lang">언어 : {props.lang}</div>
        <div className="release movieinfo">개봉일 : {props.release}</div>
        <div className="movie_id">아이디 : {props.movie_id}</div>
      </div>
    </div>
  );
}

Movies.propTypes = {
  movie_id: PropTypes.number,
  release: PropTypes.string,
  title: PropTypes.string,
};

export default Movies;
