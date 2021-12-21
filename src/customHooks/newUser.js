import axios from "axios";
import { BASE_URl } from "./../constants/constants";

export const newUser = async (endpoint, obj) => {
  console.log(obj);
  try {
    const user = await axios.post(`${BASE_URl}/${endpoint}`, obj);

    return user;
  } catch (err) {
    console.log(err);
  }
};
