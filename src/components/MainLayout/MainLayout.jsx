import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();
const MainLayout = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      // console.log(result)
      setUser(result.user);
    });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      // console.log(result)
      setUser(result.user);
    });
  };

  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterProvider).then((result) => {
      // console.log(result)
      setUser(result.user);
    });
  };

  const handleSingUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };
  const handleSingIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
    });
  };

  const handleLogout = () => {
    signOut(auth).then((result) => {
      console.log(result);
    });
  };

  useEffect(() => {
    console.log("User state: ", user);
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // if (user) {}
      // else {}
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    handleGoogleLogin,
    handleGithubLogin,
    handleTwitterLogin,
    user,
    setUser,
    handleLogout,
    handleSingUp,
    handleSingIn,
  };
  return (
    <div>
      {/* <h1>I am main layout</h1> */}
      <AuthContext.Provider value={authData}>
        <Outlet></Outlet>
      </AuthContext.Provider>
    </div>
  );
};

export default MainLayout;
