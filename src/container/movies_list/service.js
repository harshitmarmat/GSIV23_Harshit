import axios from "axios"

export const fetch_movie_list = () => axios.get('https://api.themoviedb.org/3/movie/upcoming', {
    headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_MOVIE_APIKEY
    }
});
