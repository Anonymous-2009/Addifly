import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Rocket,
  Shield,
  Users,
  ChevronDown,
  BarChart,
  Cloud,
} from 'lucide-react';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';

const AddflyLandingPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="container mx-auto px-4 py-16">
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to <span className="text-blue-500">Addifly</span>
          </motion.h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Elevate your business with our cutting-edge solutions. Discover the
            power of innovation and efficiency.
          </p>
          <motion.button
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center mx-auto hover:bg-blue-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="ml-2" />
          </motion.button>
        </motion.section>

        <motion.div
          className="flex justify-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <ChevronDown size={40} className="animate-bounce text-gray-400" />
        </motion.div>

        <motion.section
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <FeatureCard
            icon={<Rocket size={40} />}
            title="Innovative Solutions"
            description="Propel your business forward with our cutting-edge technology and forward-thinking strategies."
          />
          <FeatureCard
            icon={<Shield size={40} />}
            title="Secure & Reliable"
            description="Rest easy knowing your data and operations are protected by our advanced security measures."
          />
          <FeatureCard
            icon={<Users size={40} />}
            title="Expert Support"
            description="Our team of seasoned professionals is always ready to provide the support you need to succeed."
          />
        </motion.section>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Why Choose Addifly?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-900 p-6 rounded-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <BarChart className="mr-2 text-blue-500" /> Data-Driven Insights
              </h3>
              <p className="text-gray-400">
                Harness the power of advanced analytics to make informed
                decisions and drive growth.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-900 p-6 rounded-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Cloud className="mr-2 text-blue-500" /> Cloud-Native Solutions
              </h3>
              <p className="text-gray-400">
                Leverage scalable, flexible cloud infrastructure to stay agile
                and competitive in today's fast-paced market.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Addifly transformed our operations, increasing efficiency by 40% in just three months."
              author="Jane Doe"
              company="Tech Innovators Inc."
            />
            <TestimonialCard
              quote="The level of support and expertise from the Addifly team is unmatched. They're true partners in our success."
              author="John Smith"
              company="Global Solutions Ltd."
            />
          </div>
        </motion.section>

        <motion.section
          className="text-center bg-gray-900 py-16 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have revolutionized their
            operations with Addifly.
          </p>
          <motion.button
            className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey Today
          </motion.button>
        </motion.section>
      </main>
    </div>
  );
};

export default AddflyLandingPage;
