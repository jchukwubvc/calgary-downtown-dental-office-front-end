/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    navigate('/auth/register')
  }

  const handleLogin = async () => {
    // Check if email and password are provided
    if (!email || !password) {
      alert('Please provide both email and password.');
      return;
    }

    const requestBody = {
      email: email,
      password: password
    };

    try {
      // Make a REST call to the API server
      const response = await fetch(`${apiEndpoint}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      // Handle 4xx, 5xx errors
      if (!response.ok) {
        alert(`Error: ${response.status} - ${response.statusText}`);
        return;
      }

      // Collect the successful 2xx response
      const data = await response.json();

      // Extract JWT token from the response
      const { token } = data;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Optionally, you can perform additional actions upon successful login
      // For example, redirect to a different page
      // history.push('/dashboard');

      navigate('/admin/index');

    } catch (error) {
      console.error('Error during login:', error);
      // Handle other errors if needed
      alert('An error occurred during login. Please try again.');
    }
  };

  const registerLinkStyle = {
    fontSize: '13px',
    color: '#607D8B',
    textDecoration: 'underline',
    cursor: 'pointer',
    important: 'true', // Custom property to mimic !important
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h4>Sign in with credentials</h4>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    autoComplete="new-email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button"
                        onClick={handleLogin}>
                  Sign in
                </Button>
              </div>
              <div onClick={goToRegister} className="text-center">
                <span className="text-muted" style={registerLinkStyle}>
                  Don't have an account ? Create a new one
                </span>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
