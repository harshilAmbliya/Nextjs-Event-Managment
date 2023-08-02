export const getAllData = async () =>{
    const products = await fetch('https://course-event-7ed56-default-rtdb.firebaseio.com/products.json');
    const data = await products.json();
    return data

}