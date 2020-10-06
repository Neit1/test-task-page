import React from 'react';
import styles from './JumbotronSection.module.css';
import arrow_1 from '../../images/arrow_1.png';

const JumbotronSection = (props) => {
    return (
        <section>
          <div className={styles.jumbotron}>
            <p className={styles.jumbotronTitle}>We Build <span>Brand</span></p>
            <div className={styles.jumbotronText}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
            <button className={styles.button}>Learn more</button>
            <br />
            <img className={styles.jumbotronArrowContainer} src={arrow_1} alt="arrow1" />
          </div>
        </section>
    )
}

export default JumbotronSection;