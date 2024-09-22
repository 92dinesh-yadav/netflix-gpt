import { TMDB_CDN_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={TMDB_CDN_IMAGE_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
