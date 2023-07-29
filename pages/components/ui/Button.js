import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Button = (props) => {
    // const router = useRouter();
    // const { id } = router.query;
    return (
        <Link className={styles.button} href={`/events/${props.id}`} >
            {props.children}
        </Link>
    )
}

export default Button
