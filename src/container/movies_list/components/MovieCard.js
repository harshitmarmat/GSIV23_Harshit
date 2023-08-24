const MovieCard = ({
  imageUrl,
  movieTitle,
  movieRating,
  movieDescription,
  triggerAction,
}) => {
  return (
    <div
      onClick={triggerAction}
      className="cursor-pointer w-[225px] m-4 h-[300px] bg-gray-300 rounded-[5px]"
    >
      <img
        src={imageUrl}
        alt={movieTitle}
        className="w-full object-fill h-[220px] rounded-[5px]"
      />
      <div className="px-2 py-1">
        <div className="flex justify-between ">
          <p className="text-md truncate w-[80%] text-[#4A4A4A] text-ellipsis font-semibold ">
            {movieTitle}
          </p>
          <p className="text-[#9B9B9B] font-medium">{movieRating}</p>
        </div>
        <p className="text-[0.8rem] text-[#4A4A4A]">
          {movieDescription.length >= 100
            ? movieDescription.slice(0, 55) + "..."
            : movieDescription}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
