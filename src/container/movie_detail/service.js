import axios from "axios";

export const fetch_movie_detail = (movieId) =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${movieId}`, {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_MOVIE_APIKEY,
    },
  });

export const fetch_movie_cast = (movieId) =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${movieId}/credits`, {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_MOVIE_APIKEY,
    },
  });
