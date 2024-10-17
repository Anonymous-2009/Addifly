import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import logo from '../assets/image/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const toggleLogin = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLogin(true)
    }
   toggleLogin()
  }, [])

  const handleLogout = async () => {
    // use a api call for logout 
       setIsLogin(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ['GetAll', 'Add', 'Find', 'Update', 'Delete'];

  return (
    <motion.nav
      className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img className="h-8 w-auto" src={logo} alt="Addifly Logo" />
              <span className="ml-2 text-2xl font-bold text-white">
                Addifly
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-200 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(59, 130, 246, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {isLogin ? (
             <div className="flex items-center" onClick={handleLogout}>
             <motion.div
              className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut size={18} />
               <span> Logout </span>
             </motion.div>
             </div> 
          ) : (
            <Link to="/signup" className="flex items-center">
             <motion.div
              className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={18} />
               <span>Sign Up</span>
             </motion.div>
             </Link> 
          )}
 

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  className="text-gray-200 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(59, 130, 246, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
