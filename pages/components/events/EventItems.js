import Link from 'next/link'
import React from 'react'
import styles from './EventItems.module.css'
import Button from '../ui/Button';

const EventItems = (props) => {

    const { id, name, address, date, image } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <li className={styles.eventItem}>
            <img className={styles.eventItemImage} src={image} alt={name} />
            <div className={styles.eventItemContent}>
                <div>
                    <h2 className={styles.eventItemTitle}>{name}</h2>
                    <div className={styles.eventItemDate}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styles.eventItemAddress}>
                        <address>{address}</address>
                    </div>
                </div>
                <div className={styles.eventItemLink}>
                    <Button id={id}>Explore the Event</Button>
                </div>
            </div>
        </li>
    )
}

export default EventItems
