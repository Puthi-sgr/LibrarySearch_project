import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider, useGLobalContext} from './components/context';
import { BrowserRouter,
        Router, 
        Routes, 
        Route} from 'react-router-dom';
import { Home } from './page/Home';
import { About } from './page/About'
import { BookList } from './components/BookList';
import { BookDetails } from './components/BookDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Home />} >
            <Route path = "about" element = {<About />} />
            <Route path = "book" element = {<BookList />} />
            <Route path = "/book/:id" element = {<BookDetails />} />
          </Route>
      </Routes>
    </BrowserRouter>  
  </AppProvider>

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
