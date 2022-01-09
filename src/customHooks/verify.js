import { useEffect } from "react";

import { BASE_URL } from "./../constants/constants";
import axios from "axios";

export const useVerify = (uid) => {
  const verify = async () => {
    try {
      const confirmation = await axios.put(`${BASE_URL}/verify/${uid}`);
      console.log(confirmation.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    verify();
  }, []);
};
