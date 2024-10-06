import { Navigate } from "react-router-dom";
import Layout from "../layout";


const Root = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
  if (!userInfo?.token) return <Navigate to="/login" />;
  return <Layout />;
};

export default Root;
