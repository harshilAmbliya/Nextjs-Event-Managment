import React, { useEffect, useState } from 'react';
import EventList from '../components/events/EventList';
import { getAllData } from '@/helpers/api-handle';

const AllEventsPage = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllData();

        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log(events);
  return (
    <div>
      {loading && <div>Loading...</div>}
      <EventList events={events} />
    </div>
  );
};

export default AllEventsPage;
