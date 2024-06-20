import axios from 'axios';
import React, {useState, useContext, useEffect, useCallback, ReactNode, FC, Dispatch, SetStateAction} from 'react';
const URL = "https://openlibrary.org/search.json?title=";

interface GlobalContextType {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  books: any[];
  loading: boolean | null;
  resultTitle: string;
  setResultTitle: Dispatch<SetStateAction<string>>;
}

const AppContext = React.createContext<GlobalContextType | undefined>(undefined);

export const AppProvider: FC<{children : ReactNode}> = ({children} ) => {
    const [searchTerm, setSearchTerm] = useState<string>("the lost world");
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [resultTitle, setResultTitle] = useState<string>("");

    const contextValue: GlobalContextType = {
        setSearchTerm,
        books,
        loading,
        resultTitle,
        setResultTitle   
    }

    const fetchBook = useCallback(async () => {
        setLoading(true);        
        try{
            const response = await axios.get(`${URL}${searchTerm}`);
            const { docs } = await response.data;

            //if docs exists
            if(docs){
                const newBooks = docs.slice(0, 20).map((book: any) => {
                    /*we extract these from each book we map*/
                    const {key, 
                            author_name, 
                            cover_i, 
                            edition_count, 
                            first_publish_year, 
                            title}  = book; 

                    return {
                        id: key,
                        author: author_name,
                        cover: cover_i,
                        edition: edition_count,
                        first_publish: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks); //setting the array of books with book function that we have made in the above

                if(newBooks.length > 1){
                    setResultTitle("This is your result");
                }else{
                    setBooks([]); //if the function return less than 1 book, set the array of book into an empty array;
                    setResultTitle("No book found!");
                }
                setLoading(false);
            }
           
        }catch(err){
            console.error(err);
        }                
    }, [searchTerm]);

    useEffect(() => {
        fetchBook();
    }, [searchTerm, fetchBook]);


    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useGLobalContext = (): GlobalContextType => {
    const context = useContext(AppContext);
    if(!context){
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
}