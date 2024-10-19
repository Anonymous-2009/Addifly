import * as yup from 'yup';

export const FindUserSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .max(50, 'Name must be less than 50 characters'),
});

export type FindFormData = yup.InferType<typeof FindUserSchema>;
