import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import App from '../../firebase/Firebase.config';


export const AuthContext = createContext();

const auth = getAuth(App);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userProfile = (profile) =>{
         updateProfile(auth.currentUser, profile)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    }, [])

    const authInfo = {user, loading, providerLogin, logOut, createUser, signIn, userProfile, verifyEmail}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;