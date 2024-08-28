import React, { useEffect } from 'react'

export default function Movie_recover() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://66c07bd4ba6f27ca9a56c970.mockapi.io/moviesnanme")
            .then((response) => {
                console.log(response)
                setData(response.data)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [])
  return (
    <>
    <Container>
        <h2 className='mt-5'>Movie Data</h2>
        <Table striped bordered hover size="sm" className='mt-5'>
            <thead>
                <tr style={{textAlign:'center'}}>
                    <th>Id</th>
                    <th>moviename</th>
                    <th>diascription</th>
                    <th>Posterimage</th>
                    <th colSpan={2} style={{ textAlign: "center" }}>Action</th>
                </tr>
            </thead>
            <tbody className='mt-3'>
                {data.map(movie => (
                    <tr key={movie.id}>
                        <td style={{textAlign:'center'}}>{movie.id}</td>                      
                        <td style={{textAlign:'center'}}>{movie.moviename}</td>
                        <td style={{textAlign:'center'}}>{movie.diacription}</td>
                        <td style={{textAlign:'center'}}><Image src={movie.PosterImage} width={150} height={150} /></td>

                        <td style={{textAlign:'center'}}>
                            <button 
                            className='btn btn-danger mt-5' 
                            type='button' 
                            onClick={() => handleDelete(movie.id)}
                            >DELETE</button>
                        </td>

                        <td style={{textAlign:'center'}}>
                            <button 
                            type='button' 
                            className='btn btn-primary mt-5'
                            onClick={() => handleEdit(movie.id)} 
                            >UPDATE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
</>
  )
}



