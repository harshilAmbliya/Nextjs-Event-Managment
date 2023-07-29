import React from 'react';
import styles from './Card.module.css';
// import classes from './Button.module.css'
import Button from './Button';

const Card = (params) => {
    console.log(params);
    const {id, image, name, location } = params.item;
    return (


        <div className={styles.card}>
            <img src={image} alt={name} className={styles.cardImage} />
            <h2 className={styles.cardTitle}>{name}</h2>
            <p className={styles.cardDescription}>{location}</p>
            <Button id={id} >Explore More</Button>
        </div>

    );
}

export default Card;
