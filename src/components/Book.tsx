import React from 'react'
import { Link } from 'react-router-dom';

export const Book = (book:any) => {
  return (
    <div className="book-item">
      <div className='book-item-img'>
        <img src= {book.cover_img} alt="cover"/>
      </div>
      <div className='book-item-info title'>
        <Link to = {`/book/${book.id}`} {...book}>
          <span>{book.title}</span>
        </Link>
      </div>
      <div className='book-item-info author'>
        <span>Author: </span>
        <span>{book.author.join(", ")}</span>
      </div>
    </div>
  )
}

export default Book