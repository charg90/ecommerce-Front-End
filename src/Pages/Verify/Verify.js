import { useParams } from "react-router-dom";
import { useVerify } from "./../../customHooks/verify";
const Verify = () => {
  const { uid } = useParams();
  useVerify(uid);

  return (
    <>
      <h1>hola</h1>
    </>
  );
};

export default Verify;
