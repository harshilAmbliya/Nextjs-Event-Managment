import React, { useState } from 'react';
import styles from './EventPage.module.css'; // Import the CSS module

const eventsData = [
  { id: 1, title: 'Event 1', category: 'Concert' },
  { id: 2, title: 'Event 2', category: 'Conference' },
  { id: 3, title: 'Event 3', category: 'Exhibition' },
  // Add more event data
];

const EventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = selectedCategory === 'All'
    ? eventsData
    : eventsData.filter(event => event.category === selectedCategory);

  return (
    <div className={styles['event-page']}>
      <h1 className={styles['h1']}>Upcoming Events</h1>
      <div className={styles.filters}>
        <button onClick={() => handleCategoryChange('All')}>All</button>
        <button onClick={() => handleCategoryChange('Concert')}>Concert</button>
        <button onClick={() => handleCategoryChange('Conference')}>Conference</button>
        <button onClick={() => handleCategoryChange('Exhibition')}>Exhibition</button>
        {/* Add more category buttons */}
      </div>
      <div className={styles['event-list']}>
        {filteredEvents.map(event => (
          <div key={event.id} className={styles['event-card']}>
            <h2>{event.title}</h2>
            <p>{event.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
