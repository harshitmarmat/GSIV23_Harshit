import React, { useEffect, useState } from "react";
import LayoutWrapper from "../../wrapper_components/LayoutWrapper";
import MovieCard from "./components/MovieCard";
import { fetch_movie_list, fetch_search_movie_list } from "./service";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const MovieList = () => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const [movieList, setMovieList] = useState([]);
  const [pagination, setPagination] = useState({ activePage: 1, totalPage: 1 });
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const get_movie_list = async (page = 1) => {
    try {
      const data = await (searchQuery.length > 0
        ? fetch_search_movie_list(page, searchQuery)
        : fetch_movie_list(page));

      setMovieList((prevMovies) =>
        page === 1 ? data.data.results : [...prevMovies, ...data.data.results]
      );

      setPagination({
        activePage: data.data.page,
        totalPage: data.data.total_pages,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLoadMore = () => {
    if (pagination.activePage < pagination.totalPage) {
      get_movie_list(pagination.activePage + 1);
    }
  };

  const handleSearchChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    setPagination({ activePage: 1, totalPage: 1 });
  };

  useEffect(() => {
    get_movie_list();
  }, [searchQuery]);

  return (
    <LayoutWrapper
      search
      searchValue={searchQuery}
      searchTrigger={handleSearchChange}
    >
      {movieList?.length > 0 ? (
        <InfiniteScroll
          dataLength={movieList.length}
          next={handleLoadMore}
          hasMore={pagination.activePage < pagination.totalPage}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex flex-wrap justify-center">
            {movieList.map((movie, ind) => (
              <MovieCard
                key={`${movie.id}+'movie'+${ind}`}
                movieTitle={movie.title}
                movieRating={movie.vote_average}
                movieDescription={movie.overview}
                imageUrl={
                  movie.poster_path || movie.backdrop_path
                    ? `${baseImageUrl}${
                        movie.poster_path || movie.backdrop_path
                      }`
                    : ""
                }
                triggerAction={() => navigate(`/movie-detail/${movie.id}`)}
              />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <p className="text-lg text-center mt-[20px]">
          {searchQuery && movieList.length === 0
            ? "No results found :( Please clear search"
            : "Loading..."}
        </p>
      )}
    </LayoutWrapper>
  );
};

export default MovieList;
