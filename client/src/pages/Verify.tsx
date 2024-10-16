import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Key, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import Spinner from '../assets/image/spinner.svg';
import { VerifySchema, VerifyFormData } from '../validation';

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

const Verify = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyFormData>({
    resolver: yupResolver(VerifySchema),
  });

  const onSubmit = async (data: VerifyFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setVerificationSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl space-y-8 bg-gray-950 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border-2 border-gray-600"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Verify your <span className="text-blue-500">Addifly</span> account
          </h2>
          <p className="mt-2 text-center text-sm sm:text-base md:text-lg text-gray-400">
            Enter your email and the OTP sent to you
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
                htmlFor="otp"
                className="block text-sm sm:text-base font-medium text-gray-400 mb-1"
              >
                One-Time Password (OTP)
              </label>
              <Key
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
                  id="otp"
                  type="text"
                  {...register('otp')}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-700 bg-gray-800 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm md:text-base transition-all duration-200"
                  placeholder="Enter the 6-digit OTP"
                />
              </motion.div>
              <AnimatePresence>
                {errors.otp && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs sm:text-sm mt-1 flex items-center"
                  >
                    <AlertCircle size={14} className="mr-1" />
                    {errors.otp.message}
                  </motion.div>
                )}
              </AnimatePresence>
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
              <span>{isSubmitting ? 'Verifying...' : 'Verify OTP'}</span>
            </motion.button>
          </div>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm sm:text-base text-gray-400">
            Didn't receive the OTP?{' '}
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-400 transition-colors duration-200"
            >
              Resend OTP
            </a>
          </p>
        </div>

        <AnimatePresence>
          {verificationSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 text-center text-green-400 flex items-center justify-center text-sm sm:text-base"
            >
              <CheckCircle size={20} className="mr-2" />
              OTP verified successfully! Your account is now active.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Verify;
