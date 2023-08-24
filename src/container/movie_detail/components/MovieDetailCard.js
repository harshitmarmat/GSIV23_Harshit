const MovieDetailCard = ({
  movieImageUrl,
  movieTitle,
  movieRating,
  movieYear,
  movieLength,
  movieDirector,
  movieActors,
  movieDescription,
}) => {
  return (
    <div className="p-4 gap-2 w-full grid grid-cols-6">
      <img
        className="rounded-[5px] col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1 h-[300px]"
        src={movieImageUrl}
        alt={movieTitle}
      />
      <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-5 w-auto ">
        <p className="text-[2rem] font-semibold text-[#4A4A4A]">
          {movieTitle}{" "}
          <span className="text-[#9B9B9B] text-[1.8rem]">({movieRating})</span>
        </p>
        <p className="text-[1.2rem] font-medium text-[#4A4A4A]">
          {movieYear} | {movieLength} | {movieDirector}
        </p>
        <p className="text-[1.2rem] font-medium text-[#4A4A4A] truncate">
          Cast : <span className="text-[1rem] font-normal">{movieActors}</span>
        </p>
        <p className="text-[1.2rem] font-medium text-[#4A4A4A]">
          Description:{" "}
          <span className=" text-[1rem] font-normal">{movieDescription}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieDetailCard;
