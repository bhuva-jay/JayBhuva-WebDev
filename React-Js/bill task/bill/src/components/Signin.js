import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom'; 
import bcrypt from 'bcryptjs';  

export default function Signin() {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email should be in right format")
        .required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, "Password must contain at least one special character, uppercase & lowercase letter, number")
        .required("Required!"),
      remember: Yup.boolean().oneOf([true], "Must agree to the terms"),
    }),
    onSubmit: (values) => {
      const signupData = JSON.parse(localStorage.getItem('UserData')) || [];
      const user = signupData.find(user => user.email === values.email);

      if (user && bcrypt.compareSync(values.password, user.password)) {
        localStorage.setItem('LoggedInUserEmail', user.email);
        localStorage.setItem('CurrentUserId', user.id); 
        setLoginError("");

        if (user.userType === 'Admin') {
          navigate('/admin');
        } else if (user.userType === 'User') {
          navigate('/home');
        }
      } else {
        setLoginError("Invalid email or Password");
      }
    },
  });

  return (
    <>
      <div className="py-5">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
            <h3 className="text-center text-2xl font-bold mb-4">Login</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input 
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input 
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                  type="password"
                  autoComplete="new-password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remember">
                  <input 
                    className="mr-2 leading-tight"
                    type="checkbox"
                    {...formik.getFieldProps("remember")}
                  />
                  <span className="text-sm">Agree to login on a private computer</span>
                </label>
                {formik.touched.remember && formik.errors.remember ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.remember}</div>
                ) : null}
              </div>
              {loginError && <div className="text-red-500 text-xs italic">{loginError}</div>}
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-3">
              <p>
                If you don't have an account, please <Link to="/" className="text-blue-500 hover:text-blue-700">register</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}