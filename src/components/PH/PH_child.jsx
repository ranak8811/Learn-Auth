import React, { useContext } from "react";
import { AuthContext } from "../MainLayout/MainLayout";

const PH_child = () => {
  const contextValue = useContext(AuthContext);
  console.log("PH context: ", contextValue);
  return (
    <div>
      <h4>I am ph child</h4>
    </div>
  );
};

export default PH_child;
