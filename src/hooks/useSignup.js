import { useState } from "react";

import { auth } from "../db/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useAuthContext } from "../hooks/useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (email, password,displayName) => {
    setError(null);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log("kullanıcı oluşturuldu", res.user);
        dispatch({ type: "LOGIN", payload: res.user });
      
          updateProfile(res.user, { displayName });
      
      
      })
      .catch((err) => {
        setError(err.message);
      });
     
  };

  return { error, signup };
};
