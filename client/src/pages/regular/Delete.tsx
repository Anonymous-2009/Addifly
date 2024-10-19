import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, UserX, AlertCircle, CheckCircle } from 'lucide-react';
import { DeleteSchema, DeleteFormData } from '../../validation/schemas/delete';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDeleteUserMutation } from '../../features/users/usersApiSlice'; // Adjust the import path as needed
import toast from 'react-hot-toast';

const Delete: React.FC = () => {
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [deleteUser] = useDeleteUserMutation(); // Use RTK Query mutation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DeleteFormData>({
    resolver: yupResolver(DeleteSchema),
  });

  const onSubmit = async (data: DeleteFormData) => {
    if (confirmDelete !== data.name) {
      setConfirmDelete(data.name);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await deleteUser(data).unwrap();
      if (response.message) {
        toast.success(response.message || 'User successfully deleted!');
      }

      reset(); // Reset the form
      setConfirmDelete(null); // Clear confirmation state
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gray-800/80 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8"
      >
        {/* Header */}
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
              <UserX className="h-16 w-16 text-red-500" />
            </motion.div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Delete User
          </h1>
          <p className="text-gray-400 text-sm">
            Enter the name of the user you want to delete
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <input
                {...register('name')}
                className={`w-full pl-4 py-3 bg-gray-700/80 border ${
                  errors.name ? 'border-red-500' : 'border-gray-600'
                } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all`}
                placeholder="Enter user name to delete"
                autoComplete="off"
              />
            </div>

            {/* Error message */}
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

          {/* Confirmation Alert */}
          <AnimatePresence>
            {confirmDelete && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white text-sm"
              >
                Are you sure you want to delete <strong>{confirmDelete}</strong>
                ? Click the button again to confirm.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium
              ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : confirmDelete
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-red-500 hover:bg-red-600'
              } text-white transition-colors`}
          >
            <Trash2 className="h-5 w-5" />
            {isSubmitting
              ? 'Deleting...'
              : confirmDelete
                ? 'Click to Confirm Delete'
                : 'Delete User'}
          </motion.button>
        </form>

        <AnimatePresence>
          {Success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 text-center text-red-700 flex items-center justify-center text-sm sm:text-base"
            >
              <CheckCircle size={20} className="mr-2" />
              User Delete SuccessFully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Delete;
