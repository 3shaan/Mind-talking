import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../../FireBase/FireBase.config';
export const authContext = createContext();

const auth = getAuth(app);
const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const SignIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => unsubscribe();
    },[])
    

    const contextValue = { SignIn };
    return (
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>
    );
};

export default Context;