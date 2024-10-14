import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const linkVariants = {
    hover: { scale: 1.05, color: '#3B82F6', transition: { duration: 0.2 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: '#3B82F6' },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Addifly</h2>
          <p className="text-gray-400">
            We are dedicated to providing the best service to our customers. Our
            mission is to innovate and inspire.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {['About Us', 'Our Services', 'Products', 'Contact Us', 'Blog'].map(
              (link) => (
                <motion.li
                  key={link}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    {link}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <address className="text-gray-400 not-italic">
            123 Business Street
            <br />
            City, State 12345
            <br />
            Country
            <br />
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@addifly.com
          </address>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Stay updated with our latest news and offers.
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500"
            />
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center transition duration-300"
            >
              <Mail className="mr-2" size={18} />
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">
          &copy; 2024 Addifly. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
            (policy) => (
              <motion.a
                key={policy}
                href="#"
                className="text-gray-400 hover:text-blue-500 mx-2"
                variants={linkVariants}
                whileHover="hover"
              >
                {policy}
              </motion.a>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
