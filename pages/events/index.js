import React from 'react'
// import { featuredEventList } from '../../dummy_data'
import EventList from '../components/events/EventList';
import { getAllData } from '@/helpers/api-handle';
const allEventsPage = () => {
  const events = getAllData();
  console.log(events)
  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

export default allEventsPage