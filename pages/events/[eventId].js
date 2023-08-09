import React from 'react';
import classes from './eventDetail.module.css'
import EventDetail from '../components/events/EventDetail';
import { getAllData, getEventById } from '@/helpers/api-handle';

const EventPage = (props) => {
    const { event } = props;
    const { id } = event;

    if (!id) {
        console.log("error: event not found")
    }
   
    if (!event) {
        return <p>Loading...</p>;
    }

    return (
        <div className={classes.eventPage}>
            <EventDetail event={event} />
        </div>
    );
};



export const getStaticProps = async (context) => {
    const { params } = context;
    const id = params.eventId;

    const event = await getEventById(id);
    return {
        props: {
            event,
        },
        revalidate: 3600
    }
}

export const getStaticPaths = async () => {

    const allData = await getAllData();
    const pathsWithParams = allData.map(data => ({ params: { eventId: data.id.toString() } }));

    return {
        paths: pathsWithParams,
        fallback: false
    }
}

export default EventPage;
