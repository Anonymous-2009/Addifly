// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OctagonX } from 'lucide-react'; // Replace with the exact icon you want to use
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[80dvh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-6">Oops! Page not found.</p>

          <motion.div
            whileHover={{ scale: 1.4, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="mb-8 inline-block"
          >
            <OctagonX className="text-9xl size-20 text-blue-500 mb-4" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-medium shadow-lg"
            >
              Go Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
