import { object, string } from 'yup';

export const schema = object({
  email: string().email().required(),
  password: string().required(),
}).required();
