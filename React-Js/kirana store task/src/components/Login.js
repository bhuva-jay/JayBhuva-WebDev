import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const [isRegistered, setIsRegistered] = useState(true); // Add a state to track if the user is registered
  

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values) => {
      const user = users.find((user) => user.email === values.email && user.password === values.password);
      if (user) {
        alert('Login successful!');
        window.location.href = '/';
        toast.success("Login successful!")
      } else {
        setIsRegistered(false); // Set isRegistered to false if the user is not found
      }
    }
  });

  const inputFields = [
    { label: "Email", name: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <div>
      <ToastContainer/>
      <h1 className="text-green-500 text-center text-3xl mb-4">Login</h1>
      <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-md shadow-md">
        <form onSubmit={formik.handleSubmit}>
          {inputFields.map((field, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={field.name} className="block text-gray-700 text-sm font-bold mb-2">{field.label}</label>
              <input
                type={field.type || "text"}
                id={field.name}
                name={field.name}
                onChange={formik.handleChange}
                value={formik.values[field.name]}
                className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {formik.touched[field.name] && formik.errors[field.name] ? (
                <div className="text-red-500 text-sm mt-2 flex items-center">
                  <span className="text-lg">*</span>
                  <span className="ml-2">{formik.errors[field.name]}</span>
                </div>
              ) : null}
            </div>
          ))}
          <div className="mb-4">
            <button   type="submit" className="bg-green-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>
          {!isRegistered && (
            <div className="text-red-500 text-sm mt-2 flex items-center">
              <span className="text-lg">*</span>
              <span className="ml-2">You are not registered. Please register first.</span>
              
            </div>
          )}
        </form>
      </div>
    </div>
  );
};


export default LoginPage;