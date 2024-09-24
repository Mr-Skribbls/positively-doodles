import { FC, useEffect } from 'react';
import './contact.css';
import constants from '../../constants';

interface ContactProps {

}

const Contact:FC<ContactProps> = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="contact-page site-container">
      <p>If you're interested in getting a puppy from us please call, send us an email, or contact us on facebook.</p>
      <p>phone: <a href={`tel:${constants.phoneNumber}`}>{constants.phoneNumberDisplay}</a></p>
      <p>email: <a href={`mailto:${constants.emailAddress}`}>{constants.emailAddress}</a></p>
      <p>facebook: <a rel='noreferrer' target='_blank' href={constants.facebookAddress}>{constants.companyName}</a></p>
    </div>
  );
};

export default Contact;