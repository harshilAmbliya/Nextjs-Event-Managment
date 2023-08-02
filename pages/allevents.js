
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
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getAllData();
                setListing(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {
            listing &&listing.map(product => (
                    <div key={product.id}>
                        {product.name}
                    </div>
                ))
            }
        </div>
    )
}

export default AllEvents;
