import React, { createContext } from 'react';

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const authData = {
        

    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;