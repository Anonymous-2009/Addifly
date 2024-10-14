// LandingPage.tsx
import React from 'react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
    // Sample text to display (approximately 300 words)
    const text = `Addifly is your go-to platform for all your needs. We strive to provide the best service to help you achieve your goals. 
    With a user-friendly interface and seamless experience, Addifly is designed for everyone. 
    Whether you are looking for guidance, resources, or a community to connect with, you will find it here. 
    Our mission is to empower individuals and businesses to reach new heights. 
    Join us on this exciting journey and discover the endless possibilities that await you. 
    Together, we can build a better future. Welcome aboard! 

    At Addifly, we believe in the power of collaboration and innovation. Our platform offers various tools and resources tailored to meet your unique needs. 
    We understand that every user has different goals, which is why we provide personalized solutions that adapt to your requirements. 
    Our dedicated team is committed to delivering top-notch service, ensuring you have everything you need to succeedur priority. Welcome aboard, and let’s embark on this journey together!`;

    // Split text into words
    const words = text.split(' ');

    return (
        <div className="flex flex-col md:flex-row h-[83vh] bg-gray-100">
            {/* Left Side */}
            <div className="flex flex-col justify-center mx-48 p-10 items-start w-full md:w-1/2 md:p-10">
                <h1 className="text-7xl md:text-4xl font-bold mb-4">Welcome to</h1>
                <h2 className="text-8xl md:text-5xl font-extrabold text-blue-600 mb-8">Addifly</h2>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <motion.button
                        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Sign In
                    </motion.button>
                    <motion.button
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded shadow hover:bg-blue-600 hover:text-white transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Log In
                    </motion.button>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center items-center w-full md:w-1/2 mx-12 text-xl">
                <motion.div className="animation-container text-center">
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for each word
                        >
                            {word}{' '}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default App;
