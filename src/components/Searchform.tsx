import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AppProvider, useGLobalContext } from "./context";
import { useRef, useEffect } from "react";
export const SearchForm = () => {

    const {setSearchTerm , setResultTitle} = useGLobalContext();
    const searchText = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => searchText.current?.focus(), [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let inputValue = searchText.current?.value.trim();
        if(inputValue?.replace(/[^\w\s]/gi, "").length === 0){
            setSearchTerm("the lost world");
            setResultTitle("Enter your favorite book title ...");
        }else{
            setSearchTerm(searchText?.current?.value ?? "the lost world")
        }

        navigate('/book');
    }
    return(
        <div>
            <div className="container">
                <div className="search-form-content">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="search-form-element flex justify-between w-[650px] h-[42px]">
                            <input 
                                ref={searchText}
                                placeholder = "The king of cambodia........."
                                type = "text" 
                                className="w-[592px] h-[42px] rounded-md text-black pl-4" />
                            <button 
                                onClick = {handleSubmit}
                                className="w-12 rounded-md h-full bg-secondary flex items-center justify-center"
                                type="submit">
                                <FaMagnifyingGlass className="p size-4" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}