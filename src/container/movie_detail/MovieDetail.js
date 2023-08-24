import { useParams } from "react-router-dom";
import LayoutWrapper from "../../wrapper_components/LayoutWrapper";
import { useEffect, useState } from "react";
import { fetch_movie_cast, fetch_movie_detail } from "./service";
import MovieDetailCard from "./components/MovieDetailCard";
import { convert_minutes_to_hours_and_minutes } from "../../utils/common";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const path = useParams();
  const movieId = path["movieId"];

  const get_movie_data = async () => {
    try {
      const detailResponse = await fetch_movie_detail(movieId);
      const castResponse = await fetch_movie_cast(movieId);
      return { detail: detailResponse.data, cast: castResponse.data };
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (movieId) {
        const { detail, cast } = await get_movie_data();
        if (detail && cast) {
          const {
            title,
            vote_average,
            release_date,
            runtime,
            overview,
            poster_path,
          } = detail;
          const { cast: actors, crew } = cast;
          const director = crew.find((member) => member.job === "Director");

          const movieDetailTemp = {
            title,
            rating: vote_average,
            year: release_date.substring(0, 4),
            length: runtime,
            director: director ? director.name : "N/A",
            actors: actors.map((actor) => actor.name).join(", "),
            description: overview,
            image: "https://image.tmdb.org/t/p/w500" + poster_path,
          };
          setMovieDetail(movieDetailTemp);
        } else {
          console.log("Movie information not available.");
        }
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <LayoutWrapper title="Movie Details">
      {movieDetail ? (
        <MovieDetailCard
          movieImageUrl={movieDetail.image}
          movieTitle={movieDetail.title}
          movieRating={movieDetail.rating}
          movieYear={movieDetail.year}
          movieLength={convert_minutes_to_hours_and_minutes(movieDetail.length)}
          movieDirector={movieDetail.director}
          movieActors={movieDetail.actors}
          movieDescription={movieDetail.description}
        />
      ) : (
        <p className=" text-center">Loading...</p>
      )}
    </LayoutWrapper>
  );
};

export default MovieDetail;
