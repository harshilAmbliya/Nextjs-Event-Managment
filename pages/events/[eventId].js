import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import classes from './eventDetail.module.css'
// import event from '../components/EventDetail';
import EventList from '../components/events/EventList';
import { getEventById } from '@/dummy_data';
import EventDetail from '../components/events/EventDetail';


// export const getServerSideProps = async () => {
//     const router = useRouter();
//     const data = await eventDetail(router.query.eventId);
//     return { props: { data } }
// }


const EventPage = () => {
    const router = useRouter();
    const id = router.query.eventId;
    console.log(id);

    if(!id){
        console.log("error: event not found")
    }
    const event = getEventById(id);

    if (!event) {
        return <p>Loading...</p>; // Show a loading message while fetching data
    }

    return (
        <div className={classes.eventPage}>
            {/* <EventList id={id} name={name} location={location} image={image} date={date} slug={slug} /> */}
            <EventDetail event={event} />
        </div>
    );
};

export default EventPage;
