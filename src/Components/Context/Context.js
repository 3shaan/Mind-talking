import React, { createContext, useEffect } from 'react';
export const authContext = createContext();

const Context = ({ children }) => {
    



    const contextValue ={}
    return (
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>
    );
};

export default Context;