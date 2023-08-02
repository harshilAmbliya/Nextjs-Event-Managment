
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
                // listing &&listing.map(product => (
                //         <div key={product.id}>
                //             {product.name}
                //         </div>
                //     ))

                listing && listing.map((product) => {
                    const{name ,id ,date ,location ,slug} = product
                    return (
                        <div key={id} style={{
                            color: 'white',
                            backgroundColor: 'gray',
                            padding: '10px',
                            margin: '10px',
                            borderRadius: '10px',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '300px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                            transition: 'all 0.3s ease-in-out',
                            ':hover': 
                            {
                                boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                                transform: 'translateY(-5px)',
                            }
                        }}>
                           <h1>{name} </h1>
                           <p>{date}</p>
                           <h3>{slug}</h3>
                           <p>{location} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllEvents;
