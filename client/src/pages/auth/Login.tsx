import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Lock,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Eye,
  EyeOff,
} from 'lucide-react';
import Spinner from '../../assets/image/spinner.svg';
import { LoginFormData, LoginSchema } from '../../validation';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  blur: {
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post('/auth/login', data);
      const { message } = response.data;
      toast.success(message);
      setLoginSuccess(true);

      // Delay the navigation by 2 seconds (2000ms)
      setTimeout(() => {
        navigate('/verify');
      }, 2000);
    } catch (error: any) {
      // toast.error('Login failed. Please try again.');
      if (error.response) {
        // Access the response data for 4xx or 5xx status codes
        const { message } = error.response.data;
        // console.error('Error Response:', error.response);

        // Display the error message returned by the server (e.g., "User not found")
        toast.error(message || 'An error occurred. Please try again.');
      } else {
        // If the error is something else (like network issues)
        console.error('Unexpected Error:', error);
        toast.error('Something went wrong. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl space-y-8 bg-gray-950 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg  border-2 border-gray-600"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Welcome back to <span className="text-blue-500">Addifly</span>
          </h2>
          <p className="mt-2 text-center text-sm sm:text-base md:text-lg text-gray-400">
            Sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-6 sm:space-y-8">
            <div className="relative">
              <label
                htmlFor="email-address"
                className="block text-sm sm:text-base font-medium text-gray-400 mb-1"
              >
                Email address
              </label>
              <Mail
                className="absolute top-10 left-3 text-blue-500 z-10"
                size={21}
              />
              <motion.div
                variants={inputVariants}
                whileFocus="focus"
                initial="blur"
                animate="blur"
              >
                <input
                  id="email-address"
                  type="email"
                  {...register('email')}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-700 bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm md:text-base transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </motion.div>
              <AnimatePresence>
                {errors.email && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs sm:text-sm mt-1 flex items-center"
                  >
                    <AlertCircle size={14} className="mr-1" />
                    {errors.email.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-medium text-gray-400 mb-1"
              >
                Password
              </label>
              <Lock
                className="absolute top-10 left-3 text-blue-500 z-10"
                size={21}
              />
              <motion.div
                variants={inputVariants}
                whileFocus="focus"
                initial="blur"
                animate="blur"
              >
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 pr-10 border border-gray-700 bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm md:text-base transition-all duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? (
                    <EyeOff
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                </button>
              </motion.div>
              <AnimatePresence>
                {errors.password && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs sm:text-sm mt-1 flex items-center"
                  >
                    <AlertCircle size={14} className="mr-1" />
                    {errors.password.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-400"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-500 hover:text-blue-400 transition-colors duration-200"
              >
                Forgot your password?
              </a>
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
              <span>{isSubmitting ? 'Signing in...' : 'Sign in'}</span>
            </motion.button>
          </div>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm sm:text-base text-gray-400">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-medium text-blue-500 hover:text-blue-400 transition-colors duration-200"
            >
              Create a new account
            </Link>
          </p>
        </div>

        <AnimatePresence>
          {loginSuccess && (
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

export default Login;
