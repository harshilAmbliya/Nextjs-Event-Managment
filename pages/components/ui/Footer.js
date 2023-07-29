import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <Link href="/about">
                    <>About</>
                </Link>
                <Link href="/contact">
                    <>Contact</>
                </Link>
                <Link href="/privacy">
                    <>Privacy Policy</>
                </Link>
            </div>
            <p className={styles.copy}>© 2023 MyWebsite. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
