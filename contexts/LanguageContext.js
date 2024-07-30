"use client"
import { createContext, useState } from 'react';
import { useContext } from 'react'; 

 const LanguageContext = createContext();

 const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("en");
    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

 const useLanguageContext = () =>{
    return useContext(LanguageContext);
}

export { LanguageProvider, useLanguageContext };