import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Import React Router
import './index.css';

import App from './App.jsx'; // your ImageSlider
import NextPage from './NextPage.jsx'; // ✅ create this component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
