import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook.png';
import GitHubIcon from '../../assets/GitHub.jpg';
import LinkedinIcon from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mzlx6vj', 'template_ort4f6e', form.current, 'aKJAp6tNYKsDLNqYX')
      .then((result) => {
            console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
        }, (error) => {
            console.log(error.text);
        });
  };

  return (
    <section id="contactPage">
        <div id="contact">
          <br/>
          <br/>
          <br/>
          <br/>
            <h1 className="contactPageTitle">Contact</h1>
            <span className="contactDesc">Please send me message here....</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                <input type="email" className="email" placeholder="Your Email" name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                <a href="https://www.facebook.com/neelam.pradhan.96343" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    </a>
                    <a href="https://github.com/neelamranjit123" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" className="link" />
                    </a>
                    <a href="https://www.linkedin.com/in/neelam-ranjit-3a5268ba" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinIcon} alt="Linkedin" className="link" />
                    </a>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact;
