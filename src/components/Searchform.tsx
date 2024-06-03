import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
    return(
        <div>
            <div className="container">
                <div className="search-form-content">
                    <form className="search-form">
                        <div className="search-form-element flex justify-between w-[650px] h-[42px]">
                            <input 

                                placeholder = "The king of cambodia........."
                                type = "text" 
                                className="w-[592px] h-[42px] rounded-md text-black pl-4" />
                            <button 
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