import React from 'react'
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.css';
import Uncontrolform from './Uncontrolform';
import LParent from './Lifting/LParent';
import Registration from './Ragestration_form/Registration';

export default function App() {
  return (
   <>
   {/* FORM CONTROL UNCONTROL */}
    {/* <Form/>
    <Uncontrolform/> */}
   {/* LIFTING */}
    {/* <LParent/> */}


    {/*FORM REGISTRATION */}
    <Registration/>
    </>
  )
}
