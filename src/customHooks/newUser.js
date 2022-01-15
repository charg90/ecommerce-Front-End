import axios from "axios";
import { BASE_URL, USUARIOS } from "./../constants/constants";

export const newUser = async (obj) => {
  console.log(obj);
  try {
    const user = await axios.post(`${BASE_URL}/${USUARIOS}`, obj);
    console.log(user);

    return user;
  } catch (err) {
    console.log(err);
  }
};
