import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../components/images/image.png';

export default function Header() {
  const navigate = useNavigate();
  const loggedInUserEmail = localStorage.getItem('LoggedInUserEmail');
  const signupData = JSON.parse(localStorage.getItem('UserData')) || [];
  const loggedInUser = signupData.find((user) => user.email === loggedInUserEmail);

  const handleLogout = () => {
    const updatedSignupData = signupData.filter((user) => user.email !== loggedInUserEmail);
    localStorage.setItem('UserData', JSON.stringify(updatedSignupData));

    localStorage.removeItem('LoggedInUserEmail');
    localStorage.removeItem('CurrentUserId');
    
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={image} className="h-12 w-12 rounded-full md:h-16 md:w-16" />
          <Link to="#" className="text-3xl font-bold text-white ml-4 md:text-4xl">GroceryStore</Link>
        </div>
        <div className="hidden lg:flex flex-wrap justify-end items-center">
          <Link to="/home" className="text-gray-300 hover:text-gray-500 transition duration-300 ease-in-out text-lg mr-4 md:text-2xl">Home</Link>
          {!loggedInUser && (
            <Link to="/login" className="text-gray-300 hover:text-gray-500 transition duration-300 ease-in-out text-lg mr-6 md:text-2xl">Sign In</Link>
          )}
          {loggedInUser && (
            <>
              {loggedInUser.userType === 'Admin' ? (
                <div className="dropdown relative">
                  <button
                    className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => document.querySelector('.dropdown-menu').classList.toggle('hidden')}
                  >
                    Admin
                  </button>
                  <div className="dropdown-menu hidden absolute right-0 mt-2 w-48 bg-white rounded shadow-md">
                    <Link to="/admin" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Dashboard</Link>
                    <Link to="/userquize" className="block px-4 py-2 text-gray-700 hover:text-gray-900">All User Quizes</Link>
                  </div>
                </div>
              ) : (
                <span className="text-white u-username">Welcome {loggedInUser.username}</span>
              )}
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
        <div className="lg:hidden flex justify-end items-center">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => document.querySelector('.mobile-menu').classList.toggle('hidden')}
          >
            Menu
          </button>
        </div>
      </div>
      <div className="mobile-menu hidden lg:hidden bg-gray-800 py-4">
        <div className="container mx-auto p-4 flex flex-col items-center">
          <Link to="/home" className="text-gray-300 hover:text-gray-500 transition duration-300 ease-in-out text-lg mb-4">Home</Link>
          {!loggedInUser && (
            <Link to="/login" className="text-gray-300 hover:text-gray-500 transition duration-300 ease-in-out text-lg mb-6">Sign In</Link>
          )}
          {loggedInUser && (
            <>
              {loggedInUser.userType === 'Admin' ? (
                <div className="mb-4">
                  <Link to="/admin" className="text-gray-300 hover:text-gray-500 transition duration-300 ease-in-out text-lg">Dashboard</Link>
                  <Link to="/userquize" className="text-gray-300 hover:text-gray-500 transition duration-300 ease-in-out text-lg">All User Quizes</Link>
                </div>
              ) : (
                <span className="text-gray-300 hover:text-gray-500 transition duration-300 ease-in-out text-lg mb-4">Welcome {loggedInUser.username}</span>
              )}
              <button
                className="text-gray-300 hover:text-gray-500 transition duration-300 ease-in-out text-lg mb-4"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}