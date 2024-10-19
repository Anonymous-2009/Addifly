import * as yup from 'yup';

export const AddSchema = yup.object().shape({
  name: yup
    .string()
    .required('🙋‍♂️ Please tell us your name!')
    .min(2, '📏 Name needs to be at least 2 characters')
    .matches(/^[a-zA-Z\s]*$/, '✍️ Only letters and spaces allowed'),
  age: yup
    .number()
    //   .transform((value) => (isNaN(value) || value === null ? undefined : value))
    .required('🎂 Age is required')
    .min(18, '🔞 You must be at least 18 years old')
    .max(50, '⚡ Maximum age limit is 50 years')
    .typeError('🔢 Please enter a valid age'),
  gender: yup
    .string()
    .required('⚧ Please select your gender')
    .oneOf(
      ['male', 'female', 'other'],
      '⚠️ Please select a valid gender option'
    ),
  salary: yup
    .number()
    .transform((value) => (isNaN(value) || value === null ? undefined : value))
    .required('💰 Salary information is required')
    .min(1000, '💸 Minimum salary should be ₹1,000')
    .max(1000000, '🏦 Maximum salary limit is ₹10,00,000')
    .typeError('🔢 Please enter a valid salary amount'),
});

export type AddFormData = yup.InferType<typeof AddSchema>;
