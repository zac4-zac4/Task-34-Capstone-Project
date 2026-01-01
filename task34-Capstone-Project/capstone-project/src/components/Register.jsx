import { useFormik } from "formik";
import { Container, Form, Button } from "react-bootstrap";
import { useUser } from "../contexts/UserContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useUser();

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        {
          /* Added validation for first name */
        }
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Max 15 characters";
      }

      if (!values.surname) {
        {
          /* Added validation for surname */
        }
        errors.surname = "Required";
      } else if (values.surname.length > 20) {
        errors.surname = "Max 20 characters";
      }

      if (!values.email) {
        {
          /* Added validation for email */
        }
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email";
      }

      if (!values.password) {
        {
          /* Added validation for password */
        }
        errors.password = "Required";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
          values.password
        )
      ) {
        errors.password =
          "Must include uppercase, lowercase, number & special character";
      }

      if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
      }

      return errors;
    },

    onSubmit: (values) => {
      register(values);
      navigate("/dashboard");
    },
  });

  return (
    <Container className="form-container mt-5 pt-4">
    <form onSubmit={formik.handleSubmit}>
      {" "}
      {/* Registration form with fields for first name, surname, email, password, and confirm password */}
      <h2 className="mb-3">Register</h2>
      <input
        name="firstName"
        placeholder="First Name"
        onChange={formik.handleChange}
      />
      <p>{formik.errors.firstName}</p>
      <input
        name="surname"
        placeholder="Surname"
        onChange={formik.handleChange}
      />
      <p>{formik.errors.surname}</p>
      <input
        name="username"
        placeholder="Username"
        onChange={formik.handleChange}
      />
      <p>{formik.errors.username}</p>
      <input name="email" placeholder="Email" onChange={formik.handleChange} />
      <p>{formik.errors.email}</p>
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
      />
      <p>{formik.errors.password}</p>
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        onChange={formik.handleChange}
      />
      <p>{formik.errors.confirmPassword}</p>
      <button type="submit">Register</button>
    </form>
    </Container>
  );
}
