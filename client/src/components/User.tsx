import { motion } from 'framer-motion';
import { User as UserIcon, Calendar, DollarSign, Clock } from 'lucide-react';
import { User as UserType } from '../utils/types/users.types';

// Define the props interface
interface UserProps {
  user: UserType; // Expecting a user prop of type UserType
}

const User = ({ user }: UserProps) => {
  // Use UserProps for the props
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.04,
      }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <UserIcon className="h-6 w-6 text-white" />{' '}
            {/* Renamed User icon */}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-white">{user.name}</h3>
            <p className="text-gray-400">
              {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-300">
            <Calendar className="h-5 w-5 mr-3 text-blue-400" />
            <span>Age: {user.age} years</span>
          </div>

          <div className="flex items-center text-gray-300">
            <DollarSign className="h-5 w-5 mr-3 text-blue-400" />
            <span>Salary: ${user.salary.toLocaleString()}</span>
          </div>

          <div className="flex items-center text-gray-300">
            <Clock className="h-5 w-5 mr-3 text-blue-400" />
            <span>Joined: {new Date(user.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default User;
