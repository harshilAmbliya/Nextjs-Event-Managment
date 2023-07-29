import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>About Us</h1>

            <section className={styles.intro}>
                <h2>Introduction</h2>
                <p>
                    We are a leading event management company, passionately delivering the best experiences for both our clients and audiences. Our mission is to create unforgettable events that exceed expectations.
                </p>
            </section>

            <section className={styles.team}>
                <h2>Our Team</h2>
                <p>
                    Our team consists of dedicated and creative professionals, all with unique skills and experiences. We work together to plan, manage, and execute events that create lasting memories.
                </p>
            </section>

            <section className={styles.history}>
                <h2>Our History</h2>
                <p>
                    Founded in 2003, we have been delivering successful events for nearly two decades. We've grown from a small local operation to a respected national organization, but our commitment to quality has never wavered.
                </p>
            </section>

            <section className={styles.values}>
                <h2>Our Values</h2>
                <p>
                    We believe in integrity, creativity, and excellence in all we do. We strive to build long-lasting relationships with our clients, and we are committed to making a positive impact in our community.
                </p>
            </section>
        </div>
    );
}

export default About;
