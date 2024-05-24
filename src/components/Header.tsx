import React from 'react';
import { NavBar } from './NavBar';
import { SearchForm } from './Searchform';
export const Header = () => {
  return (
    <div>
      <header>
        <NavBar />
        <div className="header-content flex justify-center items-center flex-col text-white">
            <h2 className="font-bold text-4xl">Search your favorite book</h2>
            <p className="text-center max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed hic atque laboriosam maxime unde accusantium ipsam quae aperiam! Eligendi deserunt ratione nostrum quisquam minus quam exercitationem id ?
            </p>
            <SearchForm />
        </div>
      </header>
    </div>
  )
}
