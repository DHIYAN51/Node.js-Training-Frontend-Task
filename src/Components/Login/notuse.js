import { Avatar, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";
import {   useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { MDBBtn } from "mdb-react-ui-kit";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useFormik } from "formik";
import * as yup from "yup";
//   import Axios from "axios";
//   import { ToastErrMsg } from "../../utils/ToastMsg";
import "../../Styles/Login/Login.css";
const validationSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  name: yup
    .string()
    .required("Name is required")
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
  confirmpassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Confirm password and password must be same"
    )
    .required("confirmpassword is required"),
});
const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmpassword: "",
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (userinput) => {
      console.log("handleSubmit-----", userinput);
      handleSubmit(userinput);
      navigate("/home");
      formik.resetForm();
    },
  });
  const paperStyle = {
    padding: 50,
    height: "auto",
    width: 450,
  };
  const avatarStyle = { backgroundColor: "#1976D2" };
  const btnstyle = { margin: "8px o" };
 
  const navigate = useNavigate();
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setSignInData({
  //       ...signInData,
  //       [name]: value,
  //     });
  //   };

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div>
      {/*Toast */}
      <ToastContainer />
      <div className="Card">
        <Grid>
          <Paper className="paper" elevation={10} style={paperStyle}>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <ExitToAppOutlinedIcon />
                </Avatar>
                <h3 className="title">Sign-Up</h3>
              </Grid>
              <br />
              <br />

              <TextField
                id="outlined-basic"
                name="name"
                label="Username"
                variant="outlined"
                type="text"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                // value={signInData.userName}
                error={false}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
              <br />
              <br />
              <TextField
                id="outlined-basic"
                name="email"
                label="Email*"
                variant="outlined"
                type="email"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                // value={signInData.userName}
                error={false}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
              <br />
              <br />

              <TextField
                id="outlined-basic"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                // value={signInData.userName}
                error={false}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
              <br />
              <br />

              <TextField
                id="outlined-basic"
                name="confirmpassword"
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmpassword}
                // value={signInData.password}
                error={false}
              />
              {formik.touched.confirmpassword &&
              formik.errors.confirmpassword ? (
                <div className="text-danger">
                  {formik.errors.confirmpassword}
                </div>
              ) : null}
              <br />
              <br />

              {!formik.isValid ? (
                <MDBBtn
                  variant="contained"
                  color="error"
                  type="Submit"
                  disabled
                  style={btnstyle}
                  fullWidth
                  onClick={handleSubmit}
                >
                  Register{" "}
                </MDBBtn>
              ) : (
                <MDBBtn
                  variant="contained"
                  type="Submit"
                  style={btnstyle}
                  fullWidth
                  onClick={handleSubmit}
                >
                  Register{" "}
                </MDBBtn>
              )}
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Register;
