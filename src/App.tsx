import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { AgeSelection } from './pages/AgeSelection';
import { CategorySelection } from './pages/CategorySelection';
import { Quiz } from './pages/Quiz';
import { Score } from './pages/Score';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="age" element={<AgeSelection />} />
          <Route path="categories" element={<CategorySelection />} />
          <Route path="play" element={<Quiz />} />
          <Route path="score" element={<Score />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

