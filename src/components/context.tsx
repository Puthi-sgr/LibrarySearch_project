import axios from 'axios';
import React, {useState, useContext, useEffect, useCallback } from 'react';
const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext({});

export const AppProvider = ({children} : any) => {
    const [searchTerm, setSearchTerm] = useState<string | null>("lord of the rings");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [resultTitle, setResultTitle] = useState<string | null>("");

    const fetchBook = useCallback(async () => {
        setLoading(true);        
        try{
            const response = await axios.get(URL);
            const { docs }  = await response.data;
        }catch(err){
            console.error(err);
        }                
    }, [searchTerm]);

    useEffect(() => {
        fetchBook();
    }, [searchTerm, fetchBook]);

    return (
        <AppContext.Provider value={
            {
                setSearchTerm,
                books,
                loading,
                resultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGLobalContext = () => {
    return useContext(AppContext);
}