import React, { useState, useEffect } from 'react';
import {Card, CardHeader, Col, Container, Row, Table} from 'reactstrap';
import MyUtil from "../../../util";

const Office = () => {
    const [offices, setOffices] = useState([]);

    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    const GET_OFFICES_URL = `${apiEndpoint}/offices`;

    useEffect(() => {
        // Fetch data from the API
        const fetchOffices = async () => {
            try {
                const response = await fetch(GET_OFFICES_URL);
                const data = await response.json();
                setOffices(data);
            } catch (error) {
                console.error('Error fetching offices:', error);
            }
        };

        fetchOffices();
    }, []);

    return (
        <div>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid><div className="header-body"></div></Container>
            </div>

            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Our Available Office Locations</h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Office Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Created On</th>
                                </tr>
                                </thead>
                                <tbody>
                                {offices.map((office) => (
                                    <tr key={office.id}>
                                        <th>{office.id}</th>
                                        <th>{office.name}</th>
                                        <th>{office.description}</th>
                                        <th>{office.address}</th>
                                        <th>{MyUtil.formatDateTime(office.created_at)}</th>
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

export default Office;
