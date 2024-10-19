import * as yup from 'yup';

export const SignUpSchema = yup
  .object({
    username: yup
      .string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
  })
  .required();

export type SignFormData = yup.InferType<typeof SignUpSchema>;
