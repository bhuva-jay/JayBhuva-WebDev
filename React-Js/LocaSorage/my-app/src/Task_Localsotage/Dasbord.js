import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();
  const { state } = location;
  const user = state.user;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h1 className="card-title">Welcome, {user.name}!</h1>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Password: {user.password}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}