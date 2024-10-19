import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, UserCheck, AlertCircle } from 'lucide-react';
import { useFindUserByNameMutation } from '../../features/users/usersApiSlice';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import User from '../../components/User';
import { FindFormData, FindUserSchema } from '../../validation';

const FindUser: React.FC = () => {
  const [findUser, { data, isLoading }] = useFindUserByNameMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FindFormData>({
    resolver: yupResolver(FindUserSchema),
  });

  // Add ref for the results section
  const resultsRef = useRef<HTMLDivElement>(null);

  // Effect to handle smooth scrolling when results are found
  useEffect(() => {
    if (data?.user && data.user.length > 0 && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 300); // Small delay to ensure animation starts after results appear
    }
  }, [data?.user]);

  const onSubmit = async (formData: FindFormData) => {
    try {
      const response = await findUser({ name: formData.name }).unwrap();
      if (response.user.length === 0) {
        toast.error('No users found with that name');
      } else {
        toast.success(response.message);
      }
      reset();
    } catch (error) {
      toast.error('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md mx-auto bg-gray-800/80 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 mb-8 mt-40"
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="h-16 w-16 text-blue-500" />
              </motion.div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Find User
            </h1>
            <p className="text-gray-400 text-sm">
              Enter the name of the user you want to find
            </p>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <input
                  {...register('name')}
                  className={`w-full pl-4 py-3 bg-gray-700/80 border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  placeholder="Enter user name"
                  autoComplete="off"
                />
              </div>
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="h-4 w-4" />
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium
                ${isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
            >
              <Search className="h-5 w-5" />
              {isLoading ? 'Finding...' : 'Find User'}
            </motion.button>
          </form>
        </motion.div>

        <AnimatePresence>
          {data?.user && data.user.length > 0 && (
            <motion.div
              ref={resultsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-8 text-center scroll-mt-8" // Added scroll-mt-8 for better scroll positioning
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <UserCheck size={24} className="text-green-500" />
                <h2 className="text-xl font-bold text-white">Users Found</h2>
              </div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, staggerChildren: 0.1 }}
              >
                {data.user.map((user, index) => (
                  <motion.div
                    key={user.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/60 backdrop-blur-md rounded-xl shadow-xl overflow-hidden"
                  >
                    <User user={user} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FindUser;
