import React, { useContext } from "react";
import { AuthContext } from "../MainLayout/MainLayout";
import { Outlet } from "react-router-dom";

const PH = () => {
  const contextValue = useContext(AuthContext);
  console.log("PH context: ", contextValue);
  return (
    <div>
      <h2>I am PH</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default PH;
