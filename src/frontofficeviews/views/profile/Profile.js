// Import necessary components and libraries
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import React, { useState } from "react";
import {getUserToken, useAuth} from "../../components/AuthContext";
import {useNavigate} from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  // Get user information from the AuthContext
  const [userInfo, setUserInfo] = useState(getUserToken());

  // Define state variables for profile form fields
  const [name, setName] = useState(userInfo.name);
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState(userInfo.address || "");
  const [phone, setPhone] = useState(userInfo.phone || "");
  const [email, setEmail] = useState(userInfo.email || "");
  const [medicalHistory, setMedicalHistory] = useState(
      userInfo.medical_history || ""
  );
  const [insuranceProvider, setInsuranceProvider] = useState(
      userInfo.insurance_provider || ""
  );
  const [insuranceNumber, setInsuranceNumber] = useState(
      userInfo.insurance_number || ""
  );
  const [dentalConcerns, setDentalConcerns] = useState(
      userInfo.dental_concerns || ""
  );
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

  // Handle Save Changes button click
  const handleSaveChanges = () => {
    // Prepare the request body
    const requestBody = {
      name,
      address,
      phone,
      medical_history: medicalHistory,
      insurance_provider: insuranceProvider,
      insurance_number: insuranceNumber,
      dental_concerns: dentalConcerns,
    };

    // Perform API call to update patient information
    fetch(`${apiEndpoint}/patients/${userInfo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody),
    })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response as needed
          alert("Profile Updated Successfully. You need to Login again.");
          localStorage.removeItem('token');
          navigate('/auth/login');
        })
        .catch((error) => {
          // Handle errors
          alert("Error updating profile. Please contact Admin.");
          console.error("Error updating profile:", error);
        });
  };

  const goToDashboard= ()=>{
    navigate('/admin/index');
  }


  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <button onClick={goToDashboard}>
                            <span className="btn btn-outline-white btn-sm" >
                                <i className="fas fa-arrow-left" /> Go Back
                            </span>
            </button>
          </div>
        </Container>
      </div>

      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-name">
                          Name
                        </label>
                        <Input
                            className="form-control-alternative"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="input-name"
                            placeholder="Name"
                            type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-password">
                          Password
                        </label>
                        <Input
                            className="form-control-alternative"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="input-password"
                            placeholder="Password"
                            type="password"
                            readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-address">
                          Address
                        </label>
                        <Input
                            className="form-control-alternative"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-phone">
                          Phone
                        </label>
                        <Input
                            className="form-control-alternative"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            id="input-phone"
                            placeholder="Phone"
                            type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-email">
                          Email address
                        </label>
                        <Input
                            className="form-control-alternative"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="input-email"
                            placeholder="Email"
                            type="email"
                            readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-medical-history">
                          Medical History
                        </label>
                        <Input
                            className="form-control-alternative"
                            value={medicalHistory}
                            onChange={(e) => setMedicalHistory(e.target.value)}
                            id="input-medical-history"
                            placeholder="Medical History"
                            type="textarea"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-insurance-provider">
                          Insurance Provider
                        </label>
                        <Input
                            className="form-control-alternative"
                            value={insuranceProvider}
                            onChange={(e) => setInsuranceProvider(e.target.value)}
                            id="input-insurance-provider"
                            placeholder="Insurance Provider"
                            type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-insurance-number">
                          Insurance Number
                        </label>
                        <Input
                            className="form-control-alternative"
                            value={insuranceNumber}
                            onChange={(e) => setInsuranceNumber(e.target.value)}
                            id="input-insurance-number"
                            placeholder="Insurance Number"
                            type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-dental-concerns">
                          Dental Concerns
                        </label>
                        <Input
                            className="form-control-alternative"
                            value={dentalConcerns}
                            onChange={(e) => setDentalConcerns(e.target.value)}
                            id="input-dental-concerns"
                            placeholder="Dental Concerns"
                            type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="text-right" xs="12">
                      <Button color="primary" onClick={handleSaveChanges} size="sm">
                        Save Changes
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
