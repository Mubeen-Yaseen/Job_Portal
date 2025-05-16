import React, { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [search, setsearch] = useState({
        title: '',
        location: ''
    })
    const [issearch, setissearch] = useState(false)
    const value = {
        search, setsearch, issearch, setissearch

    }
    return (
        <>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </>
    );
};


