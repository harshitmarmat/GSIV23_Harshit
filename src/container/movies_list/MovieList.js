import { useEffect, useState } from "react";
import LayoutWrapper from "../../wrapper_components/LayoutWrapper"
import MovieCard from "../common/MovieCard";
import { fetch_movie_list } from "./service";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    const [movieList,setMovieList] = useState();
    const navigate = useNavigate()
    const get_movie_list = async () => {
        try {
            const data = await fetch_movie_list();
            setMovieList(data.data.results);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    useEffect(()=>{
        get_movie_list();
    },[])
    
    if(!movieList){
        return <p>Something went wrong...</p>
    }
    return (
       <LayoutWrapper>
            <div className="flex flex-wrap justify-center">
                {movieList?.map((movie,ind)=>
                    <MovieCard
                        key={movie.id}
                        movieTitle={movie.original_title}
                        movieRating={movie.vote_average}
                        movieDescription={movie.overview}
                        imageUrl={`${baseImageUrl}${movie.poster_path}`}
                        triggerAction={()=>navigate('/movie-detail')}
                    />
                )}
            </div>
       </LayoutWrapper>
    )
}

export default MovieList;