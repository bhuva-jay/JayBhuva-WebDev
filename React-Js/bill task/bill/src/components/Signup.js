import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import bcrypt from 'bcryptjs';  
import { Link, useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

export default function Signup() {

  const navigate = useNavigate();
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const [user, setUser] = useState([]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, "Minimum 4 characters")
        .max(8, "Maximum 8 characters")
        .matches(/^[A-Za-z\s]+$/, "Name should contain only letters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Password must contain at least one special character, uppercase & lowercase letter, number")
        .required("Required!"),
    }),
    onSubmit: values => {
      const existingData = JSON.parse(localStorage.getItem('UserData')) || [];
      const isEmailExist = existingData.some(user => user.email === values.email);
      if (isEmailExist) {
        alert("This email is already registered.");
      } else {
        const hexPassword = bcrypt.hashSync(values.password, 10);
        const userType = values.password.includes("Admin") || values.password.includes("admin") ? "Admin" : "User";
        const User = { ...values, password: hexPassword, id: Date.now(), userType };
        const userData = [...existingData, User];
        localStorage.setItem('UserData', JSON.stringify(userData));
        localStorage.setItem('LoggedInUser', JSON.stringify(User)); 
        localStorage.setItem('CurrentUserId', User.id); 
        setUser({ ...user, userType: user.userType || 'User' });
        formik.resetForm();
        navigate('/login');
      }
    }
  });

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="flex flex-wrap mx-4">
        <div className="w-full xl:w-8/12 p-6 text-lg">
          <h1 className="text-center text-3xl font-bold mb-4">Registration</h1>
          <form onSubmit={formik.handleSubmit} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">User Name</label>
              <input 
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''}`}
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-xs italic">{formik.errors.username}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input 
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <div className="flex">
                <input 
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus                  :shadow-outline ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                  type={changePassword ? "password" : "text"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <button
                  className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={() => setChangePassword(changeIcon)}
                >
                  {changeIcon ? <FaRegEye /> : <FaEyeSlash />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
              Submit
            </button>
            <div className="text-center mt-3">
              <p>
                If you have an account <Link to="/login">Login</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}