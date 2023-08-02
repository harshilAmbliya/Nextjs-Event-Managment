
// import React, { useEffect,useState} from 'react'
// import { getAllData } from '@/helpers/api-handle'

// const allEvents = async () => {
//     const [Listing, setListing] = useState([]);
//     try {
//        useEffect(()=>{
//         const data =  getAllData();
//         console.log(data);
//        },[]);

//         return (
//             <div>
//                 {
//                     data.map(product => (
//                         <div key={product.id}>
//                             {product.name}
//                         </div>
//                     ))
//                 }
//             </div>
//         )

//     } catch (error) {
//         console.log(error)
//     }

// }

// export default allEvents;



import React, { useEffect, useState } from 'react'
import { getAllData } from '@/helpers/api-handle'

const AllEvents = () => {
    const [listing, setListing] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllData();
                setListing(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {
                listing.map(product => (
                    <div key={product.id}>
                        {product.name}
                    </div>
                ))
            }
        </div>
    )
}

export default AllEvents;
