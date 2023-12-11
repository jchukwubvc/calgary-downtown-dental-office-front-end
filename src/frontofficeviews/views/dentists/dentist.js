import React, { useState, useEffect } from 'react';
import {Card, CardHeader, Col, Container, Row, Table} from 'reactstrap';
import MyUtil from "../../../util";
import {useNavigate} from "react-router-dom";

const Dentist = () => {
    const navigate = useNavigate();
    const [dentists, setDentists] = useState([]);

    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    const GET_DENTISTS_URL = `${apiEndpoint}/dentists`;

    useEffect(() => {
        // Fetch data from the API
        const fetchDentists = async () => {
            try {
                const response = await fetch(GET_DENTISTS_URL);
                const data = await response.json();
                setDentists(data);
            } catch (error) {
                console.error('Error fetching dentists:', error);
            }
        };

        fetchDentists();
    }, []);

    const goToDashboard= ()=>{
        navigate('/admin/index');
    }


    return (
        <div>
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
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Our Available Dentists</h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Expertise</th>
                                    <th scope="col">Joined On</th>
                                </tr>
                                </thead>
                                <tbody>
                                {dentists.map((dentist) => (
                                    <tr key={dentist.id}>
                                        <th>{dentist.id}</th>
                                        <th>{dentist.name}</th>
                                        <th>{dentist.expertise}</th>
                                        <th>{MyUtil.formatDateTime(dentist.created_at)}</th>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>

    );
};

export default Dentist;
