// import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navbar";
import { ToastErrMsg, ToastSuccessMsg } from "../../utils/ToastMsg";
import { useFormik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object({
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

const UpdateUser = ({ id }) => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (id,inputs) => {
      console.log("updateHandler-----", id);
      updateHandler(id,inputs);
      navigate("/home");
      formik.resetForm();
    },
  });
  const navigate = useNavigate();
  const vercel = "https://back-end-task-leli.vercel.app";
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [password, setPassword] = useState("");

  const updateHandler = async (id, values) => {
    const { ...data } = values;
    const response = await Axios.put(
      `${vercel}/users/update/${id}`,
      data
    ).catch((err) => {
      if (err && err.response) {
        ToastErrMsg(err.response.data);
        console.log("Error---> ", err.response.data);
      }
    });
    if (response && response.data) {
      ToastSuccessMsg(response.data.message);
      console.log("Successful----> ", response.data);
    }
  };

  // const updateHandler =(id)=>{
  // Axios.put(`${vercel}/users/update/${id}`,{firstname:firstname, lastname:lastname,  password:password}).then(()=>alert("user updated")).catch(e=>console.log(e))
  // setFirstname("");
  // setLastname("");
  // setPassword("");
  // navigate('/home')
  // }
  return (
    <div>
      <Navigation />
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Enter lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
          </Form.Group>
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="text-danger">{formik.errors.lastname}</div>
          ) : null}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {!formik.isValid ? (
            <Button variant="warning" disabled type="submit">
              Submit
            </Button>
          ) : (
            <Button variant="success" type="submit">
              Submit
            </Button>
          )}
        </Form>
      </Container>
    </div>
  );
};

export default UpdateUser;
