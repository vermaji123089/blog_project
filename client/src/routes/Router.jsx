import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Author from '../pages/Author'
import Myaccount from '../pages/Myaccount'
import Mypost from '../pages/Mypost'
import Login from "../pages/Login";
import CreateAcc from "../pages/CreateAcc";
import Verify from "../pages/Verify";
const Router = () => {
  return (
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/author" element={<Author />} />
      <Route path="/myaccount" element={<Myaccount />} />
      <Route path="/mypost" element={<Mypost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<CreateAcc />} />
      <Route path="/verfy/:id" element={<Verify />} /> 
    </Routes>
   
  );
};

export default Router;
