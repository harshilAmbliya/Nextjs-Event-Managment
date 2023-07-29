import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    Logo
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/events">
                            <>Events</>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <>About</>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <>Contact</>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
