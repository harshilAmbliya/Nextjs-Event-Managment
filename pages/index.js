import React from 'react'
import { featuredEventList } from '../dummy_data'
import EventList from './components/events/EventList';
const allEventsPage = () => {
  const featuredevents = featuredEventList();
  return (
    <div>
      <EventList items={featuredevents} />
    </div>
  )
}

export default allEventsPage