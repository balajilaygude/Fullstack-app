import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiFilm,
  FiSearch,
} from "react-icons/fi";

import api from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await api.get("/movie");
      console.log(response)
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4efe3] px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

          <div>
            <p className="text-sm text-[#a9473d] font-semibold uppercase tracking-widest">
              My diary
            </p>

            <h1 className="text-5xl font-black mt-2">
              My Movies
            </h1>

            <p className="text-[#817564] mt-3">
              {movies.length} movies in your diary
            </p>
          </div>

          <Link
            to="/movies/add"
            className="self-start md:self-auto bg-[#40382d] text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <FiPlus />
            Add Movie
          </Link>

        </div>

        {/* Search */}
        <div className="relative max-w-md mt-10">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9d907c]"
          />

          <input
            type="text"
            placeholder="Search your movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 bg-[#fffdf5] border border-[#d9cfbb] rounded-xl pl-11 pr-4 outline-none focus:border-[#8c7657]"
          />

        </div>

        {/* Movies */}
        {loading ? (
          <div className="py-20 text-center text-[#8b7d69]">
            Opening your diary...
          </div>
        ) : filteredMovies.length === 0 ? (
          <div className="bg-[#fffdf5] border border-[#ded4c1] rounded-2xl p-16 text-center mt-10">

            <FiFilm
              size={40}
              className="mx-auto text-[#a99a82]"
            />

            <h2 className="text-2xl font-bold mt-5">
              Your diary is empty
            </h2>

            <p className="text-[#817564] mt-2">
              Start by adding the first movie you watched.
            </p>

          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">

            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
                onDelete={(id) => {
                  setMovies((prev) =>
                    prev.filter((movie) => movie._id !== id)
                  );
                }}
              />
            ))}

          </div>
        )}

      </div>
    </div>
  );
}