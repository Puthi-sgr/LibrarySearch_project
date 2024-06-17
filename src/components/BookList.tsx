import React from 'react';
import { useGLobalContext } from './context';
import { Audio } from 'react-loader-spinner';
import { Book } from '../components/Book'
import notFound from "../img/notFoundCover.jpg";


//https://covers.openlibrary.org/b/id/240727-S.jpg
export const BookList = () => {;
  const {loading, books, resultTitle} = useGLobalContext();
  const booksWithCovers = books.map((book:any) => {
    console.log(book);
    return{
      ...book, 
      id: (book.id).replace("/works/", ""), //a way to replace a string in an array
      cover_img: (book.cover) ? `https://covers.openlibrary.org/b/id/${book.cover}-S.jpg` : notFound
    }
  })

  if(loading) return <Audio />;

  return (
    <section className='flex justify-center'>
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="bookList-content-grid grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-7 space-y-5">
          {
            booksWithCovers.slice(0, 30).map((item : any, index : number) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>  
      </div>
    </section>
  )
}
