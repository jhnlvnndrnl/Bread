import React from 'react';
import LOGO from '../../../assets/contact.png';

const ContactSection = () => {
return (
    <section className="text-light p-5 text-center text-sm-start" style={{ backgroundColor: '#1f1f1f' }}>
    <div className="container" id="contact">
        <div className="d-sm-flex align-items-center justify-content-between">
        <div>
            <h3 className="text-white">Contact Us</h3>
            <p>Here is where you can contact us for help.</p>
            <hr className="text-white" />
            <p className="text-white lead">
            Email: <span className="text-white">bread.generosity@gmail.com</span>
            </p>
            <hr className="text-white" />
            <div className="pb-5 pb-lg-0">
            <p>Socials:</p>
            <i className="fa-brands fa-facebook fs-2 m-2"></i>
            <i className="fa-brands fa-github fs-2 m-2"></i>
            <i className="fa-brands fa-discord fs-2 m-2"></i>
            </div>
        </div>
        <img
            className="d-none d-md-block img-fluid "
            src={LOGO}
            alt="LOGO"
            width="350"
        />
        </div>
    </div>
    </section>
);
};

export default ContactSection;
