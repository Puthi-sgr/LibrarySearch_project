import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../img/Logo.jpg"
export const NavBar = () => {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const handleToggleMenu = () => {
        setToggleMenu((prev:boolean) => {
            return !prev;
        })
    }

    return (
        <nav >
            <div className="container flex justify-between h-14">
                <div>
                    <Link to = "/">
                        <span className="inline-block ml-6 ">Library</span>
                        <img src= {logo} alt="logo" className="size-14 inline-block"/>
                    </Link>
                    <button 
                        type="button"
                        onClick={handleToggleMenu}
                        className="navbar-toggler-btn absolute top-5 right-8 z-10"
                        style={{marginLeft: "5rem"}}
                    >
                        <RxHamburgerMenu className={toggleMenu ? "" : "text-white transition-all duration-300 ease-in-out "} />
                    </button>
                </div>
                <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                    <ul className = "navbar-nav">
                        <li className="nav-item">
                            <Link to="book">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>      
            </div>
        </nav>
    )
}                                               