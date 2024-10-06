import { FC } from 'react';
import './contactForm.css';

interface ContactFormProps {

}

const ContactForm:FC<ContactFormProps> = () => {
  return (
    <form className='contact-form' action='https://docs.google.com/forms/d/e/1FAIpQLSf7iba0gVSEP5EMHdA6eWEGKH-8iLRattqE_2ti20-bvuqO9w/formResponse'>
      <h3>Let's Touch Base</h3>
      <div className='contact-row'>
        <div className="contact-column">
          <label htmlFor='entry.2005620554'>Name*</label>
          <input type='text' name='entry.2005620554' required />
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-column">
          <label htmlFor='entry.1045781291'>Email*</label>
          <input type='email' name='entry.1045781291' required />
        </div>
        <div className="contact-column">
          <label htmlFor='entry.1166974658'>Phone*</label>
          <input type='tel' name='entry.1166974658' required />
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-column">
          <label htmlFor='entry.839337160'>Message*</label>
          <textarea name='entry.839337160' required></textarea>
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-column">
          <button type='submit'>Send</button>
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-column">
          <p className='contact-form-disclaimer'>Positively Doodles will only use the information you provide to contact you. We will not use your information for any other purpose. We use Google Forms to provide this contact form.</p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;