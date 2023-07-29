import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
        // Here you can handle the contact data, like sending it to an API
    };

    return (
        <div className={styles.contact}>
            <h1 className={styles.title}>Contact Us</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={contact.name} onChange={handleChange} />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={contact.email} onChange={handleChange} />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" rows="5" value={contact.message} onChange={handleChange} />
                </div>

                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
