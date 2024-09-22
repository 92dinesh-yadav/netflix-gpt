import { useDispatch, useSelector } from "react-redux";
import langauge from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { options } from "../utils/constants";
import { addGtpMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchTMDBMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGtpSearchClick = async () => {
    console.log(searchText.current.value);

    /* const gtpQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of the 5 movies, comma separated like the example result given ahaed. Example: Gadar, Koi mil gaya, Sholey, Golmaal, Dhamaal";

    const gtpResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gtpQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gtpResult) {
      //TODO: Error handling
    }
    const gptMovies = gtpResult.choices?.[0]?.messages?.content?.split(","); */

    const gptMovies = "Golmal, Dhamaal, Sholey, Amar Akbar Anthony, Ishq".split(
      ","
    );
    const moviePromises = gptMovies.map((movie) => searchTMDBMovie(movie));
    const tmdbResults = await Promise.all(moviePromises);
    dispatch(
      addGtpMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    console.log(tmdbResults);
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={langauge[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 bg-red-700 text-white rounded-lg"
          onClick={handleGtpSearchClick}
        >
          {langauge[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
