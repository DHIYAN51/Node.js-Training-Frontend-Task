import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {ToastErrMsg, ToastSuccessMsg}from"../utils/ToastMsg";

  const validationSchema = yup.object({
    username: yup
      .string()
      .required("Username is required")
      .strict()
      .trim()
      .uppercase()
      .min(5, "Minimum 5 characters required")
      .max(15, "Maximum 15 characters only"),
    emailid: yup.string().email().required("Email is required"),
    firstname: yup
      .string()
      .required("Firstname is required")
      .strict()
      .trim()
      .uppercase()
      .min(5, "Minimum 5 characters required")
      .max(15, "Maximum 15 characters only"),
    lastname: yup
      .string()
      .required("Lastname is required")
      .strict()
      .trim()
      .uppercase()
      .min(5, "Minimum 5 characters required")
      .max(15, "Maximum 15 characters only"),
    password: yup
      .string()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
      .required("Password is required"),
      
  });

  const CreateUser = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      emailid: "",
      firstname: "",
      lastname: "",
      password: "",
       
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
   onSubmit: (userinput)=>{
    console.log("Submithandler-----",userinput)
    Submithandler(userinput);
    navigate('/');
    formik.resetForm();
   }
  });
//   if(formik.errors){
//     ToastErrMsg("Credentials are needs")
//     console.log("Error-->: ", formik.errors);
// }

console.log("Error-->: ", formik.errors);
  const navigate = useNavigate();
  const vercel = "https://back-end-task-leli.vercel.app";
  // const test = "http://localhost:8001";
  
  
  const Submithandler = async (values) => {
     
    const { ...data} = values;
    const response = await Axios.post(`${vercel}/users/add`,data)
    .catch((err)=>{
      if (err && err.response){
        ToastErrMsg(err.response.data.message)
         console.log("Error---> ",err.response.data.message );
      }
    });
    if(response && response.data){
        ToastSuccessMsg(response.data.message)
        console.log("Successful----> ", response.data.message)
    }
  
  }
  
  return (
    <div>
        <ToastContainer />
   <div>
   <Container>
      <Form onSubmit={formik.handleSubmit} autoComplete="off">
        <Form.Group className="mb-3">
          <Form.Label>Email-ID</Form.Label>
          <Form.Control
            type="email"
            name="emailid"
            placeholder="Enter your Email-id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emailid}
          />
        </Form.Group>
        {formik.touched.emailid && formik.errors.emailid ? (
          <div className="text-danger">{formik.errors.emailid}</div>
        ) : null}
        <Form.Group className="mb-3">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <Form.Text className="text-muted">Eg: DHIYANESH</Form.Text>
        </Form.Group>
        {formik.touched.username && formik.errors.username ? (
          <div className="text-danger">{formik.errors.username}</div>
        ) : null}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <Form.Text className="text-muted">Eg:- Asd@1234</Form.Text>
        </Form.Group>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}

 

        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            placeholder="Enter firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
        </Form.Group>
        {formik.touched.firstname && formik.errors.firstname ? (
          <div className="text-danger">{formik.errors.firstname}</div>
        ) : null}
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="Enter lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
        </Form.Group>{" "}
        {formik.touched.lastname && formik.errors.lastname ? (
          <div className="text-danger">{formik.errors.lastname}</div>
        ) : null}


{/* Get from backend
        {success ? 
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text type="">
            success
          </Form.Text>
       
        </Form.Group>
        : " "} */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
   </div>
</div>
  );
};

export default CreateUser;
