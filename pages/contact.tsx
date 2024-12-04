/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Contact from '../components/Contact';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async (formData: { name: string; email: string; message: string }) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message
        });
        // Reset form here if needed
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message'
      });
    }
  };

  return (
    <div>
      <Contact onSubmit={handleSubmit} status={status} />
    </div>
  );
};

export default ContactPage;
