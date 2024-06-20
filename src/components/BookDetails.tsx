import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';
import coverNotFound from '../img/notFoundCover.jpg'

const URL = "https://openlibrary.org/works/";
//assigned each data its type for the object
interface newBookObjectType {
  description: string | null,
  title: string | null,
  cover_img: HTMLImageElement | string | null,
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

  console.log(book)
  return (
    <div>
      hi
      {book?.subject_times}
    </div>
  )
}
