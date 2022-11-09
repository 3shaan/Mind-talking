import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../FireBase/FireBase.config';
export const authContext = createContext();

const auth = getAuth(app);
const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    //sign IN
    const SignIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //user check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => unsubscribe();
    }, [])

    //google user create
    const googleSignIn =() => {
        return signInWithPopup(auth, googleProvider);
    }

    //login 
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //log out
    const logOut = () => {
        return signOut(auth)
            .then(() => { }).catch(err => console.log(err));
    }
    

    const contextValue = { SignIn, auth, googleSignIn, user, Login, logOut };
    return (
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>
    );
};

export default Context;