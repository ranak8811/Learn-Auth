import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../MainLayout/MainLayout";

const About = () => {
  const { handleGoogleLogin, setUser, user } = useContext(AuthContext);
  return (
    <div>
      <h3>This is about page</h3>
      <h1>{user?.displayName}</h1>
      <p>{user?.email}</p>
      <Outlet></Outlet>
      <button onClick={handleGoogleLogin}>Google Login</button>
      <button onClick={() => setUser("Rana")}>Change User</button>
    </div>
  );
};

export default About;
