import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { useGetAllUsersQuery } from '../../features/users/usersApiSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UserCart from '../../components/User';

const Get: FC = () => {
  const { data: response, isError, error } = useGetAllUsersQuery();

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      if (
        'data' in error &&
        typeof error.data === 'object' &&
        error.data !== null &&
        'message' in error.data
      ) {
        toast.error(error.data.message as string);
      } else {
        toast.error('An error occurred while loading users');
      }
    } else if (response) {
      toast.success(response.message || 'Users loaded successfully!');
    }
  }, [response, isError, error]);

  if (isError) {
    console.log('Error details:', error); // More detailed error logging
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 max-w-md w-full"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-600 p-3 rounded-full">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Error Loading Users
          </h2>
          <p className="text-gray-400 text-center">
            {error instanceof Error
              ? error.message
              : 'An unknown error occurred. Please try again later.'}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            onClick={() => navigate(0)}
          >
            Retry
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">User Directory</h1>
        <p className="text-gray-400 text-lg">
          View and manage all user information in one place
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {response?.users.map((user) => (
          <UserCart key={user.id} user={user} /> // Ensure to add the key prop
        ))}
      </div>

      {!response?.users.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 text-lg">No users found</p>
        </motion.div>
      )}
    </div>
  );
};

export default Get;
