import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = (props) => {
    return (
        <section id="about" className={styles.about}>
          <div>
            <h2 className={styles.aboutTitle}>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutContainerElem}>
                <div className={styles.containerElemImg + " " + styles.ava1}>
                  <div className={styles.socialIcons}>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fas fa-basketball-ball"></i>
                  </div>
                </div>
                <div className={styles.containerElemInner}>
                  <p className={styles.name}>Melannie Doe</p>
                  <p className={styles.position}>Project Manager</p>
                  <p className={styles.description}>Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                </div>
              </div>
              <div className={styles.aboutContainerElem}>
                <div className={styles.containerElemImg + " " + styles.ava2}>
                  <div className={styles.socialIcons}>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fas fa-basketball-ball"></i>
                  </div>
                </div>
                <div className={styles.containerElemInner}>
                  <p className={styles.name}>Jhonnie Doe</p>
                  <p className={styles.position}>Craphic Designer</p>
                  <p className={styles.description}>Ut wisi enim ad minim veniam,
                  quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl
                  ut aliquip ex ea commodo
                  consequat.
                  </p>
                </div>
              </div>
              <div className={styles.aboutContainerElem}>
                <div className={styles.containerElemImg + " " + styles.ava3}>
                  <div className={styles.socialIcons}>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fas fa-basketball-ball"></i>
                  </div>
                </div>
                <div className={styles.containerElemInner}>
                  <p className={styles.name}>Daniel Doe</p>
                  <p className={styles.position}>Web Designer</p>
                  <p className={styles.description}>Ut wisi enim ad minim veniam,
                  quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl
                  ut aliquip ex ea commodo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default AboutSection;