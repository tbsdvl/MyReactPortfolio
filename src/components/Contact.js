import React, { Component } from 'react';

// Render the home page's contact information above the footer

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact">
                <h2>Contact Me</h2>
                <p>Email: <a href="mailto:tristonburns97@gmail.com">tristonburns97@gmail.com</a></p>
                <p>Phone Number: <a href="telto:520-405-3987" rel="noreferrer">520-405-3987</a></p>
            </section>
        );
    }
}

export default Contact;