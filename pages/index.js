
import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'; // Import the CSS module
import Card from './components/ui/Card';
import { getAllData } from '@/helpers/api-handle';

const EventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Workshop');
  const [eventData, seteventData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const response = await getAllData();
      seteventData(response);
      console.log(response);
    };
    console.log(eventData)
    getdata();
  }, []);



  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = selectedCategory === 'Art Workshop'
    ? eventData
    : eventData.filter(event => event.type === selectedCategory)
  // .filter(event => event.type === selectedCategory);
  return (
    <div className={styles['event-page']}>
      <h1 className={styles['h1']}>Upcoming Events</h1>
      <div className={styles.filters}>
        <button onClick={() => handleCategoryChange('Workshop')}>Art Workshop</button>
        <button onClick={() => handleCategoryChange('Concert')}>Concert</button>
        <button onClick={() => handleCategoryChange('Conference')}>Conference</button>
        <button onClick={() => handleCategoryChange('Exhibition')}>Exhibition</button>
        {/* Add more category buttons */}
      </div>
      <div >
        {filteredEvents.map(event => (
          <Card event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;

