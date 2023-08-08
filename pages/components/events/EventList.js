
import React, { useState, useEffect } from 'react';
import styles from './EventList.module.css';
import Card from '../ui/Card';

const EventList = (props) => {
    // console.log(props);
    const { events } = props;
    // console.log(events)
    const [event, setEvent] = useState([]);

    useEffect(() => {
        const fetchedEvents = () => {
            try {
                setEvent(events);
            } catch (error) {
                console.log(error);
            }
        };
        fetchedEvents();
    }, [events]);

    return (
        <div className={styles.eventList}>
            {event.map((event) => (
              
                 <Card event={event} />

            ))}
        </div>
    );
};

export default EventList;
