import { useEffect, useState } from "react";
import { Link, useParams ,useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiStar,
  FiTrash2,
  FiFilm,
} from "react-icons/fi";

import api from "../services/api";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate=useNavigate()

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

   const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmed = window.confirm(
      `Delete "${movie.name}" from your diary?`
    );

    if (!confirmed) return;
    try {
      
      const res=await api.delete(`movie/${id}`)
      navigate("/movies")
      
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await api.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4efe3] flex items-center justify-center">
        <p className="text-[#817564]">
          Opening your diary...
        </p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#f4efe3] flex items-center justify-center">
        
        Movie not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4efe3] md:py-12 py-6 px-6">

      <div className="max-w-5xl mx-auto">

        <Link
          to="/movies"
          className="inline-flex items-center gap-2 text-sm text-[#756957] hover:text-[#40382d]"
        >
          <FiArrowLeft />
          Back to my movies
        </Link>

        <div className="relative bg-[#fffdf5] border border-[#ddd3bf] shadow-[8px_12px_30px_rgba(80,65,45,0.12)] md:mt-8 mt-3 rounded-sm overflow-hidden">

          {/* Notebook margin */}
          <div className="absolute top-0 bottom-0 left-12 border-l border-red-300/50" />

          {/* Notebook lines */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 35px, #b9c4d0 36px)",
            }}
          />

          <div className="relative z-10 p-8 md:p-14 ml-6">

            <div className="flex flex-col md:flex-row gap-10">

              {/* Icon / poster placeholder */}
              {/* <div className="shrink-0 hidden md:block">

                <div className="hidden md:block w-48 h-64  bg-[#40382d] rounded-xl flex items-center justify-center text-[#e8dfcf] shadow-lg">

                  <div className="text-center">
                    <FiFilm
                      size={42}
                      className="mx-auto mb-4"
                    />

                    <span className="text-xs uppercase tracking-widest">
                      Movie
                    </span>
                  </div>

                </div>

              </div> */}

              {/* Information */}
              <div className="flex-1">

                <h1 className="md:text-5xl text-3xl font-black mt-3 text-[#40382d]">
                  {movie.name}
                </h1>

                {/* <div className="flex items-center gap-1 md:mt-5 mt-2 text-[#b38336]">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                      key={star}
                      size={19}
                      fill={
                        star <= movie.rating
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}

                  <span className="ml-2 text-[#716655]">
                    {movie.rating}/5
                  </span> */}

                {/* </div> */}

                <div className="flex items-center gap-2 mt-6 text-[#756957]">
                  <FiCalendar />

                  Watched on{" "}
                  {new Date(movie.watchdate).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </div>

                <div className="mt-7">
                  <span className="bg-[#eee6d5] text-[#695a45] px-4 py-2 rounded-full text-sm font-semibold">
                    {movie.like}
                  </span>
                </div>

              </div>

            </div>

            {/* Opinion */}
            <div className="mt-14 max-w-3xl">

              <p className="text-sm uppercase tracking-widest text-[#a9473d] font-semibold">
                My thoughts
              </p>

              <blockquote className="mt-4 text-xl md:text-3xl font-medium leading-relaxed text-[#504536]">
                "{movie.note}"
              </blockquote>

            </div>

            {/* Delete */}
            <div className="mt-12 pt-6 border-t border-[#ded4c1]">

              <button
                className="text-sm text-red-700 flex items-center gap-2 hover:text-red-900"
                onClick={handleDelete}
              >
                <FiTrash2 />
                Delete this diary entry
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}