import React from 'react'
import classes from './Layout.module.css'
import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => {
    return (
        <div className={classes.layout}>

            <Header />
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}><Footer /></footer>
        </div>
    )
}

export default Layout