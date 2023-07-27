import Link from 'next/link'
import React from 'react'

const EventItems = (props) => {

    const { id, name, address, date, image } = props;

    const humanredabledate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return (
        <li>
            <img src={image} alt={name} />
            <div className="">
                <div className="">
                    <h2>{name}</h2>
                    <div>
                        <time>{humanredabledate}</time>
                    </div>
                    <div>
                        <address>{address}</address>
                    </div>
                </div>
                <div className="">
                    <Link href={`/events/${id}`}>Expolre the Events</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItems