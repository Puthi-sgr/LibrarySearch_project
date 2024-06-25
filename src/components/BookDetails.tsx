import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';
import coverNotFound from '../img/notFoundCover.jpg'
import { Loader } from './Loader';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { color } from 'framer-motion';

const URL = "https://openlibrary.org/works/";
//assigned each data its type for the object
interface newBookObjectType {
  description: string | null,
  title: string | null,
  cover_img: string | undefined,
  subject_places: string | null,
  subject_times: string | null,
  revision: number
}

type nullableType = newBookObjectType | null; //special nullable type
export const BookDetails = () => {
  const {id} = useParams();
  const [book, setBook] = useState<nullableType>();
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
  const navigate = useNavigate();
  const [arrowState, setArrowState] = useState<boolean>(false);

  
  useEffect(() => {
    setIsLoading(true);
    const getBookDetails = async () =>{
      try{
        const res = await axios.get(`${URL}${id}.json`);
        const docs = await res.data;
        console.log(docs);
        if(docs){
          const {
            title,
            covers,
            subject_times,
            subject_places,
            description,
            revision
          } = docs;
          const newBook: newBookObjectType = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-S.jpg` : coverNotFound,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ?  subject_times.join(", ") : "No subject times found",
            revision: revision ? revision : 0
          }

          setBook(newBook);
        }else{
          setBook(null);
        }
        setIsLoading(false);
      }catch(error){
        setIsLoading(false);
        console.error(error);
      }
    } 
    getBookDetails();
  }, [id])

  if(isLoading) return <div>loading</div>
  console.log(book)
  return (
    <section className='book-details flex justify-center w-full mb-11'>
      <div className='container w-full'>
        <button type='button' 
                className='bg-secondary text-white rounded-md py-3 px-10 my-5 hover:opacity-70 transition-all'
                onClick={() => navigate('/book')}
                onMouseEnter={() => {
                    setArrowState((prev) => {
                      return !prev;
                    })
                  }}
                  onMouseLeave={() => {
                    setArrowState((prev) => {
                      return !prev;
                    })
                  }}
                >
                <FaArrowLeft 
                  className={`inline-block transition-all ${arrowState ? 'size-0' : 'mr-3'}`}/>
                <span> Go Back</span>
        </button>

        <div className='book-content grid grid-flow-row lg:grid-cols-2 mt-10 space-y-4 place-items-center w-full'>
          <div className='book-details-img'>
            <img className='h-[780px] overflow-hidden' src={book?.cover_img} alt='cover-img' />
          </div>
          <div className='book-details-info grid grid-flow-row place-items-start space-y-10 scrollbar-custom overflow-y-scroll shadow-lg py-4 px-6 mt-4 h-full w-full'>
            <div className='book-details-item title '>
              <span className='font-bold text-5xl'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span className=''>{book?.description || 'No description'}</span>
            </div>
            <div className='book-details-item subject-places'>
              <span className='font-bold'>Subject places: </span>
              <span>{book?.subject_places}</span>
            </div>
            <div className='book-details-item subject-times'>
              <span className='font-bold' >Subject times: </span>
              <span>{book?.subject_times}</span>
            </div>
            <div className='book-details-item revisions'>
              <span className='font-bold' >Times of revision: </span>
              <span>{book?.revision}</span>
            </div>
          </div>
        </div>
      </div>
    </section>  
  )
}
