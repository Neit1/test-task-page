import React from 'react';
import styles from './PortfolioSection.module.css';
import image_1 from '../../images/image_1.jpeg';
import image_2 from '../../images/image_2.jpeg';
import image_3 from '../../images/image_3.jpeg';
import image_4 from '../../images/image_4.jpeg';
import image_5 from '../../images/image_5.jpeg';
import image_6 from '../../images/image_6.jpeg';
import image_7 from '../../images/image_7.jpeg';
import image_8 from '../../images/image_8.jpeg';

let menuFilter = (menuElemId, menuImgClass) => {
    let menuElems = document.getElementsByClassName(styles.menuElement);

    for (let i = 0; i < menuElems.length; i++) {
        menuElems[i].classList.remove(styles.activeMenuElement);
    }

    document.getElementById(menuElemId).classList.add(styles.activeMenuElement);

    let images = document.getElementsByClassName(styles.menuImg);
    let selectedImages = document.getElementsByClassName(menuImgClass);

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove(styles.showMenuImg);
    }
    for (let i = 0; i < selectedImages.length; i++) {
        selectedImages[i].classList.add(styles.showMenuImg);
    }
}

const PortfolioSection = (props) => {
    return (
        <section id="portfolio" className={styles.portfolioSection}>
          <h2>Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <ul className={styles.menu}>
              <li id="menuElemAll" onClick={() => {menuFilter("menuElemAll", styles.menuImg)}} className={styles.menuElement + " " + styles.activeMenuElement}>All</li>
              <li id="menuElemWebDesign" onClick={() => {menuFilter("menuElemWebDesign", styles.webDesignImg)}} className={styles.menuElement}>Web design</li>
              <li id="menuElemGraphicDesign" onClick={() => {menuFilter("menuElemGraphicDesign", styles.graphicDesignImg)}} className={styles.menuElement}>Graphic design</li>
              <li id="menuElemFlatDesign" onClick={() => {menuFilter("menuElemFlatDesign", styles.flatDesignImg)}} className={styles.menuElement}>Flat design</li>
          </ul>
          <img className={styles.menuImg + " " + styles.webDesignImg + " " + styles.showMenuImg} src={image_1} alt="image1"/>
          <img className={styles.menuImg + " " + styles.graphicDesignImg + " " + styles.showMenuImg} src={image_2} alt="image1"/>
          <img className={styles.menuImg + " " + styles.webDesignImg + " " + styles.showMenuImg} src={image_3} alt="image1"/>
          <img className={styles.menuImg + " " + styles.graphicDesignImg + " " + styles.showMenuImg} src={image_4} alt="image1"/>
          <img className={styles.menuImg + " " + styles.flatDesignImg + " " + styles.showMenuImg} src={image_5} alt="image1"/>
          <img className={styles.menuImg + " " + styles.webDesignImg + " " + styles.showMenuImg} src={image_6} alt="image1"/>
          <img className={styles.menuImg + " " + styles.graphicDesignImg + " " + styles.showMenuImg} src={image_7} alt="image1"/>
          <img className={styles.menuImg + " " + styles.flatDesignImg + " " + styles.showMenuImg} src={image_8} alt="image1"/>
        </section>
    )
}

export default PortfolioSection;