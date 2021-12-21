import * as yup from "yup";

export const schema = yup.object().shape({
  nombre: yup.string().email().required(),
  precio: yup.string().required(),
  descric: yup.string().required(),
});
