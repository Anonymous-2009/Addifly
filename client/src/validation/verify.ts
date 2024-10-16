import * as yup from 'yup';

export const VerifySchema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    otp: yup
      .number()
      .typeError('OTP must be a number') // Ensure the value is a number
      .required('OTP is required')
      .test(
        'len',
        'OTP must be exactly 6 digits',
        (val) => val?.toString().length === 6
      ),
  })
  .required();

export type VerifyFormData = yup.InferType<typeof VerifySchema>;
