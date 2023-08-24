import { Route, Routes } from "react-router-dom";
import MovieList from "./container/movies_list/MovieList";
import MovieDetail from "./container/movie_detail/MovieDetail";

const App = () => {
    return (
        <Routes>
            <Route path="/list" element={<MovieList/>}/>
            <Route path="/movie-detail" element={<MovieDetail/>}/>
        </Routes>
    )
}

export default App;