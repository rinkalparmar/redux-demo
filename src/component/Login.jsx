import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/userSlice';
import { useSelector } from 'react-redux';

function Login() {
    const dispatch = useDispatch();

    let navigate = useNavigate();
    const [input, setInput] = useState({ email: "", password: "" });

    // if user not enter correct email and password then give error
    const checkError = useSelector(state => state.auth.error);

    const handleSubmit = (event) => {
        event.preventDefault();
         dispatch(loginUser({input, navigate}));
        setInput({ email: "", password: "" });
    };

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setInput((input) => ({ ...input, [name]: value }));

    };



    return (
        <>
            <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: '600px' }} className='p-4 shadow rounded bg-light'>
                        {checkError && <div className="error">{checkError}</div>}
                            <h2>Login Form</h2>
                            <Row className="mb-3">
                                <Form.Group md="4" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        name='email'
                                        onChange={handleInput}
                                        value={input.email}
                                    />
                                </Form.Group>
                                <Form.Group md="4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        name='password'
                                        onChange={handleInput}
                                        value={input.password}
                                    />
                                </Form.Group>
                            </Row>
                            <Button type="submit" >Login</Button> <a href="/signup">create new account</a>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Login;