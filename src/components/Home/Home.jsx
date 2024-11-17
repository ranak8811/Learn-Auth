// import {
//   GithubAuthProvider,
//   GoogleAuthProvider,
//   signInWithPopup,
//   TwitterAuthProvider,
// } from "firebase/auth";
// import auth from "../../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../MainLayout/MainLayout";

const Home = () => {
  const contextValue = useContext(AuthContext);
  // console.log(contextValue);

  const {
    handleGoogleLogin,
    handleGithubLogin,
    handleTwitterLogin,
    handleLogout,
  } = contextValue;

  // const googleProvider = new GoogleAuthProvider();
  // const githubProvider = new GithubAuthProvider();
  // const twitterProvider = new TwitterAuthProvider();

  // const handleGoogleLogin = () => {
  //   signInWithPopup(auth, googleProvider).then((result) => console.log(result));
  // };

  // const handleGithubLogin = () => {
  //   signInWithPopup(auth, githubProvider).then((result) => console.log(result));
  // };

  // const handleTwitterLogin = () => {
  //   signInWithPopup(auth, twitterProvider).then((result) =>
  //     console.log(result)
  //   );
  // };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Google Login</button>
      <button onClick={handleGithubLogin}>Github Login</button>
      <button onClick={handleTwitterLogin}>Twitter Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
