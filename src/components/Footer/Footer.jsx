import React from 'react';
import styles from './Footer.module.css';
import arrow_2 from '../../images/arrow_2.png';

const Footer = (props) => {
    return (
        <footer className={styles.AppFooter}>
            <p className={styles.footerText}>&#169;Copyright 2016 Bla Bla Studio | One Page Flat Template</p>
            <img className={styles.footerArrowContainer} src={arrow_2} alt="arrow1" />
        </footer>
    )
}

export default Footer;