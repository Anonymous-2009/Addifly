import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Calendar,
  Coins,
  Users,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddFormData, AddSchema } from '../../validation';
import Spinner from '../../assets/image/spinner.svg';
import toast from 'react-hot-toast';
import { useAddUserMutation } from '../../features/users/usersApiSlice';

const Add: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [addUser] = useAddUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddFormData>({
    resolver: yupResolver(AddSchema),
  });

  const onSubmit = async (data: AddFormData) => {
    try {
      setIsSubmitting(true);
      const response = await addUser(data).unwrap();

      if (response.message) {
        toast.success(response.message);
      }
      setSuccess(true);
    } catch (error: any) {
      if (error.data?.message) {
        toast.error(
          error.data.message || 'An error occurred. Please try again.'
        );
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSuccess(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[90%] md:max-w-md lg:max-w-lg bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-4 md:p-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-2 text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Add New User
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Please fill in the user details
          </p>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Grid layout for larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-gray-200 text-sm font-medium block">
                Full Name
              </label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  {...register('name')}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
                  placeholder="Enter your name"
                />
              </div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-xs md:text-sm"
                >
                  {errors.name.message}
                </motion.p>
              )}
            </div>

            {/* Age Field */}
            <div className="space-y-2">
              <label className="text-gray-200 text-sm font-medium block">
                Age
              </label>
              <div className="relative group">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  {...register('age')}
                  type="number"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
                  placeholder="Enter your age"
                />
              </div>
              {errors.age && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-xs md:text-sm"
                >
                  {errors.age.message}
                </motion.p>
              )}
            </div>

            {/* Gender Field */}
            <div className="space-y-2">
              <label className="text-gray-200 text-sm font-medium block">
                Gender
              </label>
              <div className="relative group">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <select
                  {...register('gender')}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base appearance-none"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {errors.gender && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-xs md:text-sm"
                >
                  {errors.gender.message}
                </motion.p>
              )}
            </div>

            {/* Salary Field */}
            <div className="space-y-2">
              <label className="text-gray-200 text-sm font-medium block">
                Salary
              </label>
              <div className="relative group">
                <Coins className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  {...register('salary')}
                  type="number"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
                  placeholder="Enter salary"
                />
              </div>
              {errors.salary && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-xs md:text-sm"
                >
                  {errors.salary.message}
                </motion.p>
              )}
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm sm:text-base font-medium rounded-md text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
            >
              {isSubmitting ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 inset-y-0 flex items-center pl-3"
                >
                  <img src={Spinner} alt="a success logo" className="h-5 w-5" />
                </motion.span>
              ) : (
                <ArrowRight
                  className="absolute right-3 top-2 text-white"
                  size={20}
                />
              )}
              <span>{isSubmitting ? 'Adding User...' : 'Add user'}</span>
            </motion.button>
          </div>
        </form>

        <AnimatePresence>
          {Success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 text-center text-green-400 flex items-center justify-center text-sm sm:text-base"
            >
              <CheckCircle size={20} className="mr-2" />
              Login successful! Welcome back to Addifly!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Add;
