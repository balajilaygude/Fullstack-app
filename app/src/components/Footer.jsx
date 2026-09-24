import {
  FiFilm,
  FiHeart,
  FiBookOpen,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#3f372c] text-[#e8dfcf]">

      <div className="max-w-7xl mx-auto px-6 md:py-14 py-8">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#e8dfcf] text-[#3f372c] flex items-center justify-center">
                <FiFilm />
              </div>

              <h2 className="font-bold text-xl">
                CineDiary
              </h2>
            </div>

            <p className="text-sm text-[#bdb19e] leading-6 max-w-sm">
              A personal movie diary where you can remember
              what you watched, when you watched it, and what
              you thought about it.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Your diary
            </h3>

            <div className="sm:space-y-3 space-y-1.5 text-sm text-[#bdb19e]">
              <p className="flex items-center gap-2">
                <FiBookOpen />
                Keep your movie history
              </p>

              <p className="flex items-center gap-2">
                <FiHeart />
                Save your opinions
              </p>

              <p className="flex items-center gap-2">
                <FiFilm />
                Remember every watch
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              CineDiary
            </h3>

            <p className="text-sm text-[#bdb19e] leading-6">
              Your movies. Your ratings.
              Your memories.
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-[#9f9484]">
          © {new Date().getFullYear()} CineDiary. Made for movie lovers.
        </div>

      </div>
    </footer>
  );
}