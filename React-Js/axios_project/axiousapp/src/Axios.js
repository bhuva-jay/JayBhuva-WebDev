import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Axios() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(response.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">axios</h1>
      {isError !== "" && <h2>{isError}</h2>}
      {myData.slice(0,7).map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title.slice(0, 15).toUpperCase()}</h2>
            <p>{body.slice(0, 100)}</p>
          </div>
        );
      })}
    </div>
  );
}