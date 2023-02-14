import {
  Avatar,
  Grid,
  Paper,
  TextField,
 
  Typography,
} from "@mui/material";
import { MDBBtn } from "mdb-react-ui-kit";
 
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
 
 
import { ToastErrMsg, ToastSuccessMsg } from "../../utils/ToastMsg";
  import Axios from "axios";
// import { ToastErrMsg } from "../../utils/ToastMsg";
import "../../Styles/Login/Login.css";

const validationSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Password is required"),
});

const Login = () => {
  

  const formik = useFormik({
    initialValues: {
      email: "",

      password: "",
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (userinput) => {
      console.log("Submithandler-----", userinput);
      Submithandler(userinput);
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
  // const [signInData, setSignInData] = useState({});
  const navigate = useNavigate();
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSignInData({
  //     ...signInData,
  //     [name]: value,
  //   });
  // };
  // const vercel = "https://back-end-task-leli.vercel.app";
  const local = "http://localhost:8001/login/loginuser";

  const Submithandler = async (values) => {
    const { ...data } = values;
    const response = await Axios.post(`${local}/login/loginuser`, data).catch(
      (err) => {
        if (err && err.response) {
          ToastErrMsg(err.response.data.message);
          console.log("Error---> ", err.response.data.message);
        }
      }
    );
    if (response && response.data) {
      ToastSuccessMsg(response.data.message);
      console.log("Successful----> ", response.data.message);
    }
  };

  
  console.log("email-->", formik.values.email);
  console.log("password--->", formik.values.password);
  return (
    <div>
      {/*Toast */}
      <ToastContainer />
      <div className="Card">
        <Grid>
          <Paper className="paper" elevation={10} style={paperStyle}>
            <form onSubmit={formik.Submithandler} autoComplete="off">
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <AccountCircleOutlinedIcon />
                </Avatar>
                <h3 className="title">Login</h3>
              </Grid>
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
                label="Password*"
                fullWidth
               type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                
                // value={signInData.password}
                error={false}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
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
               
                >
                  Login in{" "}
                </MDBBtn>
              ) : (
                <MDBBtn
                  variant="contained"
                  type="Submit"
                  style={btnstyle}
                  fullWidth
                  
                >
                  Login in{" "}
                </MDBBtn>
              )}
              <br />

              <br />
              <Grid align="center">
                <nav>
                  <Typography>
                    <Link to="/home">New User?</Link>
                  </Typography>
                </nav>
                <br />
                <nav>
                  <Typography>
                    <Link to="/forgot_password">Forgot password</Link>
                  </Typography>
                </nav>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
