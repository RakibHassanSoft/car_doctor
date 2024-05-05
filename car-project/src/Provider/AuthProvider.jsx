import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

//creating context
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser]= useState(null)
  const [loadin,setLoading]= useState(null)

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const singIN = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }
 const logOut = () =>{
    return signOut(auth);
 }
  

  useEffect(()=>{

    const unSubscribr= onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setLoading(false)
        console.log("Current user",currentUser)
    });
    return ()=>{
        return unSubscribr();
    }
  },[])



  const authInfo ={
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