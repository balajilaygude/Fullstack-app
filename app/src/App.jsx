import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MyAccount from "./pages/MyAccount";

export default function App() {
  return (
    <BrowserRouter>

      <AuthProvider>

        <Navbar />

        <main className="pt-24">

          <Routes>

            {/* Public */}
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/signin"
              element={<SignIn />}
            />

            <Route
              path="/signup"
              element={<SignUp />}
            />

            {/* Protected */}
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <Movies />
                </ProtectedRoute>
              }
            />

            <Route
              path="/movies/:id"
              element={
                <ProtectedRoute>
                  <MovieDetails />
                </ProtectedRoute>
              }
            />

            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <MyAccount />
                </ProtectedRoute>
              }
            />

          </Routes>

        </main>

        <Footer />

      </AuthProvider>

    </BrowserRouter>
  );
}