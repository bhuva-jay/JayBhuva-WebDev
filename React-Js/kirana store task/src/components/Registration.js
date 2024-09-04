import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Registration = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema,
    onSubmit: (values) => {
      const newUser = { ...values, id: Math.random().toString(36).substr(2, 9) };
      setUsers([...users, newUser]);
      localStorage.setItem('users', JSON.stringify([...users, newUser])); // Update local storage here
      alert('Registration successful!');
      window.location.href = '/login';
    }
  });

  const inputFields = [
    { label: "Full Name", name: "fullName" },
    { label: "Email", name: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" },
  ];

  return (
    <div>
      <h1 className="text-green-500 text-center text-3xl mb-4">Registration</h1>
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
            <button type="submit" className="bg-green-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;