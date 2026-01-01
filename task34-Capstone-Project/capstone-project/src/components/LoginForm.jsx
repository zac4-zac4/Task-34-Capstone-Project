import { useFormik } from "formik";
import { Container } from "react-bootstrap";
import { useUser } from "../contexts/UserContext.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useUser();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.email) {
        {
          /* Added validation for email */
        }
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        {
          /* Added validation for password */
        }
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }

      return errors;
    },
    onSubmit: (values) => {
      const success = login(values.email, values.password);

      if (success) {
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    },
  });

  return (
    <Container className="form-container mt-5 pt-4">
    <form onSubmit={formik.handleSubmit}>
      {" "}
      {/* Login form with fields for email and password */}
      <h2 className="mb-3">Login</h2>
      <input
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <p>{formik.errors.email}</p>}{" "}
      {/* Display email validation errors */}
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && <p>{formik.errors.password}</p>}
      <button type="submit">Login</button>
    </form>
    </Container>
  );
}
