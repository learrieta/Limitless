import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithRedirect, signOut,onAuthStateChanged,createUserWithEmailAndPassword,
    signInWithEmailAndPassword, } from "firebase/auth";
import {auth} from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    };

    const logOut = () =>{
        signOut(auth)
    };

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log( currentUser)

        });
        return () => {
            unsubscribe();
        }

    }, [] );

    return(
        <AuthContext.Provider value = {{googleSignIn, logOut, user, createUser, signIn}}>
            {children}
        </AuthContext.Provider>
    );

};

export const UserAuth = () => {
    return useContext(AuthContext)
}