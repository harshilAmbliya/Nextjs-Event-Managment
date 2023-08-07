import React from 'react';

import classes from './eventDetail.module.css'

import { getEventById } from '@/dummy_data';
import EventDetail from '../components/events/EventDetail';
import { getAllData } from '@/helpers/api-handle';


// export const getServerSideProps = async () => {
//     const router = useRouter();
//     const data = await eventDetail(router.query.eventId);
//     return { props: { data } }
// }


const EventPage = () => {
   

    if (!id) {
        console.log("error: event not found")
    }
    const event = getEventById(id);

    if (!event) {
        return <p>Loading...</p>; 
    }

    return (
        <div className={classes.eventPage}>
            
            <EventDetail event={event} />
        </div>
    );
};



export const getStaticProps = (context) => {
    console.log(context)
    const { params } = context;
    const id = params;
    console.log(id)
    return {
        props: {
            data,
        },
        revalidate: 3600
    }
}

export const getStaticPaths = async () => {

    const allData = await getAllData();

    const ids = allData.map(data => data.id);
    // console.log(ids)
    const pathsWithParams = ids.map(id => ({ params: { id } }));

    return {
        paths: pathsWithParams,
        fallback: false

    }
}

export default EventPage;
