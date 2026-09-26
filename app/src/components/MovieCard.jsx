import { Link } from "react-router-dom";
import {
  FiStar,
  FiCalendar,
  FiTrash2,
  FiArrowUpRight,
  FiFilm,
} from "react-icons/fi";
import api from "../services/api";

export default function MovieCard({ movie}) {


  return (
    <div className="group relative ">

      {/* Paper */}
      <div className="bg-[#fffdf5] border border-[#ddd3bf] rounded-2xl p-6 shadow-[4px_6px_15px_rgba(80,65,45,0.08)] hover:-translate-y-1 transition">

        {/* Movie icon */}
        <div className="w-12 h-12 rounded-xl bg-[#e9e0cf] text-[#675742] flex items-center justify-center mb-5">
          <FiFilm size={21} />
        </div>

        {/* Movie */}
        <div className="flex justify-between items-start gap-3">

          <div>
            <h2 className="text-xl font-bold text-[#40382d]">
              {movie.name}
            </h2>

            <div className="flex items-center gap-1 mt-2 text-[#b38336]">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar
                  key={star}
                  size={14}
                  fill={star <= movie.rating ? "currentColor" : "none"}
                />
              ))}

              <span className="text-xs text-[#8d806d] ml-1">
                {movie.rating}/5
              </span>
            </div>
          </div>

        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-[#8d806d] mt-5">
          <FiCalendar />

          {new Date(movie.watchdate).toLocaleDateString(
            "en-US",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}
        </div>

        {/* Note */}
        <p className="text-sm text-[#716655] mt-5 leading-6 line-clamp-3">
          "{movie.note}"
        </p>

        {/* Tag */}
        <div className="mt-5">
          <span className="inline-block px-3 py-1.5 bg-[#eee6d5] text-[#695a45] rounded-full text-xs font-semibold">
            {movie.like}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#e4dac8]">

          <Link
            to={`/movies/${movie._id}`}
            className="text-sm font-semibold text-[#5d503e] flex items-center gap-1 hover:text-[#a9473d]"
          >
            View movie
            <FiArrowUpRight />
          </Link>

        </div>

      </div>

      {/* Tape */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#d5c497]/60 rotate-[-2deg] pointer-events-none" />

    </div>
  );
}