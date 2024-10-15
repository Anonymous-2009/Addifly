import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
