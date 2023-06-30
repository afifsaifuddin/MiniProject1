import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { keepLogin } from "../Redux/Reducer/Authreducer";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(keepLogin());
  }, [dispatch]);
  return <>{children}</>;
};
export default Auth;
