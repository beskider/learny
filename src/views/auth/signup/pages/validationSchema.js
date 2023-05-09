import { object, string, ref } from 'yup';

export const schema = object({
  email: string().email().required(),
  password: string().min(4).max(12).required(),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required(),
}).required();
