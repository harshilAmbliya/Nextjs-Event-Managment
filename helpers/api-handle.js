


// api-handle.js

export const getAllData = async () => {
    const response = await fetch('https://course-event-7ed56-default-rtdb.firebaseio.com/products.json');
    const data = await response.json();
    return data;
};

export const getEventById = async (id) => {
    const events = await getAllData();
    const filterEvent = events.find(event => event.id == id);
    return filterEvent;
};
