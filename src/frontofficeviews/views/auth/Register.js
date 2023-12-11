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
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const loginLinkStyle = {
    fontSize: '13px',
    color: '#607D8B',
    textDecoration: 'underline',
    cursor: 'pointer',
    important: 'true', // Custom property to mimic !important
  }

  const goToLogin = () => {
    navigate('/auth/login')
  }

  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  const apiToken = process.env.REACT_APP_API_TOKEN;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if name, email, and password are provided
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please provide all the required information');
      return;
    }

    try {
      const apiresponse = await fetch(`${apiEndpoint}/patients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token':apiToken
        },
        body: JSON.stringify(formData),
      });

      // Handle 4xx and 5xx errors
      if (!apiresponse.ok) {
        const errorData = await apiresponse.json();
        setError(`Error: ${errorData.message}`);
        return;
      }

      // If successful 2xx response
      const responseData = await apiresponse.json();
      setResponse(responseData);
      setError(null);

      alert("Account creation successful. Proceeding to Login...")

      console.log(JSON.stringify(response))

      navigate('/auth/login');

      // Do something with the successful response data, e.g., redirect, show success message, etc.
    } catch (apierror) {
      setError('An error occurred while processing your request');
      console.log(JSON.stringify(error))
      console.log(JSON.stringify(apierror))
    }
  };


  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h4>Sign up with credentials</h4>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name"
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email} onChange={handleChange}
                    autoComplete="new-email"
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
                    name="password"
                    value={formData.password} onChange={handleChange}
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>

              <div onClick={goToLogin} className="text-center mt-4">
                <span className="text-muted" style={loginLinkStyle}>
                  Already have an account. Click to Login
                </span>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
