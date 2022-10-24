import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')

    const [accepted, setAccepted] = useState(false);

    const { createUser, userProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerificstion();
                toast.success('Plz verify your email.')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked);
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userProfile(profile)
        .then(() =>{})
        .catch(error => console.log(error))
    }

    const handleEmailVerificstion = () =>{
        verifyEmail()
        .then(() =>{})
        .catch(error => console.error(error))
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                onClick={handleAccepted}
                label={<>Accept <Link to='/terms'>Terms And Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Submit
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;