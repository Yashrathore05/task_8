import React from 'react';
import styles from './page.module.css'; // Import CSS module for styles

const Page = () => {
  return (
    <div className={styles.container}>
      {/* Header with Background Image */}
      <div className={styles.headerBackground}>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#clients">Clients</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.leftCorner}>
          {/* Left corner content can go here */}
        </div>

        {/* Header content or hero section */}
        
      </div>

      {/* Additional content with a white background */}
      <div className={styles.content}>
        {/* Other content goes here */}
        <section id="about">
          <img 
            src="image2.png" 
            alt="About Us" 
            style={{ width: '100%', maxWidth: '1000px', height: 'auto', borderRadius: '8px', margin: '1px 160px' }} 
          />
        </section>
        <section id="contact" style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '1px 160px' }}>
          <img 
            src="image3.png" 
            alt="Contact" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
          />
          <button
            style={{
              position: 'absolute',
              bottom: '85px', // Adjust this value to position the button vertically
              left: '51%',
              transform: 'translateX(-50%)', // Center the button horizontally
              backgroundColor: 'purple',
              color: 'white',
              border: 'none',
              borderRadius: '23px',
              width: '150px',
              height: '50px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            More About Us
          </button>
        </section>
        <section id="fourth">
          <img 
            src="image4.png" 
            alt="About Us" 
            style={{ width: '100%', maxWidth: '1000px', height: 'auto', borderRadius: '8px', margin: '1px 160px' }} 
          />
        </section>
        <section id="fourth">
          <img 
            src="image5.png" 
            alt="About Us" 
            style={{ width: '100%', maxWidth: '1000px', height: 'auto', borderRadius: '8px', margin: '1px 160px' }} 
          />
        </section>
        <section id="fourth">
          <img 
            src="image6.png" 
            alt="About Us" 
            style={{ width: '100%', maxWidth: '1390px', height: 'auto', borderRadius: '8px', margin: '1px 0px' }} 
          />
        </section>
        <section id="fourth">
          <img 
            src="image7.png" 
            alt="About Us" 
            style={{ width: '100%', maxWidth: '1390px', height: 'auto', borderRadius: '8px', margin: '1px 0px' }} 
          />
        </section>
        <section id="fourth">
          <img 
            src="image8.png" 
            alt="About Us" 
            style={{ width: '100%', maxWidth: '1390px', height: 'auto', borderRadius: '8px', margin: '1px 0px' }} 
          />
        </section>
        <section id="fourth">
          <img 
            src="image9.png" 
            alt="About Us" 
            style={{ width: '100%', maxWidth: '1390px', height: 'auto', borderRadius: '8px', margin: '1px 0px' }} 
          />
        </section>
        <section id="fourth">
          <img 
            src="image10.png" 
            alt="About Us" 
            style={{ width: '100%', maxWidth: '1390px', height: 'auto', borderRadius: '8px', margin: '1px 0px' }} 
          />
        </section>
        <section id="fourth">
          <img 
            src="image11.png" 
            alt="About Us" 
            style={{ width: '100%', maxWidth: '1390px', height: 'auto', borderRadius: '8px', margin: '1px 0px' }} 
          />
        </section>
        {/* Add more sections or content as needed */}
      </div>
    </div>
  );
};

export default Page;
