import * as Yup from 'yup';

// Validation Schema using Yup
export const UpdateUserSchema = Yup.object().shape({
  findName: Yup.string().required('Name to search is required'),
  name: Yup.string().required('New name is required'),
  gender: Yup.string().required('Gender is required'),
  age: Yup.number()
    .min(1, 'Age must be a positive number')
    .required('Age is required'),
  salary: Yup.number()
    .min(1000, 'Salary must be at least 1000')
    .required('Salary is required'),
});

export type UpdateFormData = Yup.InferType<typeof UpdateUserSchema>;
