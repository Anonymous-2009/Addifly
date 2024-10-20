import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Edit3, AlertCircle } from 'lucide-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { UpdateUserSchema, UpdateFormData } from '../../validation';
import { useUpdateUserMutation } from '../../features/users/usersApiSlice';

const UpdateDetails: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateFormData>({
    resolver: yupResolver(UpdateUserSchema),
  });

  // Use RTK Query's mutation hook
  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (data: UpdateFormData) => {
    try {
      // Trigger the RTK Query mutation
      const response = await updateUser(data).unwrap();

      if (response) {
        toast.success(response.message);
        reset(); // Reset the form after successful submission
      }
    } catch (error: any) {
      if (error.data?.message) {
        toast.error(
          error.data.message || 'An error occurred. Please try again.'
        );
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg w-full max-w-4xl p-6 space-y-6"
      >
        {/* Center the icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex justify-center">
            <Edit3 className="h-16 w-16 text-blue-500 mb-4" />
          </div>
          <h1 className="text-3xl font-bold text-white">Update User Details</h1>
          <p className="text-gray-400">
            Search and update the details of an existing user
          </p>
        </motion.div>

        {/* Split into two sections: left (search) and right (update) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Find Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Find User
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <input
                  {...register('findName')}
                  className={`w-full p-3 bg-gray-700 border ${errors.findName ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white`}
                  placeholder="Enter name to search"
                />
                {errors.findName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="h-4 w-4" />
                    {errors.findName.message}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right side: Update Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Update Details
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <input
                  {...register('name')}
                  className={`w-full p-3 bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white`}
                  placeholder="Enter new name"
                />
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
              </div>

              <div className="space-y-2">
                <select
                  {...register('gender')}
                  className={`w-full p-3 bg-gray-700 border ${errors.gender ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white`}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="h-4 w-4" />
                    {errors.gender.message}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <input
                  type="number"
                  {...register('age')}
                  className={`w-full p-3 bg-gray-700 border ${errors.age ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white`}
                  placeholder="Enter age"
                />
                {errors.age && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="h-4 w-4" />
                    {errors.age.message}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <input
                  type="number"
                  {...register('salary')}
                  className={`w-full p-3 bg-gray-700 border ${errors.salary ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white`}
                  placeholder="Enter salary"
                />
                {errors.salary && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="h-4 w-4" />
                    {errors.salary.message}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expanded Update Button (spans full width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-2"
        >
          <motion.button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Edit3 className="h-5 w-5" />
            Update User
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UpdateDetails;
