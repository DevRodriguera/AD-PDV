import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [conUser, setUser] = useState("");
    const [conPassword, setPassword] = useState("");

    return (
        <UserContext.Provider value={{conUser, conPassword}}>
            {children}
        </UserContext.Provider>
    )
}