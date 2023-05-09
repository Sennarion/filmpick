import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
