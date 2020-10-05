import React from 'react';
import styles from './App.module.css';
import Map from './components/Map/Map.jsx';

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

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.companyIconContainer}>
          <img className={styles.companyIcon} src={require("./images/icon_1.png")} alt="icon1" />
          <p className={styles.companyIconText1}>Bla Bla</p>
          <p className={styles.companyIconText2}>One Page Flat Template</p>
        </div>
        <nav className={styles.navPanel}>
          <a className={styles.navLink} href="#">Home</a>
          <a className={styles.navLink} href="#">Portfolio</a>
          <a className={styles.navLink} href="#">About</a>
          <a className={styles.navLink} href="#">Contact</a>
        </nav>
      </header>
      <main className={styles.AppContent}>
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
            <img className={styles.jumbotronArrowContainer} src={require("./images/arrow_1.png")} alt="arrow1" />
          </div>
        </section>
        <section className={styles.portfolioSection}>
          <h2>Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <ul className={styles.menu}>
              <li id="menuElemAll" onClick={() => {menuFilter("menuElemAll", styles.menuImg)}} className={styles.menuElement + " " + styles.activeMenuElement}>All</li>
              <li id="menuElemWebDesign" onClick={() => {menuFilter("menuElemWebDesign", styles.webDesignImg)}} className={styles.menuElement}>Web design</li>
              <li id="menuElemGraphicDesign" onClick={() => {menuFilter("menuElemGraphicDesign", styles.graphicDesignImg)}} className={styles.menuElement}>Graphic design</li>
              <li id="menuElemFlatDesign" onClick={() => {menuFilter("menuElemFlatDesign", styles.flatDesignImg)}} className={styles.menuElement}>Flat design</li>
          </ul>
          <img className={styles.menuImg + " " + styles.webDesignImg} src={require("./images/image_1.jpeg")} alt="image1"/>
          <img className={styles.menuImg + " " + styles.graphicDesignImg} src={require("./images/image_2.jpeg")} alt="image1"/>
          <img className={styles.menuImg + " " + styles.webDesignImg} src={require("./images/image_3.jpeg")} alt="image1"/>
          <img className={styles.menuImg + " " + styles.graphicDesignImg} src={require("./images/image_4.jpeg")} alt="image1"/>
          <img className={styles.menuImg + " " + styles.flatDesignImg} src={require("./images/image_5.jpeg")} alt="image1"/>
          <img className={styles.menuImg + " " + styles.webDesignImg} src={require("./images/image_6.jpeg")} alt="image1"/>
          <img className={styles.menuImg + " " + styles.graphicDesignImg} src={require("./images/image_7.jpeg")} alt="image1"/>
          <img className={styles.menuImg + " " + styles.flatDesignImg} src={require("./images/image_8.jpeg")} alt="image1"/>
        </section>
        <section className={styles.about}>
          <div>
            <h2 className={styles.aboutTitle}>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutContainerElem}>
                <div className={styles.containerElemImg + " " + styles.ava1}>
                  <div className={styles.socialIcons}>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-google-plus-g"></i>
                    <i class="fas fa-basketball-ball"></i>
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
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-google-plus-g"></i>
                    <i class="fas fa-basketball-ball"></i>
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
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-google-plus-g"></i>
                    <i class="fas fa-basketball-ball"></i>
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
        <section className={styles.contactUs}>
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
              <p><i class="fas fa-map-marker-alt"></i>Bla Bla Company 125009 Moscow, Red Square 1</p>
              <div id="googleMap" className={styles.map}>
                {/* <Map /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.AppFooter}>
        <p className={styles.footerText}>&#169;Copyright 2016 Bla Bla Studio | One Page Flat Template</p>
        <img className={styles.footerArrowContainer} src={require("./images/arrow_2.png")} alt="arrow1" />
      </footer>
    </div>
  );
}

export default App;
