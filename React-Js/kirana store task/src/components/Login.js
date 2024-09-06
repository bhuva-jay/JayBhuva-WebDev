import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const [isRegistered, setIsRegistered] = useState(true);
  const navigate = useNavigate();

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
        toast.success("Login successful!");
        localStorage.setItem('userRole', user.role); // Store user's role in local storage
        localStorage.setItem('isLoggedIn', true); // Store a flag to indicate the user is logged in
        if (user.role === 'admin') {
          navigate('/admin');
        } else if (user.role === 'seller') {
          navigate('/Selsmen');
        } else if (user.role === 'buyer') {
          navigate('/Buyer');
        }
      } else {
        setIsRegistered(false);
      }
    }
  });

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Login Page</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <label className="block mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            {...formik.getFieldProps('email')}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
          <br />
          <label className="block mb-2" htmlFor="password">Password:</label>
          <input
            type="password"
            {...formik.getFieldProps('password')}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
          <br />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        {isRegistered ? (
          <p className="text-sm text-gray-600 mt-4">
            Not registered? <a href="/register" className="text-blue-600 hover:text-blue-800">Register now!</a>
          </p>
        ) : (
          <p className="text-sm text-red-500 mt-4">Invalid email or password. Please try again.</p>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;