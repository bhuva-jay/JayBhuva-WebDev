import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Axios_Post() {

  const navigate = useNavigate('')
  const [title, setTitle]=useState('')
  const [year, setYear]=useState('')
  const [poster, setPoster]=useState('')
  const [postData , setPostData]= useState([])

  useEffect(()=>{
    JSON.parse(localStorage.getItem('movieData'))
    
  },[])

  const handleSubmit =(e)=>{
    e.preventDefault();
      let obj ={
        
        id: Date.now().toString(),
        imdbID : Date.now(),
        Title : title,
        Year : year,
        Poster : poster
      }
        console.log([...postData, obj])
        setPostData([...postData, obj])
        localStorage.setItem('movieData', JSON.stringify([...postData, obj]))

      
        axios.post('https://66bef3c142533c4031448d26.mockapi.io/moviesname' , obj)
        .then((response)=>{
          console.log(response)
          navigate('/')
      })
    }

  return (
    <>
    
    <Container>
      <div className='u-main'>
        <h1>Movie Data</h1>
        <div className=' form'>
        <label className='mb-2'>Title: </label>
          <input 
            
            type='text'
            name='title'
            className='form-control'
            onChange={(e)=> setTitle(e.target.value) } 
          />
          <label className='mb-2'>Year: </label>
          <input 
            type='text'
            name='year'
            className='form-control'
            onChange={(e)=> setYear(e.target.value) } 
          />
          <label className='mb-2'>Poster: </label>
          <input 
            type='text'
            name='poster'
            className='form-control'
            onChange={(e)=> setPoster(e.target.value)}
          />
          <button 
            type='submit' 
            className='btn btn-dark mt-3'
            onClick={handleSubmit}
          >SUBMIT</button>
          
        </div>
      </div>
    </Container>
    </>
  )
}
