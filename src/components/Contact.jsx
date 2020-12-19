import React from 'react';
import ContactForm from './FormContactUs';

const Contact = () => {
    return (
        <>
            <div className="col-md-10 mt-5">
                <div className="mt-5 mb-3">
                    <h1 className="text-center mt-5">{"< "}<strong>Contact Us Here</strong>{" />"}</h1>
                </div>
                <div className="mt-5">
                    <ContactForm/>
                </div>
            </div>
        </>)
}

export default Contact;