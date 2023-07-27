import React from 'react'
import EventItems from './EventItems';
const EventList = (props) => {
    const { items } = props;
    return (
        <ul>
            {items.map((item) => {
                return <EventItems key={item.id} id={item.id} name={item.name} address={item.address} image={item.image} date={item.date} />
            })}
        </ul>
    )
}

export default EventList