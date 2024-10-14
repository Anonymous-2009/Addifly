// src/Navbar.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logosvg from '../assets/logo.svg';
import CloseIcon from '../assets/close.svg'
import HamburgerIcon from '../assets/hamburger.svg'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            className="flex justify-between items-center p-5 bg-gray-200 shadow-md"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Logo and Title */}
            <div className="hidden md:flex items-center"> {/* Hide on mobile */}
                <img src={logosvg} alt="Logo" className="w-10 h-10 text-blue-500" />
                <span className="ml-2 text-2xl pb-4 pt-2 font-semibold">Addifly</span>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="block md:hidden">
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                {isOpen ? (
                        <img src={CloseIcon} alt="Close Menu" className="w-8 h-8" />
                    ) : (
                        <img src={HamburgerIcon} alt="Open Menu" className="w-8 h-8" />
                    )}
                </button>
            </div>

            {/* Navigation Links */}
            <ul className={`flex-col md:flex md:flex-row md:space-x-8 absolute md:static bg-gray-200 w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-500px]'}`}>
                <li>
                    <a 
                        href="#" 
                        className="text-gray-800 font-semibold text-xl hover:text-blue-500 block md:inline-block p-2"
                    >
                        GetAll
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="text-gray-800 font-semibold text-xl hover:text-blue-500 block md:inline-block p-2"
                    >
                        Add
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="text-gray-800 font-semibold text-xl hover:text-blue-500 block md:inline-block p-2"
                    >
                        Find
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="text-gray-800 font-semibold text-xl hover:text-blue-500 block md:inline-block p-2"
                    >
                        Update
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="text-gray-800 font-semibold text-xl hover:text-blue-500 block md:inline-block p-2"
                    >
                        Delete
                    </a>
                </li>
            </ul>

            <a 
                href="#" 
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 text-lg font-semibold"
            >
                SIGNIN / LOGIN
            </a>
        </motion.nav>
    );
};

export default Navbar;
