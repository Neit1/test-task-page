import React from 'react';
import Map from '../Map/Map';
import styles from './ContactSection.module.css';

const ContactSection = (props) => {
    return (
        <section id="contact" className={styles.contactUs}>
          <h2 className={styles.contactUsTitle}>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <div className={styles.contactUsContainer}>
            <form className={styles.contactUsForm}>
              <div className={styles.nameInputContainer}>
                <input className={styles.contactUsFormElem} type="text" placeholder="Your name" />
                <input className={styles.contactUsFormElem} type="text" placeholder="Your email" />
              </div>
              <input className={styles.contactUsFormElem} type="text" placeholder="Your message" />
              <br/>
              <input className={styles.button} type="submit" value="Submit" />
            </form>
            <div className={styles.mapContainer}>
              <p><i className="fas fa-map-marker-alt"></i>Bla Bla Company 125009 Moscow, Red Square 1</p>
              <div id="googleMap" className={styles.map}>
                <Map />
              </div>
            </div>
          </div>
        </section>
    )
}

export default ContactSection;