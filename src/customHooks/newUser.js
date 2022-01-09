import axios from "axios";
import { BASE_URL } from "./../constants/constants";

export const newUser = async (endpoint, obj) => {
  console.log(obj);
  try {
    const user = await axios.post(`${BASE_URL}/${endpoint}`, obj);

    return user;
  } catch (err) {
    console.log(err);
  }
};
