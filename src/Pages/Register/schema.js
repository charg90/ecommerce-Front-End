import * as yup from "yup";

export const schema = yup.object().shape({
  nombre: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().min(3).max(10).required(),
});
