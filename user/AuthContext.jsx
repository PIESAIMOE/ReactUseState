import React, { useState,useEffect } from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [ user, setUser] = useState(null);
    const [ selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setUser(JSON.parse(storedData));
        }
    }, []);
    useEffect(() => {
        const storeColor = localStorage.getItem('color');
        if (storeColor) {    
            setSelectedColor(JSON.parse(storeColor));
        }

    }, []);
  
    const login = (data) => {
        setUser(data);
        console.log("data",data);
    };
    const logout = () => {
        setUser(null);
        setSelectedColor(null);
    }
    return (
        <AuthContext.Provider value={{user,login,logout,selectedColor, setSelectedColor}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider













































;

