import axios from "axios";

export const fetch_movie_list = (page) =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/movie/upcoming?page=${page}`, {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_MOVIE_APIKEY,
    },
  });

export const fetch_search_movie_list = (page, value) =>
  axios.get(
    `${process.env.REACT_APP_BASE_URL}/search/movie?query=${value}&page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_MOVIE_APIKEY,
      },
    }
  );
