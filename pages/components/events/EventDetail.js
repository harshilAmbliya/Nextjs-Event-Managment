import React from 'react'
import styles from './EventDetail.module.css'

const EventDetail = (props) => {
    const { name, date, address, image, description } = props.event;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className={styles.eventDetail}>
            <img className={styles.eventImage} src={image} alt={name} />
            <h1 className={styles.eventName}>{name}</h1>
            <time className={styles.eventDate}>{formattedDate}</time>
            <address className={styles.eventAddress}>{address}</address>
            <p className={styles.eventDescription}>{description}</p>
        </div>
    );
};

export default EventDetail;
