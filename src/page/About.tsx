import React from 'react';
import about from '../img/about.jpg'
export const About = () => {
  return (
    <section className='about grid place-items-center'>
      <div className='container w-full mb-10'>
        <div className='section-title my-7 ml-4'>
          <h2 className='font-bold text-5xl'>About</h2>
        </div>
        <div className='about-content grid w-full place-items-center lg:grid-cols-2'>
          <div className='about-img'>
            <img className='min-w-[700px]' src={about} alt='' />
          </div>
          <div className='about-text rounded-md  shadow-lg py-4 px-7'>
            <h2 className='about-title font-bold text-4xl mb-4 '>About Prei Norkor Library</h2>
            <div className='about-description grid grid-row-3 space-y-4'>
              <p className='indent-10'>
                Prei Nokor Library is a dedicated project leveraging the Open Library API to provide a comprehensive platform for accessing a vast array of literary resources. By integrating seamlessly with the Open Library API, Prei Nokor Library offers users the ability to explore an extensive collection of books, authors, and subjects. This integration enhances the library's functionality, allowing users to search, discover, and access diverse literary works spanning various genres, languages, and historical periods.
              </p>
              <p className='indent-10'>
                At its core, Prei Nokor Library aims to democratize access to knowledge and promote literacy through innovative use of technology. By harnessing the power of the Open Library API, the project facilitates easy and efficient exploration of millions of books worldwide. Users can delve into literature for educational purposes, research, or recreational reading, supported by robust search capabilities and comprehensive metadata provided by the API.
              </p>
              <p className='indent-10'>
                Moreover, Prei Nokor Library fosters a vibrant community centered around reading and learning. The integration with the Open Library API enables features such as personalized recommendations, user reviews, and curated lists, enhancing user engagement and interaction with the library's resources. This collaborative environment encourages users to share insights, discover new interests, and participate in a shared appreciation for literature, thereby enriching the overall reading experience for all participants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
