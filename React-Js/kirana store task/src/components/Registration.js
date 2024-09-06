import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const RegisterPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema,
    onSubmit: (values) => {
      const newUser = { ...values, role: 'user' };
      const storedUsers = JSON.parse(localStorage.getItem('users'));
      if (storedUsers) {
        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));
      } else {
        localStorage.setItem('users', JSON.stringify([newUser]));
      }
      toast.success("Registration successful!");
      navigate('/login');
    }
  });

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Register Page</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <label className="block mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            {...formik.getFieldProps('name')}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Enter your name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
          <br />
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
          <label className="block mb-2" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            {...formik.getFieldProps('confirmPassword')}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Confirm your password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
          ) : null}
          <br />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Already registered? <a href="/login" className="text-blue-600 hover:text-blue-800">Login now!</a>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterPage;