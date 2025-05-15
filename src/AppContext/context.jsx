import React, { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [search, setsearch] = useState({
        title: '',
        location: ''
    })
    const value = {
        search, setsearch

    }
    return (
        <>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </>
    );
};


