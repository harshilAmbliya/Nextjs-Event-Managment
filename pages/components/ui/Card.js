import React, { useState } from 'react';
import styles from './Card.module.css';
// import classes from './Button.module.css'
import Button from './Button';
import { Box, Rating, Typography } from '@mui/material';

const Card = (props) => {
    console.log(props);
    const { event } = props;

    const { id, image, name, location } = event;
    const [value, setValue] = useState(2);
    return (

        <div className={styles.card} key={event.id} >
            <img src={image} alt={name} className={styles.cardImage} />
            <div className="">
                <h2 className={styles.cardTitle}>{name}</h2>
                <p className={styles.cardDescription}>{location}</p>
                <Box
                    sx={{
                        '& > legend': { mt: 2,mx:3 },
                    }}
                    
                >
                    <Typography component="legend">Rate Post</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        className='p-4'
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
                <div className={styles.cardButton}>
                    <Button id={id} >Explore More</Button>
                </div>
            </div>
        </div>

    );
}

export default Card;
