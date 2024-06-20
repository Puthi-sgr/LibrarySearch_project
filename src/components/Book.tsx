import React from 'react'
import { Link } from 'react-router-dom';

export const Book = (book:any) => {
  return (
    <div className="book-item bg-white grid space-y-4 place-items-center shadow-md rounded-md">
      <div className='book-item-img bg-primary w-full h-full'>
        <img className="my-4 max-w-44 w-44 mx-auto lg:w-40 xl:w-36 rounded-sm shadow-md" src= {book.cover_img} alt="cover"/>
      </div>
      <div className='book-item-info title'>
        <Link to = {`/book/${book.id}`} {...book}>
          <span className="font-bold">{book.title}</span>
        </Link>
      </div>
      <div className='book-item-info author'>
        <span className="font-bold">Author : </span>
        <span className='opacity-60'>{book.author.join(", ")}</span>
      </div>
      <div className='book-item-info edition'>
        <span>Total Editions : </span>
        <span className='opacity-60'>{book.edition}</span>
      </div>
      <div className='book-item-info publish-year'>
        <span className='italic font-bold opacity-60'>First Publish Year : </span>
        <span className='opacity-60'>{book.first_publish ? book.first_publish : "N/A"}</span>
      </div>
    </div>
  )
}

export default Book