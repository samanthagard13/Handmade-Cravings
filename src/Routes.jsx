import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AppPage from './pages/AppPage';
import DinnerPage from './pages/DinnerPage';
import RecipePage from './pages/RecipePage';

function NavRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/appetizers" element={<AppPage />} />
      <Route path="/dinners" element={<DinnerPage />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
    </Routes>
  );
}

export default NavRoutes;