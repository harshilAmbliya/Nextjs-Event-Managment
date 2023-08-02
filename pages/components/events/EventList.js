import React from 'react'
// import EventItems from './EventItems';
import styles from './EventList.module.css';
import Card from '../ui/Card';

const EventList = (props) => {
    const { items } = props;
    console.log(items)
    return (
        <div className={styles.eventList}>
            {items.map((item) => {
                // return <EventItems key={item.id} id={item.id} name={item.name} address={item.address} image={item.image} date={item.date} />
                console.log(item)
                return <Card key={item.id} item={item} />;
            })}
        </div>
    )
}

export default EventList
