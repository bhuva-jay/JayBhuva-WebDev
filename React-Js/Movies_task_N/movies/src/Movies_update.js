import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

export default function Movies_update() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [moviname, setMoviname] = useState('')
    const [discription, setDiscription] = useState('')
    const [posterimage, setPosterimage] = useState('')

    useEffect(() => {
        if (id) {
            axios.get(`https://66c07bd4ba6f27ca9a56c970.mockapi.io/moviesnanme/${id}`)
                .then((res) => {
                    console.log(res)
                    const movie = res.data
                    setMoviname(movie.moviname)
                    setDiscription(movie.discription)
                    setPosterimage(movie.Posterimage)
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const updateMovie = {
           Moviname:moviname,
            Discription: discription,
            Posterimage: posterimage
        }

        axios.put(`https://66c07bd4ba6f27ca9a56c970.mockapi.io/moviesnanme/${id}`, updateMovie)
            .then((res) => {
                console.log("resdgfhfg",res)
                navigate('/')
            })
            .catch(error => console.error('Error updating data:', error));
    }
  return (
    <>
    <Container>
    <h2 className='mt-5'>Update Movie</h2>
    <div className='form'>
       
        <label className='mb-2'>moviname: </label>
        <input 
            type='text'
            name='title'
            className='form-control'
            value={moviname}
            onChange={(e) => setMoviname(e.target.value)}
        />
        <label className='mb-2'>discription: </label>
        <input 
            type='text'
            name='year'
            className='form-control'
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
        />
        <label className='mb-2'>posterImage: </label>
        <input 
            type='text'
            name='poster'
            className='form-control'
            value={posterimage}
            onChange={(e) => setPosterimage(e.target.value)}
        />
        <button 
            type='submit'
            className='btn btn-primary mt-3'
            onClick={handleUpdate}
        >UPDATE</button>
    </div>
</Container>
</>
  )
}
