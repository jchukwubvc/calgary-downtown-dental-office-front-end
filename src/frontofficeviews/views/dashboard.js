import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
} from "reactstrap";

import {clearUserToken, getUserToken} from "../components/AuthContext";
import {useNavigate} from "react-router-dom";

const Dashboard = (props) => {

  const [userInfo, setUserInfo] = useState(getUserToken());
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [dentistCount, setDentistCount] = useState(0);
  const [officeCount, setOfficeCount] = useState(0);
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch data from the API and update state
    const fetchDashboardData = async () => {
      try {
        // Fetch appointments count
        const appointmentsResponse = await fetch(
            `${apiEndpoint}/patients/${userInfo.id}/bookings`
        );
        const appointmentsData = await appointmentsResponse.json();
        setAppointmentCount(appointmentsData.length);

        // Fetch dentists count
        const dentistsResponse = await fetch(`${apiEndpoint}/dentists`);
        const dentistsData = await dentistsResponse.json();
        setDentistCount(dentistsData.length);

        // Fetch offices count
        const officesResponse = await fetch(`${apiEndpoint}/offices`);
        const officesData = await officesResponse.json();
        setOfficeCount(officesData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchDashboardData function when the component mounts
    fetchDashboardData();
  }, [userInfo.id]);

  const goToAppointments = ()=>{
    navigate('/admin/appointments');
  }

  const goToOffices = ()=>{
    navigate('/admin/offices');
  }

  const goToProfile = ()=>{
    navigate('/admin/profile');
  }

  const goToDentists= ()=>{
    navigate('/admin/dentists');
  }
  const logOutUser = () =>{
    clearUserToken();
    navigate('/auth/login');
  }

  return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                          >
                            Appointments
                          </CardTitle>
                          <span
                              id="appointmentCount"
                              className="h2 font-weight-bold mb-0"
                          >
                          {appointmentCount}
                        </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-calendar-alt" />
                          </div>
                        </Col>
                      </Row>
                      <button className="btn btn-outline-info btn-sm float-right mt-2"
                      onClick={goToAppointments}
                      >
                        See all
                      </button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                          >
                            Available Dentists
                          </CardTitle>
                          <span
                              className="h2 font-weight-bold mb-0"
                              id="dentistCount"
                          >
                          {dentistCount}
                        </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-user-doctor" />
                          </div>
                        </Col>
                      </Row>
                      <button className="btn btn-outline-info btn-sm float-right mt-2"
                              onClick={goToDentists}
                      >
                        See all
                      </button>
                    </CardBody>
                  </Card>
                </Col>

              </Row>

              <Row className="mt-5">
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                          >
                            Office Locations
                          </CardTitle>
                          <span
                              id="officeCount"
                              className="h2 font-weight-bold mb-0"
                          >
                          {officeCount}
                        </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-building" />
                          </div>
                        </Col>
                      </Row>
                      <button className="btn btn-outline-info btn-sm float-right mt-2"
                              onClick={goToOffices}
                      >
                        See all
                      </button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                          >
                            My Profile
                          </CardTitle>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-user-alt" />
                          </div>
                        </Col>
                      </Row>
                      <button className="btn btn-outline-info btn-sm float-right mt-2"
                              onClick={goToProfile}
                      >
                        View
                      </button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
            <div>
              <button onClick={logOutUser}
                  className="btn btn-outline-white mt-5 float-right">
                Log out
              </button>
            </div>
          </Container>
        </div>
        {/* Page content */}
      </>
  );
};

export default Dashboard;
