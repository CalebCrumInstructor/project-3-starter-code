import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Background from "../../public/images/treasuremap.png";
import Page from "../components/Page";
import AuthService from "../utils/auth";

const styles = {
  form: {
    display: "flex",
    flexDirection: "Column",
    width: "100%",
    backgroundImage: `url(${Background})`,
  },
  Button: {
    cursor: "pointer",
    backgroundColor: "DodgerBlue",
  }
};

const headContent = (
  <>
    <title>Login</title>
    <meta name="description" content="Login for Project-3 Starter Code." />
  </>
);

export default function Login() {
  const [loginUser, { error, data, loading }] = useMutation(LOGIN_USER);
  const { isAuthenticated } = useSelector(getUser());

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      AuthService.login(data.loginUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    // <Page isProtected={false} headContent={headContent}>
    //   <div>Login</div>
    //   <form style={styles.form} onSubmit={handleFormSubmit}>
    //     <input
    //       placeholder="Email"
    //       name="email"
    //       type="email"
    //       value={formState.email}
    //       onChange={handleChange}
    //     />
    //     <input
    //       placeholder="Password"
    //       name="password"
    //       type="password"
    //       value={formState.password}
    //       onChange={handleChange}
    //     />
    //     {loading ? (
    //       <button type="submit" disabled={true} style={styles.submitBtn}>
    //         Loading...
    //       </button>
    //     ) : (
    //       <button type="submit" style={styles.submitBtn}>
    //         Submit
    //       </button>
    //     )}
    //   </form>
    //   {error && <h3>{error.message}</h3>}
    // </Page>
    <Page style={styles.Page}>
    <Form isprotected="false" headcontent={headContent}> 
    <Form.Group style={styles.form} className="mb-3" controlId="formEmail" onSubmit={handleFormSubmit}>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" value={formState.email} onChange={handleChange}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group style={styles.form} className="mb-3" controlId="formPassword" onSubmit={handleFormSubmit}>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" value={formState.password} onChange={handleChange}/>
    </Form.Group>
    <Button style={styles.Button} variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Page>
  );
}
