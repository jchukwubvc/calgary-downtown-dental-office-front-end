import {
    Button,
    Card,
    CardHeader,
    Col,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
    Table,
} from "reactstrap";

import React, {useCallback, useEffect, useState} from 'react';
import {getUserToken} from '../../components/AuthContext'

import MyUtil from "../../../util";
import {useNavigate} from "react-router-dom";

const Appointments = () =>{

    const navigate = useNavigate();
    const AppointmentsContext = React.createContext();
    const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    const [appointments, setAppointments] = useState([]);
    const [locationList, setLocationList] = useState([]);
    const [dentistList, setDentistList] = useState([]);
    const [userInfo] = useState(getUserToken());
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedDentist, setSelectedDentist] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState('');
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editAppointmentData, setEditAppointmentData] = useState({
        booking_id: '',
        booked_time: '',
        status: '',
    });



    // Fetch appointments from the API
    const fetchAppointments = async () => {
        try {
            const response = await fetch(`${apiEndpoint}/patients/${userInfo.id}/bookings`);
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    useEffect(() => {

        console.log("i got called here in useEffect");

        const fetchAppointments = async () => {
            try {
                const response = await fetch(`${apiEndpoint}/patients/${userInfo.id}/bookings`);
                const data = await response.json();
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };
        const fetchLocationList = async () => {
            try {
                const response = await fetch(`${apiEndpoint}/offices`);
                const data = await response.json();
                setLocationList(data);
            } catch (error) {
                console.error('Error fetching location list:', error);
            }
        };
        const fetchDentistsList = async () => {
            try {
                const response = await fetch(`${apiEndpoint}/dentists`);
                const data = await response.json();
                setDentistList(data);
            } catch (error) {
                console.error('Error fetching dentist list:', error);
            }
        };

        fetchAppointments();
        fetchLocationList();
        fetchDentistsList();
    }, [apiEndpoint]);

    const getLocationName = (officeId) => {
        const location = locationList.find((loc) => loc.id === officeId);
        return location ? location.name : 'Unknown';
    };

    const openModal = () => {
        console.log("set to true")
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedLocation('');
        setSelectedDentist('');
        setSelectedDateTime('');
    };

    const openEditModal = (appointment) => {
        setEditModalOpen(true);
        setEditAppointmentData({
            booking_id: appointment.id,
            booked_time: appointment.booked_time,
            status: appointment.status,
        });
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
        setEditAppointmentData({
            booking_id: '',
            booked_time: '',
            status: '',
        });
    };


    const handleLocationChange = useCallback((event) => {
        setSelectedLocation(event.target.value);
    }, []);

    const handleDentistChange = useCallback((event) => {
        setSelectedDentist(event.target.value);
    }, []);

    const handleDateTimeChange = (dateTime) => {
        setSelectedDateTime(dateTime);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${apiEndpoint}/offices/${selectedLocation}/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    booked_time: selectedDateTime,
                    client_id: userInfo.id,
                    dentist_id: selectedDentist
                }),
            });

            if (response.ok) {
                // If the appointment is successfully created, close the modal and refresh the appointments
                closeModal();
                fetchAppointments();
                alert("Appointment successfully created")
            } else {
                alert("Failed to create appointment. Check with Admin");
                console.error('Failed to create appointment:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    };

    const handleEdit = (appointment) => {
        openEditModal(appointment);
    };

    const handleEditSubmit = async () => {
        try {
            const response = await fetch(`${apiEndpoint}/offices/${editAppointmentData.booking_id}/update_booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    booking_id: editAppointmentData.booking_id,
                    booked_time: editAppointmentData.booked_time,
                    status: editAppointmentData.status,
                }),
            });

            if (response.ok) {
                closeEditModal();
                fetchAppointments();
                alert("Appointment successfully updated");
            } else {
                alert("Failed to update appointment. Check with Admin");
                console.error('Failed to update appointment:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating appointment:', error);
        }
    };

    const goToDashboard= ()=>{
        navigate('/admin/index');
    }



    return (
        <AppointmentsContext.Provider value={{ openModal, closeModal }}>
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
                                        <h3 className="mb-0">Appointments</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            onClick={openModal}
                                            size="sm"
                                        >
                                            Create Appointment
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Office Name</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Appointment Date</th>
                                    <th scope="col">Created On</th>
                                    <th scope="col">
                                        Edit Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {appointments.map((appointment) => (
                                    <tr key={appointment.id}>
                                        <th>{appointment.id}</th>
                                        <th>{getLocationName(appointment.office_id)}</th>
                                        <th>{appointment.status}</th>
                                        <th>{MyUtil.formatDateTime(appointment.booked_time)}</th>
                                        <th>{MyUtil.formatDateTime(appointment.created_at)}</th>
                                        <th style={{ cursor: 'pointer' }} onClick={() => handleEdit(appointment)}>
                                            <span className="text-darker mr-2">
                                                <i className="fa fa-pencil" />
                                            </span>{" "}
                                        </th>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <Modal isOpen={isModalOpen} toggle={closeModal}>
                <ModalHeader>
                    Create Appointment
                </ModalHeader>
                <ModalBody>
                    <div>
                        <h4>Location:</h4>
                        <select value={selectedLocation} onChange={handleLocationChange}>
                            <option value="">Select Location</option>
                            {locationList.map((location) => (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <h4>Dentist:</h4>
                        <select value={selectedDentist} onChange={handleDentistChange}>
                            <option value="">Select Dentist</option>
                            {dentistList.map((dentist) => (
                                <option key={dentist.id} value={dentist.id}>
                                    {dentist.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-5">
                        <h4>
                            Select Date and Time:
                        </h4>
                        <input
                            type="datetime-local"
                            value={selectedDateTime}
                            onChange={(e) => handleDateTimeChange(e.target.value)}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>{' '}
                    <Button color="secondary" onClick={closeModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={editModalOpen} toggle={closeEditModal}>
                <ModalHeader>Edit Appointment</ModalHeader>
                <ModalBody>
                    <div>
                        <h4>Dentist:</h4>
                        <select
                            value={editAppointmentData.dentist} // Update with the appropriate property
                            onChange={(e) => setEditAppointmentData({ ...editAppointmentData, dentist: e.target.value })}
                        >
                            <option value="">Select Dentist</option>
                            {dentistList.map((dentist) => (
                                <option key={dentist.id} value={dentist.id}>
                                    {dentist.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <h4>Status:</h4>
                        <select
                            value={editAppointmentData.status}
                            onChange={(e) => setEditAppointmentData({ ...editAppointmentData, status: e.target.value })}
                        >
                            <option value="PENDING">PENDING</option>
                            <option value="INPROGRESS">INPROGRESS</option>
                            <option value="CLOSED">CLOSED</option>
                        </select>
                    </div>

                    <div className="mt-5">
                        <h4>Select Date and Time:</h4>
                        <input
                            type="datetime-local"
                            value={editAppointmentData.booked_time}
                            onChange={(e) => setEditAppointmentData({ ...editAppointmentData, booked_time: e.target.value })}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleEditSubmit}>
                        Submit
                    </Button>{' '}
                    <Button color="secondary" onClick={closeEditModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </AppointmentsContext.Provider>
    );

}

export default Appointments;