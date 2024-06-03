import React from 'react';
import { NavBar } from './NavBar';
import { SearchForm } from './Searchform';
export const Header = () => {
  return (
    <div>
      <header>
        <NavBar />
        <div className="flex justify-center">
          <div className="header-content w-[94%] rounded-md flex space-y-4 justify-center items-center flex-col text-white">
              <h2 className="font-bold text-4xl">Search your favorite book</h2>
              <p className="text-center max-w-3xl">
                Update your lifestyle with books online by searching up books that you love
              </p>
              <SearchForm />
          </div>
        </div>
      </header>
    </div>
  )
}
