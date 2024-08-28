import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Movie_post() {
    const navigate = useNavigate('')
    const [moviename, setMoviename]=useState('')
    const [discription, setDiscription]=useState('')
    const [Posterimage, setPosterimage]=useState('')
    const [postData , setPostData]= useState([])
  
    useEffect(()=>{
      JSON.parse(localStorage.getItem('movieData'))
      
    },[])
  
    const handleSubmit =(e)=>{
      e.preventDefault();
        let obj ={
          
          id: Date.now().toString(),
          moviename: moviename,
          discription:discription,
          Posterimage:Posterimage
        }
          console.log([...postData, obj])
          setPostData([...postData, obj])
          localStorage.setItem('movieData', JSON.stringify([...postData, obj]))
  
        
          axios.post('https://66c07bd4ba6f27ca9a56c970.mockapi.io/moviesnanme' , obj)
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
        <label className='mb-2'>MovieName: </label>
          <input 
            type='text'
            name='title'
            className='form-control'
            onChange={(e)=> setMoviename(e.target.value) } 
          />
          <label className='mb-2'>MovieDiscription: </label>
          <input 
            type='text'
            name='year'
            className='form-control'
            onChange={(e)=> setDiscription(e.target.value) } 
          />
          <label className='mb-2'>MoviePoster: </label>
          <input 
            type='text'
            name='poster'
            className='form-control'
            onChange={(e)=> setPosterimage(e.target.value)}
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
