import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';

const Footer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        feedback: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/feedback', formData);
            alert('Feedback submitted successfully');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                feedback: '',
            });
        } catch (error) {
            console.error('Error submitting feedback', error);
            alert('Error submitting feedback');
        }
    };

    return (
        <footer className="bg-[#31363F] text-white py-6">
            <div className="container mx-auto flex justify-around">
                <div className="flex-1 px-4">
                    <h2 className="text-xl font-bold mb-4">TECHY</h2>
                    <p>
                        We develop websites for your business, bringing your vision to life
                        and propelling your business into the digital realm.
                    </p>
                    <br />
                    <br />
                    <div className="mt-4 flex">
                        <a href="#" className="text-white mr-4 text-3xl"><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/company/techy-softwares/" className="text-white mr-4 text-3xl"><FaLinkedinIn /></a>
                        <a href="#" className="text-white mr-4 text-3xl"><FaInstagram /></a>
                        <a href="#" className="text-white text-3xl"><FaWhatsapp /></a>
                    </div>
                </div>
                <div className="flex-1 px-4">
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="/contact" className="text-white hover:text-blue-400">Contact Us</a>
                        </li>
                        <li className="mb-2">
                            <a href="/about" className="text-white hover:text-blue-400">About Us</a>
                        </li>
                        <li className="mb-2">
                            <a href="/services" className="text-white hover:text-blue-400">Services</a>
                        </li>
                        <li className="mb-2">
                            <a href="/" className="text-white hover:text-blue-400">Home</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 px-4">
                    <h2 className="text-xl font-bold mb-4">Feedback</h2>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <TextField
                            variant="filled"
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-gray-800 mb-4"
                            InputLabelProps={{ style: { color: 'white' } }}
                            inputProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            variant="filled"
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-gray-800 mb-4"
                            InputLabelProps={{ style: { color: 'white' } }}
                            inputProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            variant="filled"
                            label="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-800 mb-4"
                            InputLabelProps={{ style: { color: 'white' } }}
                            inputProps={{ style: { color: 'white' } }}
                        />
                        <TextField
                            variant="filled"
                            label="Feedback"
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            className="bg-gray-800 mb-4"
                            InputLabelProps={{ style: { color: 'white' } }}
                            inputProps={{ style: { color: 'white' } }}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>&copy; 2021 Techy</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-blue-400">Privacy Policy</a>
                    <a href="#" className="text-white hover:text-blue-400">Cookie Policy</a>
                    <a href="#" className="text-white hover:text-blue-400">Terms of Use</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
