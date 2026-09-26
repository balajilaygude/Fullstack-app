import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiFilm,
  FiSearch,
} from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocalMovies } from "react-icons/md";
import api from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm,setShowForm]=useState(false)
  const [loading, setLoading] = useState(true);
  const [name,setName]=useState("")
  const [rating,setRating]=useState(1)
  const [watchdate,setWatchDate]=useState("2026-09-28")
  const [like,setLike]=useState("Good")
  const [note,setNote]=useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    if(!name ||!rating ||!note ||!watchdate ||!like){
      alert("Plase enter all details")
      return;
    }
    try {
      const result=await api.post(`/movie`,{name,rating,note,watchdate,like})
      setName("")
      setRating(1)
      setWatchDate("2026-09-28")
      setNote("")
      setLike("Good")
      getMovies()
    } catch (error) {
      console.log(error)
    }
    
  }

  const getMovies = async () => {
    try {
      const response = await api.get("/movie");
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

          <button
            onClick={()=>setShowForm(!showForm)}
            className="self-start md:self-auto bg-[#40382d] text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <FiPlus />
            Add Movie
          </button>

        </div>
        {showForm && 
        <div className="bg-[#fffdf5] border border-[#ded4c1] rounded-2xl md:p-16 p-5 mt-10">

          <form onSubmit={handleSubmit}>
           <div>
                <label className="block text-sm font-medium text-[#5e5447] mb-2">
                  Movie Name
                </label>

                <div className="relative">
                  <MdOutlineLocalMovies
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a29480]"
                    size={18}
                  />

                  <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Bahubali"
                    className="w-full h-12 pl-11 pr-4 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] placeholder:text-[#aaa08f] focus:border-[#8f7b5d] transition"
                  />
                </div>
              </div>
           <div>
                <label className="block text-sm mt-2 font-medium text-[#5e5447]">
                  Rating
                </label>

                <div className="relative">

                  <input
                    type="range"
                    max="5" min="1"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full h-5 pl-11 pr-4 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] placeholder:text-[#aaa08f] focus:border-[#8f7b5d] transition"
                  />
                </div>
              </div>
           <div>
                <label className="block text-sm font-medium text-[#5e5447] mb-2">
                  Watch Date
                </label>

                <div className="relative">
                  <SlCalender
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a29480]"
                    size={18}
                  />

                  <input
                    type="date"
                    value={watchdate}
                    onChange={(e) => setWatchDate(e.target.value)}
                    className="w-full h-12 pl-11 pr-4 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] placeholder:text-[#aaa08f] focus:border-[#8f7b5d] transition"
                  />
                </div>
              </div>
           <div>
                <label className="block text-sm font-medium text-[#5e5447] mb-2">
                  Like
                </label>

                <div className="relative">
                  <FcLike
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a29480]"
                    size={18}
                  />

                  <select         value={like} 
        onChange={(e)=>setLike(e.target.value)}
        className="w-full h-12 pl-11 pr-5 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] placeholder:text-[#aaa08f] focus:border-[#8f7b5d] transition">
                    <option value="Good">Good</option>
                    <option value="Must Watch">Must Watch</option>
                    <option value="Rewatch">Rewatch</option>
                  </select>

                </div>
              </div>
           <div>
                <label className="block text-sm font-medium text-[#5e5447] mb-2">
                  Note
                </label>

                <div className="relative">

                  <textarea rows={5} cols={5}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="write Note"
                    className="w-full resize-y p-2 md:p-5 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] placeholder:text-[#aaa08f] focus:border-[#8f7b5d] transition"
                  />
                </div>
              </div>

            <button type="submit" className="w-full h-12 rounded-lg bg-[#5f513e] text-white flex items-center justify-center gap-2 font-medium hover:bg-[#493e30] hover:scale-105 duration-150 transition shadow-md">Submit</button>
          </form>
        </div>}

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
              />
            ))}

          </div>
        )}

      </div>
    </div>
  );
}