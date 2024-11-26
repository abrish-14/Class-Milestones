"use client"; 
import { useState } from 'react';
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.phone) {
      setError('All fields are required.');
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);


    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };
  return (
    <div className='Contact'>
      <Navbar /> 
      <div className="container">
        <h1 className='Heading4'>Contact Me</h1>
        {submitted ? (
          <p className='Messege'>Thank you for your message! I will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label className='input' htmlFor="name">Name:</label>
              <input className='Fileds'
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className='input' htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className='input' htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="error">{error}</p>} 
            <button type="submit">Send</button>
          </form>
        )}
      </div>
      <Footer /> 
    </div>
  );
};

export default Contact;