import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Buyer from './Buyer';
import Admin from './Admin';

const Dashboard = () => {
  const userRole = localStorage.getItem('userRole');

  if (userRole === 'Buyer') {
    return (
      <>
        <Navbar />
        <WelcomeMessage message="Welcome, Buyer!" />
        <Buyer />
      </>
    );
  } else if (userRole === 'Admin') {
    return (
      <>
        <Navbar />
        <WelcomeMessage message="Welcome, Admin!" />
        <Admin />
      </>
    );
  } else if (userRole === 'Salesman') {
    return (
      <>
        <Navbar />
        <WelcomeMessage message="You can login when admin allows you" />
        {/* You can add additional logic here to handle Salesman login */}
      </>
    );
  } else {
    return <div>Invalid user role</div>;
  }
};

const WelcomeMessage = ({ message }) => {
  return <h2>{message}</h2>;
};

export default Dashboard;