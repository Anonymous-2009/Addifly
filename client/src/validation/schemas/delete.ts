// Validation schema
import * as yup from 'yup';

export const DeleteSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter the user name')
    .min(2, 'Name must be at least 2 characters')
    .matches(/^[a-zA-Z\s]*$/, 'Name should only contain letters and spaces'),
});

export type DeleteFormData = yup.InferType<typeof DeleteSchema>;
