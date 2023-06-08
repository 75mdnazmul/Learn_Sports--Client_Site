import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');

    // --------------------------------- login with google --------------------------------//
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //  --------------------------- ---- Email and password --------------------------//
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  ---------------------------- Login with email and password -------------------------------//
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //  ----------------------------------- Logout function -----------------------------------//
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        createUser,
        loginWithGoogle,
        logIn,
        logOut,
        loading,
        setPhoto,
        setName,
        name,
        photo
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;