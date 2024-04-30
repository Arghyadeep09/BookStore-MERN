import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
const [book,setBook]=useState({});
const [loading,setLoading]=useState(false);
const {id}=useParams();

useEffect(()=>{
  setLoading(true)
  axios.get(`http://localhost:3000/books/${id}`)
  .then((res)=>{
    setBook(res.data);
    setLoading(false);
  })
  .catch((error)=>console.log(error));

},[])



  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-green-900 '>BookInfo</h1>
      {loading ?(
        <Spinner/>
      ):
      (
        <div className='flex flex-col border-2 border-blue-900 bg-blue-200 rounded-xl w-fit p-5'>
          <div>
          <span className='text-xl mr-4 text-slate-800 '>Id</span>
          <span>{book._id}</span>
          </div><br /><br />

          <div>
          <span className='text-xl mr-4 text-slate-800 '>Title</span>
          <span>{book.title}</span>
          </div><br /><br />

          <div>
          <span className='text-xl mr-4 text-slate-800 '>Author</span>
          <span>{book.author}</span>
          </div><br /><br />

          <div>
          <span className='text-xl mr-4 text-slate-800 '>Publish Year</span>
          <span>{book.publishyear}</span>
          </div><br /><br />

          <div>
          <span className='text-xl mr-4 text-slate-800 '>Created Time</span>
          <span>{new Date(book.createdAt).toString()}</span>
          </div><br /><br />

          <div>
          <span className='text-xl mr-4 text-slate-800 '>Last Update Time</span>
          <span>{new Date(book.updatedAt).toString()}</span>
          </div><br /><br />

        </div>
      )
      }
      
    </div>
  )
}

export default ShowBook
