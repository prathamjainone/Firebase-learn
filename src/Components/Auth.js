import React from "react";
import { createUserWithEmailAndPassword , signOut,signInWithPopup} from "firebase/auth";
import { auth, google } from "../config/firebase";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin= async()=>{
    try{await createUserWithEmailAndPassword(auth,email, password);}
    catch(err){console.log(err)}
  }

  const Google= async()=>{
    try{await signInWithPopup(auth, google)}
    catch(err){console.log(err)}
  }

  const signout= async()=>{
    try{await signOut(auth)}
    catch(err){
        console.error(err);
  }
  }
  console.log(auth?.currentUser?.email)
  return (
    <div>
      <input onChange={(e)=> setEmail(e.target.value)} placeholder="email" type="email" />
      <input onChange={(e)=> setPassword(e.target.value)} placeholder="password" type="password" />
      <button onClick={signin}>Sign In</button>
      <button onClick={signout}>Sign out</button>
      <button onClick={Google}>Sign In with Google</button>
    </div>
  );
};

export default Auth;
