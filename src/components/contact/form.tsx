import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';
import Swal from 'sweetalert2';

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_xwh6vr8',     // Replace with your actual EmailJS service ID
        'template_0d3zamd',    // Replace with your actual EmailJS template ID
        form.current,
        'AxKo04wWaysL4uR5_'      // Replace with your actual EmailJS public key
      )
      .then(
        () => {
          Swal.fire({
        title: "Sucessful!",
        text: "Message sent successfully",
        icon: "success"
      });
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          Swal.fire({
            title: "Error!",
            text: "TFailed tp send message. Try again!",
            icon: "error"
          });
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className='form-div'>
        <input className='name-f' name="from_name" type="text" placeholder='Name' required />
        <input className='name-f' name="to_name" type="email" placeholder='Email' required />
        <div className='message-div'>
          <input className='message-f' name='message' type="text" placeholder='Message' required />
        </div>
        <button className='btn-message' type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
