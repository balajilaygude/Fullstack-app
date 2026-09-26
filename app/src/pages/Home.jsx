import { Link } from "react-router-dom";
import {
  FiFilm,
  FiCalendar,
  FiStar,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const {user}=useAuth()
  return (
    <div className="bg-[#f4efe3] text-[#40382d]">

      {/* Hero */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden">

        {/* Notebook lines */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 35px, #bfc9d4 36px)",
          }}
        />

        {/* Red margin */}
        <div className="absolute left-10 md:left-24 top-0 bottom-0 border-l border-red-300/50" />

        <div className="relative max-w-7xl mx-auto sm:px-16 px-6 pt-16 pb-4 md:py-32 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="inline-flex items-center gap-2 bg-[#e6ddcc] px-4 py-2 rounded-full text-xs font-semibold text-[#71624e] mb-6">
              <FiFilm />
              YOUR PERSONAL MOVIE DIARY
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Every movie
              <br />
              has a
              <span className="text-[#a9473d]"> story.</span>
            </h1>

            <p className="mt-7 text-lg text-[#776b5b] leading-8 max-w-xl">
              CineDiary helps you keep track of the movies you've
              watched, remember when you watched them, rate them,
              and write down exactly what you thought.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
            {!user &&
            <>
              <Link
                to="/signup"
                className="bg-[#40382d] text-white px-6 py-3.5 rounded-xl flex items-center gap-2 hover:bg-[#574b3c] transition"
              >
                Start your diary
                <FiArrowRight />
              </Link>

              <Link
                to="/signin"
                className="border border-[#bfb29c] px-6 py-3.5 rounded-xl hover:bg-white transition"
              >
                I already have an account
              </Link>
              </>
}
            </div>

          </div>

          {/* Diary illustration */}
          <div className="">

            <div className="relative rotate-3">

              <div className="bg-[#fffdf5] p-8 rounded-sm shadow-[15px_20px_40px_rgba(70,55,35,0.2)] border border-[#ddd3bf]">

                <p className="text-sm text-[#9c8d77]">
                  Friday, September 24
                </p>

                <h2 className="text-3xl font-bold mt-5">
                  Tonight's movie
                </h2>

                <div className="h-px bg-[#d7cdbb] my-6" />

                <h3 className="text-2xl font-bold">
                  Interstellar
                </h3>

                <div className="flex gap-1 mt-3 text-[#b48435]">
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                </div>

                <p className="mt-6 text-[#716655] leading-7">
                  "Still one of the most beautiful movies
                  I've ever watched..."
                </p>

                <div className="mt-8 text-xs text-[#9c8d77]">
                  #sci-fi &nbsp; #rewatch
                </div>

              </div>

              {/* Tape */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#d7c497]/70 rotate-[-4deg]" />

            </div>

          </div>

        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-[#a9473d] font-semibold">
            How it works
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Your movie history,
            <br />
            all in one place.
          </h2>

          <p className="mt-5 text-[#776b5b]">
            No complicated tracking. Just record the movies
            you watch and keep your thoughts forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <Feature
            icon={<FiFilm />}
            number="01"
            title="Watch a movie"
            text="Finished something great? Add it to your personal movie diary."
          />

          <Feature
            icon={<FiStar />}
            number="02"
            title="Give your opinion"
            text="Rate it, write your thoughts and mark whether you'd rewatch it."
          />

          <Feature
            icon={<FiCalendar />}
            number="03"
            title="Remember it"
            text="Your watch date and review stay in your personal movie history."
          />

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-[#40382d] text-white rounded-3xl p-10 md:p-16 text-center">

          <FiBookOpen
            className="mx-auto text-[#d9c8a5] mb-5"
            size={35}
          />

          <h2 className="text-4xl md:text-5xl font-black">
            Start your movie diary.
          </h2>

          <p className="text-white/60 mt-4">
            Because some movies deserve to be remembered.
          </p>
        {!user?
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 mt-8 bg-[#e7dcc7] text-[#40382d] px-7 py-3.5 rounded-xl font-semibold"
          >
            Create your diary
            <FiArrowRight />
          </Link>
          :
                    <Link
            to="/movies"
            className="inline-flex items-center gap-2 mt-8 bg-[#e7dcc7] text-[#40382d] px-7 py-3.5 rounded-xl font-semibold"
          >
            Add your Movie List
            <FiArrowRight />
          </Link>}

        </div>

      </section>

    </div>
  );
}

function Feature({ icon, number, title, text }) {
  return (
    <div className="bg-[#fffdf5] border border-[#ddd3bf] p-7 rounded-2xl shadow-[4px_6px_15px_rgba(80,65,45,0.07)]">

      <div className="flex justify-between items-center">
        <div className="w-12 h-12 bg-[#e9e0cf] rounded-xl flex items-center justify-center text-[#675742]">
          {icon}
        </div>

        <span className="text-xs text-[#aa9d88]">
          {number}
        </span>
      </div>

      <h3 className="text-xl font-bold mt-7">
        {title}
      </h3>

      <p className="text-sm text-[#817665] mt-3 leading-6">
        {text}
      </p>

    </div>
  );
}