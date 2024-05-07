import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import axios from 'axios';

//creating context
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loadin, setLoading] = useState(null)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singIN = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = () => {
    return signOut(auth);
    setLoading(true)
  }


  useEffect(() => {

    const unSubscribr = onAuthStateChanged(auth, currentUser => {
      const userEmail =  currentUser?.email || user?.email;
      const loggedUser = { email: userEmail }
      setUser(currentUser)
      setLoading(false)
      console.log("Current user", currentUser);
      // If user exist then essue a token
      if (currentUser) {
        axios.post('http://localhost:5000/jwt',loggedUser, { withCredentials: true })
          .then(res => {
            {
              console.log("token response",res.data)
            }
          })
      }else{
             axios.post('http://localhost:5000/logout',loggedUser,{
              withCredentials:true
             })
             .then(res =>{
              console.log(res.data)
             })
      }
    });
    return () => {
      return unSubscribr();
    }
  }, [])



  const authInfo = {
    user,
    loadin,
    createUser,
    singIN,
    logOut


  }



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;