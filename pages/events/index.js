import React from 'react'
import { featuredEventList } from '../../dummy_data'
import EventList from '../components/events/EventList';
const allEventsPage = () => {
  const FeaturedEvents = featuredEventList();
  return (
    <div>
      <EventList items={FeaturedEvents} />
    </div>
  )
}

export default allEventsPage