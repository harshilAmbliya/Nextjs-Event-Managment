import React from 'react'
import EventItems from './components/events/EventItems';
import styles from './Home.module.css';
import { featuredEventList } from '@/dummy_data';

const EventHomePage = () => {
    const EventData = featuredEventList();

    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>Upcoming Events</h1>
            {EventData.map((event) => {
                return <EventItems key={event.id} {...event} />
            })}
        </div>
    )
}

export default EventHomePage
