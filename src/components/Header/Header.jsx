import React from 'react';
import styles from './Header.module.css';
import icon_1 from '../../images/icon_1.png';
import Navbar from '../Navbar/Navbar';

const Header = (props) => {
    return (
        <header id="home" className={styles.AppHeader}>
            <div className={styles.companyIconContainer}>
                <img className={styles.companyIcon} src={icon_1} alt="icon1" />
                <p className={styles.companyIconText1}>Bla Bla</p>
                <p className={styles.companyIconText2}>One Page Flat Template</p>
            </div>
            <Navbar />
        </header>
    )
}

export default Header;