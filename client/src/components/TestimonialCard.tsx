import { motion } from 'framer-motion';

const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  company: string;
}> = ({ quote, author, company }) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <p className="text-gray-300 italic mb-4">"{quote}"</p>
    <p className="text-white font-semibold">{author}</p>
    <p className="text-gray-400">{company}</p>
  </motion.div>
);

export default TestimonialCard;
