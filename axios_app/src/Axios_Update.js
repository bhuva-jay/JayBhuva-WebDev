import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

export default function Axios_Update() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [imdbId, setImdbId] = useState('')
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [poster, setPoster] = useState('')

    useEffect(() => {
        if (id) {
            axios.get("https://66bef3c142533c4031448d26.mockapi.io/moviesname")
                .then((res) => {
                    console.log(res)
                    const movie = res.data
                    setImdbId(movie.imdbID)
                    setTitle(movie.Title)
                    setYear(movie.Year)
                    setPoster(movie.Poster)
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const updateMovie = {
            imdbID: imdbId,
            Title: title,
            Year: year,
            Poster: poster
        }

        axios.put(`https://66bef3c142533c4031448d26.mockapi.io/moviesname/${id}`, updateMovie)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch(error => console.error('Error updating data:', error));
    }

    return (
        <>
            <Container>
                <h2 className='mt-5'>Update Movie</h2>
                <div className='form'>
                    <label className='mb-2'>IMDB Id: </label>
                    <input 
                        type='text'
                        name='imdbid'
                        className='form-control'
                        value={imdbId}
                        onChange={(e) => setImdbId(e.target.value)}
                    />
                    <label className='mb-2'>Title: </label>
                    <input 
                        type='text'
                        name='title'
                        className='form-control'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className='mb-2'>Year: </label>
                    <input 
                        type='text'
                        name='year'
                        className='form-control'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <label className='mb-2'>Poster: </label>
                    <input 
                        type='text'
                        name='poster'
                        className='form-control'
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                    />
                    <button 
                        type='submit'
                        className='btn btn-dark mt-3'
                        onClick={handleUpdate}
                    >UPDATE</button>
                </div>
            </Container>
        </>
    )
}
