import React from 'react';
import styles from './Card.module.css';
// import classes from './Button.module.css'
import Button from './Button';

const Card = (props) => {
    console.log(props);
    const { event } = props;
    
    const {  id, image, name, location } = event;
    return (

        <div className={styles.card } key={event.id} >
            <img src={image} alt={name} className={styles.cardImage} />
            <div className="">
                <h2 className={styles.cardTitle}>{name}</h2>
                <p className={styles.cardDescription}>{location}</p>
                <div className={styles.cardButton}>
                    <Button id={id} >Explore More</Button>
                </div>
            </div>
        </div>

    );
}

export default Card;
