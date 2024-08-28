import axios from 'axios';
import React, { useState } from 'react';

export default function AxiosPost() {
  const data = { fname: "", lastname: "" };
  const [inputData, setInputData] = useState(data);

  const handeldata = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
      .then(response => {
        console.log('response', response);
      });
  };

  const handelUpdate = (e) => {
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
      .then(response => {
        console.log('response', response);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete("https://jsonplaceholder.typicode.com/users/1", inputData)
      .then(response => {
        console.log('response', response);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="fname" value={inputData.fname} onChange={handeldata} className="form-control" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastname" value={inputData.lastname} onChange={handeldata} className="form-control" />
            </div>
            <button className="btn btn-primary" onClick={handlesubmit}>Submit</button>
            <button className="btn btn-warning" onClick={handelUpdate}>Update</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}